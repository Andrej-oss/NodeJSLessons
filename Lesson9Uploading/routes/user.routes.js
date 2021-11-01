const { Router } = require('express');
const userController = require('../controllers/users.controller');
const { usersMiddleWares, filesMiddleware, authMiddleWares }  = require('../middleware/index');

const userRouter = Router();

userRouter.post('/',
    usersMiddleWares.checkUserValidity,
    filesMiddleware.checkFileMiddleware,
    filesMiddleware.checkAvatarMiddleware,
    userController.createUser);
userRouter.get('/', userController.getUsers);
userRouter.delete('/:id', authMiddleWares.checkAccessToken, userController.deleteUser);
userRouter.get('/:userName', userController.getUserByName);
userRouter.get('/user/:id', usersMiddleWares.chekUserIdValidity, userController.getByUserId);

module.exports = {
    userRouter
}
