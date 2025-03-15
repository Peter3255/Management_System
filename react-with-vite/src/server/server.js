
const express = require('express')

// create express instance
const app = express();
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Server Request")
})

app.listen(4000, ()=> {
    console.log(`Server is running on http://localhost:4000`);
})