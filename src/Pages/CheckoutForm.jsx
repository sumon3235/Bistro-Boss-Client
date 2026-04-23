import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // Create payment intent
  useEffect(() => {
    if (cart.length > 0) {
      setError("");
      axiosSecure
        .post("/create-payment-intent", {price: totalPrice})
        .then((res) => setClientSecret(res.data.clientSecret))
        .catch((err) => {
          setError(
            err?.response?.data?.message || "Failed to initialize payment."
          );
        });
    }
  }, [cart, axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setProcessing(true);
    setError("");

    // Confirm payment
    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (stripeError) {
      setError(stripeError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      const txId = paymentIntent.id;

      const payment = {
        email: user.email,
        transactionId: txId,
        price: totalPrice,
        date: new Date(),
        cartIds: cart.map((item) => item._id),
        menuItemIds: cart.map((item) => item.menuId),
        status: "pending",
      };

      try {
        const res = await axiosSecure.post("/payments", payment);

        if (res.data.result?.insertedId) {
          // Clear card
          card.clear();
          console.log('payment success')
          // Show toast first — before any re-render
          toast.custom(
            (t) => (
              <div
                style={{
                  opacity: t.visible ? 1 : 0,
                  transform: t.visible ? "translateY(0)" : "translateY(-8px)",
                  transition: "all 300ms ease-in-out",
                }}
                className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-5 shadow-xl w-72 sm:w-80 max-w-[90vw]"
              >
                {/* Success icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-base-content">
                      Payment Successful!
                    </p>
                    <p className="text-xs text-base-content/50">
                      Thank you for your order
                    </p>
                  </div>
                </div>

                {/* Transaction ID */}
                <div className="bg-base-200 rounded-lg px-3 py-2 mb-4">
                  <p className="text-[10px] text-base-content/50 uppercase tracking-widest mb-0.5">
                    Transaction ID
                  </p>
                  <p className="text-xs font-mono text-[#BB8506] truncate">
                    {txId}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      toast.dismiss(t.id);
                      navigate("/dashboard/payment-history");
                    }}
                    className="flex-1 py-2 text-xs font-bold uppercase tracking-wider bg-[#BB8506] hover:bg-[#a07205] text-white rounded-lg transition-all"
                  >
                    View History
                  </button>
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="flex-1 py-2 text-xs font-bold uppercase tracking-wider bg-base-300 hover:bg-base-200 text-base-content rounded-lg transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            ),
            {
              duration: 8000,
              position: "top-center",
            }
          );

          // Refetch after short delay — avoids re-render killing toast
          setTimeout(() => {
            refetch();
          }, 500);
        }
      } catch (err) {
        console.error("DB Save Error:", err);
        setError("Payment succeeded but record saving failed.");
      } finally {
        setProcessing(false);
      }
    } else {
      if (paymentIntent?.status === "requires_action") {
        setError("Additional authentication required.");
      } else {
        setError("An unexpected issue occurred. Please try again.");
      }
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 overflow-hidden">

      {/* Card Input */}
      <div className="bg-base-200 border border-base-300 rounded-xl px-4 py-4 focus-within:border-[#BB8506] transition-colors duration-300">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "15px",
                color: "#424770",
                fontFamily: "sans-serif",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#e53e3e" },
            },
          }}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-xs font-medium tracking-wide">
          ⚠ {error}
        </p>
      )}

      {/* Order Summary */}
      <div className="flex items-center justify-between px-1">
        <p className="text-xs text-base-content/50 uppercase tracking-widest">
          {cart.length} item{cart.length > 1 ? "s" : ""}
        </p>
        <p className="text-sm font-bold text-[#BB8506]">
          Total: ${totalPrice.toFixed(2)}
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || processing || !clientSecret}
        className={`w-full py-3 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 active:scale-95
          ${
            !stripe || processing || !clientSecret
              ? "bg-base-300 text-base-content/40 cursor-not-allowed"
              : "bg-[#BB8506] hover:bg-[#a07205] text-white"
          }`}
      >
        {processing ? "Processing..." : `Pay $${totalPrice.toFixed(2)}`}
      </button>

    </form>
  );
};

export default CheckoutForm;