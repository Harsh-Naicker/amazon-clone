const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors")
const stripe = require("stripe")('sk_test_51IYsjMSEJ3Ss22qLOF6Z518HFBCRIHVDDXMhmx6CkZXjLiyhsG6rs71BQkKtRLMtvyPYGSoOzOKGf3gPCvzg9Bmj00KvIfg0No')

// API

// App config
const app=express();

// Middlewares
app.use(cors({origin: true}))
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });

// API Routes
app.get('/',(request,response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received for the following amount: ', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    })

    response.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
    
})



// Listen command
exports.api = functions.https.onRequest(app)


// Example endpoint
// http://localhost:5001/clone-2fb00/us-central1/api