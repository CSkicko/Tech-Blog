const router = require("express").Router();
const { User } = require("../../models");

router.post('/login', async (req, res) => {
    res.json("You're trying to login");
})

router.post('/register', async (req, res) => {
    res.json("You're trying to register");
})

router.post('/logout', async (req, res) => {
    res.json("You're trying to logout");
})

module.exports = router;