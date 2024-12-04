const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/images', (req, res) => {
  const directoryPath = path.join(__dirname, 'public/images/display');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send('Unable to scan folder');
    } else {
      const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
      res.json(images);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
