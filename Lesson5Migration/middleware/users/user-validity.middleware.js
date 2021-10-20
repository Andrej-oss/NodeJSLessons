const { ErroreHandler } = require('../../errore/index');

module.exports = (req, res, next) => {
    try {
        const user = req.body;
        if (!user.email || !user.password) throw new ErroreHandler('User is not valid', 404);
        next();
    }
    catch (e){
       next(e);
    }
}
