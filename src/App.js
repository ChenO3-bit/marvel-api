import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

    // Obtener personajes desde el API
    useEffect(() => {
        axios.get('http://localhost:5000/api/characters')
            .then(response => {
                setCharacters(response.data);
            })
            .catch(error => {
                setError("Error loading characters");
            });
    }, []);

    return (
        <div className="App">
            <h1>Marvel Characters</h1>
            {error && <p>{error}</p>}
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <h2>{character.name}</h2>
                        <p><strong>Alias:</strong> {character.alias}</p>
                        <p><strong>Power:</strong> {character.power}</p>
                        <p><strong>Team:</strong> {character.team}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

