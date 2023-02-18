const express = require("express");
const router = express.Router();
const messages = require("../messages");

router.get("/", (req, res) => {
    res.render("form", {});
});

router.post("/", (req, res) => {
    const user = req.body.name;
    const text = req.body.message;
    messages.push({ text: user, user: text, added: new Date() });
    res.redirect("/");
});

module.exports = router;
