require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const paymentRoutes = require("./routes/payments.route");


app.use(cors());

app.use(express.json());

app.use("/api/payments" , paymentRoutes);

app.listen(process.env.PORT , () => {
    console.log("app running on http://localhost:5001");
});
