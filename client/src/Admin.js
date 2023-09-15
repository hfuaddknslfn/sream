import React, { useState, useEffect } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Импортируйте настройки Firebase из вашего файла
import { Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const Admin = () => {
  const [taskName, setTaskName] = useState("");
  const [taskText, setTaskText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [tasks, setTasks] = useState([]); // Добавьте это состояние

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

  const handleAddTodo = async () => {
    if (!taskName || !taskText || !selectedImage) return;

    const imageName = `${Date.now()}_${selectedImage.name}`;
    const storageRef = ref(storage, "images/" + imageName);

    try {
      const uploadTask = uploadBytes(storageRef, selectedImage);
      await uploadTask;

      const imageUrl = await getDownloadURL(storageRef);

      const tasksCollection = collection(db, "tasks");
      const docRef = await addDoc(tasksCollection, {
        title: taskName,
        text: taskText,
        imageUrl: imageUrl,
        completed: false,
      });

      console.log("Задача добавлена с ID:", docRef.id);

      // Обновляем состояние tasks с новой задачей
      setTasks([
        ...tasks,
        { title: taskName, text: taskText, imageUrl: imageUrl },
      ]);

      setTaskName("");
      setTaskText("");
      setSelectedImage(null);
      setImageUrl("");

      // Перейти на страницу Store и передать данные через URL параметры
      window.location.href = `/store?taskName=${encodeURIComponent(
        taskName
      )}&taskText=${encodeURIComponent(taskText)}&imageUrl=${encodeURIComponent(
        imageUrl
      )}`;
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error);
    }
  };

  useEffect(() => {
    // Загрузка существующих задач из Firestore при загрузке страницы
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const tasksData = [];
        querySnapshot.forEach((doc) => {
          tasksData.push(doc.data());
        });
        setTasks(tasksData);
      } catch (error) {
        console.error("Ошибка при загрузке задач:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Админ-панель</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Название задачи"
              value={taskName}
              onChange={handleTaskNameChange}
              className="bg-gray-800 text-white w-full p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Текст задачи"
              value={taskText}
              onChange={handleTaskTextChange}
              className="bg-gray-800 text-white w-full p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              onChange={handleImageChange}
              className="bg-gray-800 text-white"
            />
          </div>
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            Сохранить
          </button>
          <Link
            to={`/store?taskName=${encodeURIComponent(
              taskName
            )}&taskText=${encodeURIComponent(
              taskText
            )}&imageUrl=${encodeURIComponent(imageUrl)}`}
            className="block mt-4 underline"
          >
            Перейти в магазин
          </Link>
        </div>

        <div className="container mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">Список задач:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white p-4 rounded shadow-md"
              >
                <strong className="text-xl font-semibold">{task.title}</strong>
                <p className="text-gray-300 mt-2">{task.text}</p>
                <img
                  src={task.imageUrl}
                  alt={task.title}
                  className="w-full mt-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
