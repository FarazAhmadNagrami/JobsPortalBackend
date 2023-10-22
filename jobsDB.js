require('dotenv').config();
const connectDB = require('./db/connect');
const Job = require('./models/jobsModel');

const JobJson = require('./Jobs.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Job.deleteMany();
        await Job.create(JobJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}

start();