const router = require('express').Router();
const withAuth = require("../utils/auth");

router.get('/', withAuth, async (req, res) => {
    res.render('dashboard', { logged_in: req.session.logged_in });
});

module.exports = router;