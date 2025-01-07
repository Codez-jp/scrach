# タイトル
スクラッチで理解する React を使うための TypeScript 超入門

### 学べる事
- TypeScriptのトランスパイル実行
- Reactの最小構成でのビルド実行

### 対象
- これからフロントエンド開発を行いたいと考えているひと
- TypeScript と JavaScript の関係を学びたいと考えているひと

### 前提条件
- node: v20.x
- npm: 11.x
- react: 19.x

1. 前提条件の確認方法
```bash
$ node -v
$ npm -v
```

### 環境構築
1. node プロジェクトを初期化
```bash
$ npm install
```

2. 導入確認
トランスパイラのバージョン確認
```bash
$ tsc -v
```

(tsconfig.json)の主な設定
```json
- compilerOptions
  - target: es6 -> TypeScriptバージョン
  - outDir: dist -> 出力先
  ：
- include
  - "src/**/* -> 入力元
- exclude -> コンパイル除外
  - "node_module",
  - "dist"
```

### 使用方法
1. ビルドの実行
package.json の scripts に実行コマンドのエイリアスを定義

(例)
- build: TypeScriptのコンパイル
- watch: コンパイル対象を監視し、変更時に自動コンパイル

(package.json)
```json
  "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
```

2. トランスパイルする

```bash
$ npm run build
```
もしくは
```bash
$ npm run watch
```
src フォルダ以下の TypeScript ファイルが JavaScript にトランスパイルされ dist フォルダ以下に出力される

3. 実行する
実行は node.js で行う
```bash
$ node ./dist/scripts/(target).js
```

## （各種サンプル）

### Material UI を react で試すサンプル

1. フォルダ構成
( )内のフォルダは環境再構築時に消去可
```
root
  |-(dist) <-トランスパイルされたJavaScriptファイル
  |-(node_module) <-npmで導入されたJavaScriptライブラリ
  |-public
  |   |-index.html <-ブラウザで確認できるHTMLファイル
  |-src
      |-components <-Reactのコンポーネント
      |-scripts <-各種スクリプト
      index.tsx <-Reactのエントリーポイント
  .gitignore
  package-lock.json
  package.json
  README_build.md <-本環境の詳しい作成方法
  README.md <-このドキュメント
  tsconfig.json <-TypeScriptの環境設定
  webpack.config.js <-Reactプロジェクトの環境設定
```

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

2. react プロジェクトをビルドする
```bash
npm run build-react
```

3. 動作確認  
dist/index.html をブラウザで表示すると react プロジェクトが表示される

(EOF)