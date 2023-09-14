import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import Header from "../Header/Header";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    // После монтирования компонента добавим анимацию появления
    setShowCard(true);
  }, []);

  return (
    <div
      className={`w-full h-[800px] bg-gradient-to-r from-[#121316] via-[#0b143b] to-[#121316] text-white ${
        showCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } transition-opacity transform duration-500 ease-in-out`}
    >
      <div className="w-[100%]">
        <Header />
      </div>
      <div className="flex flex-col w-[100%] h-[600px] justify-center items-center">
        <form
          className="w-[420px] rounded-md bg-[#5e5ea1] text-3xl text-white p-8 flex flex-col items-center"
          onSubmit={handleSubmitForm}
        >
          <div className="w-full mb-6">
            <label htmlFor="email" className="text-2xl">
              Email ID
            </label>
            <input
              className="w-full rounded-lg border-black bg-slate-900 text-white text-xl py-2 px-3 focus:outline-none"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите имя пользователя"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Join
          </button>
          <div className="w-full mt-6">
            <label htmlFor="room" className="text-xl">
              Room Number
            </label>
            <input
              className="w-full rounded-lg border-black bg-slate-900 text-white text-xl py-2 px-3 focus:outline-none"
              type="text"
              id="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LobbyScreen;
