import { useState } from "react";
import { Link, NavLink } from "react-router";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import useCart from "../hooks/useCart";
import { IoCart } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/menu", label: "Our Menu" },
    { to: "/order", label: "Order Now" },
  ];

  const { user, setUser, logOut } = useAuth();
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Logout Succesfull")
      })
      .catch(error => {
        toast.error(error.message)
      })
  }

  return (
    <nav className="bg-[#0a0a14]/95 text-white backdrop-blur-md border-b border-yellow-600/20 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-3 md:px-4 lg:px-12 py-4 flex items-center justify-between gap-3 md:gap-0">
        {/* Brand */}
        <Link to="/" className="group">
          <p className="text-white font-black tracking-[3px] text-sm font-serif">
            BISTRO BOSS
          </p>
          <p className="text-yellow-500 tracking-[6px] text-[9px] mt-0.5">
            R E S T A U R A N T
          </p>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center md:gap-3 lg:gap-9 list-none">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-[11px] font-medium tracking-[2px] transition-colors duration-200 relative pb-0.5
                  after:absolute after:bottom-0 after:left-0 after:h-px after:bg-yellow-500 after:transition-all after:duration-200
                  ${isActive
                    ? "text-yellow-500 after:w-full"
                    : "text-white/60 hover:text-white after:w-0 hover:after:w-full"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <NavLink to="/dashboard/cart" className="relative text-white/70 hover:text-white transition-colors">
              <IoCart></IoCart>
            {cart.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-yellow-500 text-[#0a0a14] text-[9px] font-bold w-[15px] h-[15px] rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </NavLink>

          <div className="hidden md:flex">
            {!user ? (
              <div className="flex items-center gap-3">
              
                <NavLink to="/login" className="border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-all p-1.5 lg:px-4 lg:py-1.5 rounded-sm flex items-center">
                  {/* md — person icon * */}
                  <div className="w-5 h-5 lg:hidden tooltip tooltip-bottom tooltip-success" data-tip="Sign-In">
                  <FiLogIn></FiLogIn>
                  </div>
                  {/* lg — full text */}
                  <span className="hidden lg:block text-[11px] font-medium tracking-[2px]">Sign In</span>
                </NavLink>

                <NavLink to="/register" className="border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-all p-1.5 lg:px-4 lg:py-1.5 rounded-sm flex items-center">
                  {/* md — plus icon */}
                  <div className="w-5 h-5 lg:hidden tooltip tooltip-bottom tooltip-success" data-tip="Sign-Up">
                  <FiUserPlus/>
                  </div>
                  {/* lg — full text */}
                  <span className="hidden lg:block text-[11px] font-medium tracking-[2px]">Sign Up</span>
                </NavLink>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="cursor-pointer">
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName}
                    className="w-8 h-8 rounded-full object-cover border border-yellow-500/50"
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-[#1a1f2e] border border-white/10 rounded-lg z-10 mt-3 w-40 p-2 shadow-xl"
                >
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-[11px] tracking-[2px] text-white/60 hover:text-white uppercase"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block w-5 h-px bg-white/70 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white/70 transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white/70 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5 border-t border-white/5">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-[11px] font-medium tracking-[2px] py-3 border-b border-white/5 transition-colors
                ${isActive ? "text-yellow-500" : "text-white/60 hover:text-yellow-400"}`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* user */}
          <div className="md:hidden">
            {!user ? (
              <div onClick={() => setMenuOpen(false)} className="flex items-center gap-4 py-2">
                <NavLink
                  to="/login"
                  className="text-[11px] font-medium tracking-[2px] border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-4 py-1.5 rounded-sm transition-all duration-200"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  className="text-[11px] font-medium tracking-[2px] border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-4 py-1.5 rounded-sm transition-all duration-200"
                >
                  Sign Up
                </NavLink>
              </div>
            ) : (
              <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="cursor-pointer">
                  <img
                  referrerPolicy="no-referrer"
                    src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/6325/6325109.png"}
                    className="w-8 h-8 rounded-full object-cover border border-yellow-500/50"
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-[#1a1f2e] border border-white/10 rounded-lg z-10 mt-3 w-40 p-2 shadow-xl"
                >
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-[11px] tracking-[2px] text-white/60 hover:text-white uppercase"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
