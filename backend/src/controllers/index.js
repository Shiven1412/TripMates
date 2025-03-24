const express = require('express');
const router = express.Router();

// Example controller function
const getTripMates = (req, res) => {
    res.send('List of trip mates');
};

// Define routes and link them to controller functions
router.get('/tripmates', getTripMates);

// Export the router
module.exports = router;