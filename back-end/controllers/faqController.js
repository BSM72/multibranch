const Faq = require("../models/Faq");

const getAllFaqs = async (req, res) => {

    try {
        const Faqs = await Faq.find({});



        console.log(Faqs)

        res.status(200).json({
            status: "success",
            length: Faqs.length,
            Faqs
        })

    }
    catch (error) {

        console.log("Error : ", error);
        res.status(404).json({
            status: "error"
        })

    }
}
const createFaq = async (req, res) => {
    try {

        const { type, title, description } = req.body;

        const newFaq = await Faq.create({
            type,
            title,
            description
        })

        res.status(200).json({
            status: "success",
            newFaq

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
    getAllFaqs,
    createFaq
}