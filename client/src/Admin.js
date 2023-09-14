import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase"; // Импортируйте настройки Firebase из вашего файла
import { Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const Admin = () => {
  const [taskName, setTaskName] = useState("");
  const [taskText, setTaskText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
  };

  // ...

  const handleAddTodo = async () => {
    if (!taskName || !taskText || !selectedImage) return;

    const imageName = `${Date.now()}_${selectedImage.name}`;
    const storageRef = ref(storage, "images/" + imageName);

    try {
      const uploadTask = uploadBytes(storageRef, selectedImage);
      await uploadTask;

      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "todos"), {
        title: taskName,
        text: taskText,
        imageUrl: imageUrl,
        completed: false,
      });

      setTaskName("");
      setTaskText("");
      setSelectedImage(null);

      // После успешного добавления задачи, перенаправляем пользователя на страницу Store
      // и включаем параметры запроса taskName, taskText и imageUrl
      window.location.href = `/store?taskName=${taskName}&taskText=${taskText}&imageUrl=${imageUrl}`;
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error);
    }
  };

  return (
    <>
      <div>
        <h1>Admin Page</h1>
        <div>
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            name="taskName"
            value={taskName}
            onChange={handleTaskNameChange}
          />
        </div>
        <div>
          <label htmlFor="taskText">Task Text:</label>
          <input
            type="text"
            name="taskText"
            value={taskText}
            onChange={handleTaskTextChange}
          />
        </div>
        <div>
          <label htmlFor="selectedImage">Select Image:</label>
          <input
            type="file"
            accept="image/*"
            name="selectedImage"
            onChange={handleImageChange}
          />
        </div>

        {/* Кнопка для добавления задачи */}
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Добавить задачу
        </button>

        <Link to={`/store?taskName=${taskName}&taskText=${taskText}`}>
          Перейти на страницу Store
        </Link>
      </div>
    </>
  );
};

export default Admin;
