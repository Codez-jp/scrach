import React, { useState, useEffect } from 'react';

function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}


const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000); // 1秒ごとに現在時刻を更新

    return () => clearInterval(intervalId); // コンポーネントがアンマウントされたときにタイマーをクリア
  }, []);

  return (
    <div>
      <h1>現在時刻: {currentTime}</h1>
    </div>
  );
};

export default CurrentTime;