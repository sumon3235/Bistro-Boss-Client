import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
  const recaptchaRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [verified, setVerified] = useState(false);
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  const { createUser, updateUserProfile, googleLogin } = useAuth();

  // Redirect user
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from.pathname || "/";
  const axiosPublic = useAxiosPublic();

  // Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        
        const user = result.user;
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
        };

        // Send a User Data from Database
        axiosPublic.post("/users", userInfo)
        .then((res) => {
          console.log("User saved:", res.data);
          toast.success("Google Login Successful");
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleRecaptcha = (value) => {
    setVerified(!!value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!verified) {
      toast.error("Please verify Captcha");
      return;
    }
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    // Password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }

    createUser(email, password)
      .then(() => {
        // update Profile
        updateUserProfile(name, photo)
          .then(() => {
            // Send user data database
            const userInfo = {
              name: name,
              email: email,
            };

            axiosPublic.post("/users", userInfo)
            .then((res) => {
              if (res.data.insertedId) {
                toast.success("Registration Successful!");
                navigate(from, { replace: true });
              }
            });
            // rest a Recaptcha
            if (recaptchaRef.current) {
              recaptchaRef.current.reset();
            }
            setVerified(false);
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>

      <div className="min-h-[60vh] flex items-center justify-center bg-[#0f0f19] px-4 py-6">
        <div className="w-full max-w-md bg-[#1a1f2e] rounded-2xl p-10 shadow-xl">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest font-serif">
              Bistro Boss
            </h2>
            <p className="text-gray-400 text-sm mt-2 tracking-wider">
              Create your account
            </p>
          </div>

          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            {/* name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 uppercase tracking-widest">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                autoComplete="name"
                className="bg-[#0f0f19] text-white text-sm px-4 py-3 rounded-lg border border-white/10 outline-none focus:border-[#BB8506] transition-colors duration-300 placeholder:text-gray-600"
              />
            </div>
            {/* email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                autoComplete="email"
                className="bg-[#0f0f19] text-white text-sm px-4 py-3 rounded-lg border border-white/10 outline-none focus:border-[#BB8506] transition-colors duration-300 placeholder:text-gray-600"
              />
            </div>
            {/* photoUrl */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 uppercase tracking-widest">
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                placeholder="https://your-photo-url.com"
                autoComplete="off"
                className="bg-[#0f0f19] text-white text-sm px-4 py-3 rounded-lg border border-white/10 outline-none focus:border-[#BB8506] transition-colors duration-300 placeholder:text-gray-600"
              />
            </div>
            {/* password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 uppercase tracking-widest">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  required
                  autoComplete="new-password"
                  onFocus={() => setShowRecaptcha(true)}
                  className="w-full bg-[#0f0f19] text-white text-sm px-4 py-3 rounded-lg border border-white/10 outline-none focus:border-[#BB8506] transition-colors duration-300 placeholder:text-gray-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <FaEye size={20}></FaEye>
                  ) : (
                    <FaEyeSlash size={20}></FaEyeSlash>
                  )}
                </button>
              </div>
            </div>

            {/* ReCAPTCHA */}
            {showRecaptcha && (
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptcha}
                  theme="dark"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={!verified}
              className={`w-full text-sm font-semibold uppercase tracking-widest py-3 rounded-lg transition-colors duration-300 mt-2
                ${
                  verified
                    ? "bg-[#BB8506] text-white hover:bg-[#a07205]"
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
            >
              Create Account
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-gray-500 tracking-wider">
              or continue with
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-white/10 text-white text-sm py-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
          >
            <FcGoogle size={25}></FcGoogle>
            Continue with Google
          </button>

          <p className="text-center text-xs text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-[#BB8506] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
