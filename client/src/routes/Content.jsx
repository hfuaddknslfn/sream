import React from "react";
import Store from "../pages/shop/Shop";
import Auth from "../pages/message/Auth";
import Info from "../pages/Info/Info";
import Poddershka from "../pages/Poddershka/Poddeshka";
import { Routes, Route } from "react-router";
import Header from "../Header/Header";
import LobbyScreen from "../screens/Lobby";
import RoomPage from "../screens/Room";
import Admin from "../Admin";
// import Chat from "../Nino/pages2/Chat/Chat";
import Page1 from "../pages/Info/Page1";
import Page1con from "../pages/Info/Page1con";
import Now from "../pages/Info/Now";
import LoginWithGoogle from "../pages/message/LoginWithGoogle";
import Cabinet from "../pages/Cabinet/Cabinet";
import AccountRecovery from "../pages/Poddershka/AccountRecovercy";
import DownloadLocalWebsite from "../pages/Info/Download";
import Favourites from "../pages/shop/Favourites";
import { Chat } from "../chatgpt/Chat";

const Content = () => {
  return (
    <Routes>
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Favourites" element={<Favourites />} />
      <Route path="/" element={<Header />} />
      <Route path="/DownloadLocalWebsite" element={<DownloadLocalWebsite />} />
      <Route path="/AccountRecovery" element={<AccountRecovery />} />
      <Route path="/LoginWithGoogle" element={<LoginWithGoogle />} />
      <Route path="/Cabinet" element={<Cabinet />} />
      <Route path="/Now" element={<Now />} />
      <Route path="/Page1" element={<Page1 />} />
      <Route path="/Page1con" element={<Page1con />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/Store" element={<Store />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="Info" element={<Info />} />
      <Route path="/Poddershka" element={<Poddershka />} />
      <Route path="/Lobby" element={<LobbyScreen />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
  );
};

export default Content;
