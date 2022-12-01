const mysql = require('../node_modules/mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'proyectofinal'
});
mysqlConnection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('conexion establecida')
    }
})
module.exports = mysqlConnection;