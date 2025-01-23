import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

        const episodePromises = data.episode.map((episodeUrl) =>
          fetch(episodeUrl).then((res) => res.json())
        );
        const episodeData = await Promise.all(episodePromises);
        setEpisodes(episodeData);
      } catch (error) {
        console.error("Error fetching character:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleNextCharacter = () => {
    const nextId = parseInt(id) + 1;
    navigate(`/character/${nextId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreviousCharacter = () => {
    const prevId = parseInt(id) - 1;
    if (prevId > 0) {
      navigate(`/character/${prevId}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;
  if (!character) return <div>Character not found</div>;

  return (
    <section className="w-full">
      <div className="p-8 m-8 items-center">
        <h1
          className="section-title p-2"
          onClick={goToHome}
          style={{ cursor: "pointer" }}
        >
          Rick and Morty Wiki
        </h1>
      </div>

      <div className="m-12 p-8 flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <h1 className="char-name p-4 w-[368px]">
                {character.name}
              </h1>
              <img
                className="w-[368px] h-[368px] rounded-xl"
                src={character.image}
                alt={character.name}
              />
            </div>
            <div className="mt-auto ml-4">
              <p className="status-char">Status: {character.status}</p>
              <p className="status-char">Species: {character.species}</p>
              <p className="status-char">Gender: {character.gender}</p>
              <p className="status-char">Origin: {character.origin.name}</p>
            </div>
          </div>

          <div className="">
            <h2 className="text-2xl mt-6 char-name">Episodes:</h2>
            <ul className="list-disc list-inside text-white">
              {episodes.map((episode) => (
                <li key={episode.id}>
                  <strong>{episode.name}</strong> - Air Date: {episode.air_date}
                </li>
              ))}
            </ul>
          </div>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handlePreviousCharacter}
          className="btn-page"
          disabled={id <= 1}
        >
          Previous
        </button>
        <button onClick={handleNextCharacter} className="btn-page">
          Next
        </button>
      </div>

    </section>
  );
};

export default CharacterDetails;
