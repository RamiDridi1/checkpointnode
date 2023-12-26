const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'yourmail@gmail.com',
    pass: 'your password',
  },
});

// Setup email data
const mailOptions = {
  from: 'yourmail@gmail.com',
  to: 'friendmail@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js using nodemailer!',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
