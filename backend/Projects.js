const express = require("express");
const {pool} = require("./Database");

projectsRouter = express.Router();

// Get All projects
projectsRouter.get("/", (req, res) => {
    pool.query("SELECT id, title, description, year, imgsrc FROM Projects ORDER BY year DESC;")
        .then((response) => {
            console.log("Projects all...   ");

            res.send(response.rows);
    })
    .catch((err) => {
        console.log(err);
    })
})

// Get 2 projects to display them on homepage
projectsRouter.get("/home", (req, res, next) => {
    pool.query("SELECT id, title, description, year, imgsrc FROM Projects ORDER BY year DESC LIMIT 2;")
        .then((response) => {
            console.log("2 Latest Projects... ");

            res.send(response.rows);
    })
    .catch((err) => {
        console.log(err);
    })
})

module.exports = projectsRouter;