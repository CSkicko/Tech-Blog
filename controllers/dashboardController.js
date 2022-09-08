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


router.get('/:id/edit', withAuth, async (req, res) => {
    
    const postData = await Post.findByPk(req.params.id);
    const postDataClean = postData.get({ plain: true });

    console.log(postDataClean);
    res.render('editPost', { postDataClean, logged_in: req.session.logged_in })
})

module.exports = router;