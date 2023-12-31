const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllUsers = async (req, res) => {
    console.log("Get All users");

    const users = await User.find({ role: "user" }).select("-password");

    res.status(StatusCodes.OK).json({
        length: users.length,
        users
    });
}
const getSingleUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findOne({ _id: id }).select("-password");

    if (!user) {
        throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`)
    }
    res.status(200).json({
        user
    });
};

const showCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json({
        user: req.user
    })
}

const updateUser = async (req, res) => {
    res.send("Update User");
}

const updateUserPassword = async (req, res) => {
    res.send("Update User Password");
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUserPassword,
    updateUser
}