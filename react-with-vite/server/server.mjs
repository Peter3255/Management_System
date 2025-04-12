import express from 'express';

import { config } from 'dotenv';

import connect from './database/connection.js';

import cors from 'cors';



import router from './router/router.js';





config({ path: './config.env' });
const PORT = process.env.PORT || 4000;

// create express instance
const app = express();
app.use(express.json());


const corsOptions = {
    origin: ["http://localhost:5173/"],   // <-- Might have to change that later
}
app.use(cors(corsOptions));



// database connection
connect();



// routes
app.use('/api', router);

    




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})