const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Wow I am excited!')
})

const users=[
    {id:0, name:'priya', email:'priya@gmail.com', phone: 10299823},
    {id:1, name:'rini', email:'rini@gmail.com', phone: 10212133},
    {id:2, name:'rozina', email:'rozina@gmail.com', phone: 1098823},
    {id:3, name:'srithi', email:'srithi@gmail.com', phone: 1022633},
    {id:4, name:'tamanna', email:'tamanna@gmail.com', phone: 9737223},
    {id:5, name:'fahmida', email:'fahmida@gmail.com', phone: 1123823},
]

app.get('/users', (req, res)=>{
    //Use query parameter
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{    
    res.send(users);
    }
})

//app.METHOD
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/users/:id', (req, res)=>{
    //dynamic api
    const id = req.params.id;
    const user = users[id]; 
    res.send(user);
})
app.get('/fruits', (req, res)=>{
    res.send(['mango', 'orange', 'banana', 'apple']);
})
app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send("Yummy yummy fazli");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})