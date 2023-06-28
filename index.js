import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import querystring from 'querystring';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const privateKeyPath = path.resolve(__dirname, 'private.pem');
const certificatePath = path.resolve(__dirname, 'fullchain.crt');
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');
app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.post('/data', (req, res) => {
  const jsonData = req.body;

  // 处理json数据
  console.log(jsonData);

  const message = `
    主題: ${req.body.subject}
    聯絡姓名: ${req.body.name}
    連絡電話: ${req.body.phone}
    連絡信箱: ${req.body.email}
    內容: ${req.body.content}
  `; // Line Notify message

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
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('500');
    });
});

const httpsOptions = {
  key: privateKey,
  cert: certificate,
};

const server = https.createServer(httpsOptions, app);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
