# Angular Markdown Book Demo

電子書籍はページの高さに制限がある。これは印刷することを前提となった書籍からの名残に近いものと考えてる。技術書籍系ではページ＝１つの目次とすれば、もっとスマートに見える気がしたので作成してみた。

また、プログラマー向けの電子書籍がもっと栄えて欲しいので、書籍はMarkdown形式で、highlightをサポートしている。

## フレームワーク

- [Angular](https://angular.io/)
- [marked](https://marked.js.org/#/README.md#README.md)
- [highlight.js](https://highlightjs.org/)

## 実行環境

- webサーバー + php

### PHPの必要性

ページファイル一覧情報を取得するために`/src/assets/getfilelist.php`を使用している。デバック環境下では`/src/assets/getfilelist.txt`を読み込みページファイル一覧情報を読み込むためPHP環境は不要となる。

#### できればPHPをなくしたい

クライアントjsのみでWEBサーバに配置しているファイルリストを取得することができればPHPを無くし、実行環境をクリーンにしたい。

## install & run

```bash
npm install
npm start
```

### build & prod

```bash
npm run build:prod
copy dist /path/to/www
```

## ページを作成する

`[your workspace]/src/assets/markdown`にmarkdownファイルを作成を配置する

### markdown file naming rule

ページはmarkdownファイル名でソートした順にする仕様のため連番になるようにすること

### スタイルの変更

`[your workspace]/src/assets/styles.css`をご自由にどうぞ。

## h2タグです

aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB aaa AAA bbb BBB

1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890

### h3タグです

日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。

日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。日本語。

#### h4タグです

h4内の記事

##### h5タグです。

h5内の記事

## h2タグその１

## h2タグその２

### h3タグその１

### h3タグその２

HTML記法も使える<strong>これはstrongタグです。</strong>

codeはちょっと強調したり→`code command`

## code 標準

```http
// https://highlightjs.org/ を使ってます。
POST /task?id=1 HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 137

{
  "status": "ok",
  "extended": true,
  "results": [
    {"value": 0, "type": "int64"},
    {"value": 1.0e+3, "type": "decimal"}
  ]
}
```

## code タイトル付き

`title:hoge.html`と掛けばタイトルがつけれたり。

```html
title:hoge.html
<!doctype html>
<html lang="ja">
  <body>title:hogehogeでタイトルがつけれるようにカスタマイズしてみたり。</body>
</html>
```
