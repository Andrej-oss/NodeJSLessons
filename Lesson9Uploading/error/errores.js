const erroreCodes = require('../config/const/erroresCodes');

module.exports = {
    NOT_VALID_ID: {
        message: 'user id shod be grater then 0',
        code: erroreCodes.BAD_REQUEST
    },
    NOT_EMPTY_USER_NAME: {
        message: 'user name should be not empty',
        code: erroreCodes.BAD_REQUEST
    },
    WRONG_EMAIL_OR_PASSWORD: {
        message: 'Wrong email or password',
        code: erroreCodes.BAD_REQUEST
    },
    NOT_VALID_TOKEN: {
        message: 'Token is not valid',
        code: erroreCodes.NOT_AUTH,
    },
    PERMISSION_DENIED: {
        message: 'Permission denied',
        code: erroreCodes.PERMISSION_DENIED,
    },
    TOO_BIG_FILE: {
        message: 'Too Big File',
        code: erroreCodes.BAD_REQUEST
    },
    NOT_VALID_FILE: {
        message: 'Not Valid File Uploaded',
        code: erroreCodes.BAD_REQUEST,
    },
    ONE_AVATAR_ERROR: {
        message: 'please only one avatar image',
        code: erroreCodes.BAD_REQUEST,
    }
};