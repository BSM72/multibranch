const jwt = require('jsonwebtoken');
const CustomError = require("../errors");


const { isTokenValid } = require("../utils/index");

const authenticateUser = async (req, res, next) => {


    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer")) {
        throw new CustomError.UnauthenticatedError("Authentication failed")
    }

    // Getting the token from the authorization string
    const token = authorization.split(' ')[1]

    try {
        const payload = await isTokenValid({ token });

        console.log("payload : ", payload);

        req.user = {
            name: payload.name,
            userId: payload.userId,
            role: payload.role
        }
        next();
    }
    catch (error) {
        throw new CustomError.UnauthenticatedError("Authentication Invalid")
    };
}

const authorizePermission = (...roles) => {

    return ((req, res, next) => {

        if (!roles.includes(req.user.role)) {
            throw new CustomError.UnauthorizedError("Unauthorized to access this route");
        }
        next();
    });
};

module.exports = {
    authenticateUser,
    authorizePermission
}