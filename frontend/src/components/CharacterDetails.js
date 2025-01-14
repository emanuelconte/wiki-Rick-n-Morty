import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/characters/${id}`)
            .then((response) => setCharacter(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    if (!character) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Espécie: {character.species}</p>
            <p>Status: {character.status}</p>
        </div>
    );
};

export default CharacterDetails;
