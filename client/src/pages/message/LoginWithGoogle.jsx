import React, { useState, useEffect } from "react";
import { auth } from "../../firebase"; // Импортируйте объект auth из вашего Firebase-конфига
import { signInWithEmailAndPassword } from "firebase/auth"; // Импортируйте функцию signInWithEmailAndPassword из Firebase
import BurgerMenu from "../../Burger/Burgermenu";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Вход выполнен успешно
      const user = userCredential.user;
      console.log("Пользователь успешно вошел в систему:", user);

      // Перенаправляем пользователя на кабинет после успешного входа
      window.location.href = "/cabinet";
    } catch (error) {
      console.error("Ошибка при входе в систему:", error.message);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 border border-gray-800 rounded shadow-lg bg-gray-800 text-white">
        <BurgerMenu />
        <h2 className="text-2xl mb-4">Вход в систему</h2>
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
        <button
          className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Войти
        </button>
      </div>
    </div>
  );
}

export default Login;
