import { NavLink, Outlet } from "react-router";
import {
  FaHome,
  FaShoppingCart,
  FaCalendarAlt,
  FaCreditCard,
  FaStar,
  FaBookOpen,
  FaUtensils,
  FaShoppingBag,
  FaEnvelope,
  FaList,
  FaBook,
  FaUser,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  const isAdmin = true;

  // user link
  const userLinks = [
    { to: "/dashboard", icon: <MdDashboard />, label: "User Home" },
    {
      to: "/dashboard/reservation",
      icon: <FaCalendarAlt />,
      label: "Reservation",
    },
    {
      to: "/dashboard/payment-history",
      icon: <FaCreditCard />,
      label: "Payment History",
    },
    { to: "/dashboard/cart", icon: <FaShoppingCart />, label: "My Cart" },
    { to: "/dashboard/review", icon: <FaStar />, label: "Add Review" },
    { to: "/dashboard/booking", icon: <FaBookOpen />, label: "My Booking" },
  ];

  // adminLink
  const adminLinks = [
    { to: "/dashboard", icon: <MdDashboard />, label: "Admin Home" },
    {
      to: "/dashboard/addItem",
      icon: <ImSpoonKnife />,
      label: "Add Item",
    },
    {
      to: "/dashboard/Manageitems",
      icon: <HiOutlineBars3BottomRight />,
      label: "Add Item",
    },
    {
      to: "/dashboard/booking",
      icon: <FaBook />,
      label: "ManageBooking",
    },
    { to: "/dashboard/users", icon: <FaUser />, label: "All Users" },
  ];

  // comon all link
  const generalLinks = [
    { to: "/", icon: <FaHome />, label: "Home" },
    { to: "/menu", icon: <FaUtensils />, label: "Menu" },
    { to: "/order", icon: <FaShoppingBag />, label: "Order" },
    { to: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  const NavItem = ({ to, icon, label }) => (
    <li onClick={closeSidebar}>
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200
          ${
            isActive
              ? "bg-white/20 text-white font-semibold"
              : "text-white/70 hover:bg-white/10 hover:text-white"
          }`
        }
      >
        <span className="text-base">{icon}</span>
        {label}
      </NavLink>
    </li>
  );

  return (
    <div className="flex min-h-screen">
      <Helmet>
        <title>Bistro Boss | DashBorad</title>
      </Helmet>

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-40 md:w-44 lg:w-64 min-h-screen bg-[#BB8506] flex flex-col shrink-0 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
               `}
      >
        {isAdmin ? (
          <>
            {/* Brand */}
            <div className="px-6 py-8 border-b border-white/20">
              <p className="text-white font-black tracking-[3px] text-sm font-serif">
                BISTRO BOSS
              </p>
              <p className="text-white/60 tracking-[4px] text-[9px] mt-0.5">
                R E S T A U R A N T
              </p>
            </div>

            {/* User links */}
            <nav className="flex-1 px-3 py-6">
              <ul className="flex flex-col gap-1">
                {adminLinks.map((link) => (
                  <NavItem key={link.to} {...link} />
                ))}
              </ul>

              {/* Divider */}
              <div className="my-6 border-t border-white/20" />

              {/* General links */}
              <ul className="flex flex-col gap-1">
                {generalLinks.map((link) => (
                  <NavItem key={link.to} {...link} />
                ))}
              </ul>
            </nav>
          </>
        ) : (
          <>
            {/* Brand */}
            <div className="px-6 py-8 border-b border-white/20">
              <p className="text-white font-black tracking-[3px] text-sm font-serif">
                BISTRO BOSS
              </p>
              <p className="text-white/60 tracking-[4px] text-[9px] mt-0.5">
                R E S T A U R A N T
              </p>
            </div>

            {/* User links */}
            <nav className="flex-1 px-3 py-6">
              <ul className="flex flex-col gap-1">
                {userLinks.map((link) => (
                  <NavItem key={link.to} {...link} />
                ))}
              </ul>

              {/* Divider */}
              <div className="my-6 border-t border-white/20" />

              {/* General links */}
              <ul className="flex flex-col gap-1">
                {generalLinks.map((link) => (
                  <NavItem key={link.to} {...link} />
                ))}
              </ul>
            </nav>
          </>
        )}
      </aside>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-30 md:hidden"
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-2.5 lg:p-8 overflow-auto md:overflow-hidden">
        {/* sm device humberg btn*/}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden p-2 text-2xl bg-[#BB8506] text-white rounded-md mb-4"
        >
          <FaList />
        </button>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
