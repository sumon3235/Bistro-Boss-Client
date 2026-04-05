import {useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";



const ChefMenuItem = ({ item }) => {
  const { name, image, recipe, _id, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart();

  const handleCart = () => {
    if (!user) {
      toast.error("Please login first!");
      navigate("/login", { state: { from: location } });
      return;
    }

    const cartItem = {
      menuId: _id,
      email: user?.email,
      name,
      image,
      price
    }

    axiosSecure.post('/carts', cartItem)
      .then(res => {
        if (res.data.insertedId) {

          // Custom Toast 
          toast.custom((t) => (
            <div
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl border
              bg-neutral text-neutral-content border-white/10
              /* Smooth Animation Logic */
              transition-all duration-700 ease-in-out transform
              ${t.visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95"}`}
            >
              {/* Food Image with Pulse Effect */}
              <div className="relative shrink-0">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-warning/30 shadow-md"
                />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-warning text-[10px] text-black font-bold items-center justify-center">✓</span>
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col min-w-[150px]">
                <p className="text-sm font-bold uppercase tracking-widest text-white">
                  {name}
                </p>
                <p className="text-warning/90 text-[13px] font-medium mt-0.5 italic">
                  Added to your Cart! 👨‍🍳
                </p>
              </div>

              {/* Simple Close Icon */}
              <button
                onClick={() => toast.dismiss(t.id)}
                className="ml-2 p-1 hover:bg-white/10 rounded-full transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-50 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ), {
            duration: 1000, // This sets the timer (3 seconds)
            position: 'top-right',
          });
          refetch()
        }
      })
      .catch(error => {
        toast.error(error.message)
      })
  }


  return (
    <div className="w-full max-w-[1350px] mx-auto bg-[#F3F3F3] border border-[#E8E8E8] rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer">
      <figure>
        <img src={image} alt={name} className="w-full h-44 object-cover rounded-lg" />
      </figure>

      <div className="flex flex-col items-center text-center px-8 py-7 gap-3">
        <h2 className="text-xl font-semibold text-[#151515] uppercase tracking-wider">
          {name}
        </h2>

        {/* Price */}
        <p className="text-[#BB8506] font-semibold text-base my-0.5">${price}</p>

        <p className="text-[#555] text-sm ">{recipe}</p>

        <button onClick={handleCart} className="btn bg-orange-500 hover:bg-orange-700 border-none">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ChefMenuItem;
