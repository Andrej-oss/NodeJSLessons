const userService = require('../services/users.service');
const { ErroreHandler, errores } = require('../errore/index');

module.exports = {
    createUser:async (req, res) => {
        try {
            console.log(req.body);
            await userService.saveUser(req.body);
            res.json('User created');
        } catch (e) {
            res.status(e.status).json(e.message);
        }
    },
    getUsers: async (req, res) => {
        try {
            if (req.query) console.log(req.query);
            let users = await userService.getAllUsers();
            console.log(users);
            res.json(users);
        } catch (e) {
            res.json(e.message);
        }
    },
    getUserByName: (req, res) => {
        try{
            console.log(req.params.userName);
            if (!req.params.userName) throw new ErroreHandler(errores.NOT_EMPTY_USER_NAME.message, errores.NOT_EMPTY_USER_NAME.code);
            let userByName = userService.getUserByName(req.params.userName);
            console.log(userByName);
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
