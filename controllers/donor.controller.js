const Donor = require('../models/donor.model')
const Hospital = require('../models/hospital.model')

exports.addDonor = async (req, res) => {
  try {
    const { fullName, age,bloodAmount, gender,bloodType, Date,city, hospitalName ,hospitalId } = req.body;

    // البحث عن المستشفى باستخدام معرّفه
    const hospital = await Hospital.findById(hospitalId);

    // if (!hospital) {
    //   // إذا لم يتم العثور على المستشفى، قم بإرسال رسالة خطأ
    //   return res.status(404).json({ error: 'Hospital not found.' });
    // }

    // إذا وجد المستشفى، قم بتسجيل المريض
    const donor = new Donor({  fullName, age,bloodAmount, gender,bloodType, Date,city, hospitalName ,hospitalId  });
    await donor.save();

    res.status(201).json(donor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
