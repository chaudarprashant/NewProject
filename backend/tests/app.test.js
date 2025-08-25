const request = require('supertest');
const app = require('../index'); // Your Express app

describe("GET /api/health", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Server is running");
  });
});
