// Reactの親コンポーネントであるAppコンポーネントが、
// 子コンポーネントであるCounterコンポーネントを2回レンダリングする例
import React from 'react';
// createRoot関数は、React 18で導入された新しいエントリーポイント
import { createRoot } from 'react-dom/client';

// 親コンポーネントであるAppをインポートする
import App from './App';


// root という要素を取得する
const container = document.getElementById('root');

// roor という要素が存在する場合は、createRoot関数を使用してAppコンポーネントをレンダリングする
if (container) {
  const root = createRoot(container);
  // root に App コンポーネントをレンダリングする
  root.render(<App />);
}
else {
  // root という要素が存在しない場合は、エラーメッセージをコンソールに表示する
  // メッセージはブラウザに表示されることはなく、開発者ツールのコンソールに表示される
  // F12キーを押して開発者ツールを開いて、コンソールタブを確認することができる
  console.error('No root element found');
}