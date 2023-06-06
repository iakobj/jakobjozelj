const express = require("express");
const bodyParser = require('body-parser');
const {pool} = require("./Database");
const crypto = require('crypto')
require("dotenv").config();

const salt = process.env.USER_PASSWORD_SALT;

loginRouter = express.Router();

loginRouter.use(express.urlencoded({extended: false}));
loginRouter.use(bodyParser.json());

// Login
loginRouter.post("/", async (req, res) => {
    console.log('Salt is:  ')
    console.log(salt);
    const {username, password} = req.body;
    console.log("Login Express route started....");

    if (username == null || password == null) {
        console.log('Input fields on FE were empty.');
        return res.sendStatus(403)
    }

    try {
        const data = await pool.query(`SELECT * FROM users WHERE username = '${username}' ;`)
        console.log('Reading user from the database.');
        if (data.rows.length === 0) {
            console.log('No user was found.');
            return res.sendStatus(403)
        }

        const user = data.rows[0];
        console.log(user);
        console.log('User was found. Proceeding....');

        crypto.pbkdf2(password, salt, 310000, 32, 'sha256', function(err, hashedPassword) {
            console.log('crypto.pbkdf2 proccess started...');
            const hexHashedPassword = hashedPassword.toString('hex');
            if (err) { 
                console.log('crypto.pbkdf2 proccess error.');
                return err; 
            }
            console.log('crypto.pbkdf2 Comparing passwords');
            
            console.log(user.password);
            console.log(hexHashedPassword);

            if (user.password !== hexHashedPassword) {
                    console.log('Incorrect username or password.');
                    res.sendStatus(403);
                    return ({ message: 'Incorrect username or password.' });
            }
            else {
                console.log('Login success, creating session...');
                req.session.user = {
                    id: user.id,
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                }
                res.status(200);
                console.log('Logged in, session created .');
                return res.json({ user: req.session.user })
            }
        })

    }catch(err) {
        console.log(err);
        }
    });

module.exports = loginRouter;