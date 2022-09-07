const router = require("express").Router();

router.use('/user', require('./userApi'));

module.exports = router;