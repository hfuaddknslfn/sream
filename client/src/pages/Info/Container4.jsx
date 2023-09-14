import React from "react";
import { Link } from "react-router-dom";

const Container4 = () => {
  return (
    <div className="w-100% h-[1600px] bg-[#151515]">
      <div className="flex flex-col justify-center m-auto w-96 text-center py-20">
        <b className="text-5xl text-white">Возможности</b>
        <h1 className="text-white text-3xl">
          Мы постоянно готовим обновления и улучшения для Steam, например:
        </h1>
      </div>
      <div className="text-white grid grid-cols-3 grid-rows-[100px, 100px, 100px, 100px] gap-12">
        <Link to={"/Now"}>
          <div className="flex flex-col m-auto items-center ease-in-out duration-300 hover:bg-[#353434] rounded-2xl h-80">
            <div className="rounded-full bg-gray-900 w-20 h-20 px-4 py-4 text-center ease-in-out duration-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img
                className="h-12 w-16"
                src="https://cdn.akamai.steamstatic.com/store/about/icon-steamchat.svg"
              />
            </div>
            <h2 className="text-2xl">Чат Stream</h2>
            <h3 className="w-80 text-center">
              Общайтесь с друзьями или группами текстом и голосом, не покидая
              Steam. Наш чат поддерживает видео, твиты, гифки и многое другое —
              используйте эту силу с умом.
            </h3>
          </div>
        </Link>
        <Link to={"/Now"}>
          <div className="flex flex-col m-auto items-center ease-in-out duration-300 hover:bg-[#353434] rounded-2xl h-80">
            <div className="rounded-full bg-gray-900 w-20 h-20 px-4 py-4 text-center ease-in-out duration-1000 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img
                className="h-12 w-16"
                src="https://cdn.akamai.steamstatic.com/store/about/icon-gamehubs.svg"
              />
            </div>
            <h2 className="text-2xl">Центры сообщества</h2>
            <h3 className="w-80 text-center">
              Общайтесь с друзьями или группами текстом и голосом, не покидая
              Steam. Наш чат поддерживает видео, твиты, гифки и многое другое —
              используйте эту силу с умом.
            </h3>
          </div>
        </Link>
        <Link to={"/Now"}>
          <div className="flex flex-col m-auto items-center ease-in-out duration-300 hover:bg-[#353434] rounded-2xl h-80">
            <div className="rounded-full bg-gray-900 w-20 h-20 px-4 py-4 text-center ease-in-out duration-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img
                className="h-12 w-16"
                src="https://cdn.akamai.steamstatic.com/store/about/icon-broadcasts.svg"
              />
            </div>
            <h2 className="text-2xl">Трансляции Steam</h2>
            <h3 className="w-80 text-center">
              Транслируйте свои игры в прямом эфире и делитесь впечатлениями с
              друзьями или со всем сообществом.
            </h3>
          </div>
        </Link>
        <Link to={"/Now"}>
          <div className="flex flex-col m-auto items-center ease-in-out duration-300 hover:bg-[#353434] rounded-2xl h-80">
            <div className="rounded-full bg-gray-900 w-20 h-20 px-4 py-4 text-center ease-in-out duration-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img
                className="h-12 w-16"
                src="https://cdn.akamai.steamstatic.com/store/about/icon-steamworkshop.svg"
              />
            </div>
            <h2 className="text-2xl">Мастерская Steam</h2>
            <h3 className="w-80 text-center">
              Создавайте, ищите и скачивайте пользовательские модификации и
              аксессуары для тысячи поддерживаемых игр.
            </h3>
          </div>
        </Link>
        <Link to={"/Now"}>
          <div className="flex flex-col m-auto items-center ease-in-out duration-300 hover:bg-[#353434] rounded-2xl h-80">
            <div className="rounded-full bg-gray-900 w-20 h-20 px-4 py-4 text-center ease-in-out duration-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img
                className="h-12 w-16"
                src="https://cdn.akamai.steamstatic.com/store/about/icon-steammobile.svg"
              />
            </div>
            <h2 className="text-2xl">Мобильное приложение</h2>
            <h3 className="w-80 text-center">
              Мобильные приложения для iOS и Android позволят вам посещать Steam
              откуда угодно.
            </h3>
          </div>
        </Link>
        <Link>
          <div className="flex flex-col m-auto items-center ease-in-out duration-300 hover:bg-[#353434] rounded-2xl h-80">
            <div className="rounded-full bg-gray-900 w-20 h-20 px-4 py-4 text-center ease-in-out duration-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img
                className="h-12 w-16"
                src="https://cdn.akamai.steamstatic.com/store/about/icon-earlyaccess.svg"
              />
            </div>
            <h2 className="text-2xl">Ранний доступ</h2>
            <h3 className="w-80 text-center">
              к играм Находите новые игры и участвуйте в их развитии. Узнавайте
              о нововведениях первыми и помогайте разработчикам.
            </h3>
          </div>
        </Link>
        <Link to={"/Now"}>
          <div className="flex flex-col m-auto items-center ease-in-out duration-300 hover:bg-[#353434] rounded-2xl h-80">
            <div className="rounded-full bg-gray-900 w-20 h-20 px-4 py-4 text-center ease-in-out duration-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img
                className="h-12 w-16"
                src="https://cdn.akamai.steamstatic.com/store/about/icon-languages.svg"
              />
            </div>
            <h2 className="text-2xl">Множество языков</h2>
            <h3 className="w-80 text-center">
              Нам очень важно создать глобальное сообщество, поэтому в клиенте
              Steam есть более 28 языков.
            </h3>
          </div>
        </Link>
        <Link to={"/Now"}>
          <div className="flex flex-col m-auto items-center ease-in-out duration-300 hover:bg-[#353434] rounded-2xl h-80">
            <div className="rounded-full bg-gray-900 w-20 h-20 px-4 py-4 text-center ease-in-out duration-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img
                className="h-12 w-16"
                src="https://cdn.akamai.steamstatic.com/store/about/icon-payment.svg"
              />
            </div>
            <h2 className="text-2xl">Покупки</h2>
            <h3 className="w-80 text-center">
              проще некуда Наш магазин поддерживает более 100 способов оплаты и
              35 валют, чтобы вы могли совершать покупки так, как удобно вам.
            </h3>
          </div>
        </Link>
        <Link to={"/Now"}>
          <div className="flex flex-col m-auto items-center ease-in-out duration-300 hover:bg-[#353434] rounded-2xl h-80">
            <div className="rounded-full bg-gray-900 w-20 h-20 px-4 py-4 text-center ease-in-out duration-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img
                className="h-12 w-16"
                src="https://cdn.akamai.steamstatic.com/store/about/icon-controllers.svg"
              />
            </div>
            <h2 className="text-2xl">Поддержка</h2>
            <h3 className="w-80 text-center">
              контроллеров Мы призываем разработчиков поддерживать контроллеры,
              в том числе от PlayStation, Xbox и Nintendo.
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Container4;
