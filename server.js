import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,    // MailDev SMTP
  secure: false,
});

app.post('/send-otp', async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ error: 'Email and OTP required' });

  try {
    await transporter.sendMail({
      from: '"MyApp" <no-reply@myapp.local>',
      to: email,
      subject: 'Your OTP code',
      text: `Your verification code is: ${otp}`,
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
