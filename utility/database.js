const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "arda",
    database: "MyDb",
    password: "AlAn_TuReNG?@243"
});
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "arda",
//     database: "MyDb",
//     password: "AlAn_TuReNG?@243"
// });
module.exports = connection.promise();