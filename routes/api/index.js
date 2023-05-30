const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
// Est Var and require those folders via ROUTES

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;