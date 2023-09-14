import React from "react";
import BurgerMenu from "../../Burger/Burgermenu";

const Now = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <BurgerMenu />
      <div>
        <h1 className="text-4xl font-bold mb-4">Сайт в разработке</h1>
        <p className="text-lg">
          Мы работаем над улучшением сайта. Пожалуйста, зайдите позже.
        </p>
      </div>
    </div>
  );
};

export default Now;
