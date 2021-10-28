const db =  require('../database/index');


module.exports = {
    createTokenPair: (tokenPair) => {
            const OAuthModel = db.getInstance().getModel('o_auth');

            OAuthModel.create(tokenPair);
    },
    getTokenPairWithUserByParam: (access_token) => {
        const OAuthModel = db.getInstance().getModel('o_auth');
        const UserModel = db.getInstance().getModel('user');

        return UserModel.findOne({
            include: {
                model: OAuthModel,
                where: access_token
            }
        })

    }
}
