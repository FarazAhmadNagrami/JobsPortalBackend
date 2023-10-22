const Job = require('../models/jobsModel');

const getAllJobs = async (req, res) => {
    const {company, title, sort} = req.query;
    const queryObject = {};
    if(company){
        queryObject.company = company;
    }

    if(title){   
        queryObject.title = { $regex: title, $options: 'i' };
        console.log(queryObject.title);
    }

    let apiData = Job.find(queryObject);
    if(sort){
        let sortBy = sort.split(',').join(' ');
        apiData = apiData.sort(sortBy)
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 4;
    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);


    console.log(queryObject);

    const myData = await apiData;
    res.status(200).json({ myData, nbHits: myData.length })
};

const getAllJobsTesting = async (req, res) => {
    res.status(200).json({ msg: 'Get all Jobs Testing' })
};

module.exports = {getAllJobs, getAllJobsTesting};