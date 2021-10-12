const userService = require('../services/users.service');

module.exports = {
    createUser: (req, res) => {
        try {
            userService.saveUser(req.body);
            res.json('User created');
        } catch (e) {
            res.json(e.message);
        }
    },
    getUsers: (req, res) => {
        try {
            if (req.query) console.log(req.query);
            let allUsers = userService.getAllUsers();
            res.render('users', {users: allUsers});
        } catch (e) {
            req.json(e.message);
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
    deleteUser: (req, res) => {
        try {
            res.json('User deleted');
        } catch (e) {
            res.json(e.message);
        }
    }
}
