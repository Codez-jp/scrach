import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';

const ProgreSimple: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleClick = async () => {
    setLoading(true);
    setMessage('処理中...');

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3秒後にイベント完了
      setMessage('イベントが完了しました');
    } catch (error) {
      setMessage('エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Progress w/o Cancel
      </Button>
      <Dialog open={loading}>
        <DialogContent>
          <CircularProgress />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLoading(false)} color="primary">
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

export default ProgreSimple;