const About = require("../models/About");

const createAbout = async (req, res) => {

    try {
        const { description } = req.body;

        // creating a new About
        const newAbout = await About.create({
            description
        })

        res.status(201).json({
            status: "success",
            newAbout
        })
    }

    catch (error) {
        res.status(404).json({
            status: "fail",
            error: error.msg
        })
    }
}
const getAllAbouts = async (req, res) => {


    try {
        const abouts = await About.find({});

        res.status(200).json({
            status: "success",
            length: abouts.length,
            abouts

        })
    }
    catch (error) {
        res.status(404).json({
            status: "fail",
        })
    }

}

module.exports = {
    createAbout,
    getAllAbouts
}