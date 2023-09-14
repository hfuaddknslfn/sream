import React, { useState } from "react";
import { auth } from "../../firebase"; // Импортируйте объект auth из вашего Firebase-конфига
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Импортируйте функции createUserWithEmailAndPassword и updateProfile из Firebase
import BurgerMenu from "../../Burger/Burgermenu";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleRegistration = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Регистрация прошла успешно
      const user = userCredential.user;

      // Устанавливаем имя пользователя на основе введенного имени
      await updateProfile(user, {
        displayName: displayName || email.split("@")[0],
      });

      // Сохраняем имя пользователя в локальное хранилище
      localStorage.setItem("displayName", user.displayName);

      console.log("Пользователь успешно зарегистрирован:", user);

      // Перенаправляем пользователя на страницу Login
      window.location.href = "/LoginWithGoogle";
    } catch (error) {
      console.error("Ошибка при регистрации:", error.message);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 border border-gray-800 rounded shadow-lg bg-gray-800 text-white">
        <BurgerMenu />
        <h2 className="text-2xl mb-4">Регистрация</h2>
        <input
          className="w-full px-3 py-2 mb-3 bg-gray-700 text-white border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full px-3 py-2 mb-3 bg-gray-700 text-white border rounded"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="w-full px-3 py-2 mb-3 bg-gray-700 text-white border rounded"
          type="text"
          placeholder="Имя"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <button
          className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleRegistration}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
}

export default Auth;
