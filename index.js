require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log("❌ DB Connection Error:", err));

// User Schema & Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    price: { type: Number, default: 0 } // single value
});

const User = mongoose.model("User", userSchema);

// Signup
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "Email already registered!" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "✅ User Registered Successfully!" });
    } catch (error) {
        res.status(500).json({ error: "❌ Error Registering User", details: error.message });
    }
});

// Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "Invalid Credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid Credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.json({
            message: "✅ Login Successful!",
            token,
            userId: user._id,
            email: user.email,
            name: user.name,
            price: user.price
        });
    } catch (error) {
        res.status(500).json({ error: "❌ Error Logging In", details: error.message });
    }
});

// Update User Price (used in both /user/update and /user/firstmo)
const updateUserPrice = async (req, res) => {
    const { email, price } = req.body;
  
    try {
      const user = await User.findOneAndUpdate(
        { email },
        { $inc: { price } }, // 🔥 Add price instead of replacing it
        { new: true }
      );
  
      if (!user) return res.status(404).json({ error: "User not found" });
  
      res.json({ message: "✅ Price added successfully", price: user.price });
    } catch (error) {
      res.status(500).json({ error: "❌ Error updating price", details: error.message });
    }
  };
  

// POST: /user/firstmo
app.post("/user/firstmo", updateUserPrice);


app.get("/user/data/:email", async (req, res) => {
    const { email } = req.params;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json(user); // Return single user data
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

// Server Start
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
