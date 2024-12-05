const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// app.use(express.static('public')); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sketchbook', (req, res) => {
  res.sendFile(path.join(__dirname, 'sketchbook.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
