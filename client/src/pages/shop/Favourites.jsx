import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favoriteTasks, setFavoriteTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalTaskNumbers, setTotalTaskNumbers] = useState(0); // Добавляем состояние для суммирования чисел из taskText

  useEffect(() => {
    const fetchFavoriteTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "favorites"));
        const favoriteTasksData = [];
        let sumOfNumbers = 0; // Переменная для суммирования чисел из taskText
        querySnapshot.forEach((doc) => {
          favoriteTasksData.push({ ...doc.data(), id: doc.id });
          const taskText = doc.data().taskText;
          const numbers = taskText.match(/\d+/g); // Извлекаем числа из taskText
          if (numbers) {
            numbers.forEach((number) => {
              sumOfNumbers += parseInt(number, 10); // Суммируем числа
            });
          }
        });
        setFavoriteTasks(favoriteTasksData);
        setTotalTaskNumbers(sumOfNumbers); // Устанавливаем сумму чисел
        setIsLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке избранных задач:", error);
        setIsLoading(false);
      }
    };

    fetchFavoriteTasks();
  }, []);

  const handleRemoveFromFavorites = async (taskId) => {
    try {
      await deleteDoc(doc(db, "favorites", taskId));
      console.log("Задача удалена из избранного");
      setFavoriteTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    } catch (error) {
      console.error("Ошибка при удалении задачи из избранного:", error);
    }
  };

  return (
    <div className="bg-gray-900 p-4 h-[1200px]">
      <h1 className="text-2xl font-semibold mb-4 text-white">
        Избранные задачи
      </h1>
      {isLoading ? (
        <p className="text-white">Загрузка данных...</p>
      ) : favoriteTasks.length === 0 ? (
        <p className="text-white">Нет избранных задач.</p>
      ) : (
        <div>
          <p className="text-white">Сумма чисел из задач: {totalTaskNumbers}</p>{" "}
          s{/* Выводим сумму чисел */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {favoriteTasks.map((task) => (
              <li
                key={task.id}
                className="bg-gray-800 rounded-md p-4 shadow-md"
              >
                <strong className="text-lg font-semibold text-white">
                  {task.taskName}
                </strong>
                <p className="text-gray-300">{task.taskText}</p>
                <Link to={"/Page1"}>
                  <img
                    src={task.imageUrl}
                    alt={task.taskName}
                    className="w-full mt-2"
                  />
                </Link>
                <button
                  onClick={() => handleRemoveFromFavorites(task.id)}
                  className="bg-red-500 text-white px-4 py-2 mt-2 hover:bg-red-600"
                >
                  Удалить из избранного
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Favorites;
