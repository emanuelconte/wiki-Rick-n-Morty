import React, { useEffect, useState } from 'react';

const CharacterDetails = ({ characterId }) => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
            const data = await response.json();
            setCharacter(data);
        };
        fetchCharacter();
    }, [characterId]);

    if (!character) return <div>Loading...</div>;

    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <img src={character.image} alt={character.name} />
        </div>
    );
};

export default CharacterDetails;
