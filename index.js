const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Import staff routes
const staffRoutes = require('./routes/staff');
app.use('/api/staff', staffRoutes);

app.get('/', (req, res) => {
  res.send('School CRM backend is working!');
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
