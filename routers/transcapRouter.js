const express = require('express');
const transcapController = require('../controllers/transcapController');

const router = express.Router();

// Transcap home page
router.get('/', transcapController.transcap_index)

// Get trans_staffs info
router.get('/accounts', transcapController.transcap_staffs_get)

// Create trans_staff account
router.post('/accounts', transcapController.transcap_staff_create)

// Update trans_staff info
router.put('/accounts/:id', transcapController.transcap_staff_update)

// Delete trans_staff acc
router.delete('/accounts/:id', transcapController.transcap_staff_delete)

// Statistic
router.get('/statistics/', transcapController.transcap_shipment_statistic)

module.exports = router;
