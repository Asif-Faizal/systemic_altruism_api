// routes/photoRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const photoController = require('../controllers/photoController');

const upload = multer({ dest: 'uploads/' });

// Upload image
router.post('/upload', upload.single('photo'), photoController.uploadPhoto);

// Get all images
router.get('/photos', photoController.getPhotos);

module.exports = router;
