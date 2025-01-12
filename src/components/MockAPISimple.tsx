import React, { useState, useEffect } from 'react';

// MockAPI からデータを取得するコンポーネント
const MockAPISimple: React.FC = () => {
  // データを保持するためのステート変数 data を定義する
  // 初期値は null とする
  // データが取得できた場合は、data に取得したデータを格納する
  // サンプルなので何を取得するか特定できないため any 型としているが、型は明示的に指定すべき
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // データを取得する処理
    // fetch 関数を使用して、MockAPI の API からデータを取得する
    fetch('https://678319ef8b6c7a1316f37be9.mockapi.io/api/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('データの取得に失敗しました', error));
  }, []); // 空の依存配列を渡すことで、マウント時にのみ実行される

  return (
    <div>
      {/* データが取得できた場合は、取得したデータを表示する */}
      {/* JSON.stringify 関数を使用して、オブジェクトを JSON 形式の文字列に変換して表示する */}
      {/* 第2引数に null を指定することで、インデントを付けて表示する */}
      {/* 第3引数に 2 を指定することで、インデントのスペースを 2 に指定する */}
      {/* データが取得できない場合は、'データを取得中...' と表示する */}
      <h2>生データ</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'データを取得中...'}
    </div>
  );
};

export default MockAPISimple;