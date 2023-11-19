const Data = require('../models/dataModels');

const dataController = {
  createData: async (req, res) => {
    try {
      const newData = await Data.create(req.body);
      res.status(201).json({ message: 'Data created successfully', data: newData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating data' });
    }
  },
  // Add other controller methods as needed (update, delete, get, etc.)
};

module.exports = dataController;
