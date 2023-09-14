import React from "react";
import Pubg from "../../images/Pubg.jpg";
import BurgerMenu from "../../Burger/Burgermenu";

const Page1con = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <BurgerMenu />
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-md flex flex-col gap-6">
        <h1 className="text-3xl font-bold mb-4">Информация о PUBG Mobile</h1>
        <div className="w-full h-32 mb-4 flex justify-center items-center">
          <img
            src={Pubg}
            alt="PUBG Mobile"
            className="w-[500px] h-auto object-cover"
          />
        </div>
        <p className="text-gray-300">
          PUBG Mobile - это популярная многопользовательская игра в жанре
          "королевская битва", доступная на мобильных устройствах. Она была
          разработана и выпущена Tencent Games и PUBG Corporation.
        </p>
        <p className="text-gray-300 mt-4">
          Основные характеристики PUBG Mobile:
        </p>
        <ul className="list-disc list-inside text-gray-300 pl-4 mt-2">
          <li>Более 100 миллионов загрузок в магазинах приложений.</li>
          <li>
            Множество режимов игры, включая "Королевская битва" и "Тим Динамик".
          </li>
          <li>Регулярные обновления с новым контентом и событиями.</li>
          <li>Графика и звук высокого качества.</li>
        </ul>
        <p className="text-gray-300 mt-4">
          PUBG Mobile доступен для скачивания на платформах iOS и Android и
          позволяет игрокам соревноваться друг с другом в выживании на огромной
          карте.
        </p>
      </div>
    </div>
  );
};

export default Page1con;
