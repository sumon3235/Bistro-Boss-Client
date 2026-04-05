import toast from "react-hot-toast";
import SectionTile from "../Components/Shared/SectionTitle";
import useCart from "../hooks/useCart";
import { RiDeleteBin2Line } from "react-icons/ri";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice =
    cart?.reduce((total, item) => total + parseFloat(item.price), 0) || 0;
  const axiosSecure = useAxiosSecure();

  // delet funtion
  const handleDeletFood = (item) => {
    axiosSecure.delete(`/carts/${item._id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch()
        toast.success(`${item.name} removed!`);
      }
    });
  };

  // cumtom modern toast with delet funtionlity
  const handleDelete = (item) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium ">Are you sure delete this?</p>
          <div className="flex gap-2">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="flex-1 py-1.5 text-xs font-bold uppercase tracking-wider bg-green-500  hover:bg-green-600 rounded-lg transition-all"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleDeletFood(item);
                toast.dismiss(t.id);
              }}
              className="flex-1 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      ),
      {
        duration: 3000,
        position: "top-center",
      },
    );
  };

  return (
    <div className="text-3xl font-bold">
      <SectionTile
        subHeading={"--My Cart--"}
        heading={"WANNA ADD MORE?"}
        width="md:w-8/12 lg:w-4/12"
      />

      <section className="max-w-6xl mx-auto">
        {/* header section */}
        <div className="bg-[#1E2129] border border-base-300 rounded-2xl p-4 md:p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4 md:gap-8 text-center">
            {/* Total Orders Section */}
            <div className="flex-1">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-base-content/50 font-bold mb-1">
                Total Orders
              </p>
              <h4 className="text-xl md:text-2xl font-bold text-base-content">
                {cart.length < 10 ? `0${cart.length}` : cart.length}{" "}
                <span className="text-sm font-normal opacity-60">Items</span>
              </h4>
            </div>

            {/* Total Price Section */}
            <div className="flex-1">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-base-content/50 font-bold mb-1">
                Total Price
              </p>
              <h5 className="text-xl md:text-2xl font-bold text-[#BB8506]">
                ${totalPrice.toFixed(2)}
              </h5>
            </div>

            {/* Pay Button */}
            <div className="sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-2.5 bg-[#BB8506] hover:bg-[#9a6d05] text-white text-xs font-bold uppercase tracking-[2px] rounded-lg transition-all active:scale-95 shadow-lg shadow-orange-900/10">
                Pay Now
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-base-300 ">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#BB8506] px-4 py-3 text-black text-[10px] font-bold uppercase tracking-[2px]">
            <div className="col-span-1 text-center">#</div>
            <div className="col-span-2 text-center">Item Image</div>
            <div className="col-span-4 text-center">Item Name</div>
            <div className="col-span-3 text-center">Price</div>
            <div className="col-span-2 text-center">Action</div>
          </div>

          {/* Table Rows */}
          {cart.map((item, index) => (
            <div
              key={item._id}
              className="grid grid-cols-12 items-center px-4 py-3 border-b border-base-200 "
            >
              {/* Index */}
              <div className="col-span-1 text-center text-sm font-semibold text-base-content/50">
                {index + 1}
              </div>

              {/* Image */}
              <div className="col-span-2 flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              </div>

              {/* Name */}
              <div className="col-span-4 text-center text-sm font-medium text-base-content">
                {item.name}
              </div>

              {/* Price */}
              <div className="col-span-3 text-center text-sm font-bold text-[#BB8506]">
                ${parseFloat(item.price).toFixed(2)}
              </div>

              {/* Delete Button */}
              <div className="col-span-2 flex justify-center">
                <button
                  onClick={() => handleDelete(item)}
                  className="w-8 h-8 bg-red-500 hover:bg-red-600 text-[#1a1a1a] rounded-lg flex items-center justify-center transition-colors duration-200 active:scale-95"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {/* Empty state */}
          {cart.length === 0 && (
            <div className="text-center py-16 text-base-content/40">
              <p className="text-sm uppercase tracking-widest">
                Your cart is empty
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
