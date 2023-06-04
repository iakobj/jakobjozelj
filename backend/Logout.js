const express = require("express");
logoutRouter = express.Router();

// Logout
logoutRouter.post("/", async (req, res) => {
    console.log('LogOutPrvi');
    try {
        console.log('LogOut');
        await req.session.destroy();
        return res.sendStatus(200);
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }
})

module.exports = logoutRouter;