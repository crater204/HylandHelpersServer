const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let nextId = 5;
let users = [ 
    {
        "id" : "0",
        "name" : "Tim",
        "numClaps": "5",
        "skills": [
            "Javascript"
        ],
        "gifts": [
            "coin",
            "coin"
        ],
        "avatar": {
            "skinPigment": "skin_ddc994",
            "hairColor":"hair_bangs_2_brown",
            "shirtColor":"slim_shirt_black"
        }         
    },
    {
        "id" : "1",
        "name" : "Bill",
        "numClaps": "25",
        "skills": [
            "Angular",
            "HTML",
            "CSS"
        ],
        "gifts": [
            "star",
            "wizard-hat",
            "sword",
            "sparkles"
        ],
        "avatar": {
            "skinPigment": "skin_f5a76e",
            "hairColor":"hair_bangs_2_blond",
            "shirtColor":"slim_shirt_pink"
        }         
    },
    {
        "id" : "2",
        "name" : "Joe",
        "numClaps": "2",
        "skills": [
            "Java",
            "C#"
        ],
        "gifts": [
        ],
        "avatar": {
            "skinPigment": "skin_915533",
            "hairColor":"hair_bangs_2_white",
            "shirtColor":"slim_shirt_green"
        }         
    },
    {
        "id" : "3",
        "name" : "Garen",
        "numClaps": "12",
        "skills": [
            "Demacia",
            "Swords"
        ],
        "gifts": [
            "sword"
        ],
        "avatar": {
            "skinPigment": "skin_98461a",
            "hairColor":"hair_bangs_2_brown",
            "shirtColor":"slim_shirt_black"
        }         
    },
    {
        "id" : "4",
        "name" : "Lulu",
        "numClaps": "85",
        "skills": [
            "Being Purple"
        ],
        "gifts": [
            "sparkles",
            "wizard-hat",
            "heart"
        ],
        "avatar": {
            "skinPigment": "skin_915533",
            "hairColor":"hair_bangs_2_white",
            "shirtColor":"slim_shirt_pink"
        }         
    },
];
app.use(cors());
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

