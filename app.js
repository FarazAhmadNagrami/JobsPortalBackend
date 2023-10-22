const express = require('express');
const dotEnv = require('dotenv');
const {MongoClient} = require('mongodb');
const PORT = process.env.PORT || 5000
const jobs_routes = require('./routes/jobs')
const app = express();
const connectDB = require('./db/connect');

dotEnv.config();
console.log(process.env);

app.get('/', (req, res) => {
    res.send('Hi I am Live');
});

//middleware to set router
app.use("/api/getJobs", jobs_routes);

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server is listening on port ${PORT}...`)
        });
    } catch (error) {
        console.log(error);
    }
}

start();