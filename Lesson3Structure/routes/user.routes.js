const { Router } = require('express');
const userController = require('../controllers/users.controller');
const  userMiddleWare = require('../middleware/users.middleware');

const userRouter = Router();

userRouter.post('/', userMiddleWare.checkUserValidity, userController.createUser);
userRouter.get('/', userController.getUsers);
userRouter.delete('/', userController.deleteUser);
userRouter.get('/:userName', userController.getUserByName);
module.exports = {
    userRouter
}
