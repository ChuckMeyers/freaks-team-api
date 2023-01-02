const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000

app.use(cors());

let players = {
    'brent' : {
     'firstName' : 'Brent',
     'skillLevel' : '2',
     'targetNumber': '19'
    },
    'danny' : {
     'firstName' : 'Danny',
     'skillLevel' : '4',
     'targetNumber': '31'
    },
    'kyle' : {
     'firstName' : 'Kyle',
     'skillLevel' : '2',
     'targetNumber': '19'
    },
    'brian' : {
     'firstName' : 'Brian',
     'skillLevel' : '2',
     'targetNumber': '19'
    },
    'alicia' : {
     'firstName' : 'Alicia',
     'skillLevel' : '1',
     'targetNumber': '14'
    },
    'kim' : {
     'firstName' : 'Kim',
     'skillLevel' : '1',
     'targetNumber': '14'
    },
    'jeff' : {
     'firstName' : 'Jeff',
     'skillLevel' : '5',
     'targetNumber': '38'
    },
    'charlie' : {
     'firstName' : 'Charlie',
     'skillLevel' : '4',
     'targetNumber': '31'
    },
    'unknown' : {
      'firstName' : 'Unknown',
      'skillLevel' : '0',
      'targetNumber': '0'
     }
 };

 app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
 })

 app.get('/api/:name', (req, res) => {
   const playerName = req.params.name.toLowerCase()
   if(players[playerName]){
       res.json(players[playerName]['firstName'])
   }else{
       res.json(players['unknown'])
   }
})

 app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})