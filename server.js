const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const { pool } = require("./dbConfig");
const bcrypt = require("bcrypt");
// const { name } = require('ejs');
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");

const initializePassport = require("./passportConfig");

initializePassport(passport);

const connectDB = require('./server/database/connection');
const Userdb = require('./server/model/model');

const app = express();

dotenv.config( { path : 'config.env' } )
const PORT = process.env.PORT || 8080


app.use(
    session({
    // String should be replaced with an environment variable
    secret: "",

    resave: false,

    saveUninitialized: false
})
);

app.use(passport.initialize());
app.use(passport.session())

app.use(flash());

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();


// parse request to body-parser
app.use(bodyparser.urlencoded({ extended:true}))

// set view engine
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }));
//app.set("view", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/css2', express.static(path.resolve(__dirname, "assets/css2")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
// css/style.css

// load routers
app.use('/', require('./server/routes/router'))





app.post("/users/login", passport.authenticate("local", {
    successRedirect: "/users/index",
    failureRedirect: "/users/login",
    failureFlash: true
})
);

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/users/index");
    }
    next();
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/users/login");
}

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});


app.get("/", (req, res) => {
    res.render("index2");
});
 

app.get("/users/register", checkAuthenticated, (req, res) => {
    res.render("register");
});

app.get("/users/login", checkAuthenticated, (req, res) => {
    res.render("login");
});

/*app.get("/users/index", checkNotAuthenticated, (req, res) => {
    res.render("index", { user: req.user.email });
});*/

app.get("/users/index", (req, res) => {
    res.render("index", { user: req.user.email, users:Userdb.find( {} ) });
});




app.get("/users/logout", (req, res) => {
    req.logOut(function(err) {
        if (err) { return next(err);}
    req.flash("success_msg", "You have logged out.");
    res.redirect("/users/login");
});
});

app.post("/users/register", async (req, res) => {
    let { name, email, password, password2 } = req.body;
    console.log({
        name,
        email,
        password,
        password2
    });


let errors = [];

if (!name || !email || !password || !password2) {
    errors.push({ message: "Please enter all fields" });
}

if (password.length < 6) {
    errors.push({ message: "Password should be at least 6 characters" });
}

if (password2 != password2) {
    errors.push({ message: "Passwords do not match" });
}

if (errors.length > 0) {
    res.render("register", { errors });
} else {
    // Form validation has passed

    let hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    pool.query(
        `SELECT * FROM users
        WHERE email = $1`,
        [email],
        (err, results) => {
            if (err) {
                throw err;
            }

            console.log(results.rows);

            if (results.rows.length > 0) {
                errors.push({ message: "Email already registered" });
                res.render("register", { errors });
            } else {
                pool.query(
                    `INSERT INTO users (name, email, password)
                    VALUES ($1, $2, $3)
                    RETURNING id, password`, 
                    [name, email, hashedPassword], 
                    (err, results)=> {
                        if (err) {
                            throw err;
                        }
                        console.log(results.rows);
                        req.flash("success_msg", "You are now registered. Please log in");
                        res.redirect("/users/login");
                    }
                );
            }
        }
    );
    
}
});
