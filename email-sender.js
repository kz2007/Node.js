var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email-sender@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'email-sender@gmail.com',
  to: 'email-receiver@gmail.com',
  subject: 'Subject',
  text: 'Text'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 