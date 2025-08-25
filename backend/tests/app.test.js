import request from "supertest";
import app from "../app.js";  // Import Express app, not server.js

describe("GET /api/health", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Server is running");
  });
});
