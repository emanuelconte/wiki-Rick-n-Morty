import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Para navegação entre páginas, se for o caso

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch("http://localhost:3001/api/character");
      const data = await response.json();
      console.log(data);
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  if (!Array.isArray(characters)) {
    console.error("characters não é um array", characters);
    return <div>Erro ao carregar personagens</div>;
  }

  if (characters.length === 0) return <div>Loading...</div>;

  return (
    <section className="w-full">
      <div className="p-12 w-full">
        <div className="p-8 m-8 items-center">
          <h1 className="section-title p-2">Rick and Morty Wiki</h1>
        </div>

        <div className="w-full h-auto p-4 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {characters.map((character) => (
                    <div
                    key={character.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                    <Link to={`/character/${character.id}`}>
                        <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-56 object-cover"
                        />
                        <div className="p-1">
                        <h2 className="text-lg font-bold text-center">
                            {character.name}
                        </h2>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        </div>

        

      </div>
    </section>
  );
};

export default CharacterList;
