const express = require("express");
const {pool} = require("./Database");

certificationsRouter = express.Router();

// Get All certifications
certificationsRouter.get("/", (req, res) => {
    pool.query("SELECT id, title, description, vendor, year, vendorPage, code, imgsrc FROM Certifications ORDER BY year DESC;")
        .then((response) => {
            console.log("Certifications all...  ");

            res.send(response.rows);
    })
    .catch((err) => {
        console.log(err);
    })
})

// Get 2 certifications to display them on homepage
certificationsRouter.get("/home", (req, res) => {
    pool.query("SELECT id, title, description, vendor, year, vendorPage, code, imgsrc FROM Certifications ORDER BY year DESC LIMIT 2;")
        .then((response) => {
            console.log("2 Latest Certifications.... ");

            res.send(response.rows);
    })
    .catch((err) => {
        console.log(err);
    })
})

module.exports = certificationsRouter;