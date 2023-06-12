const express = require("express");

const Router = express.Router();

const { getAllFaqs, createFaq } = require("../controllers/faqController");


Router.route("/").get(getAllFaqs).post(createFaq);

module.exports = Router;