//crypto
//const crypto = require('crypto');
//con la de node
const crypto = require('node:crypto');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const jwt = require('jsonwebtoken');
const secret = require('../config/env.js');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.TEXT,
        /* nombre de usuario no nulo */
        allowNull: false,
        unique: true,
        validate: {
            isLowercase: true,
            is: /^[A-Za-z0-9_-]+$/
        }
    },
    name: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password_hash: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    password_salt: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    tarjeta: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isCreditCard: true
        }
    },
    tipo_tarjeta: { type: DataTypes.TEXT }
});

User.createPassword = function (plainText) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
        .pbkdf2Sync(plainText, salt, 10000, 512, "sha512")
        .toString("hex");
    return { salt: salt, hash: hash }
}

User.validatePassword = function (password, user_salt, user_hash) {
    const hash = crypto
        .pbkdf2Sync(password, user_salt, 10000, 512, "sha512")
        .toString("hex");
    return user_hash === hash;
}

User.generateJWT = function (user) {
    const today = new Date();
    const expira = new Date();
    expira.setDate(today.getDate() + 60); //expira en 2 meses

    return jwt.sign({
        user: user.username,
        expira: parseInt(expira.getTime())
    }, secret);

}

module.exports = User;