const { users }=  require('../database/users');

module.exports = {
  getAllUsers: () => users,
  saveUser: (user) => users.push(user),
  getUserByName: (name) => {
    const user = users.find(user => user.name === name);
    return user;
  },
};
