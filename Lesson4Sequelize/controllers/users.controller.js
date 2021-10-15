const userService = require('../services/users.service');

module.exports = {
    createUser:async (req, res) => {
        try {
            console.log(req.body);
            await userService.saveUser(req.body);
            res.json('User created');
        } catch (e) {
            res.json(e.message);
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
            if (!req.params.userName) throw new Error('Name should be not empty');
            let userByName = userService.getUserByName(req.params.userName);
            console.log(userByName);
            res.json(userByName);
        } catch (e){
            res.json(e.message);
        }
    },
    getByUserId: async (req, res) => {
        if (req.params.id){
            const userById = await userService.findUserById(req.params.id);
            res.json(userById);
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
