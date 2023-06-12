const express = require("express");

const { getAllAbouts, createAbout } = require("../controllers/aboutController");

const Router = express.Router();

Router.route("/").post(createAbout).get(getAllAbouts);

module.exports = Router;