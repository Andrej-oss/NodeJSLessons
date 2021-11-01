const tokenizer = require('../helpers/tokenizer');
const {userService, oAuthService} = require('../services/index');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const { id } = req.user;
            const token_pair = tokenizer();

            await oAuthService.createTokenPair({user_id: id, ...token_pair});
            res.json(token_pair);
        } catch (e) {
            next(e);
        }
    },
}
