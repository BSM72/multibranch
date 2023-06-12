
const mongoose = require("mongoose");


const Faq_Schema = mongoose.Schema({

    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

})

const Faq_Model = mongoose.model("Faq", Faq_Schema);

module.exports = Faq_Model;