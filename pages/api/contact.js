import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, 
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
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
