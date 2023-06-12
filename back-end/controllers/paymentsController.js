
const uuid = require("uuid").v4;
const postRoute = (req, res) => {

    const { product, token } = req.body;

    console.log("Product : ", product);
    console.log("Price : ", product.price);

    return res.status(200).json({
        status: "success"
    })


    // const idempotencyKey = uuid();

    // return stripe.customers.create({
    //     email: token.email,
    //     source: token.id

    // }).then((customer) => {
    //     stripe.charges.create({
    //         amount: product.price * 100,
    //         curreny: "usd",
    //         customer: customer.id,
    //         receipt_email: token.email,
    //         description: product.name
    //     }, { idempotencyKey })
    // }).then((result) => {
    //     res.status(200).json(result)
    // }).catch((error) => {
    //     console.log("error : ", error);
    // })
}


// req.body contains :- purchase items , { id:1 , name : shirt , price : 1999 }
// total_amount = 10998
// shipping-fee = 1099


// front to backend
// backend to frontend
// frontend to the stripe
const StripeController = async (req, res) => {

    const { purchase, total_amount, tax } = req.body;

    const calculateOrderAmount = () => {
        return total_amount + tax

    }

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd"
    })

    res.json({
        clientSecret: paymentIntent.clientSecret
    })
}

module.exports = {
    postRoute,
    StripeController
}