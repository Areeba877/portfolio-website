require("dotenv").config();

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const bcrypt = require("bcrypt");
const connectDB = require("./config/db");
const User = require("./models/User");
const Contact = require("./models/Contact");
const cors = require("cors");

const app = express();

console.log("MONGO_URI exists:", !!process.env.MONGO_URI);
connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// ==================== SIGNUP ====================
app.post("/api/signup", async (req, res) => {
try {
    console.log("Request Body:", req.body);

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    console.log("Email received:", email);
    console.log("Existing user:", existingUser);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup Successful",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});
// ==================== LOGIN ====================
app.post("/api/login", async (req, res) => {
try {
    const { email, password } = req.body;

    console.log("Login Request:", req.body);

    const user = await User.findOne({ email, password });

    console.log("User Found:", user);

    if (!user) {
      return res.status(401).json({
        message: "Invalid Email or Password",
      });
    }

    res.json({
      message: "Login Successful",
      user,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});
// ==================== CONTACT ====================
app.post("/api/contact", async (req, res) => {
try {
    console.log(req.body);

    const { name, email, phone, subject, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    });

    await newContact.save();

    res.status(201).json({
      message: "Message Sent Successfully!",
    });
  } catch (error) {
    console.error("Contact error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// Start Server
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;


