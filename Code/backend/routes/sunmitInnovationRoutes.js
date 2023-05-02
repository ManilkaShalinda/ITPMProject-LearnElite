const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authUserMiddleware');
const {getInnovation,
       getInnovationById,
       createInnovation,
       deleteInnovation,
       updateInnovation
       } = require('../controllers/submitInnovationController');

router.route('/').get(getInnovation);
router.route('/create').post(createInnovation);
//router.route('/:id').get(getInnovationById).delete(deleteInnovation).put(updateInnovation);

module.exports = router;