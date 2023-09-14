import React, { useState } from "react";
import { storage } from "../../firebase"; // Импортируйте объект storage из вашего Firebase-конфига
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth"; // Импортируйте updateProfile из Firebase Authentication

function Ava({ user }) {
  const [avatar, setAvatar] = useState(null);
  const [avatarURL, setAvatarURL] = useState(user.photoURL || ""); // Загружаем текущую аватарку пользователя, если она уже установлена

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleUpload = async () => {
    if (!avatar) return;

    const storageRef = ref(storage, `avatars/${user.uid}/${avatar.name}`);
    await uploadBytes(storageRef, avatar);

    const downloadURL = await getDownloadURL(storageRef);
    setAvatarURL(downloadURL);

    // Обновляем аватар пользователя в Firebase Authentication
    const auth = getAuth();
    await updateProfile(auth.currentUser, {
      photoURL: downloadURL,
    });
  };

  return (
    <div>
      <h3>Аватар</h3>
      <img src={avatarURL} alt="Аватар" width="150" height="150" />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Загрузить аватар</button>
    </div>
  );
}

export default Ava;
