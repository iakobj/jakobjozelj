const express = require("express");
const {pool} = require("./Database");
const bodyParser = require('body-parser')

ItemsInput = express.Router();

// Parse application/json
ItemsInput.use(bodyParser.json());

//Route that checks if you have a valid sesion and the user is loged in
ItemsInput.get("/", (req, res, next) => {
    console.log('ItemsInput');

    if (req.sessionID && req.session.user) {
        console.log('User loged in and the session is valid');
        res.status(200)
        next();
    }
    else {
        console.log('Not logedin');
        return res.sendStatus(403)
    }
    })

// Items input route
ItemsInput.get("/", (req, res) => {
    console.log('after loged in and session ok');
    res.sendStatus(200);
    
    })

// Submit a new certification
ItemsInput.post("/NewCertificate", (req, res) => {
    console.log('Submitting a new certification');
    console.log(req.body);
  
    const { title, vendor, date, year, homepage, certCode, image, certDescription } = req.body;
    console.log(title, vendor, date, year, homepage, certCode, image, certDescription);
  
    pool.query(`INSERT INTO certifications (
      title, 
      vendor, 
      date, 
      year, 
      vendorpage, 
      code, 
      imgsrc, 
      description
      ) VALUES (
        '${title}', 
        '${vendor}', 
        '${date}', 
        '${year}',
        '${homepage}',
        '${certCode}',
        '${image}',
        '${certDescription}' 
      );`)
      .then((response) => {
        console.log("Submitted a new certification");
        console.log(response);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        });
}   );
  

// Submit a new project
ItemsInput.post("/NewProject", (req, res) => {
    console.log('Submitting a new project');
    console.log(req.body);
  
    const { title, projDescription, year, image } = req.body;
    console.log(title, projDescription, year, image);
  
    pool.query(`INSERT INTO projects (
      title, 
      description, 
      year, 
      imgsrc
      ) VALUES (
        '${title}', 
        '${projDescription}', 
        '${year}', 
        '${image}'
      );`)
      .then((response) => {
        console.log("Submitted a new project");
        console.log(response);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
      });
}   );

// Removing certification
ItemsInput.post("/RemoveCertificate", (req, res) => {
    console.log('Removing certificate');
    console.log(req.body);

    const {certification} = req.body;
    console.log(certification);

    pool.query(`DELETE FROM certifications WHERE id = '${certification}';`).then((response) => {
        console.log("Deleted certificate");
        console.log(response);
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(err);
    })    
})

// Removing project
ItemsInput.post("/RemoveProject", (req, res) => {
    console.log('Removing project');
    console.log(req.body);

    const {project} = req.body;
    console.log(project);

    pool.query(`DELETE FROM projects WHERE id = '${project}';`).then((response) => {
        console.log("Deleted project");
        console.log(response);
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(err);
    })        
})




module.exports = ItemsInput;