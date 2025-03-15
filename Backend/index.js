const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const worksRoutes = require('./routes/workRoutes');
const educationRoutes = require('./routes/educationRoutes');
// const jobDescriptionRoutes = require('./routes/jobDescriptionRoutes');
// const jobCardRoutes = require('./routes/jobCardRoutes');
const authRoutes = require('./routes/authRoutes');
// const applicationRoutes = require('./routes/applicationRoutes');
// const adminRoutes = require('./routes/admins');
// const adminLoginRoutes = require('./routes/adminlogin');
// const reviewRoutes = require('./routes/reviewRoutes'); // Added review routes
const auth = require("./middleware/auth"); 

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://dhanukavithana:WrZ5onOdTe4VUjVy@dhanuka-custer-01.428roxo.mongodb.net/?retryWrites=true&w=majority&appName=dhanuka-custer-01')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(express.json());

// Middleware for CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://13.60.69.253'); 
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});


// Root endpoint to test if the server is running
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: "Backend server is running", 
    status: "online",
    timestamp: new Date().toISOString()
  });
});

app.post('/', (req, res) => {
  res.status(200).json({ 
    message: "Backend server is running", 
    status: "online",
    timestamp: new Date().toISOString()
  });
});

// Route Middleware
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
// app.use('/api/adminlogin', adminLoginRoutes);
app.use('/api/work', auth, worksRoutes);
app.use('/api/education', auth, educationRoutes);
// app.use('/api/jobDescription', jobDescriptionRoutes);
// app.use('/api/jobCard', jobCardRoutes);
// app.use('/api/application', applicationRoutes);
// app.use('/api/admins', adminRoutes);
// app.use('/api/reviews', reviewRoutes); // Added review routes

// Set Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Listening on port ${PORT}...`));
