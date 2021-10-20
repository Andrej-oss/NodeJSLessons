const { ErroreHandler, errores } = require('../../errore/index');

module.exports = (req, res, next) => {
    try{
        const id = req.params.id;
        if (id < 0) throw new ErroreHandler(errores.NOT_VALID_ID.message, errores.NOT_VALID_ID.code);

        next();
    }
    catch (e) {
        next(e);
    }
};
