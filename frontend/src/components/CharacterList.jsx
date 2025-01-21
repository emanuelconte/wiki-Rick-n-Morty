import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Para navegação entre páginas, se for o caso

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('http://localhost:3001/api/character');
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
      <section className="w-full p-8 bg-[#203745]">
        <div className='container'>

          <div className="p-8 m-8 add-border items-center">
            <h1 className="section-title p-2">Rick and Morty Wiki</h1>
          </div>


          

        </div>
      </section>
    );
};

export default CharacterList;
