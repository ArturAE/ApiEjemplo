const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const God = require('./gods.js');

const Realm = sequelize.define('Realm', {
    name: {
        type: DataTypes.STRING(64),
    },
    description: {
        type: DataTypes.TEXT,
    }
});

//relacion
//Realm.hasMany(God);
//God.belongsTo(Realm);

module.exports = Realm;