const User = require('../models/user');

const createUser_post = async (req, res) => {
    console.log(req.body);
    const user = await User.create()
}

const getUser_get = async (req, res) => {
    
}

const updateUser_put = async (req, res) => {
    
}

const deleteUser_delete = async (req, res) => {
    
}

const allUsers_get = async (req, res) => {
    
}

const allMale_get = async (req, res) => {
    
}

module.exports = {createUser_post, getUser_get, updateUser_put, deleteUser_delete, allUsers_get, allMale_get};