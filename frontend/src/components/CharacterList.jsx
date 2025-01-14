import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/characters')
            .then((response) => setCharacters(response.data.results))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Lista de Personagens</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <Link to={`/character/${character.id}`}>
                            {character.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterList;
