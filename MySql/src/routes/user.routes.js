const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);

router.get('/:id', userController.getUsersById)

router.post('/', userController.addUser)

router.delete('/:id', userController.deleteUserById)

router.put('/:id', userController.updateUserById) 

module.exports = router;
