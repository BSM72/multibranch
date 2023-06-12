const Home = require("../models/Home");

const createSection = async (req, res) => {

    try {
        const { title, imagePath, description } = req.body;

        // creating a new section at the home page
        const newHomeSection = await Home.create({
            title,
            imagePath,
            description

        })

        res.status(201).json({
            status: "success",
            newHomeSection
        })
    }

    catch (error) {
        res.status(404).json({
            status: "fail",
            error: error.msg
        })
    }
}
const getAllSections = async (req, res) => {

    console.log("Get All sections");
    try {
        const homeSections = await Home.find({});

        res.status(200).json({
            status: "success",
            length: homeSections.length,
            homeSections

        })
    }
    catch (error) {
        res.status(404).json({
            status: "fail",
        })
    }

}

module.exports = {
    createSection,
    getAllSections
}