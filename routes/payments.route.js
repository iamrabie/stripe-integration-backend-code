const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/payment.controller");


router.post("/create-payment-intent" , paymentController.handlePaymentIntent);


module.exports = router;