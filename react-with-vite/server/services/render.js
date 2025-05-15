import axios from 'axios';
import { render } from 'ejs';




const index = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:4000/api/users')
    .then(function(response){
        
        res.render('index', { users : response.data });
    })
    .catch(err =>{
        res.send(err);
    })

}


const add_user = (req, res) => {
    res.render('add_user');
}

const update_user = (req, res) => {
    axios.get('http://localhost:4000/api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("update_user", { user: userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}

export default {
    render,
    index,
    add_user,
    update_user,
  };

