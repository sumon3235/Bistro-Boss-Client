import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 3;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/menu", label: "Our Menu" },
    { to: "/shop", label: "Our Shop" },
  ];

  return (
    <nav className="bg-[#0a0a14]/95 text-white backdrop-blur-md border-b border-yellow-600/20 sticky top-0 z-50">
      <div className="container mx-auto px-12 py-4 flex items-center justify-between gap-3 md:gap-0">
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
        <ul className="hidden md:flex items-center gap-9 list-none">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-[11px] font-medium tracking-[2px] transition-colors duration-200 relative pb-0.5
                  after:absolute after:bottom-0 after:left-0 after:h-px after:bg-yellow-500 after:transition-all after:duration-200
                  ${
                    isActive
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
          <button className="relative text-white/70 hover:text-white transition-colors">
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-yellow-500 text-[#0a0a14] text-[9px] font-bold w-[15px] h-[15px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <div className="w-px h-4 bg-white/15 hidden md:block" />

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center text-[11px] font-bold text-[#0a0a14] cursor-pointer">
            BB
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
