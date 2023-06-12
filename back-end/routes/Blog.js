const express = require("express");

const { createBlog, getAllBlogs } = require("../controllers/blogController");

const { authenticateUser, authorizePermission } = require("../middleware/authentication");

const Router = express.Router();


Router.route("/")
    .post(authenticateUser, authorizePermission("admin", "owner"), createBlog)
    .get(authenticateUser, authorizePermission("admin", "owner"), getAllBlogs);

module.exports = Router;