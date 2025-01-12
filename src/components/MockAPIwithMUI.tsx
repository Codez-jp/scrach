import React, { useState, useEffect } from 'react';
// Material-UI でリストを表示するためにインポートする
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
// Material-UI でアコーディオンを表示するためにインポートする
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// @mui/system の styled関数を使用して、Paperコンポーネントにスタイルを適用する
// Paperコンポーネントは、Material-UIのコンポーネント
//   maxWidth: 300 は、Paperコンポーネントの幅を300pxに設定している
//   overflow: 'auto' は、コンテンツがPaperコンポーネントの高さを超えた場合にスクロールバーを表示する
// 詳しい使い方は、https://mui.com/system/the-sx-prop/#styled-api を参照
// @mui/styles を使用している場合、styled関数に置き換えることが推奨されている
const StyledPaper = styled(Paper)({
  maxHeight: 300,
  overflow: 'auto',
});

const MockAPIwithMUI: React.FC = () => {
  const [data1, setData1] = useState<any[]>([]);
  const [data2, setData2] = useState<any[]>(null);

  useEffect(() => {
    fetch('https://678319ef8b6c7a1316f37be9.mockapi.io/api/users')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setData1(data);
        }, 1000);  // 意図的に遅延させる
      })
      .catch(error => console.error('データの取得に失敗しました', error));
  }, []);

  useEffect(() => {
    fetch('https://678319ef8b6c7a1316f37be9.mockapi.io/api/users')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setData2(data);
        }, 5000);  // 意図的に遅延させる
      })
      .catch(error => console.error('データの取得に失敗しました', error));
  }, []);

  return (
    <div>
      <StyledPaper>
        <List>
          {/* data.length > 0 でデータが取得できたかどうかを判定している */}
          {/* データが取得できた場合は、data.map()でリストアイテムを生成する */}
          {/* primary={item.id} は、リストアイテムの主要なテキストを設定している */}
          {/* secondary={item.name} は、リストアイテムの補助的なテキストを設定している */}
          {/* データが取得できなかった場合は、"データを取得中..." と表示する */}
          {data1.length > 0 ? (
            data1.map((item) => (
              <ListItem key={item.id}>
                <ListItemText primary="ID:" secondary={item.id} />
                <ListItemText primary="Name:" secondary={item.name} />
                <ListItemText primary="Version:" secondary={item.version} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="データを取得中..." />
            </ListItem>
          )}
        </List>
      </StyledPaper>
      <div>
        <h2>アコーディオン</h2>
        {data2 ? (
          data2.map((item: any) => (
            <Accordion key={item.id}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>ID: {item.id}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Name: {item.name}</Typography>
                <Typography>Email: {item.email}</Typography>
                <Typography>Version: {item.version}</Typography>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <Typography>データを取得中...</Typography>
        )}
      </div>
    </div>
  );
};

export default MockAPIwithMUI;