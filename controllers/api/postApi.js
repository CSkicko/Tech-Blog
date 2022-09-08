const router = require("express").Router();
const { Comment } = require("../../models");

router.post('/:id/comment', async (req, res) => {
    const { content } = req.body;

    const commentDetails = await Comment.create({
        content,
        creator_id: req.session.user_id,
        post_id: req.params.id
    });

    res.json(`Added ${commentDetails}`);
})

module.exports = router;