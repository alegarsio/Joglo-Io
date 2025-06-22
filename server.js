const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/security', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'security.html'));
});
app.get('/business', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'solution.html'));
});
app.get('/evenlister', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'solution1.html'));
});

app.listen(port, () => {
  console.log(`http://localhost:${port} di browser Anda.`);
});


module.exports = app;
