const express = require("express");
const router = express.Router();

const connection = require('../db');

router.get('/', (req, res) => {
    res.send("Welcome to my API REST *Ronny Yoel Pérez Cuevas 2017-5482* GET: /users, /users/id POST: /login");
})

router.get('/users', (req, res) => {
    connection.query("SELECT * FROM users", (err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/users  /:id', (req, res) => {
    const {id} = req.params;
    connection.query("SELECT * FROM users WHERE id = ?",[id] ,(err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.json(rows[0]);
        }
    });
});

router.post('/login', (req, res) => {

    const {nombre, contraseña} = req.body;

    connection.query("SELECT * FROM users WHERE nombre = ? AND contraseña = ?", [nombre, contraseña], (err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send("You are Sign In");
        }
    });

});
module.exports = router;