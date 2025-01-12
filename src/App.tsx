import React from 'react';
// components フォルダに子コンポーネントが格納される
// Counterコンポーネントをインポートする
import Counter from './components/Counter';
// MockAPIコンポーネントをインポートする
import MockAPISimple from './components/MockAPISimple';
import MockAPIwithMUI from './components/MockAPIwithMUI';

// 親コンポーネントであるAppコンポーネントを構成する要素を return 以降に記述する
// React.FC は、React.FunctionComponent の省略形
// React.FC は、関数コンポーネントを定義するための型定義
// 以下の様に記述することも可能
// const App: React.FC = () => {
const App: React.FunctionComponent = () => {
  return (
    <div>
      {/* Reactのコンポーネントは何らかのHTMLタグで囲む必要がある */}
      {/* 親のAppコンポーネントに子のCounterコンポーネントをレンダリングする記述 */}
      <Counter />
      <Counter />
      <MockAPIwithMUI />
      {/* <MockAPISimple /> */}
    </div>
  );
};

export default App;
