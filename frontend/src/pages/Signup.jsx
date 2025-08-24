import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "", role: "user" });
  const navigate = useNavigate();

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, data);
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light"
      style={{ 
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)" 
      }}
    >
      <div
        className="card p-4 shadow-lg border-0"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "20px",
          background: "white",
        }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#2575fc" }}>
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              name="name"
              className="form-control rounded-pill px-3 py-2"
              placeholder="Enter name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              name="email"
              type="email"
              className="form-control rounded-pill px-3 py-2"
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              name="password"
              type="password"
              className="form-control rounded-pill px-3 py-2"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100 rounded-pill py-2 fw-semibold"
            style={{
              background: "linear-gradient(90deg, #6a11cb, #2575fc)",
              color: "white",
              border: "none",
            }}
          >
            Signup
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="fw-semibold" style={{ color: "#6a11cb" }}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
