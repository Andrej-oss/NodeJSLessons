const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_ENV, REFRESH_TOKEN_ENV} = require('../config/config');

module.exports = () => {
    const access_token = jwt.sign({}, ACCESS_TOKEN_ENV, {expiresIn: '10m'});
    const refresh_token = jwt.sign({}, REFRESH_TOKEN_ENV, {expiresIn: '1d'});
    return{
        access_token,
        refresh_token,
    }
}
