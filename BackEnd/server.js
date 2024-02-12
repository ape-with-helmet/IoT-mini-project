const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ganeshshatrugna:rj8DyBUfzjaTdO2k@mornon.gdze2yg.mongodb.net/userdetails')
    .then(() => { console.log("Database gg connected") })
    .catch((error) => { console.log(error) })