// src/sections/api/contact.js
import nodemailer from 'nodemailer';

// Nodemailer için gerekli ayarlar
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Kullanmak istediğiniz servis sağlayıcısı
  auth: {
    user: process.env.EMAIL_USER, // .env dosyasındaki email
    pass: process.env.EMAIL_PASS, // .env dosyasındaki email şifresi
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Mesajların gönderileceği e-posta
      subject: `Yeni Mesaj: ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Mesaj gönderildi.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Mesaj gönderilemedi.' });
    }
  } else {
    // Sadece POST istekleri kabul ediliyor
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
