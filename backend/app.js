import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// Health check route for testing
app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running" });
});

export default app;
