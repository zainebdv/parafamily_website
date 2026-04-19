
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'Tous les champs sont obligatoires' });
    }

    await transporter.sendMail({
      from: `"PharmaFamily Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nouveau message : ${subject}`,
     
    });

    res.json({ success: true, message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur email:', error);
    res.status(500).json({ success: false, message: 'Erreur serveur lors de l\'envoi' });
  }
};

module.exports = { submitContact };