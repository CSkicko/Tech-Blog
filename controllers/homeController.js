const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })

        const postDataClean = postData.map((data) => data.get({ plain: true }));

        res.render('home', { postDataClean } );

    } catch {
        res.status(500).json(err);
    }
});

module.exports = router;