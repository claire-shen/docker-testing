const express = require('express');

const app = express(); //to store the result

const HOST = '0.0.0.0';
const PORT = 80; 

app.get('/', (req, res) => { // .get() routs HTTP GET requests to the specified path 
    res.send('Hello World');
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);

