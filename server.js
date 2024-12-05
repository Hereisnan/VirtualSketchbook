const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public')); 

app.get('/api/images', (req, res) => {
  const images = [
      { src: 'images/doodle-images/doodle1.png', 
        position: { x: 0, y: -70 }, rotation: 15,
        size: { width: 100, height: 150 } },
      { src: 'images/doodle-images/doodle2.png', 
        position: { x: 10, y: -170 }, rotation: 30,
        size: { width: 150, height: 100 } },
      { src: 'images/doodle-images/doodle4.png', 
        position: { x: 50, y: 60 }, rotation: 20,
        size: { width: 120, height: 120 } }
  ];
  res.json(images);
  // random position and rotation
  // const randomizedImages = images.map(image => ({
  //     ...image,
  //     position: {
  //         x: Math.random() * 100,
  //         y: Math.random() * 100
  //     },
  //     rotation: Math.floor(Math.random() * 360)
  // }));

  // res.json(randomizedImages);
});


// // API to get images data
// app.get('/api/images', (req, res) => {
//     const imagesDir = path.join(__dirname, 'public', 'images', 'doodle-images');
//     fs.readdir(imagesDir, (err, files) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send('Error reading image directory.');
//         }
//         const images = files.map(file => {
//             // Assume you want to randomize the rotation and position of each image
//             const rotation = Math.floor(Math.random() * 360);
//             const position = { x: Math.random() * 100, y: Math.random() * 100 };  // Random position percentages
//             return { src: `images/doodle-images/${file}`, rotation, position };
//         });
//         res.json(images);
//     });
// });

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
