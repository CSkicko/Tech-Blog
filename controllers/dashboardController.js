const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require("../utils/auth");

router.get('/', withAuth, async (req, res) => {

    const userData = await User.findByPk(req.session.user_id, {
        attributes: [
            "id",
            "username"
        ],
        include: [
            {
                model: Post
            }
        ]
    });

    const userDataClean = userData.get({ plain: true });

    console.log(userDataClean);

    res.render('dashboard', { userDataClean, logged_in: req.session.logged_in });
});

module.exports = router;