const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
const users = [];
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ error: 'form not illed' });
    }
    else {
        users.push({ username, password })
        res.json('register sucessfully');
    }
})

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log('app listen on port 3000')
});