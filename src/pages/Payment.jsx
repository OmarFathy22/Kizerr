import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import NewRequest from "../utils/NewRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import Loading from "../components/Loading";

const stripePromise = loadStripe(
  "pk_test_51NZngbICyTA9BiM25mqUC9ol4b6h2MD382t7w0RkvDKugKHlJrQNGULQeBU1y8h8QNZMCFeQ2VMULEugPU4isFYZ00lv223Mws"
);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [Error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const User = JSON.parse(localStorage.getItem("currentUser")) || {};

  useEffect(() => {
    // Create PaymentIntent as soon as the page 
    const RequstPayment = async () => {
      try {
        const res = await NewRequest.post(`/create-payment-intent/${id}`);
        setClientSecret(res.data.clientSecret);
      } catch (error) {
        setError(error.message);
      }
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    RequstPayment();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  if(isLoading)return <Loading/>
  if(Error)return <h1 className=" h-[70vh] flex justify-center items-center font-bold p text-red-500">{"Something Went Wrong Or You're unauthorized!"}</h1>
  return (
    <div className="flex justify-center items-center min-h-[90vh]">
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
