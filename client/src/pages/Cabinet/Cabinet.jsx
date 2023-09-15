import React, { useEffect, useState } from "react";
import { auth } from "../../firebase"; // Import your Firebase authentication object
import AvatarUpload from "../message/Ava"; // Import the AvatarUpload component
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import the signOut function from Firebase Authentication
import { Link } from "react-router-dom";
import BurgerMenu from "../../Burger/Burgermenu";
import Header from "../../Header/Header"; // Импортируйте ваш хедер

function Cabinet() {
  const [displayName, setDisplayName] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set the current user if they are logged in
        const storedDisplayName = localStorage.getItem("displayName");
        if (storedDisplayName) {
          setDisplayName(storedDisplayName);
        } else {
          setDisplayName(user.displayName || ""); // Set the user's display name from their profile
        }
        setAvatarURL(user.photoURL || ""); // Set the user's avatar URL from their profile
      } else {
        setUser(null); // Set to null if the user logs out
        setDisplayName(""); // Clear the user's name
        setAvatarURL(""); // Clear the avatar URL
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from authentication state updates when the component unmounts
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign the user out
      setUser(null); // Set to null as the user has logged out
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="max-w-md p-6 border rounded shadow-lg bg-gray-800">
        <BurgerMenu />
        <h2 className="text-2xl mb-4">Личный кабинет</h2>
        {/* <Header user={user} handleSignOut={handleSignOut} /> */}
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
            {/* Add the rest of your cabinet content here */}
          </>
        ) : (
          <p>Пожалуйста, войдите в систему.</p>
        )}
      </div>
    </div>
  );
}

export default Cabinet;
