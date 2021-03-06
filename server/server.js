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

app.get('/genres/:id', (req, res) => {
    pool.query(`SELECT * FROM "genres"
    JOIN "movies_genres"
    ON "movies_genres"."genre_id"="genres"."id"
    WHERE "movie_id"=$1;`, [req.params.id])
        .then((result) => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('Error making movies get request', error);
            res.sendStatus(500);
        });
});

app.put('/movies/:id', (req, res) => {
    console.log('Updating movies with', req.body)
    const sqlText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`;
    values = [req.body.name, req.body.description, req.body.id]
    pool.query(sqlText, values)
    .then((response) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.sendStatus(500);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});