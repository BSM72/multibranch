
const mongoose = require("mongoose");


const Subscriber_Schema = mongoose.Schema({

    email: {
        type: String,
        required: true
    }

})

const Subscriber_Model = mongoose.model("Subscriber", Subscriber_Schema);

module.exports = Subscriber_Model;