const router = require('express').Router();

const homeController = require('./homeController');
const dashboardController = require('./dashboardController');

router.use('/', homeController);
router.use('/dashboard', dashboardController);

module.exports = router;