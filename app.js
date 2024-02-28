const express = require('express');
const app = express();

const path = require('path');
const port = process.env.PORT || 3030;
const viewsPath = path.join(__dirname, 'view');

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath, 'home.html'));
});

app.get('/view/login.html', (req, res) => {
    res.sendFile(path.join(viewsPath, 'login.html'));
});

app.post('/view/login.html', (req, res) => { 
    res.sendFile(path.join(viewsPath, 'home.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(viewsPath, 'register.html'));
});

app.post('/register.html', (req, res) => {
    res.sendFile(path.join(viewsPath, 'home.html'));
});

