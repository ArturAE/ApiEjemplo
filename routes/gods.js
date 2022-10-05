const router = require('express').Router();
const {
    createGod,
    getGod,
    getGods,
    updateGods,
    deleteGod
} = require('../controllers/gods.js');

const auth = require('../config/auth.js');

//const authOptional = require('../config/authOptional.js')
//para acceder aqui debe autenticarse
//router.get('/', authOptional.optional, getGods);
//router.get('/:id', authOptional.optional, getGod);

router.get('/', getGods);
router.get('/:id', getGod);
router.post('/', auth.required, createGod);
router.patch('/:id', auth.required, updateGods);
router.delete('/:id', auth.isAdmin, deleteGod);

module.exports = router; 