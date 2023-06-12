const express = require("express");

const { createSubscriber, getAllSubscribers } = require("../controllers/subscriberController");

const Router = express.Router();

Router.route("/").post(createSubscriber).get(getAllSubscribers);

module.exports = Router;