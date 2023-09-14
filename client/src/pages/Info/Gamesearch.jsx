import React, { useState } from "react";
import GameCard from "./Gamecard";

const GamesSearch = ({ games, onGameClick }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <input
        type="text"
        placeholder="Поиск игр..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full p-2 mb-4"
      />
      {games
        .filter((game) =>
          game.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((game) => (
          <GameCard key={game.id} game={game} onGameClick={onGameClick} />
        ))}
    </div>
  );
};

export default GamesSearch;
