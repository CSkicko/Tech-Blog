const router = require("express").Router();
const { User, Post } = require("../../models");

router.post('/', async (req, res) => {
    const { title, content } = req.body;

    const postDetails = await Post.create({
        title,
        content,
        creator_id: req.session.user_id
    });

    res.json(`Added ${postDetails}`);
})

module.exports = router;