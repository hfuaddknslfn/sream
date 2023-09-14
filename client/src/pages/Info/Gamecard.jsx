import React from "react";

const GameCard = ({ game, onGameClick }) => {
  return (
    <div
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
  );
};

export default GameCard;
