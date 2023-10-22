const mongoose = require('mongoose');

const connectDB = async () => {
    console.log("Connecting to database");
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,        
        });
};

module.exports = connectDB;