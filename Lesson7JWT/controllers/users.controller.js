  const { ErroreHandler, errores } = require('../error/index');
const passwordHasher = require('../helpers/passwor.hasher');

module.exports = {
    createUser:async (req, res) => {
        try {
            const password = await passwordHasher.hasher(req.body.password);
            // Object.assign(req.body, {password});
            await userService.saveUser({...req.body, password});
            res.json('User created');
        } catch (e) {
            res.status(e.status).json(e.message);
        }
    },
    getUsers: async (req, res) => {
        try {
            if (req.query) console.log(req.query);
            let users = await userService.getAllUsers();
            res.json(users);
        } catch (e) {
            res.json(e.message);
        }
    },
    getUserByName: (req, res) => {
        try{
            if (!req.params.userName) throw new ErroreHandler(errores.NOT_EMPTY_USER_NAME.message, errores.NOT_EMPTY_USER_NAME.code);
            let userByName = userService.getUserByName(req.params.userName);
            res.json(userByName);
        } catch (e){
            res.json(e.message);
        }
    },
    getByUserId: async (req, res) => {
        try {
            const userById = await userService.findUserById(req.params.id);
            res.json(userById);
        }
        catch (e) {
            res.json(res.message);
        }
    },
    deleteUser: (req, res) => {
        try {
            res.json('User deleted');
        } catch (e) {
            res.json(e.message);
        }
    }
}
