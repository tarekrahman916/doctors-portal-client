import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "../../Shared/Loading/Loading";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { treatment, appointmentDate, price } = booking;

  if (navigation.state === "loading") {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-3xl">Payment for {treatment}</h3>
      <p className="text-xl mt-3">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate}
      </p>
      <div className="w-96 my-6 bg-slate-700 p-8">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
