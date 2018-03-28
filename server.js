const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let nextId = 5;
let users = [ 
    {
        "name" : "Tim",
        "id" : "0",
        "favorite-color": "blue"         
    },
    {
        "name" : "Charlie",
        "id" : "1",
        "favorite-color": "red"         
    },
    {
        "name" : "Alex",
        "id" : "2",
        "favorite-color": "green"         
    },
    {
        "name" : "Bob",
        "id" : "3",
        "favorite-color": "aqua"         
    },
    {
        "name" : "Joe",
        "id" : "4",
        "favorite-color": "yellow"         
    }
];

app.use(bodyParser.json());

app.listen(8000, () => {
    console.log('Server Started');
});

// Get all users
app.route('/api/users').get( (req, res) => {
    res.send({
        users
    });
});

// Get user by id
app.route('/api/users/:id').get( (req, res) => {
    const userid = req.params['id']
    const filteredUsers = users.filter( (user) => {
        return userid == user.id;
    })
    res.send({
        filteredUsers
    });
});

// Create new user
app.route('/api/users').post( (req, res) => {
    let reqbody = req.body;
    reqbody.id = nextId;
    users[nextId] = reqbody;
    nextId++;
    
    res.status(201).send(reqbody);
});

// Edit user
app.route('/api/users/:id').put((req, res) => {
    let reqbody = req.body;
    let id = req.params['id'];
    reqbody.id = id;
    for (var i in users) {
        if(users[i].id === id) {
            users[i] = reqbody;
            break;
        }
    }

    res.send(reqbody);
});

// Delete user
app.route('/api/users/:id').delete((req, res) => {
    users = users.filter((user) =>{
        return user.id != req.params['id'];
    });

    res.sendStatus(204);
});

