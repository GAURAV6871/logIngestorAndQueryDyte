const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataControllers');

// POST request to create new data
router.post('/', dataController.createData);

// Add more routes as needed (GET, PUT, DELETE, etc.)

module.exports = router;
