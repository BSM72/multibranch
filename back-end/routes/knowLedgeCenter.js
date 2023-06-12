const express = require("express");

const Router = express.Router();

const { getAllKnowlegdeCenters, createKnowLedgeCenter } = require("../controllers/knowledgeCenterController");


Router.route("/").get(getAllKnowlegdeCenters).post(createKnowLedgeCenter);

module.exports = Router;