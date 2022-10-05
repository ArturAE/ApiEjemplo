const { Sequelize } = require('sequelize');


//al postgres ya sea local o de heroku o donde sea
const sequelize = new Sequelize(process.env['DATABASE_URL'], {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;