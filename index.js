const cron = require('node-cron');
const express = require('express');
const nodemailer = require('nodemailer');

//Creating an instance of express
app = express();


cron.schedule('*/5 * * * * *', () => {  
    console.log('----------------------------------------');
    console.log("Tasked scheduled with 5 seconds interval");
    console.log('Running cron process');

    //
let mailOptions = {
    from: 'ing.armando.silverio@gmail.com',
     to: 'armando.silverio@webmaps.com.mx',
     subject: 'This is a scheduled email testing',
     text: "This is very simple email testing",
     attachments: [{
         filename: 'WS' + ".xlsx",
         path: __dirname + '/WS.xlsx'
     }],
     html: '<b>THE HTML CONTENT</b>'
 }
 
 //Mail transport  configuration
 let transporter = nodemailer.createTransport({
    service: 'gmail',
     auth: {
         user: 'ing.armando.silverio@gmail.com',
         pass: 'wwrgyvkswkldwdls',
     },
     tls: {
         rejectUnauthorized: false
     },
 });
 
 
 
 //Delivering mail with sendMail method 
 transporter.sendMail(mailOptions, (error, info) => {
     if (error) console.log(error);
     else console.log('Email sent: ' + info.response);
 });
    });


//port hearing
var port = 3000;
 app.listen(port, (res, send) =>{
    console.log(`listening on port ${port}`);
 });