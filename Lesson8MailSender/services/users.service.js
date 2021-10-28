const db =  require('../database/index');

module.exports = {
  // getAllUsers: () => db.query('select * from users'),
  // saveUser: (user) => db.query(`INSERT INTO users(id, name, email, password) VALUES (${user.name, user.email, user.password})`),
  // getUserByName: (name) => {
  //   const user = users.find(user => user.name === name);
  //   return user;
  // },
  getAllUsers: () => {
    const userModel = db.getInstance().getModel('user');
    return userModel.findAll();
  },
  saveUser: (user) => {
    const userModel = db.getInstance().getModel('user');
    return userModel.create(user);
  },
  findUserById: (id) => {
    const userModel = db.getInstance().getModel('user');
    return userModel.findByPk(id);
  },
  findUserByParams: (params) => {
    const userModel = db.getInstance().getModel('user');
    return userModel.findOne({
      where: params
    });
  },
};
