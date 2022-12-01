const router = require('express').Router();
const contactoController = require('../controllers/contactoController');

router.post('/', (req, res) => {
    contactoController.create1(req, res)
})
router.get('/', (req, res) => {
    contactoController.listarProductos(req, res)
})
module.exports = router