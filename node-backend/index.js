const express = require('express');

const {connectToDb} = require("./database");
const app = express();
const port = 3000;


// all Games
app.get('/api/games', async (req, res) => {
    try {
        const db = await connectToDb();
        const games= db.collection("Spiele")
        res.json(await games.find({}).toArray());
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.set()

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});


/* Route zum Abrufen aller Teams
index.get('/api/teams', async (req, res) => {
    try {
        const db = await connectToDb();
        const teams = db.collection("team")
        res.json(await teams.find({}).toArray());
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Route zum Abrufen aller Teams
index.get('/api/games', async (req, res) => {
    try {
        const db = await connectToDb();
        const games = db.collection("game")
        res.json(await games.find({}).toArray());
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});






db.collection("User").insertOne(
    {
        "name": "Ron",
        "username": "ronnyboy",
        "jahrgang": 2006,
        "Tips": [],
        "Phonenumber": "+41 77 486 59 87",
        "email": "r.holti@gmx.ch",
        "points": 0
    }
)*/
