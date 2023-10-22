const mongoose = require('mongoose');

const AllJobsSchema = new mongoose.Schema({
    id : {
        type : String,
        required : [true, 'Please provide id'],
        maxlength : 255
    },
    title : {
        type : String,
        required : [true, 'Please provide title'],
        maxlength : 255
    },
    company: {
        type : String,
        required : [true, 'Please provide company'],
        maxlength : 255
    },
    location: {
        type : String,
        required : [true, 'Please provide location'],
        maxlength : 255
    },
    description: {
        type : String,
        required : [true, 'Please provide description'],
        maxlength : 1024
    },
    salary: {
        type : Number,
        required : [false, 'Please provide salary'],
        default : 0
        },
    postedDate: {
        type : Date,
        required : [true, 'Please provide Date'],
        default : Date.now()
        }
});

module.exports = mongoose.model('AllJobs', AllJobsSchema);