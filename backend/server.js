const { readFile } = require("fs");
const cors = require('cors');
const bodyParser = require('body-parser');

const express = require("express");
const app = express();
const port = 9001;

function filterByTargetUserQuery(userId) {
    return function _filterByTargetUserQuery(data) {
        const result = {};
        for (const id in data) {
            if (data[id].targetUserId === userId) {
                result[id] = data[id];
            }
        }
        return result;
    }
}

function executeQuery(data, queryFunc) {
    return queryFunc(data);
}

app.use(cors());
app.use(bodyParser.json());

/* GET all user infomration */
app.get('/users', (_, res) => {
    readFile('./db/users.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    });
});

/* GET the comments posted to a given target user */
app.get('/comments', (req, res) => {
    readFile('./db/comments.json', 'utf8', (err, data) => {
        if (err) throw err;
        const filteredData = executeQuery(
            JSON.parse(data), 
            filterByTargetUserQuery(req.body.userId)
        );
        res.send(filteredData);
    });
});

/* GET dummy data for the FlatEntityStore methods */
app.get('/dummy', (_, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Backend server serving on port ${port}`)
});
