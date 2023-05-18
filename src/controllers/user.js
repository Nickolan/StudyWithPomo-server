const UserModel = require('../models/noSql/user')

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find()
        return res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const postUser = async (req, res) => {
    const {username, name, email, password, image} = req.body; 
    try {
        if (!username || !email || !password || !image) {
            throw new Error('Its Required some parameters');
        }

        const user = new UserModel({username, name, email, password, image});
        user.save();
        return res.status(200).json({message: 'User created successfully'})
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

module.exports = {getAllUsers, postUser}