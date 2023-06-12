const dotenv = require("dotenv");
dotenv.config("")

require('express-async-errors');

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const morgan = require("morgan");


// Secret Api Key
const stripe = require("stripe")("sk_test_51MtYkrLN3tKIbTjypsYqqbABvQsLJi65Hri73kYjQ9qCOPWT1w4q4m4ZjBdLzVA5Afzex8YYKYlyJjRi0tm4DzPA00yKDL9OpV");


const KnowLedgeCenterRoute = require("./routes/knowLedgeCenter");
const FaqRoute = require("./routes/Faq");
const BlogRoute = require("./routes/Blog");
const HomeRoute = require("./routes/Home");
const AboutRoute = require("./routes/About");
const AuthRoute = require("./routes/Auth");
const SubscriberRoute = require("./routes/Subscriber");
const PaymentRoute = require("./routes/Payments");
const UserRoute = require("./routes/User");


// Middleware ----------------------------------------------
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");




const app = express();


// middle-ware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use((req, res, next) => {

    console.log(req.path, req.method);
    next();
})

// Resource
app.use("/", HomeRoute);

// Resource
app.use("/knowledge-center", KnowLedgeCenterRoute);

// Resource
app.use("/faq", FaqRoute);

// Resource with the pagination by default first 10
app.use("/blog", BlogRoute);

// Resource
app.use("/about", AboutRoute);

// Auth routes 
app.use("/auth", AuthRoute);

app.use("/user", UserRoute);


// Subscriber Route
app.use("/subscribe", SubscriberRoute);

// Payment Route
app.use("/payments", PaymentRoute);



// suppose : /apples and this route is not present
app.use(notFoundMiddleware);
// if there is some error in some existing route
// if we throw an error in some existing route
// this is invoked from some successful request
app.use(errorHandlerMiddleware);




const Start = () => {
    mongoose.connect(process.env.DATABASE_URI, {

        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(() => {
        console.log("Connected to the Data-Base");
        app.listen(4000, () => {
            console.log("Server listening on the port 3000")
        })

    }).catch(() => {
        console.log("Error connecting the database");
        console.log()
    })
}

Start();