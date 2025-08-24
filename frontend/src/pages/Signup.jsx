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
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundColor: "#f0f4ff", // 👈 soft background color
      }}
    >
      <div
        className="card p-4 border-0"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "18px",
          background: "#ffffff",
          boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)", // 👈 card shadow
        }}
      >
        <h2
          className="text-center mb-4 fw-bold"
          style={{
            color: "#1e3a8a", // deep blue heading
            textShadow: "1px 1px 3px rgba(0,0,0,0.1)", // 👈 subtle text shadow
          }}
        >
          Signup
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              name="name"
              className="form-control rounded-3 px-3 py-2 shadow-sm"
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
              className="form-control rounded-3 px-3 py-2 shadow-sm"
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
              className="form-control rounded-3 px-3 py-2 shadow-sm"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100 rounded-3 py-2 fw-semibold"
            style={{
              background: "#1e3a8a",
              color: "white",
              boxShadow: "0px 4px 12px rgba(30,58,138,0.4)", // 👈 button shadow
            }}
          >
            Signup
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="fw-semibold" style={{ color: "#1e3a8a" }}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
