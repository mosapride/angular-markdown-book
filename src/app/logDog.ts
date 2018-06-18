import { isDevMode } from '@angular/core';

export function logdog() {
  if (isDevMode()) {
    return console;
  } else {
    return new MockConsole();
  }
}

/**
 * consoleのモック
 * @class MockConsole
 */
class MockConsole {
  log(...v: any[]): void { }
  info(...v: any[]): void { }
  warn(...v: any[]): void { }
  error(...v: any[]): void { }
  debug(...v: any[]): void { }
  group(...v: any[]): void { }
  groupEnd(...v: any[]): void { }
  table(...v: any[]): void { }
  dir(...v: any[]): void { }
  time(...v: any[]): void { }
  timeEnd(...v: any[]): void { }
  assert(...v: any[]): void { }
  trace(...v: any[]): void { }
}

