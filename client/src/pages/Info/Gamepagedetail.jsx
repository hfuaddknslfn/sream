import React from "react";
import GameCard from "./Gamecard";

const GamePageDetail = ({ game, onBackClick }) => {
  return (
    <div className="text-white mt-8 mx-auto flex flex-col text-center bg-[#211834] w-[500px] h-[700px] px-[30px] py-[100px] rounded-[50px]">
      <GameCard game={game} />
      <h2 className="text-2xl font-bold">{game.name}</h2>
      <p className="text-gray-300">{game.description}</p>
      <p className="text-gray-300">Жанр: {game.genre}</p>
      <p className="text-gray-300">Разработчик: {game.developer}</p>
      <p className="text-gray-300">Дата выпуска: {game.releaseDate}</p>
      <p className="text-gray-300">Платформы: {game.platforms.join(", ")}</p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={onBackClick}
      >
        Назад
      </button>
    </div>
  );
};
export default GamePageDetail;
