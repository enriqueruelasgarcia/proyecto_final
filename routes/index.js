let router = require('express').Router();

let productos = require('./productos');
router.use('/productos', productos)
let clientes = require('./clientes');
router.use('/clientes', clientes)
let vendedores = require('./vendedores');
router.use('/vendedores', vendedores)
let facturas = require('./facturas');
router.use('/facturas', facturas)
let login = require('./login');
router.use('/login', login)
module.exports = router