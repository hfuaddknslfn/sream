import React, { useEffect, useState } from "react";
import { auth } from "../../firebase"; // Импортируйте объект auth из вашего Firebase-конфига
import AvatarUpload from "../message/Ava"; // Импортируйте компонент AvatarUpload
import { onAuthStateChanged, signOut } from "firebase/auth"; // Импортируйте функцию signOut из Firebase Authentication
import { Link } from "react-router-dom";
import BurgerMenu from "../../Burger/Burgermenu";

function Cabinet() {
  const [displayName, setDisplayName] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Устанавливаем текущего пользователя, если он вошел в систему
        const storedDisplayName = localStorage.getItem("displayName");
        if (storedDisplayName) {
          setDisplayName(storedDisplayName);
        } else {
          setDisplayName(user.displayName || ""); // Устанавливаем имя пользователя из профиля
        }
        setAvatarURL(user.photoURL || ""); // Устанавливаем URL аватарки пользователя из профиля
      } else {
        setUser(null); // Устанавливаем null, если пользователь вышел из системы
        setDisplayName(""); // Очищаем имя пользователя
        setAvatarURL(""); // Очищаем URL аватарки
      }
    });

    return () => {
      unsubscribe(); // Отписываемся от обновлений состояния аутентификации при размонтировании компонента
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Выход из системы пользователя
      setUser(null); // Устанавливаем null, так как пользователь вышел из системы
    } catch (error) {
      console.error("Ошибка при выходе из аккаунта:", error.message);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="max-w-md p-6 border rounded shadow-lg bg-gray-800">
        <BurgerMenu />
        <h2 className="text-2xl mb-4">Личный кабинет</h2>
        {user ? (
          <>
            <p>Привет, {displayName || "Гость"}!</p>
            {avatarURL && (
              <img
                src={avatarURL}
                alt="Аватар"
                className="rounded-full w-20 h-20 mx-auto mt-4"
              />
            )}
            <AvatarUpload user={user} />
            <Link to={"/Store"}>
              <button onClick={handleSignOut} className="mt-4">
                Выйти из аккаунта
              </button>
            </Link>
            {/* Добавьте остальное содержимое вашего кабинета */}
          </>
        ) : (
          <p>Пожалуйста, войдите в систему.</p>
        )}
      </div>
    </div>
  );
}

export default Cabinet;
