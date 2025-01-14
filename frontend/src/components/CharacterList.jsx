import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Para navegação entre páginas, se for o caso

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('http://localhost:3001/api/characters'); // Ou a URL que você configurou
            const data = await response.json();
            console.log(data);
            setCharacters(data.results);
        };

        fetchCharacters();
    }, []);

    if (!Array.isArray(characters)) {
        console.error('characters não é um array', characters);
        return <div>Erro ao carregar personagens</div>;
    }

    if (characters.length === 0) return <div>Loading...</div>;

    return (
        <div>
            <h1>Lista de Personagens</h1>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <Link to={`/characters/${character.id}`}>
                            <h2>{character.name}</h2>
                            <img src={character.image} alt={character.name} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterList;
