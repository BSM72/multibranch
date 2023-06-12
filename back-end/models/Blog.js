
const mongoose = require("mongoose");


const Blog_Schema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    anchorPath: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const Blog_Model = mongoose.model("Blog", Blog_Schema);

module.exports = Blog_Model;