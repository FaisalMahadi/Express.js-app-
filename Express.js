
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (logs every request)
app.use((req, res, next) => {
  console.log("Request Received");
  next();
});

// Controller for /user route
const userController = (req, res) => {
  res.json({
    name: "John Doe",
    role: "Student"
  });
};

// Route 1: Home
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Express Server"
  });
});

// Route 2: User
app.get("/user", userController);

// Route 4: Login (Cookie)
app.get("/login", (req, res) => {
  res.cookie("user", "john");
  res.send("Cookie has been set");
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

