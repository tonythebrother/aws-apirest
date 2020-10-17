const mysql = require('mysql');

const connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login',

});

connection.connect(err => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Success database is conected.');
    }
});

module.exports = connection;