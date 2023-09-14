import React, { useState } from "react";
import BurgerMenu from "../../Burger/Burgermenu";
import GameSearch from "./Gamesearch";
import GamePageDetail from "./Gamepagedetail";

// Компонент для главной страницы
const HomePage = ({ onGameClick }) => {
  const games = [
    {
      id: 1,
      name: "PUBG Mobile",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/578080/capsule_231x87.jpg?t=1694608943",
      genre: "Battle Royale",
      developer: "PUBG Corporation",
      releaseDate: "March 19, 2018",
      platforms: ["iOS", "Android"],
    },
    {
      id: 2,
      name: "Steam Deck",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1675200/capsule_231x87.jpg?t=1691453048",
      description:
        "The Steam Deck is a handheld gaming device developed by Valve.",
      genre: "Handheld Gaming",
      developer: "Valve",
      releaseDate: "TBA",
      platforms: ["SteamOS", "Windows"],
    },
    {
      id: 3,
      name: "Call of Duty: Warzone",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1938090/capsule_231x87.jpg?t=1694122677",
      description:
        "Call of Duty: Warzone is a free-to-play battle royale game set in the Call of Duty universe.",
      genre: "Battle Royale",
      developer: "Infinity Ward",
      releaseDate: "March 10, 2020",
      platforms: ["PlayStation", "Xbox", "PC"],
    },
    {
      id: 4,
      name: "Counter-Strike: Global Offensive (CS:GO)",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_231x87.jpg?t=1683566799",
      description:
        "Counter-Strike: Global Offensive (CS:GO) is a popular first-person shooter game known for its competitive gameplay.",
      genre: "First-Person Shooter",
      developer: "Valve, Hidden Path Entertainment",
      releaseDate: "August 21, 2012",
      platforms: ["Windows", "macOS", "Linux"],
    },
    // Добавьте дополнительные игры с информацией здесь
    {
      id: 5,
      name: "Recident Evil",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/2050650/capsule_231x87.jpg?t=1688636510",
      description:
        "Counter-Strike: Global Offensive (CS:GO) is a popular first-person shooter game known for its competitive gameplay.",
      genre: "First-Person Shooter",
      developer: "Valve, Hidden Path Entertainment",
      releaseDate: "August 21, 2012",
      platforms: ["Windows", "macOS", "Linux"],
    },
    {
      id: 6,
      name: "Apex Legends",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1172470/capsule_231x87.jpg?t=1694114964",
      description:
        "Counter-Strike: Global Offensive (CS:GO) is a popular first-person shooter game known for its competitive gameplay.",
      genre: "First-Person Shooter",
      developer: "Valve, Hidden Path Entertainment",
      releaseDate: "August 21, 2012",
      platforms: ["Windows", "macOS", "Linux"],
    },
    {
      id: 7,
      name: "Titanfall",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1237970/capsule_231x87.jpg?t=1668565264",
      description:
        "Counter-Strike: Global Offensive (CS:GO) is a popular first-person shooter game known for its competitive gameplay.",
      genre: "First-Person Shooter",
      developer: "Valve, Hidden Path Entertainment",
      releaseDate: "August 21, 2012",
      platforms: ["Windows", "macOS", "Linux"],
    },
    {
      id: 8,
      name: "Assasin",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/812140/capsule_231x87_russian.jpg?t=1692034673",
      description:
        "Counter-Strike: Global Offensive (CS:GO) is a popular first-person shooter game known for its competitive gameplay.",
      genre: "First-Person Shooter",
      developer: "Valve, Hidden Path Entertainment",
      releaseDate: "August 21, 2012",
      platforms: ["Windows", "macOS", "Linux"],
    },
    {
      id: 9,
      name: "Rainbow",
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1086940/capsule_231x87.jpg?t=1692294127",
      description:
        "Counter-Strike: Global Offensive (CS:GO) is a popular first-person shooter game known for its competitive gameplay.",
      genre: "First-Person Shooter",
      developer: "Valve, Hidden Path Entertainment",
      releaseDate: "August 21, 2012",
      platforms: ["Windows", "macOS", "Linux"],
    },
    // Добавьте остальные игры здесь
  ];
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const handleBackClick = () => {
    setSelectedGame(null);
  };

  return (
    <div className="flex flex-wrap flex-col justify-center">
      <BurgerMenu />
      <div className="flex flex-col m-auto justify-center py-12">
        <div className="bg-gray-900 min-h-screen p-4">
          {selectedGame ? (
            <GamePageDetail game={selectedGame} onBackClick={handleBackClick} />
          ) : (
            <GameSearch games={games} onGameClick={handleGameClick} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-[100px]">
        {games.map((game) => (
          <div
            key={game.id}
            className="w-48 h-64 relative cursor-pointer transition transform hover:scale-105"
            onClick={() => onGameClick(game)}
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-auto py-[100px] object-cover rounded"
            />
            <div className="absolute inset-0 bg-black opacity-60 hover:opacity-0 transition-opacity">
              <p className="text-white text-center absolute bottom-4 left-0 right-0">
                {game.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Компонент для страницы игры
const GamePage = ({ game, onBackClick }) => {
  return (
    <div className="text-white mt-8 mx-auto flex flex-col text-center bg-[#211834] w-[500px] h-[600px] px-[30px] py-[100px] rounded-[50px]">
      <BurgerMenu />
      <img className="rounded-[10px]" src={game.image} alt="" />
      <h2 className="text-2xl font-bold">{game.name}</h2>
      <p className="text-gray-300">{game.description}</p>
      <p className="text-gray-300">Жанр: {game.genre}</p>
      <p className="text-gray-300">Разработчик: {game.developer}</p>
      <p className="text-gray-300">Дата выпуска: {game.releaseDate}</p>
      <p className="text-gray-300">Платформы: {game.platforms}</p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={onBackClick}
      >
        Назад
      </button>
    </div>
  );
};

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const handleBackClick = () => {
    setSelectedGame(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      {selectedGame ? (
        <GamePage game={selectedGame} onBackClick={handleBackClick} />
      ) : (
        <HomePage onGameClick={handleGameClick} />
      )}
    </div>
  );
};

export default App;
