const router = require('express').Router();
const withAuth = require("../utils/auth");
const { User, Post, Comment } = require('../models');

router.get('/:id', withAuth, async (req, res) => {

    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: [
                        "id",
                        "username"
                    ]
                },
            ]
        });

        const commentData = await Comment.findAll({
            where: {
                post_id: req.params.id
            },
            include: {
                model: User,
                attributes: [
                    "id",
                    "username"
                ]
            }
        });

        const postDataClean = postData.get({ plain: true });
        const commentDataClean = commentData.map((data) => data.get({ plain: true }));

        console.log(commentDataClean);
        res.render('post', { postDataClean, commentDataClean, logged_in: req.session.logged_in, user_id: req.session.user_id } );

    } catch {
        res.status(500).json('Internal Server Error');
    }
});

module.exports = router;