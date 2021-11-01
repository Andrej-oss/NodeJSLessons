const fs = require('fx-extra').promises;
const path = require('path').promises;
const uuid = require('uuid');

const {userService, mailService} = require('../services/index');
const { ErroreHandler, errores } = require('../error/index');
const passwordHasher = require('../helpers/passwor.hasher');
const actions = require('../config/const/email-actions.enum');

module.exports = {
    createUser:async (req, res, next) => {
        try {
            const { image, body: { email, password, name } } = req;
            const hashPassword = await passwordHasher.hasher(password);
            // Object.assign(req.body, {password});
            await mailService.sendMail(email, actions.WELCOME, {userName: name});

            const createdUser = await userService.saveUser({...req.body, hashPassword});

            if (image) {
                const pathWithOutPublic = path.join('users', `${createdUser.id}`, 'files', 'images');
                const imageDir = path.join(process.cwd(), 'public', pathWithOutPublic);
                const fileExtension = image.split('.').pop();
                const fileName = `${uuid()}.${fileExtension}`;
                const finalPathAvatar = path.join(pathWithOutPublic, fileName);

                await fs.mkdir(imageDir, {recursive: true});

                await image.mv(path.join(imageDir, fileName));

                const upDatedUser = await userService
                    .updateUserById(createdUser.id, {...createdUser, avatar_path: finalPathAvatar});
            }

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
