const router = require("express").Router();
const { User } = require("../../models");

router.post('/login', async (req, res) => {
    const userData = await User.findOne({
        where: {
            username: req.body.username
        }
    });

    if (!userData) {
        res.status(400).json("No user found with this username");
    }

    const passwordIsValid = userData.checkPassword(req.body.password);

    if (!passwordIsValid) {
        res.status(400).json({ message: "Incorrect password!" });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.logged_in = true;

      res.json("You have successfully logged in!");
    });
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

router.get('/logout', async (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
    })};
    res.render("logout");
})

module.exports = router;