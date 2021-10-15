const { Router } = require('express');
const userController = require('../controllers/users.controller');
const usersMiddleWares  = require('../middleware/index');

const userRouter = Router();

userRouter.post('/', usersMiddleWares.usersMiddleWares.checkUserValidity, userController.createUser);
userRouter.get('/', userController.getUsers);
userRouter.delete('/', userController.deleteUser);
userRouter.get('/:userName', userController.getUserByName);
userRouter.get('/user/:id', userController.getByUserId)
module.exports = {
    userRouter
}
