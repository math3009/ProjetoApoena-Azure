var mysql = require('mysql');

var connection = mysql.createConnection({
    // host     : 'localhost',
    port     : '3306',
    user     : 'grupo3',
    password : 'Sprintapoena1',
    database : 'projetoAPOENA1',
    server: "projetoapoena.database.windows.net",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado ao BD com sucesso!')
});

module.exports = connection;
// var mysql = require("mysql2");
// var sql = require('mssql');

// // CONEXÃO DO SQL SERVER - AZURE (NUVEM)
// var sqlServerConfig = {
//     user: "grupo3",
//     password: "Sprintapoena1",
//     database: "projetoAPOENA1",
//     server: "projetoapoena.database.windows.net",
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000
//     },
//     options: {
//         encrypt: true, // for azure
//     }
// }