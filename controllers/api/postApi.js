const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/:id/comment', withAuth, async (req, res) => {
    const { content } = req.body;

    const commentDetails = await Comment.create({
        content,
        creator_id: req.session.user_id,
        post_id: req.params.id
    });

    res.json(`Added ${commentDetails}`);
})

module.exports = router;