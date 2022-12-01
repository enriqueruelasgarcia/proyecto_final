const router = require('express').Router();
const contactoController = require('../controllers/contactoController');

router.post('/', (req, res) => {
    contactoController.createFac(req, res)
})
module.exports = router