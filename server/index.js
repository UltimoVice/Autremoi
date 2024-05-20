// const express = require('express');
// const products = require('./products.json');
// const dotenv = require('dotenv');
// const stripe = require('stripe');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;
// const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json("Welcome to autremoi server");
// });

// app.get("/products", (req, res) => {
//   res.json(products);
// });

// app.post('/create-payment-intent', async (req, res) => {
//   const { amount, currency } = req.body;

//   try {
//     const paymentIntent = await stripeInstance.paymentIntents.create({
//       amount: amount,
//       currency: currency,
//       payment_method_types: ['card'],
//     });

//     res.status(200).send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });

const express = require('express');
const products = require('./products.json');
const dotenv = require('dotenv');
const stripe = require('stripe');
const cors = require('cors');

console.log('Loading environment variables...');
dotenv.config();

console.log('Creating Express app...');
const app = express();

const port = process.env.PORT || 3000;
console.log(`Using port: ${port}`);

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('Error: STRIPE_SECRET_KEY is not defined in .env file');
  process.exit(1);
}

console.log('Initializing Stripe...');
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome to autremoi server");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: amount,
      currency: currency,
      payment_method_types: ['card'],
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
