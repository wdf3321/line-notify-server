import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import querystring from 'querystring';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import route from './route/route.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('OK');
});
app.use('/data', route)
// app.post('/data', async (req, res) => {
//   const jsonData = req.body;

//   // 处理json数据
//   console.log(jsonData);

//   const message = `
//     主題: ${req.body.subject}
//     聯絡姓名: ${req.body.name}
//     連絡電話: ${req.body.phone}
//     連絡信箱: ${req.body.email}
//     內容: ${req.body.content}
//   `; // Line Notify message
//   const transporter = nodemailer.createTransport({
//     host: 'xlinfoods.synology.me',
//     port: 25,
//     auth: {
//       user: process.env.AUTHID,
//       pass: process.env.AUTHPW,
//     },
//   });
//   transporter.sendMail({
//     from: 'dtsmkt@dtstw.com',
//     to: 'dtsmkt@dtstw.com',
//     subject: 'DTS-聯絡我們',
//     html: `<p>${message}</p>`,
//   }).then(info => {
//     console.log('Message sent');
//     res.status(200).send('Message sent');
//   }).catch(console.error);
// });




// const httpsOptions = {
//   key: privateKey,
//   cert: certificate,
// };

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
