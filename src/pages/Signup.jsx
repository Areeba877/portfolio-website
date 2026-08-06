import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [message, setMessage] = useState("");

const handleSignup = async (e) => {
  e.preventDefault();

  console.log("Signup button clicked");

  try {
    console.log("API URL:", `${API_URL}/signup`);

    const res = await axios.post(`${API_URL}/signup`, {
      name,
      email,
      password,
    });

    console.log(res.data);

    } catch (err) {
  console.log("Full Error:", err);

  if (err.response) {
    console.log("Status:", err.response.status);
    console.log("Data:", err.response.data);

    setMessage(JSON.stringify(err.response.data));
  } else {
    console.log("No Response:", err.message);
    setMessage(err.message);
  }
}

};

  return (
    <section className="min-h-screen bg-[#D5FDF9] flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10">

        <h2 className="text-4xl font-bold text-center text-[#0B7D77]">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign up to continue
        </p>

        <form onSubmit={handleSignup} className="space-y-6">

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B7D77]" />

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-2 border-[#0B7D77] rounded-full py-3 pl-12 pr-4 outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B7D77]" />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-[#0B7D77] rounded-full py-3 pl-12 pr-4 outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B7D77]" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-[#0B7D77] rounded-full py-3 pl-12 pr-12 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0B7D77]"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B7D77]" />

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              className="w-full border-2 border-[#0B7D77] rounded-full py-3 pl-12 pr-12 outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0B7D77]"
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          {message && (
            <p className="text-center text-[#0B7D77] font-semibold">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#0B7D77] text-white py-3 rounded-full font-semibold hover:bg-[#086861] transition"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center mt-8 text-gray-1000">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#0B7D77] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </section>
  );
}
export default Signup;