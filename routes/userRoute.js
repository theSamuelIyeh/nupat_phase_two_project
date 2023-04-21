const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser_post);
router.get('/users', userController.allUsers_get);
router.get('/users/male', userController.verifyJwt, userController.allMale_get);
router.get('/user/:id', userController.getUser_get);
router.put('/update/:id', userController.updateUser_put);
router.delete('/delete/:id', userController.deleteUser_delete);
module.exports = router;