const router = require("express").Router();
const { User, Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
    const { title, content } = req.body;

    const postDetails = await Post.create({
        title,
        content,
        creator_id: req.session.user_id
    });

    res.json(`Added ${postDetails}`);
})

module.exports = router;