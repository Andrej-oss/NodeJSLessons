const userMiddleWare  = require('./users/index');
const authMiddleWare  = require('./auth/index');


module.exports = {
    usersMiddleWares: userMiddleWare,
    authMiddleWares: authMiddleWare,
    filesMiddleware: require('./file/index'),
}
