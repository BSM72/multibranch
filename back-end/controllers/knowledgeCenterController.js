const KnowLedgeCenter = require("../models/knowLedgeCenter");

const getAllKnowlegdeCenters = async (req, res) => {

    try {
        const KnowlegdeCenters = await KnowLedgeCenter.find({});


        console.log("All Knowledge Center");
        console.log(KnowlegdeCenters)
        res.status(200).json({
            status: "success",
            length: KnowlegdeCenters.length,
            KnowlegdeCenters
        })
    }
    catch (error) {

        console.log("Error : ", error);

        res.status(404).json({
            status: "error"
        })

    }
}
const createKnowLedgeCenter = async (req, res) => {
    try {

        const { title, description } = req.body;

        const newKnowLedgeCenter = await KnowLedgeCenter.create({
            title,
            description
        })

        res.status(200).json({
            status: "success",
            newKnowLedgeCenter

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
    getAllKnowlegdeCenters,
    createKnowLedgeCenter
}