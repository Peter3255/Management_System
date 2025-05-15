import express from 'express';
const router = express.Router();
import controller from '../controller/controller.js';
import auth from '../middleware/auth.js';
import { deleteUser } from '../controller/controller.js';
import model1 from '../model/schema.mjs';

router.get('/data1', async (req, res) => {
    try {
        const data = await model1.find().exec(); // This will use the default connection
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

router.post('/register', controller.registerUser);
router.post('/login', controller.login);
router.delete('/delete', auth, deleteUser); 

export default router;