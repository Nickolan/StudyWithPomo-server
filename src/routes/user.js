const express = require('express');
const router = express();

const {getAllUsers, postUser} = require('../controllers/user');

router.get('/', getAllUsers);
router.post('/newUser', postUser)


module.exports = router;
