import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

const handleLogin = async (e) => {
  e.preventDefault();

  if (!username || !password) {
    setMessage("Please fill all required fields.");
    return;
  }

  setLoading(true);

  try {
   const res = await axios.post(
  `${API_URL}/login`,
  {
    email: username,
    password,
  }
);

    setMessage(res.data.message);

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    
      navigate("/");
    

  } catch (err) {
    setMessage(
      err.response?.data?.message ||
      "Login Failed"
    );
  }

  setLoading(false);
};

  return (
    <section className="min-h-screen bg-[#D5FDF9] flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10">

        <h2 className="text-4xl font-bold text-center text-[#0B7D77]">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to your account
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          {/* Username */}

          <div className="relative">

            <FaEnvelope
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B7D77]"
            />

  <input
  type="email"
  placeholder="Email Address"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  autoComplete="off"
  spellCheck="false"
  className="w-full border-2 border-[#0B7D77] rounded-full py-3 pl-12 pr-12 outline-none"
/>
          </div>

          {/* Password */}

          <div className="relative">

            <FaLock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B7D77]"
            />

<input
  type={showPassword ? "text" : "password"}
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  autoComplete="off"
  className="w-full border-2 border-[#0B7D77] rounded-full py-3 pl-12 pr-12 outline-none"
/>

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0B7D77]"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

          {/* Message */}

          {message && (
            <p className="text-center font-medium text-[#0B7D77]">
              {message}
            </p>
          )}

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0B7D77] text-white py-3 rounded-full font-semibold hover:bg-[#086861] transition duration-300"
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

        <p className="text-center mt-8 text-gray-600">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-[#0B7D77] font-semibold hover:underline"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </section>
  );
}

export default Login;