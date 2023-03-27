const express = require('express');
const router = express.Router();
const userController = require('./controller/userController');

router.get('/users', userController.listUsers);
router.get('/details/:username', userController.getUserDetails);
router.get('/repos/:username', userController.getUserRepos);

module.exports = router;
