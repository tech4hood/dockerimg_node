const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        app: "Docker",
        version: "1.0",
        author: "Roman Jaquez"
    })
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);