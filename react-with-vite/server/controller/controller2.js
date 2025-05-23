// import Userdb from '../model/schema2.mjs';


// create and save new user
const create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }


// new user
const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    /*lastName: req.body.lastName,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    countryOrRegion: req.body.countryOrRegion,
    cardNumber: req.body.cardNumber,
    cVV2Number: req.body.cVV2Number,
    month: req.body.month,
    year: req.body.year,
    */
    gender: req.body.gender,
    status: req.body.status
})

// save user in the database
user
.save(user)
.then(data => {
    //res.send(data)
    res.redirect('/add-user')
})
.catch(err => {
    res.status(500).send({
        message : err.message || "Some error occurred while creating a create operation"
    });
});

}

// retrieve and return all users/ retrive and returna single user
const find = (req, res)=>{

if(req.query.id){
const id = req.query.id;

Userdb.findById(id)
.then(data => {
if(!data){
res.status(404).send({ message: "Not found user with id " + id})
}else{
res.send(data)
}
})
.catch(err =>{
res.status(500).send({ message: "Error retrieving user id " + id})
})

}else{
Userdb.find()
    .then(user => {
    res.send(user)
    })
    .catch(err => {
    res.status(500).send({ message : err.message || "Error Occurred while retriving user information "})
    })
    }
}

// Update a new identified user by user id
const update = (req, res)=>{
    if(!req.body) {
        return res
        .status(400)
        .send({ message: "Data to update can not be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!`})
        }else{
                res.send(data)
            }
        
    })
    .catch(err=>{
        res.status(500).send({ message : "Error Update user information"})
    })

}

// Delete a user with specified user id in the request
const deleteUser = (req, res)=>{
    const id =req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "User was deleted successfully!"
            })
        }
        
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    });
}

export default {
    create,
    find,
    update,
    delete: deleteUser // <-- Look for files using this export later
  };