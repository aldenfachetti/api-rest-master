const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass} = require('../config/mail.json');

var transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
});

transport.use('compile', hbs ({
    viewEngine: {
        extname: ".handlebars",
        layoutsDir: path.resolve('./src/resources/mail/'),
        partialsDir: path.resolve('./src/resources/mail/'),
        defaultLayout: undefined,
        helpers: undefined,
        compilerOptions: undefined
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
}));

module.exports = transport;