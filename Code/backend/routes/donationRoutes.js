const express = require('express');
const router = express.Router();
const { getDonation, CreateDonation, getDonationById } = require('../controllers/donationController');
const { model } = require('mongoose');


router.route('/').get(getDonation);
router.route('/create').post(CreateDonation);
router.route('/:id').get(getDonationById);

module.exports = router;