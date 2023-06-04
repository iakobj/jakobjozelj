const express = require("express");

TestBeRouter = express.Router();

// Get All certifications
TestBeRouter.get("/", (req, res) => {
    console.log(req.session.user);
    return res.json({ user: req.session.user })
})


module.exports = TestBeRouter;