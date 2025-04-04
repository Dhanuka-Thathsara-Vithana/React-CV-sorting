require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const worksRoutes = require("./routes/workRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const educationRoutes = require("./routes/educationRoutes");
const authRoutes = require("./routes/authRoutes");
const auth = require("./middleware/auth");

const app = express();

// Connect to MongoDB
// Connect to MongoDB
mongoose.connect('mongodb+srv://dhanukavithana:WrZ5onOdTe4VUjVy@dhanuka-custer-01.428roxo.mongodb.net/?retryWrites=true&w=majority&appName=dhanuka-custer-01')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS for Secure Cookies
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Root API Test
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend server is running",
    status: "online",
    timestamp: new Date().toISOString(),
  });
});

// Authentication & User Routes
app.use("/api/users", auth, userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/review', auth, reviewRoutes);
app.use("/api/work", auth, worksRoutes);
app.use("/api/education",auth, educationRoutes);

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Listening on port ${PORT}...`));


