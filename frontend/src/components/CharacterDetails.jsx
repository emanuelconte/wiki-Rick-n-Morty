import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const goToHome = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/character/${id}`
        );
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!character) return <div>Character not found</div>;

  return (
    <div className="container items-center">
      <div className="p-8 m-8 items-center">
        <h1 
          className="section-title p-2" 
          onClick={goToHome}
          style={{ cursor: "pointer" }} >
            Rick and Morty Wiki
        </h1>
      </div>

      <div className="m-12 p-8 flex flex-row">
        <div className="flex flex-col">
            <h1 className="char-name p-4 w-[368px] items-center">{character.name}</h1>
            <img className="w-[368px] h-[368px] rounded-xl" src={character.image} alt={character.name} />
        </div>

        <div>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
        </div>
        
      </div>
    </div>
  );
};

export default CharacterDetails;
