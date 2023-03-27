const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./userRoutes');
app.use('/api', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
