//const Hospital = require('../models/hospital');
const Hospital = require('../models/hospital.model')

exports.addHospital = async (req, res) => {
  try {
    const { name, location } = req.body;
    const hospital = new Hospital({ name, location });
    await hospital.save();
    res.status(201).json(hospital);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
