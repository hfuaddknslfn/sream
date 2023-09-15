import React from "react";
import { Link } from "react-router-dom";
import Images from "../images/logo_steam.svg";
import { auth } from "../firebase";

const Header = ({ loggedIn, handleSignOut }) => {
  return (
    <div className="flex m-auto pr-52 justify-center gap-6 text-2xl w-100% h-24 bg-[#171d25] text-white list-none">
      <div className="my-8 gap-8 flex text-gray-300 ">
        <div className="flex flex-row px-20 text-left items-center">
          <img className="w-40 h-40" src={Images} alt="" />
        </div>
        <Link to={"/Store"}>Shop</Link>
        <Link to={"/Chat"}>Chat</Link>
        <Link to={"/Info"}>Info</Link>
        <Link to={"/Poddershka"}>Poddershka</Link>
        <Link to={"/Lobby"}>Lobby</Link>
        <Link to={"/Auth"}>Auth</Link>
        <Link
          className="px-[50px] text-[12px] rounded-[10px] bg-[#5bd745]"
          to={"/DownloadLocalWebsite"}
        >
          Download
        </Link>
        {loggedIn ? (
          // If the user is logged in, display "Выйти" (Sign Out)
          <Link to={"/"} onClick={handleSignOut}>
            Выйти
          </Link>
        ) : (
          // If the user is not logged in, display "Login"
          <Link to={"/LoginWithGoogle"}>Login</Link>
        )}
        <Link to={"/Favourites"}>Favourites</Link>
      </div>
    </div>
  );
};

export default Header;
