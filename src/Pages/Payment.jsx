import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import SectionTile from "../Components/Shared/SectionTitle";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const Payment = () => {
  return (
    <div>
      {/* Form */}
      <div className="max-w-screen-md mx-auto">
        {/* Title Section */}
        <SectionTile heading={"Payment"} subHeading="Please Pay To Eat" />

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
