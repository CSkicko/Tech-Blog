const router = require("express").Router();

router.use('/user', require('./userApi'));
router.use('/dashboard', require('./dashboardApi'));

module.exports = router;