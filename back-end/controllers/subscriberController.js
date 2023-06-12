const Subscriber = require("../models/Subscriber");

const getAllSubscribers = async (req, res) => {

    try {
        const Subscribers = await Subscriber.find({});

        console.log("All Subscribers : ", Subscribers);

        res.status(200).json({
            status: "success",
            length: Subscribers.length,
            Subscribers
        })
    }
    catch (error) {

        console.log("Error : ", error);

        res.status(404).json({
            status: "error"
        })

    }
}
const createSubscriber = async (req, res) => {
    try {

        const { email } = req.body;

        const newSubscriber = await Subscriber.create({
            email
        })

        res.status(200).json({
            status: "success",
            newSubscriber
        })
    }
    catch (error) {
        console.log("Error : ", error);

        res.status(404).json({
            status: "error"
        })
    }
}

module.exports = {
    getAllSubscribers,
    createSubscriber
}