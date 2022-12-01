const router = require('express').Router();
const contactoController = require('../controllers/contactoController');

router.post('/', (req, res) => {
    contactoController.Loggin(req, res)
})
module.exports = router