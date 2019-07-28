const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.get('/movies', (req, res) => {
    pool.query(`SELECT * FROM "movies" ORDER BY "id";`)
        .then((result) => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('Error making movies get request', error);
            res.sendStatus(500);
        });
});

app.get('/movies/details/:id', (req, res) => {
    pool.query(`SELECT * FROM "movies" WHERE "id"=$1;`, [req.params.id])
        .then((result) => {
            res.send(result.rows[0]);
        })
        .catch(error => {
            console.log('Error making movies get request', error);
            res.sendStatus(500);
        });
});

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});