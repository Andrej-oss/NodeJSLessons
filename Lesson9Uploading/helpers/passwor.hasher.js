const bcrypt = require('bcrypt');
const {errores, ErroreHandler} = require('../error/index')

module.exports = {
    hasher: (password) => bcrypt.hash(password, 10),
    comparator: async (password, hash) => {
        const equilsPassword = await bcrypt.compare(password, hash);
        if (!equilsPassword) {
            throw new ErroreHandler(errores.WRONG_EMAIL_OR_PASSWORD.message, errores.WRONG_EMAIL_OR_PASSWORD.code);
        }
    }
};
