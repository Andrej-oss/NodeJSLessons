const { ErroreHandler, errores } = require('../../error/index');

module.exports = (req, res, next) => {

    try{
        if (req.images.length > 1) throw new ErroreHandler(errores.ONE_AVATAR_ERROR.message, errores.ONE_AVATAR_ERROR.code);

        req.avatar = req.images[0];
        
            next();
    } catch (e) {
        next(e);
    }
}
