const { comparator } = require('../../helpers/passwor.hasher')
const userService = require('../../services/users.service')

module.exports = async (req, res, next) => {
    try{
        const { password, email} = req.body;

        const user = await userService.findUserByParams({email});
        if (!user) throw new Error("W E O P");

        await comparator(password, user.password);
        req.user = user;

        next();
    } catch (e) {
        next(e);
    }
}
