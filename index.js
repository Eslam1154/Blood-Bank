require ('dotenv').config()


// var crypto = require("crypto")
// console.log(crypto.randomBytes(32).toString('hex'))


const express = require("express")
const cors = require("cors")
const asyncwrapper = require('./middlewares/asyncwrapper')
const path = require('path')
const app = express();
app.use('/uploads', express.static(path.join(__dirname,'uploads')))

const mongoose = require("mongoose");
const httpsStatusText = require('./utils/httpsStatusText')

const url = process.env.MONGO_URL

mongoose.connect(url).then(() => {
    console.log('mongodb connect success')

})

app.use(cors())
app.use(express.json())

const usersRouter = require('./routes/users.route')
const hospitalRouter = require('./routes/hospital.route')
const patientRouter = require('./routes/patient,route')
const donorRouter = require('./routes/donor.route')
// app.use('/api/courses',coursesRouter)
app.use('/api/users',usersRouter)
app.use('/api/hospitals', hospitalRouter);
app.use('/api/patients', patientRouter);
app.use('/api/Donors', donorRouter);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(hospitalRoutes);

app.all('*',(req ,res , next) => {
    return res.status(404).json({status: httpsStatusText.ERROR, message: "this resource is not available"})
})

app.use((error, req, res, next) => {
    // res.json(error)
    res.status(error.statusCode || 500 ).json({status: error.satutsText || httpsStatusText.ERROR , message: error.message, code: error.statusCode || 500, data: null})
})

app.listen(process.env.PORT || 5000,()=>{
    console.log('listening on port: 5000' )
})
