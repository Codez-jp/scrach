// 以下のコンポーネントは、ボタンをクリックするとカウントが2ずつ増えるカウンターコンポーネントである
// useStateフックを使用して、カウントの状態を管理している
import React, { useState } from 'react';
// Material-UIのButtonコンポーネントを使用するためにインポートする
import Button from '@mui/material/Button';


const Counter: React.FC = () => {
  // useStateフックを使用して、カウントの状態を管理する
  // count は、カウントの状態を保持する変数
  // setCount は、count の値を更新するための関数
  // useState<number>(0) は、初期値が 0 の数値型の状態を作成する
  // countはステート変数、setCountはステート更新関数と呼ばれる
  // 名前は任意だが、慣習的には「ステート変数名」と「setステート変数名」とする
  const [count, setCount] = useState<number>(0);

  // ボタンがクリックされた際に呼び出される関数
  const handleClick = () => {
    // setCount 関数を使用して、count の値を更新する
    setCount(count + 2);
  };

  return (
    <div>
      {/* Buttonコンポーネントを使用して、ボタンを作成する */}
      {/* Buttonコンポーネントは、Material-UIのコンポーネント */}
      {/* variant="contained" は、ボタンのスタイルを指定する */}
      {/* color="primary" は、ボタンの色を指定する */}
      {/* onClick={handleClick} は、ボタンがクリックされた際に呼び出される関数を指定する */}
      <Button variant="contained" color="primary" onClick={handleClick}>
        {/* ボタンに表示されるテキスト */}
        Click
      </Button>
      {/* クリックすると count の値を表示する */}
      {/* カウントの値が更新されると、自動的に再レンダリングされる */}
      <div>Clicked {count}</div>
    </div>
  );
};

export default Counter;