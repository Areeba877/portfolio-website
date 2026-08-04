const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Temporary Users Array
let users = [];

// Signup API
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists"
    });
  }

  users.push({
    name,
    email,
    password,
  });

  res.status(201).json({
    message: "Signup Successful"
  });
});

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid Email or Password",
    });
  }

  res.json({
    message: "Login Successful",
    user,
  });
});

// Contact API
app.post("/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  console.log({
    name,
    email,
    phone,
    subject,
    message,
  });

  res.status(200).json({
    message: "Message Sent Successfully!",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});