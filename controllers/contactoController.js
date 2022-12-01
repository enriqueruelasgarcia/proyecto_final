let mysql = require('../db/mysql')
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

module.exports = {
    create1: (req, res) => {
        mysql.query(`insert into productos (nombre,precio,cantidad,codigo) values ('${req.body.nombre}','${req.body.precio}','${req.body.cantidad}',${req.body.codigo})`, (error, results, fields) => {
            if (error)
                console.log(error)
            else {
                console.log({ msg: 'Product succesfully registered' })
            }
        })
    },
    create2: (req, res) => {
        mysql.query(`insert into clientes (nombre,celular,edad,correo) values ('${req.body.nombre}','${req.body.celular}','${req.body.edad}','${req.body.correo}')`, (error, results, fields) => {
            if (error)
                console.log(error)
            else {
                console.log({ msg: 'Customer succesfully registered' })
            }
        })
    },
    createSeller: (req, res) => {
        mysql.query(`SELECT * FROM vendedores WHERE LOWER(username) = LOWER(${mysql.escape(req.body.username)});`, (err, result) => {
            if (result.length) {
                console.log('nombre de ususario en uso')
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send({
                            msg: err
                        });
                    } else {
                        mysql.query(`INSERT INTO vendedores (id, username, password, registered) VALUES ('${uuid.v4()}', ${mysql.escape(req.body.username)}, '${hash}', now())`, (err, result) => {
                            if (err) {
                                console.log(err)
                            }
                            console.log({ msg: 'Seller succesfully registered' })
                        });
                    }
                });
            }
        });
    },
    Loggin: (req, res) => {
        mysql.query(`SELECT * FROM vendedores WHERE username = ${mysql.escape(req.body.username)};`, (error, result) => {
            if (error) {
                console.log('Vendedor/usuario no existente en la base de datos')
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(hash)
                        console.log(result[0].password)
                        if (hash != result[0].password) {
                            console.log('contrasena o usuario incorrectos')
                        } else {

                        }
                    }
                })
            }
        });
    },
    listarProductos: (req, res) => {
        mysql.query(`select * from productos`, (error, results, fields) => {
            if (error) {
                console.log(error)
            } else {
                res.json(results)
            }
        })
    },
    listarClientes: (req, res) => {
        mysql.query(`select * from clientes`, (error, results, fields) => {
            if (error) {
                console.log(error)
            } else {
                res.json(results)
                console.log('listo')
            }
        })
    },
    createFac: (req, res) => {
        let mont = {
            montof: ``
        }
        let productos = '';
        console.log(req.body.products.length)
        for (let j = 0; j < req.body.products.length; j++) {
            productos += `${req.body.products[j].nombre}(${req.body.products[j].cantidad})`;
        }
        let monto = 0;
        for (let i = 0; i < req.body.products.length; i++) {
            mysql.query(`select * from productos where nombre='${req.body.products[i].nombre}'`, (error, results, fields) => {
                if (error) {
                    console.log(error)
                } else {
                    monto += (req.body.products[i].cantidad * results[0].precio);
                    mysql.query(`update productos set cantidad=${results[0].cantidad-req.body.products[i].cantidad} where nombre='${req.body.products[i].nombre}'`), (error, results, fields) => {
                        if (error) {
                            console.log(error)
                        }
                    }
                }
                mont.montof = monto
            })
        }
        mysql.query(`insert into facturas (fecha,productos,monto) values (now(),'${productos}','${mont.montof}')`), (error, results, fields) => {
            if (error) {
                console.log(error)
            } else {
                mysql.query(`select * from facturas where productos=${productos}`), (error, results, fields) => {

                    let impr = document.getElementById('impr');
                    let fac = '';
                    fac += `<h3>Factura</h3><br>ID:${results[0].id_factura}<br>
                        Productos:${productos}<br>
                        Monto:${mont.montof}`
                    impr.innerHTML += fac;
                }
            }
        }
        console.log(mont.montof)
    }
}