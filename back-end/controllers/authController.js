const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { createToken } = require("../utils");
const CustomError = require("../errors");
const { StatusCodes } = require("http-status-codes");


// login User
const login = async (req, res) => {

    const { email, password } = req.body;

    console.log(email, " : ", password);

    if (!email || !password) {
        throw new CustomError.BadRequestError("Please provide email and password ");
    }
    // Getting the user with the provided email
    const user = await User.findOne({ email });
    if (!user) {
        throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }


    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }

    // 4).payload for the token
    const tokenUser = {
        name: user.name,
        userId: user._id,
        role: user.role
    }

    const token = await createToken({ payload: tokenUser });

    res.status(StatusCodes.OK).json({
        user: tokenUser,
        token
    })
}

// signUp User
const register = async (req, res) => {
    const { name, email, password } = req.body;

    // 1).checking if email already taken
    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
        throw new CustomError.BadRequestError("Email already exists");
    }

    // 2).First registered user is admin
    const isFirstAccount = await User.countDocuments({}) === 0;
    const role = isFirstAccount ? "admin" : "user"

    // 3).Creating a new user
    const user = await User.create({
        name, email, password, role
    });

    // 4).payload for the token
    const tokenUser = {
        name: user.name,
        userId: user._id,
        role: user.role
    }

    const token = await createToken({ payload: tokenUser });

    res.status(StatusCodes.CREATED).json({
        user: tokenUser,
        token
    })
}

module.exports = {
    login,
    register
}


// SignUp User