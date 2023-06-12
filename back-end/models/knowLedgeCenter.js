
const mongoose = require("mongoose");


const KnowLedgeCenter_Schema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})

const KnowLedgeCenter_Model = mongoose.model("KnowLedgeCenter", KnowLedgeCenter_Schema);

module.exports = KnowLedgeCenter_Model;