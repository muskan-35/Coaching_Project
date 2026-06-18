import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../Data/Users";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const user = users.find(
      (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password
    );

    if (!user) {
      setErrorMessage("Invalid email or password. Please try again.");
      return;
    }

    setSuccessMessage("Login successful! Redirecting...");
    localStorage.setItem(
    "loggedInUser",
    JSON.stringify({
        email: user.email,
    })
);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-violet-100 flex items-center justify-center">
          <i className="fa-solid fa-user text-2xl text-violet-600"></i>
        </div>

        <h1 className="text-3xl font-bold text-center text-slate-800">Welcome Back</h1>
        <p className="text-center text-slate-500 mt-2 mb-8">
          Login to continue your learning journey.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-slate-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-violet-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-violet-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {errorMessage && (
            <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-700">
              {successMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-3 rounded-xl font-semibold hover:bg-violet-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* <p className="text-center mt-6 text-slate-600">
          Don&apos;t have an account? {""}
          <Link to="/signup" className="text-violet-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p> */}
      </div>
    </div>
  );
}

export default Login;
