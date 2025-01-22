import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Para navegação entre páginas, se for o caso

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/character?page=${page}`);
            const data = await response.json();
            setCharacters(data.results);
            setTotalPages(data.info.pages);
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
    };

    fetchCharacters();
  }, [page]);

  if (!Array.isArray(characters)) {
    console.error("characters is not an array", characters);
    return <div>Error fetching characters</div>;
  }

  if (characters.length === 0) return <div>Loading...</div>;

  const handleNextPage = () => {
    if (page < totalPages) setPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  }

  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i= startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 py-1 mx-1 rounded-lg ${
            i === page ? "bg-[#41b4c9] text-white font-audiowide" : "bg-gray-200 hover:bg-[#256672] font-audiowide"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center">
        {pages}
      </div>
    );

  };

  return (
    <section className="w-full">
      <div className="p-12 w-full">
        <div className="p-8 m-8 items-center">
          <h1 className="section-title p-2">Rick and Morty Wiki</h1>
        </div>

        <div className="text-center my-6 p-4 text-white rounded-lg shadow-md">
          <p className="text-lg leading-relaxed">
            Welcome to the <strong>Rick and Morty Character Wiki</strong>! This
            project is an interactive platform built using{" "}
            <strong>React</strong>, <strong>JavaScript</strong>, and{" "}
            <strong>Tailwind CSS</strong>, designed to explore and learn about
            the vibrant characters of the popular TV series{" "}
            <em>Rick and Morty</em>. The website dynamically fetches data from
            the{" "}
            <a
              href="https://rickandmortyapi.com"
              className="underline hover:text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rick and Morty API
            </a>
            , providing an engaging and responsive experience for users.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            This project was developed by <strong>Emanuel</strong>, a passionate
            backend developer exploring front-end technologies. The source code
            is available on GitHub:
            <a
              href="https://github.com/emanuelconte/wiki-Rick-n-Morty"
              className="underline hover:text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rick and Morty Character Wiki Repository
            </a>
          </p>
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
                    <h2 className="text-lg font-bold text-center font-audiowide">
                      {character.name}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={handlePrevPage}
            className="btn-page my-6 mb-3"
            disabled={page === 1}
          >
            Previous
          </button>

          <div className="flex flex-col items-center">
            <span className="font-pages">{`Page ${page} of ${totalPages}`}</span>
            <div>{renderPagination()}</div>
          </div>
          
          <button
            onClick={handleNextPage}
            className="btn-page my-6 mb-3"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>

        
      </div>
    </section>
  );
  
};

export default CharacterList;
