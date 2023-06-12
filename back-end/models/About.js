
const mongoose = require("mongoose");


const About_Schema = mongoose.Schema({


    description: {
        type: String,
        required: true
    },

})

const About_Model = mongoose.model("About", About_Schema);

module.exports = About_Model;