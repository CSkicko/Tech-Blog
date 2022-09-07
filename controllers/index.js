const router = require('express').Router();

const homeController = require('./homeController');
const dashboardController = require('./dashboardController');
const loginController = require('./loginController');
const signupController = require('./signupController');
const postController = require('./postController');
const api = require('./api');

router.use('/', homeController);
router.use('/dashboard', dashboardController);
router.use('/login', loginController);
router.use('/signup', signupController);
router.use('/post', postController);
router.use('/api', api);

module.exports = router;