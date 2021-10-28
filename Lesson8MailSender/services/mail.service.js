const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const {ROOT_EMAIL_ENV, ROOT_EMAIL_PASSWORD_ENV} = require('../config/config')
const templatesInfo = require('../email-templates/index');

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        type: "LOGIN",
        user: ROOT_EMAIL_ENV,
        pass: ROOT_EMAIL_PASSWORD_ENV,

    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
});

const emailTemplates = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
})

const sendMail = async (userMail, action, contex) => {
    try {

        const templateInfo = templatesInfo[action];
        if (!templateInfo) throw new Error('Wrong teplate name');

        const html = await emailTemplates.render(templateInfo.templateName, contex);

        return  transporter.sendMail({
            from: 'NO REPLY',
            to: userMail,
            subject: templateInfo.subject,
            html
        });
    } catch (e) {
        console.log(e);
    }
};
module.exports = {
    sendMail
};
