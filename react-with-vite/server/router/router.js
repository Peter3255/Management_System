import express from 'express';
const router = express.Router();
import controller from '../controller/controller.js';
import auth from '../middleware/auth.js';
import { deleteUser } from '../controller/controller.js';

router.post('/register', controller.registerUser);
router.post('/login', controller.login);
router.delete('/delete', auth, deleteUser); 

export default router;