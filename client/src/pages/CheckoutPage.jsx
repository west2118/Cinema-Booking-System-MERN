import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../components/CheckoutForm";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const CheckoutPage = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const addOns = useSelector((state) => state.booking.addOns);
  const bookedItems = useSelector((state) => state.booking);
  const showtimes = useSelector((state) => state.showtime.showtimes);

  const showtime = showtimes.find(
    (showtime) => showtime._id === bookedItems?.selectedShowtimeId
  );

  const totalBookedSeats = bookedItems?.selectedSeats?.length;

  const total = Math.round(
    addOns.subTotal + showtime?.price * totalBookedSeats
  );

  useEffect(() => {
    fetch("http://localhost:8080/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total }),
    })
      .then((res) => res.json())
      .then(({ clientSecret }) => {
        setClientSecret(clientSecret);
      })
      .catch((err) => {
        console.error("Failed to create payment intent:", err);
      });
  }, []);

  if (!clientSecret) {
    return <Loading />;
  }

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckOutForm />
        </Elements>
      )}
    </>
  );
};

export default CheckoutPage;
