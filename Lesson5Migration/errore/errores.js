const erroreCodes = require('../config/const/erroresCodes');

module.exports = {
    NOT_VALID_ID: {
        message: 'user id shod be grater then 0',
        code: erroreCodes.BAD_REQUEST
    },
    NOT_EMPTY_USER_NAME: {
        message: 'user name shold be not empty',
        code: erroreCodes.BAD_REQUEST
    }
};
