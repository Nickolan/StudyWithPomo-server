const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    username: {
        type: String,
        require: true,
        unique: true,
    },
    name: {
        type: String,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    image: {
        type: String,
    }
    
})

module.exports = mongoose.model('User', UserSchema);