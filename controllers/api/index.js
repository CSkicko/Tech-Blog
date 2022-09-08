const router = require("express").Router();

router.use('/user', require('./userApi'));
router.use('/dashboard', require('./dashboardApi'));
router.use('/post', require('./postApi'));

module.exports = router;