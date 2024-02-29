const multer = require('multer');
const express = require('express');
const router = express.Router();
const Image = require('../models/ImageUpload')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  // Routes
  router.post('/upload', upload.single('image'), async (req, res) => {
    const { filename, path } = req.file;
    const newImage = new Image({ filename, path });
    await newImage.save();
    res.json({ message: 'Image uploaded successfully!' });
  });