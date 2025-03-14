const express = require('express');
const app = express();
const adminRoutes = require('./adminRoutes'); // Import the admin routes

app.use('/api', adminRoutes); // Use the adminRoutes under the '/api' prefix

// Your other middleware and setup code

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
