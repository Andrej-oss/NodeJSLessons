const jwt = require('jsonwebtoken');
const { ErroreHandler, errores } = require('../../error/index')
const { oAuthService } = require('../../services/index');

module.exports = async (req, res, next) => {
    try{
        const access_token = req.get('Authorization');

        console.log(access_token);
        if (!access_token) throw new ErroreHandler(errores.NOT_VALID_TOKEN.message, errores.NOT_VALID_TOKEN.code);

        const userWithToken = await oAuthService.getTokenPairWithUserByParam({access_token});
        if (!userWithToken) throw new ErroreHandler(errores.NOT_VALID_TOKEN.message, errores.NOT_VALID_TOKEN.code);
        if (userWithToken.id !== +req.params.id) throw new ErroreHandler(errores.PERMISSION_DENIED.message, errores.PERMISSION_DENIED.code);

        jwt.verify(access_token, 'MEGA_KEY', err => {
           if (err) throw new ErroreHandler(errores.NOT_VALID_TOKEN.message, errores.NOT_VALID_TOKEN.code);
        });
        next();
    } catch (e) {
        next(e);
    }
}
