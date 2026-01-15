const express = require('express');
const router = express.Router();
const { createBusiness, getBusiness, updateStatus, getBusinesses, toggleOrderStatus } = require('../controllers/businessController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', createBusiness);
router.get('/', getBusinesses);
router.get('/:id', getBusiness);
router.put('/status', protect, updateStatus);
router.put('/toggle-order-status', protect, toggleOrderStatus);

module.exports = router;

