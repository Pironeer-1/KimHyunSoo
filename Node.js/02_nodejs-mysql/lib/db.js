const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'nodejs',
    password:'111111',
    database: 'opentutorials'
});
db.connect();
module.exports = db;