import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { characterId } = useParams();  // Pega o ID da URL
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await fetch(`http://localhost:3001/api/character/${characterId}`);
            const data = await response.json();
            console.log(data);
            setCharacter(data.results);
        };
        fetchCharacter();
    }, [characterId]);

    if (!character) return <div>Loading...</div>;

    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
        </div>
    );
};

export default CharacterDetails;
