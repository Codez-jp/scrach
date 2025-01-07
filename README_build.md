# テーマ
- TypeScript 単体動作テンプレート

## 前提条件
- node: v20.28.0
- npm: 11.0.0

## ひな形導入
1. 前提条件の確認
```bash
$ node -v
$ npm -v
```

2. node プロジェクトを初期化

```bash
$ npm init
```
node のパッケージ管理を行う package.json が出力される

3. TypeScript を使えるようにする

```bash
$ npm install typescript --save-dev
$ tsc -v
```

4. トランスパイらの初期化

```bash
$ tsc --init
```
とりあえずこれで使えるが、色々便利な設定が最初からしてあるマイクロソフトの設定ファイルで上書きする ＊

> https://github.com/microsoft/TypeScript-Node-Starter/blob/master/tsconfig.json

(tsconfig.json)の主な設定
```json
- compilerOptions
  - target: es6
  - outDir: dist -> 出力先
  - paths
    - "*"
      - node_module
      - src/types/*
- include
  - "src/**/* -> 入力元
- exclude
  - "node_module",
  - "dist"
```

5. script に実行コマンドを定義

- build: TypeScriptのコンパイル
- watch: コンパイル対象を監視し、変更時に自動コンパイル

(package.json)
```json
  "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
```
build でトランスパイルを実行  
watch で変化を検知してトランスパイルを実行

6. トランスパイルする

```bash
$ npm run build
```
dist フォルダに TypeScript からトランスパイルされた JavaScript のファイルが出力される

7. ビルド・実行する
```bash
$ npm run build
$ node ./dist/scripts/(target).js
```
※常にビルド対象を監視し、毎回ビルドする手間を省ける
```bash
$ npm run watch
```

## 各種サンプル

### MUI with react

1. react に必要なパッケージを追加

必要な node パッケージをインストール
```bash
$ npm install @mui/material @emotion/react @emotion/styled react react-dom
```

必要な type をインストール ※動作に必須ではないが、型の明確化により、VSコードの自動補完が使えるなどのメリットがある
```bash
$ npm install @types/react-dom --save-dev
```

2. JSX を使用できるようにする

--jsx に react を指定する  
(tsconfig.json)
```json
{
  "compilerOptions": {
    "jsx": "react" <-ここを追加
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

4. バンドラを有効化する

CommonJS モジュールシステムを使用しているコードをブラウザで直接実行するとエラーが出るため、バンドラ（WebPack や Vite）を設定する必要がある

必要な node パッケージをインストールする
```bash
$ npm install --save-dev webpack webpack-cli ts-loader
```

WebPack の設定ファイルをプロジェジェクトルートに作成する  

(webpack.config.js)
```javascript
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'development',
};
```
HTML側でバンドルされた JavaScript ファイルを読み込む様にする  

(public/index.html)
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
  <h1>React</h1>
  <div id="root"></div>
  <script src="bundle.js"> <- ここ </script>
</body>
</html>
```

webpack の build スクリプトを追加する  
(package.json)
```json
  "scripts": {
    "build-react": "webpack", <-ここ
    "build": "tsc",
    "watch": "tsc -w",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

プロジェクトをビルドする
```bash
npm run build-react
```

動作確認  

dist/index.html をブラウザで表示すると react プロジェクトが表示される