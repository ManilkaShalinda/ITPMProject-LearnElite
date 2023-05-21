const express = require('express');
// const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();
const {  getCategory,
     CreateCategory,
     getCategoryById,
     UpdateCategory,
     DeleteCategory  
     } = require('../controllers/categoryControllers');

router.route('/').get( getCategory);
router.route('/create').post( CreateCategory);
router.route('/:id').get(getCategoryById).put(UpdateCategory).delete(DeleteCategory);

module.exports = router;
