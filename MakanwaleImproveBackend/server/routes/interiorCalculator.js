const express = require('express');
const InteriorFormSchema = require('../models/InteriorCalculatorFormSchema')
const router = express.Router();

router.post('/submit-form', async (req, res) => {
    try {
      // Create a new instance of the ContactFormSchema with the data from the request body
         
      const formData = new InteriorFormSchema(req.body);

  
      // Save the data to the database
      const savedFormData = await formData.save();
  
      res.status(201).json(savedFormData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;
