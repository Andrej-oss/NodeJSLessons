module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar_path: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'users',
        timestamps: false
    });
    const OAuthModel = require('./o_auth')(sequelize, DataTypes);

    User.hasMany(OAuthModel, {onDelete: 'CASCADE', foreignKey: 'user_id'});
    return User;
};