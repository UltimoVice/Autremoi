import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your-publishable-key-from-stripe");

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Fetch the client secret from the server when the component mounts
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 1000, currency: "usd" }), // Example amount
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const handlePayment = async () => {
    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: "Customer Name",
          },
        },
      }
    );

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent.status === "succeeded") {
      setMessage("Payment successful!");
    }
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4">
        <span>total:</span>
        {/* Mostra il totale del pagamento */}
      </div>
      <form className="w-[400px]" id="payment-form">
        <div id="card-element">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
        <button
          className="bg-black text-white h-[48px] px-4 mt-2"
          type="button" // Cambia il tipo da "submit" a "button"
          onClick={handlePayment} // Gestisci il pagamento al click del button
          disabled={!stripe || !clientSecret}
        >
          Paga
        </button>
        <div id="payment-message">{message}</div>
      </form>
    </div>
  );
};

export default PaymentForm;
