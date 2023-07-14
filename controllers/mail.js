import nodemailer from 'nodemailer';
export const sentdtstw = async (req, res) => {
  const jsonData = req.body;

  // 處理json資料
  console.log(jsonData);

  const message = `
    主題: ${req.body.subject} <br>
    聯絡姓名: ${req.body.name} <br>
    連絡電話: ${req.body.phone} <br>
    連絡信箱: ${req.body.email} <br>
    內容: ${req.body.content}
  `; // Line Notify message

  const transporter = nodemailer.createTransport({
    host: 'xlinfoods.synology.me',
    port: 25,
    auth: {
      user: process.env.DTSAUTHID,
      pass: process.env.DTSAUTHPW,
    },
  });

  transporter.sendMail({
    from: 'dtsmkt@dtstw.com',
    to: 'dtsmkt@dtstw.com',
    subject: 'DTS-用戶來信',
    html: `<p>${message}</p>`,
  })
    .then(info => {
      console.log('Message sent');
      res.status(200).send('Message sent');
    })
    .catch(console.error);
};

export const sentwater = async (req, res) => {
  const jsonData = req.body;

  // 處理json資料
  console.log(jsonData);

  const message = `
    主題: ${req.body.subject} <br>
    聯絡姓名: ${req.body.name} <br>
    連絡電話: ${req.body.phone} <br>
    連絡信箱: ${req.body.email} <br>
    內容: ${req.body.content}
  `; // Line Notify message

  const transporter = nodemailer.createTransport({
    host: 'xlinfoods.synology.me',
    port: 25,
    auth: {
      user: process.env.WATERID,
      pass: process.env.WATERPW,
    },
  });

  transporter.sendMail({
    from: 'service@springwater.tw',
    to: 'service@springwater.tw',
    subject: 'SPRINGWATER-用戶來信',
    html: `<p>${message}</p>`,
  })
    .then(info => {
      console.log('Message sent');
      res.status(200).send('Message sent');
    })
    .catch(console.error);
};
