import React, { useState } from "react";
import { auth } from "../../firebase"; // Импортируйте объект auth из вашего Firebase-конфига
import { sendPasswordResetEmail } from "firebase/auth"; // Импортируйте функцию sendPasswordResetEmail из Firebase Authentication
import BurgerMenu from "../../Burger/Burgermenu";

function AccountRecovery() {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setIsEmailSent(true);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="max-w-md p-6 border rounded shadow-lg bg-gray-800">
        <BurgerMenu />
        <h2 className="text-2xl mb-4">Восстановление доступа к аккаунту</h2>
        {isEmailSent ? (
          <p>
            Письмо с инструкциями по восстановлению доступа отправлено на ваш
            адрес электронной почты. Пожалуйста, проверьте свой почтовый ящик.
          </p>
        ) : (
          <>
            <p>
              Если вы забыли пароль или не можете войти в свой аккаунт, введите
              свой адрес электронной почты, и мы отправим вам инструкции по
              восстановлению доступа.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white border rounded p-2 w-full"
              />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
              onClick={handleResetPassword}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Отправить инструкции по восстановлению
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default AccountRecovery;
