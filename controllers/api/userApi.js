const router = require("express").Router();
const { User } = require("../../models");

router.post('/login', async (req, res) => {
    res.json("You're trying to login");
})

// API route to create user account
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    const userDetails = await User.create({
        username,
        password,
    });

    req.session.save(() => {
        req.session.user_id = userDetails.id;
        req.session.email = userDetails.username;
        req.session.logged_in = true;

        res.json("You have signed up");
    });
})

router.post('/logout', async (req, res) => {
    res.json("You're trying to logout");
})

module.exports = router;