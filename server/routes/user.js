const express = require('express');

const router = express.Router();
const {
  userSignIn
} = require('../controllers/user');

router.post('/login', userSignIn);


module.exports = router;