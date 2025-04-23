const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


const handlePaymentIntent = async (req , res , next) => {
    
    const {amount} = req.body;
    // console.log("stripe key :" , process.env.STRIPE_SECRET_KEY);

    try{
        const paymentIntents = await stripe.paymentIntents.create({
            amount:amount * 100,
            currency:'usd',
            payment_method_types:['card']
        });
    
        res.send({
            client_secret:paymentIntents.client_secret
        });
    } catch(err){
        // console.log('ERR' , err.message);
        res.status(400).json({error:true , message:err.message});
    }
}



exports.handlePaymentIntent = handlePaymentIntent;