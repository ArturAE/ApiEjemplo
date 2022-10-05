const router = require('express').Router();
const gods = require('./gods.js');
const realms = require('./realms.js');
const users = require('./users.js');

router.get('/', (req, res) => {
    res.json({ 'info': 'Wlecome to gods API' });
});

router.use('/gods', gods);

router.use('/realms', realms);

router.use('/users', users);

module.exports = router;