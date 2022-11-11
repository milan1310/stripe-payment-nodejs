const router = require('express').Router();
const stripe = require("stripe")('sk_test_51LE5F3SAQhI7VuZY09Oc0DWJYqgiktNMAii2s0W1sfNk3uVMVDBKHkF6XKPJF5uLFEb5WwmzDauRbhvoiT3ALbY700XNlaXE8O');

const calculateOrderAmount = (items) => {
    return 900;
  };

router.post("/", async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "USD",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });

  module.exports = router;