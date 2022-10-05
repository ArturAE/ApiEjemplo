const router = require('express').Router();
const {
    createRealm,
    getRealm,
    getRealms,
    updateRealm,
    deleteRealm
} = require('../controllers/realms.js');

router.get('/', getRealms);
router.get('/:id', getRealm);
router.post('/', createRealm);
router.patch('/:id', updateRealm);
router.delete('/:id', deleteRealm);

module.exports = router;