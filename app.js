const express = require('express');
const dataRoutes = require('./routes/dataRoutes');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3000;
const username = encodeURIComponent("gauravbhardwaj");
const password = encodeURIComponent("gaurav@2001");
// Connect to MongoDB (replace uri with your connection string)
mongoose.connect("mongodb+srv://" + username + ":" + password + "@dyte.9sjbzla.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Routes
app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
