import React, { useState } from "react";
import { Link } from "react-router-dom";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="fixed top-5 right-5 text-white cursor-pointer z-10"
        onClick={toggleMenu}
      >
        {/* Иконка бургера */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div
        className={`burger-menu ${
          isOpen
            ? "fixed top-0 right-0 h-full w-64 bg-gray-800 transition-transform duration-300 transform translate-x-0"
            : "fixed top-0 right-0 h-full w-64 bg-gray-800 transition-transform duration-300 transform translate-x-full"
        }`}
      >
        <div className="burger cursor-pointer p-5" onClick={toggleMenu}>
          {/* Иконка закрытия (палочка) */}
          <svg
            className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>

          {/* Иконка бургера (три полоски) */}
          <svg
            className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <ul className="text-white flex flex-col justify-center m-auto">
          <Link to={"/Admin"}>Admin</Link>
          <Link to={"/Auth"}>Auth</Link>
          <Link to={"/Store"}>Shop</Link>
          <Link to={"/Chat"}>Chat</Link>
          <Link to={"/Info"}>Info</Link>
          <Link to={"/Poddershka"}>Poddershka</Link>
          <Link to={"/Lobby"}>Lobby</Link>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
