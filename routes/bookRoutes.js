const express = require('express');
const router = express.Router();
const {showBooks} = require('../controllers/bookController');

router.get('/books', showBooks);

module.exports = router;