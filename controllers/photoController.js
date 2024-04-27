// controllers/photoController.js
const db = require('../models/photoModel');

exports.uploadPhoto = (req, res) => {
  const imageUrl = req.file ? req.file.path : '';
  db.run('INSERT INTO photos (imageUrl) VALUES (?)', imageUrl, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Image uploaded successfully');
    }
  });
};

exports.getPhotos = (req, res) => {
  db.all('SELECT * FROM photos ORDER BY id DESC LIMIT 10', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows);
    }
  });
};
