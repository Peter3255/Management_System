import express from 'express';

import { config } from 'dotenv';

import connect from './database/connection.js';

import connectDB from './database/connection2.js';


import cors from 'cors';



import router from './router/router.js';

import router2 from './router/router2.js';



config({ path: './config.env' });
const PORT = process.env.PORT || 4000;

// create express instance
const app = express();
app.use(express.json());



app.use(cors({
    origin: 'http://localhost:5173', // Your frontend's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    
  }));



// database connections
const db1Connection = await connect();
const db2Connection = await connectDB();


// Pass the connections to your routers or controllers as needed
app.use('/api', (req, res, next) => {
    req.db1 = db1Connection; // Make the first database connection available
    next();
}, router);

app.use('/api', (req, res, next) => {
    req.db2 = db2Connection; // Make the second database connection available
    next();
}, router2);



// routes
app.use('/api', router);

app.use('/api', router2);


// set view engine
app.set("view engine", "ejs")




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})