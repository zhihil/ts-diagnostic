const { readFile } = require("fs");
const cors = require('cors');

const express = require("express");
const app = express();
const port = 9001;

app.use(cors());

app.get('/users', (_, res) => {
    readFile('./users.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    });
});

app.get('/dummy', (_, res) => {
    res.send("dummy data");
});

app.listen(port, () => {
    console.log(`Backend server serving on port ${port}`)
});
