const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});


// Email options
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'louzaysami@gmail.com',
  subject: 'HACKEEEEEED',
  text: "HAHAAHAHAHAHAHAHA HACKED HATA ANTII BY CHAAAAAAA", 
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(`Error: ${error.message}`);
  }
  console.log(`Email sent: ${info.response}`);
});
