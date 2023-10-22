const express = require('express');
const router = express.Router();
const {getAllJobs, getAllJobsTesting} = require('../controllers/jobs');
router.route('/').get(getAllJobs);
router.route('/testing').get(getAllJobsTesting);

module.exports = router;
