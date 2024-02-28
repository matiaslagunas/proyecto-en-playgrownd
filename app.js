const express = require('express');
const app = express();
const {resolve} = require('path');
const port = process.env.PORT || 3030;


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});



app.get('/', (req, res) => {
    res.sendFile(resolve('./views/home.html'))
});

app.get('/login.html', (req, res) => {
    res.sendFile(resolve('./views/login.html'));
});


app.get('/register.html', (req, res) => {
    res.sendFile(resolve('./views/register.html'));
});



