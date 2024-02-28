const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3030;
const viewsPath = path.join(__dirname, 'views');

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});





app.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath, '/views/home.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(viewsPath, '/views/login.html'));
});

app.post('/login.html', (req, res) => { 
    res.sendFile(path.join(viewsPath, '/views/home.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(viewsPath, '/views/register.html'));
});

app.post('/register.html', (req, res) => {
    res.sendFile(path.join(viewsPath, '/views/home.html'));
});

