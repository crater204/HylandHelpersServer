const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let nextId = 5;
let users = [ 
    {
        "name" : "Tim",
        "id" : 0,
        "favorite-color": "blue"         
    },
    {
        "name" : "Charlie",
        "id" : 1,
        "favorite-color": "red"         
    },
    {
        "name" : "Alex",
        "id" : 2,
        "favorite-color": "green"         
    },
    {
        "name" : "Bob",
        "id" : 3,
        "favorite-color": "aqua"         
    },
    {
        "name" : "Joe",
        "id" : 4,
        "favorite-color": "yellow"         
    }
];

app.use(bodyParser.json());

app.listen(8000, () => {
    console.log('Server Started');
});

app.route('/api/users').get( (req, res) => {
    res.send({
        users
    });
});

app.route('/api/users/:id').get( (req, res) => {
    const userid = req.params['id']
    const filteredUsers = users.filter( (user) => {
        return userid == user.id;
    })
    res.send({
        filteredUsers
    });
});

app.route('/api/users').post( (req, res) => {
    let reqbody = req.body;
    reqbody.id = nextId;
    users[nextId] = reqbody;
    nextId++;
    
    res.status(201).send(req.body);
})