const express = require('express');
const router = express.Router();
const {
    addProduct,
    getAllProducts,
    getProduct,
    getBusinessProducts,
    updateProduct,
    deleteProduct,
    getAdminProducts,
} = require('../controllers/productController');
const { protect, authorize } = require('../middleware/authMiddleware');
const { upload } = require('../config/cloudinary');

router.get('/', getAllProducts);
router.get('/admin/all', protect, authorize('admin'), getAdminProducts);
router.get('/:id', getProduct);
router.post('/', protect, upload.single('image'), addProduct);
router.get('/business/:businessId', getBusinessProducts);
router.put('/:id', protect, upload.single('image'), updateProduct);
router.delete('/:id', protect, deleteProduct);

module.exports = router;
