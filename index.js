import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import querystring from 'querystring';
import cors from 'cors'
const app = express();
// const port = 3000;

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.post('/data', (req, res) => {
  const jsonData = req.body;

  // 處理json資料
  console.log(jsonData);

  const message = `
    主旨: ${req.body.subject}
    聯絡姓名: ${req.body.name}
    連絡電話: ${req.body.phone}
    聯絡信箱: ${req.body.email}
    問題內容: ${req.body.content}
  `; // line notify message

  const accessToken = process.env.TOKEN; // Line Notify Token
  const formData = querystring.stringify({ message });

  axios
    .post('https://notify-api.line.me/api/notify', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      res.send('通知已發送！');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('錯誤500');
    });

  return; // 結束請求
});

app.listen(3000, () => {
  console.log(`port: 3000`);
});
