import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MARKDOWN_URL } from '../../../environments/environment';
import * as marked from 'marked';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: []
})
export class BooksComponent implements OnInit {
  /** 現在の本 */
  public targetPage: string;
  /** 本のページ名リスト(ex: pNNNxxxx.md) */
  public pageNames: string[] = [];
  /** 表示するページ内容 */
  public nowContents = '';

  public baseHref = (document.getElementsByTagName('base')[0] || {})['href'];

  public slider: {
    min: number,
    max: number,
    value: number
  } = { min: 0, max: 999, value: 0 };

  public markOtion: marked.MarkedOptions = {
    highlight: function (str, lang) {
      // return `<span class="dummy">span</span>`;
      let head = '<pre class="hljs highlight-padding"><code class="highlight-padding">';
      if (lang && hljs.getLanguage(lang)) {
        try {
          if (str) {
            let title = str.split(/\n|\r\n|\r/)[0];
            if (title.indexOf('title:') === 0) {
              title = title.replace('title:', '');
              const wk = str.split(/\n|\r\n|\r/);
              str = '';
              for (let i = 1; i <= wk.length; i++) {
                if (typeof wk[i] !== 'undefined') {
                  str += wk[i] + '\n';
                }
              }
              // tslint:disable-next-line:max-line-length
              head += `<span class='highlight-title'>${title}</span>`;
            }
          }
          const debug = head + hljs.highlight(lang, str, false).value + '</code></pre>';
          return `${head}<div class="highlight-code">${hljs.highlight(lang, str, true).value}</div></code></pre>`;
        } catch (err) {
          return `<pre><code><div class="highlight-code">${hljs.highlight(lang, str, true).value}</div></code></pre>`;
        }
      }
      // return '<pre class="hljs"><code>' + str + '</code></pre>';
      return hljs.highlightAuto(str, [lang]).value;
    },
  };

  public markRender = new marked.Renderer();

  constructor(private http: HttpClient) {
    this.targetPage = this.gettargetPage();
    this.getPageInfo(() => this.getNowContents());
    this.markRender.heading = (text, level) => {
      return `<h${level} class="anan" id='${text}'>${text}</h${level}>`;
    };
    this.markOtion.renderer = this.markRender;
    marked.setOptions(this.markOtion);
  }

  ngOnInit() {

  }

  clickPageMove(cnt: number): void {
    if ((this.slider.value + cnt) < this.slider.min || (this.slider.value + cnt) > this.slider.max) {
      return;
    }
    this.slider.value += cnt;
    this.targetPage = this.pageNames[this.slider.value - 1];
    this.getNowContents();
  }

  changePage(event: any): void {
    this.targetPage = this.pageNames[event - 1];
    this.getNowContents();
  }

  private gettargetPage(): string {
    if (!location.hash.match(/#/)) {
      return '';
    }
    return location.hash.replace('#/', '');
  }

  private getNowContents(): void {
    this.http.get(this.baseHref + '/assets/markdown/' + this.targetPage, { responseType: 'text' }).subscribe(
      contents => {

        this.nowContents = marked(contents);
        window.history.replaceState('', '', `${this.baseHref}#/${this.targetPage}`);
        window.history.pushState('', '', `${this.baseHref}#/${this.targetPage}`);
        window.scrollTo(0, 0);


      },
      error => console.log(error));
  }

  /**
   * book list(markdown一覧)を取得する。
   */
  private getPageInfo(getNowContents: () => void): void {
    this.http.get(this.baseHref + MARKDOWN_URL, { responseType: 'text' })
      .subscribe(
        data => {
          const books = data.split(/\r\n|\n|\r/);
          books.sort();
          for (const book of books) {
            if (book === '') {
              continue;
            }
            this.pageNames.push(book);
          }
          if (this.targetPage === '') {
            this.targetPage = this.pageNames[0];
          }
          this.slider.min = 1;
          this.slider.max = this.pageNames.length;
          this.slider.value = 0;
          for (let i = 0; i < this.pageNames.length; i++) {
            if (this.pageNames[i] === this.targetPage) {
              this.slider.value = i + 1;
            }
          }
          getNowContents();
        },
        error => {
          console.log(`http.get error = ${error}`);
        }
      );
  }

}
