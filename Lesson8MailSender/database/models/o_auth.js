
module.exports = (sequelize, DataTypes) =>  {
    const OAuth = sequelize.define(
        'o_auth',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            access_token: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            refresh_token: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false,
                reference: {
                    model: 'user',
                    key: 'id',
                },
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.fn('NOW')
            }
        },
        {
            tableName: 'o_auth',
            timestamps: false
        }
    );

    return OAuth;
}
