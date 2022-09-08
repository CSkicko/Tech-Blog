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

router.put('/', withAuth, async (req, res) => {
    
    const { title, content, postId } = req.body;

    const updated = await Post.update(
        {
            title,
            content,
        },
        {
            where: {
                id: postId
            }
        }
    );

    res.json(`Updated post ${postId}`);
});

router.delete('/', withAuth, async (req, res) => {
    const { postId } = req.body;
    const destroyed = await Post.destroy({ where: { id: postId } });
    res.json(`Deleted post ${postId}`);
})

module.exports = router;