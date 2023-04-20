const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser_post);
router.get('/:id', userController.getUser_get);
router.put('/:id', userController.updateUser_put);
router.delete('/:id', userController.deleteUser_delete);
router.get('/users', userController.allUsers_get);
router.get('/users/gender', userController.allMale_get);

module.exports = router;