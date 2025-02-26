const express = require('express');
const app = express();

// jwt
const jwt = require('jsonwebtoken');

const PORT = 3000;

app.use(express.urlencoded({extented:false}));

const users = [
    {
    username: 'john',
    password: 'password123admin',
    role: 'admin'
}, {
    username: 'anna',
    password: 'password123member',
    role: 'member'
}
];

app.get('/', (req, res) => {
    res.send("Login Auth")
})

// secret key
const accessTokenSecret = ''

// login
app.post('/login', (req, res) => {
    const {username, password } = req.body;

    const user = users.find(u => { return u.username === username && u.password === password})

    if (user){
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username, role : user.role}, accessTokenSecret)

        res.json({
            accessToken
        })
    } else{
        res.send("Username of password incorrect")
    }

})

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`)})