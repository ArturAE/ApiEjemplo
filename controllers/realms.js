const Realm = require('../models/realms.js');

//crear
async function createRealm(req, res) {
    const body = req.body;
    try {
        const realm = await Realm.create(body);
        res.status(201).json(realm);
    } catch (error) {
        throw error;
    }
}

//Obtener
async function getRealm(req, res) {
    const id = req.params.id;
    const realm = await Realm.findByPk(id);
    res.status(200).json(realm);
}

async function getRealms(req, res) {
    const realms = await Realm.findAll();
    res.status(200).json(realms);
}

//actualizar
async function updateRealm(req, res) {
    const id = req.params.id;
    const realm = req.body;
    await Realm.update(realm, {
        where: { id }
    });
    const realm_updated = await Realm.findByPk(id);
    res.status(200).json(realm_updated);
}

//eliminar
async function deleteRealm(req, res) {
    const id = req.params.id;
    const deleted = Realm.destroy({
        where: { id }
    });
    res.status(200).json(deleted);
}

module.exports = {
    createRealm,
    getRealm,
    getRealms,
    updateRealm,
    deleteRealm
}