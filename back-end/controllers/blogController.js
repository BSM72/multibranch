const Blog = require("../models/Blog");

const createBlog = async (req, res) => {

    try {
        const { date, title, imagePath, description, anchorPath } = req.body;

        // creating a new blog
        const newBlog = await Blog.create({
            date,
            title,
            imagePath,
            description,
            anchorPath
        })

        res.status(201).json({
            status: "success",
            newBlog
        })
    }

    catch (error) {
        res.status(404).json({
            status: "fail",
            error: error.msg
        })
    }
}
const getAllBlogs = async (req, res) => {

    console.log("Query : ", req.query);

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;


    try {
        const blogs = await Blog.find({}).skip(skip).limit(limit);

        res.status(200).json({
            status: "success",
            length: blogs.length,
            blogs

        })
    }
    catch (error) {
        res.status(404).json({
            status: "fail",
        })
    }

}

module.exports = {
    createBlog,
    getAllBlogs
}