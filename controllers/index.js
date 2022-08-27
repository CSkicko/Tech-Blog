const router = require('express').Router();

const homeController = require('./homeController');
const dashboardController = require('./dashboardController');
const loginController = require('./loginController');
const signupController = require('./signupController');

router.use('/', homeController);
router.use('/dashboard', dashboardController);
router.use('/login', loginController);
router.use('/signup', signupController);

module.exports = router;