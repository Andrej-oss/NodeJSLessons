const {userService, mailService} = require('../services/index');
const { ErroreHandler, errores } = require('../error/index');
const passwordHasher = require('../helpers/passwor.hasher');
const actions = require('../config/const/email-actions.enum');

module.exports = {
    createUser:async (req, res, next) => {
        try {
            const {email, password, name} = req.body;
            const hashPassword = await passwordHasher.hasher(password);
            // Object.assign(req.body, {password});
            await mailService.sendMail(email, actions.WELCOME, {userName: name});

            await userService.saveUser({...req.body, hashPassword});

            res.status(201).json('User created');
        } catch (e) {
            res.json(e.message);
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
