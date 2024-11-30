const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const characters = [
    { id: 1, name: "Iron Man", alias: "Tony Stark", power: "Advanced Technology", team: "Avengers" },
    { id: 2, name: "Spider-Man", alias: "Peter Parker", power: "Spider Abilities", team: "Solo" },
    { id: 3, name: "Thor", alias: "Thor Odinson", power: "God of Thunder", team: "Avengers" },
];

app.get('/api/characters', (req, res) => {
    res.json(characters);
});

app.get('/api/characters/:id', (req, res) => {
    const character = characters.find(c => c.id === parseInt(req.params.id));
    if (!character) return res.status(404).send('Character not found');
    res.json(character);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Marvel API!');
});
