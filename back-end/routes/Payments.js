const express = require("express");

const Router = express.Router();

const { postRoute, StripeController } = require("../controllers/paymentsController");

Router.route("/").post(postRoute);
Router.route("/stripe").post(StripeController);

module.exports = Router;