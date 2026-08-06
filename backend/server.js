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

console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// ==================== SIGNUP ====================
app.post("/signup", async (req, res) => {
  console.log("Signup API Hit");
  console.log(req.body);

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    console.log("Email received:", email);

    const existingUser = await User.findOne({ email });
    console.log("Existing user check:", existingUser);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup Successful",
    });
  } catch (error) {
    console.error("Signup error:", error);

    if (error.code === 11000) {
      return res.status(400).json({ message: "User already exists" });
    }

    res.status(500).json({
      message: error.message,
    });
  }
});

// ==================== LOGIN ====================
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Email or Password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Email or Password",
      });
    }

    res.json({
      message: "Login Successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ==================== CONTACT ====================
app.post("/contact", async (req, res) => {
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