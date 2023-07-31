import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import NewRequest from "../utils/NewRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NZngbICyTA9BiM25mqUC9ol4b6h2MD382t7w0RkvDKugKHlJrQNGULQeBU1y8h8QNZMCFeQ2VMULEugPU4isFYZ00lv223Mws"
);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();
  const User = JSON.parse(localStorage.getItem("currentUser")) || {};

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const RequstPayment = async () => {
      try {
        const res = await NewRequest.post(`/create-payment-intent/${id}`, {
          buyerUsername: User?.username,
          buyerCountry: User?.country,
        });
        setClientSecret(res.data.clientSecret);
      } catch (error) {
        console.log(error.message);
      }
    };
    RequstPayment();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div>
      {clientSecret && (
        <Elements
          // @ts-ignore
          options={options}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
