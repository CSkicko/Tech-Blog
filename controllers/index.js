const router = require('express').Router();

const homeController = require('./homeController');
const dashboardController = require('./dashboardController');
const loginController = require('./loginController');
const signupController = require('./signupController');
const api = require('./api');

router.use('/', homeController);
router.use('/dashboard', dashboardController);
router.use('/login', loginController);
router.use('/signup', signupController);
router.use('/api', api);

module.exports = router;