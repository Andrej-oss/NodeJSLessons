const { USER_ACTIVATE, USER_BLOCKED, WELCOME} = require('../config/const/email-actions.enum')

module.exports = {
    [WELCOME]: {
        subject: 'WELCOME ON BOARD',
        templateName: 'wellcome'
    },
    [USER_BLOCKED]: {
        subject: 'Your account is blocked',
        templateName: 'user-blocked',
    }
}
