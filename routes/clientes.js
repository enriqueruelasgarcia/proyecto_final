const router = require('express').Router();
const contactoController = require('../controllers/contactoController');

router.post('/', (req, res) => {
    contactoController.create2(req, res)
})

router.get('/', (req, res) => {
    contactoController.listarClientes(req, res)
})
module.exports = router