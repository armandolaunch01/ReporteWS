const nodemailer = require('nodemailer');

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
};

//Mail transport configuration
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

