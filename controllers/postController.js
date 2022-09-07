const router = require('express').Router();
const withAuth = require("../utils/auth");

router.get('/:id', withAuth, async (req, res) => {
    res.render('post');
});

module.exports = router;