// const mysql2 = require('mysql2');
//
// const connection = mysql2.createConnection({
//     user: 'root',
//     password: 'root',
//     database: 'auto_shop',
//     host: 'localhost'
// });
//
// module.exports = connection.promise();
//
const {Sequelize, DataTypes} = require('sequelize');
const fs = require('fs');
const path = require('path');

module.exports = (() => {
    let instance;

    initConnection = () => {
        const client = new Sequelize('auto_shop', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        })
        const models = {};

        getModels = () => {
            fs.readdir(path.join(process.cwd(), 'database', 'models'), (err, files) => {
                files.forEach(file => {
                    let [fileName] = file.split('.');
                    models[fileName] = (require(path.join(process.cwd(), 'database', 'models', fileName)))(client, DataTypes);
                })
            });
        };
        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName],
        }
    };
    return {
        getInstance: () => {
            if (!instance) return instance = initConnection();
            return instance;
        }
    }
})();
