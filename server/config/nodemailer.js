const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');


let transporter = nodemailer.createTransport({
    service : 'gmail',
    host : 'smtp.gmail.com',
    port : 587,
    secure: false,
    auth: {
        user : 'boostmindgame',
        pass : 'abcdefshj'
    }
});

  module.exports = {
    transporter : transporter     
  }