const userValidityMiddleWare  = require('./user-validity.middleware');

module.exports = {
    checkUserValidity: userValidityMiddleWare,
    chekUserIdValidity: require('../users/user-id-validity.middleware'),
}
