const router = require('express').Router();
const contactoController = require('../controllers/contactoController');

router.post('/', (req, res) => {
    contactoController.createSeller(req, res)
})
module.exports = router