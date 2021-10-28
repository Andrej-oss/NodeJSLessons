const { ErroreHandler } = require('../../error/index');
const { BAD_REQUEST } = require('../../config/const/erroresCodes');
const { newUserValidator } = require('../../validators/index')


module.exports = (req, res, next) => {
    try {
        const user = req.body;
        const { error } = newUserValidator.validate(user);
        if (error) {
            throw new ErroreHandler(error, BAD_REQUEST)
        }
        next();
    }
    catch (e){
       next(e);
    }
}
