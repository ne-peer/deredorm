# Deredorm

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## 構築手順
[Node.js](https://nodejs.org/ja/) をインストールし、クローンしたディレクトリのなかで

```
cmd> npm install　                        // アプリに必要なパッケージインストール
cmd> npm install --g @angular/cli@latest // 開発ツールをインストール
cmd> ng serve　                           // 開発サーバ起動
```

と叩いて `localhost:4200` を開く。
`Node v6.10.1 (win)` で動作確認済み.

&nbsp;

パッケージの総アップデートは `npm-check-updates` を使う。

```
cmd> npm install -g npm-check-updates

cmd> npm-check-updates -u
[INFO]: You can also use ncu as an alias
Using D:\develop\repositories\git\02_github\ne-peer\deredorm\package.json
[..................] / :
 @angular/compiler-cli         ^2.3.1  →   ^4.1.3
 typescript                    ~2.0.3  →   ~2.3.4
 zone.js                       ^0.7.2  →  ^0.8.11
 @types/jasmine                2.5.38  →   2.5.47
 @types/node                  ^6.0.42  →  ^7.0.22
 codelyzer              ~2.0.0-beta.1  →   ~3.0.1
 jasmine-core                   2.5.2  →    2.6.2
 jasmine-spec-reporter          2.5.0  →    4.1.0
 karma                          1.2.0  →    1.7.0
 karma-remap-istanbul          ^0.2.1  →   ^0.6.0
 protractor                   ~4.0.13  →   ~5.1.2
 ts-node                        1.2.1  →    3.0.4
 tslint                        ^4.3.0  →   ^5.3.2

cmd> npm update
```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
