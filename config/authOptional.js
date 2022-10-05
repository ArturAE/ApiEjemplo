const secret = require('./env.js');
const { expressjwt } = require('express-jwt');

function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
}

const authOptional = {
    optional: expressjwt({
        secret: secret,
        credentialsRequired: false,
        algorithms: ['HS256'],
        userProperty: 'user',
        getToken: getTokenFromHeader
    })
}

module.exports = authOptional;