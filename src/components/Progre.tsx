import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';

const Progre: React.FC = () => {
  // ローディング状態を管理するための loading ステートを作成
  const [loading, setLoading] = useState<boolean>(false);
  // メッセージを管理するための message ステートを作成
  const [message, setMessage] = useState<string>('');
  // キャンセル処理を行うための AbortController ステートを作成
  //   fetch API をキャンセルする際に使える
  //   abortController ステートは、null または AbortController オブジェクトを保持する
  const [abortController, setAbortController] = useState<AbortController | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setMessage('処理中...');
    const controller = new AbortController();
    setAbortController(controller);

    try {
      await new Promise((resolve, reject) => {
        // 3秒後に発生するイベントをシミュレート
        const timeout = setTimeout(() => {
          resolve('Completed');
        }, 3000);
        
        // キャンセル処理
        controller.signal.addEventListener('abort', () => {
          // タイムアウトをキャンセル
          //   キャンセルしなくても即時エラー発生させ、終了する
          //clearTimeout(timeout);
          // message を設定しエラーを発生させる
          reject(new Error('Cancelled'));
        });
      });
      setMessage('イベントが完了しました');
    // error が発生した場合の処理
    } catch (error) {
      // エラー時に設定したメッセージで処理を分岐
      if (error.message === 'Cancelled') {
        setMessage('処理がキャンセルされました');
      } else {
        setMessage('イベントがタイムアウトしました');
      }
    // finally は、try または catch が実行された後に必ず実行される
    } finally {
      setLoading(false);
      setAbortController(null);
    }
  };

  const handleCancel = () => {
    if (abortController) {
      // AbortController の abort() を呼び出すことでキャンセルする
      abortController.abort();
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Progress with Cancel
      </Button>

      <Dialog open={loading}>
        <DialogContent>
          <CircularProgress />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {message && (
        <Typography variant="body1" color="textSecondary">
          {message}
        </Typography>
      )}
    </div>
  );
};

export default Progre;