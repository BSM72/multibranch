const express = require("express");

const { createSection, getAllSections } = require("../controllers/homeController");

const Router = express.Router();

Router.route("/").post(createSection).get(getAllSections);

module.exports = Router;