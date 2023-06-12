import React, { useState } from 'react'
import StripeCheckout from "react-stripe-checkout";

import "./StripePayment.css"

function StripePayment() {

    const [product, setProduct] = useState({
        name: "Deep Fake detection",
        price: 3,
        productBy: "Un Mask"
    })

    const makePayment = (token) => {

        const body = {
            token,
            product
        }
        const headers = {
            "Content-Type": "application/json"
        }

        fetch(`http://localhost:4000/payments`, {

            method: "POST",
            headers,
            body: JSON.stringify(body)

        }).then((response) => {

            console.log("Response : ", response);
            const { status } = response;
            console.log("Status : ", status);

        }).catch((error) => {
            console.log("Error : ", error);
        })

    }
    return (
        <section className='stripe-payment-section'>
            <section className="payment-template">
                <h1>Secure Payments through stripe</h1>

                {/* Stripe component */}
                <StripeCheckout
                    className="stripebutton"
                    stripeKey={process.env.REACT_APP_KEY}
                    token={makePayment}
                    name="Un-Mask"
                    amount={product.price * 100}
                >
                    <button >
                        Proceed to the payments
                    </button>

                </StripeCheckout>

            </section>
        </section>
    )

}

export default StripePayment

