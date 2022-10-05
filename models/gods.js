const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const God = sequelize.define('God', {
    name: {
        type: DataTypes.STRING(64),
    },
    symbol: {
        type: DataTypes.STRING(64),
    }

});

module.exports = God;