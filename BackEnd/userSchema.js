const mongoose = require('mongoose');
mongoose.connect('<Connection String here>', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Database connected') })
    .catch((error) => { console.error('Error connecting to MongoDB:', error) });
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tankData: {
        type: Number
    },
    motorStatus: {
        type: Number
    }
}, { timestamps: true })
module.exports = mongoose.model('user', userSchema);
