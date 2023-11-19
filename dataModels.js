const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  // Define your schema here
  level: String,
  message: String,
  resourseId: String,
  timestamp: String,
  traceId: String,
  spanId: String,
  commit: String,
  metadata: String 
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
