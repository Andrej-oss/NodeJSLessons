const { Router } = require('express');
const { authMiddleWares } = require('../middleware/index');
const oAuthController = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post('/', authMiddleWares.isPasswordOk, oAuthController.createUser);

module.exports = {
    authRouter
};
