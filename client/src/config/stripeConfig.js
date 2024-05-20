// stripeConfig.js
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key-from-stripe');

export default stripePromise;
