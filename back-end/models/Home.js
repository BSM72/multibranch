
const mongoose = require("mongoose");


const Home_Schema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

})

const Home_Model = mongoose.model("Home", Home_Schema);

module.exports = Home_Model;