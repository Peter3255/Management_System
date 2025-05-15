import express from 'express';
const route = express.Router();


import services from '../services/render.js';
import controller from '../controller/controller2.js';
import Userdb from '../model/schema.mjs';

const setupUserModel = (req, res, next) => {
    req.UserModel = Userdb; // Attach the Userdb model
    next();
};

// Route to render the EJS template with user data
route.get('/ejs-users', setupUserModel, async (req, res) => {
    try {
        
        const users = await UserModel.find().exec();
        // Assuming you have your EJS templates in a 'views' directory
        res.render('index', { users: users }); // 'index' refers to your index.ejs file
        // res.json(users)
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching and rendering users');
    }
});

// In router2.js or a separate middleware file
const setupModel2 = (req, res, next) => {
    req.Model2 = req.db2.model('Schema2', model2.schema);
    next();
};


/**
 * @description Show index.ejs
 * @method GET /
 */

route.get('',services.index);

/**
 * @description Root Route
 * @method GET /
 */


route.get('/add-user',services.add_user);

/**
 * @description for update user
 * @method GET /update-user
 */



route.get('/update-user',services.update_user)

// API
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

export default route