import React, { useState, useEffect } from "react";
import style from "../shop/Store.module.scss";
import Header from "../../Header/Header";
import { useLocation, useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase"; // Импортируйте настройки Firebase из вашего файла
import { auth } from "../../firebase"; // Импортируйте вашу библиотеку аутентификации
import { Link } from "react-router-dom";

const Store = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState("");
  const [editedTaskText, setEditedTaskText] = useState("");
  const [editedTaskId, setEditedTaskId] = useState(null);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);
  const [cards, setCards] = useState([]); // Стейт для хранения данных карточек
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [isNotRegisteredModalVisible, setNotRegisteredModalVisible] =
    useState(false); // Стейт для отображения модального окна незарегистрированным пользователям
  const [favoriteTasks, setFavoriteTasks] = useState([]);

  const handleMouseEnter = () => {
    setModalVisible(true);
  };

  const handleMouseLeave = () => {
    setModalVisible(false);
  };

  const handleMouseEnter2 = () => {
    setModalVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setModalVisible2(false);
  };

  const handleMouseEnter3 = () => {
    setModalVisible3(true);
  };

  const handleMouseLeave3 = () => {
    setModalVisible3(false);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const taskName = searchParams.get("taskName");
  const taskText = searchParams.get("taskText");
  const imageUrl = searchParams.get("imageUrl");
  const { taskId } = useParams();

  useEffect(() => {
    // Теперь taskId доступен для использования
    console.log(taskId);
  }, [taskId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const tasksData = [];
        querySnapshot.forEach((doc) => {
          tasksData.push({ ...doc.data(), id: doc.id }); // Добавляем id к задачам
        });
        setTasks(tasksData);
        setIsLoading(false);
      } catch (error) {
        console.error("Ошибка при запросе данных:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Store.jsx
  const addToFavorites = async (taskId) => {
    try {
      const task = tasks.find((task) => task.id === taskId);
      if (!task) {
        console.error("Задача с указанным ID не найдена.");
        return;
      }

      // Проверяем, есть ли у задачи необходимые поля
      if (!task.title || !task.imageUrl || !task.text) {
        console.error("Недостаточно данных для добавления в избранное.");
        return;
      }

      await addDoc(collection(db, "favorites"), {
        taskName: task.title,
        imageUrl: task.imageUrl,
        taskText: task.text,
      });

      console.log("Задача добавлена в избранное");
    } catch (error) {
      console.error("Ошибка при добавлении задачи в избранное:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    // Проверяем, авторизован ли пользователь
    const user = auth.currentUser;

    if (!user) {
      // Если пользователь не авторизован, отображаем модальное окно
      setNotRegisteredModalVisible(true);
      return;
    }

    if (!taskId) {
      console.error("Недопустимый taskId: null");
      return;
    }

    try {
      // Удаление задачи с указанным ID
      await deleteDoc(doc(db, "tasks", taskId));
      console.log("Задача удалена успешно.");
      // После удаления задачи, обновите список задач или выполните другие действия
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
    }
  };

  return (
    <div className="h-[1200px]">
      <Header />
      <div className={style.block1}>
        <div className={style.imgtop}>
          <div className={style.container}>
            <div className={style.drop}>
              <div>
                <nav>
                  <ul className={style.ul1}>
                    <li
                      className={style.likk}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a href="#">Your Store</a>

                      {isModalVisible && (
                        <ul className={style.modal}>
                          <li>
                            <a href="">Home</a>
                          </li>
                          <li>
                            <a href="">Recommendations</a>
                          </li>
                          <li>
                            <a href="">Steam Curators</a>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li
                      className={style.likk}
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                    >
                      <a href="#">New & Noteworthy</a>

                      {isModalVisible2 && (
                        <ul className={style.modal2}>
                          <li>
                            <a href="">Steam Reply 2022</a>
                          </li>
                          <li>
                            <a href="">Seller</a>
                          </li>
                          <li>
                            <a href="">Most Played</a>
                          </li>
                          <li>
                            <a href="">Special offer</a>
                          </li>
                          <li>
                            <a href="">Popular Upcoming</a>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li
                      className={style.likk}
                      onMouseEnter={handleMouseEnter3}
                      onMouseLeave={handleMouseLeave3}
                    >
                      <a href="#">Categories</a>

                      {isModalVisible3 && (
                        <ul className={style.modal3}>
                          <div className={style.linia1}>
                            <h1>SPECIAL SECTION</h1>

                            <li>
                              <a href="">Free To play</a>
                            </li>
                            <li>
                              <a href="">Demos</a>
                            </li>
                            <li>
                              <a href="">Early Access</a>
                            </li>
                            <hr />
                            <li>
                              <a href="">Steam Deck</a>
                            </li>
                            <li>
                              <a href="">Great on Deck</a>
                            </li>
                            <hr />
                            <li>
                              <a href="">Controller-Friendly</a>
                            </li>
                            <li>
                              <a href="">Remote Play</a>
                            </li>
                            <hr />
                            <li>
                              <a href="">Vr Titles</a>
                            </li>
                            <li>
                              <a href="">Vr Hardware</a>
                            </li>
                            <hr />
                            <li>
                              <a href="">Software</a>
                            </li>
                            <li>
                              <a href="">Soundtracks</a>
                            </li>
                            <hr />
                            <li>
                              <a href="">macOS</a>
                            </li>
                            <li>
                              <a href="">SteamOS + Linux</a>
                            </li>
                            <li>
                              <a href="">For PC Cafes</a>
                            </li>
                          </div>
                          <div className={style.linia2}>
                            <div className={style.linia2_1}>
                              <div className={style.linia2_1_1}>
                                <h1 className={style.h1h1}>GENRES</h1>
                                <li>
                                  <a href="">Action</a>
                                </li>
                                <li>
                                  <a href="">Arcade & Rhythm</a>
                                </li>
                                <li>
                                  <a href="">Flighting & Martial Arts </a>
                                </li>
                                <li>
                                  <a href="">First-Person Shooter</a>
                                </li>
                                <li>
                                  <a href="">Hack & Slash</a>
                                </li>
                                <li>
                                  <a href="">Platformer & Runner</a>
                                </li>
                                <li>
                                  <a href="">Third-Person Shooter</a>
                                </li>
                                <li>
                                  <a href="">shmup</a>
                                </li>
                              </div>
                              <div className={style.linia2_1_2}>
                                <li>
                                  <a href="">Adventure</a>
                                </li>
                                <li>
                                  <a href="">Adventure RPG</a>
                                </li>
                                <li>
                                  <a href="">Casual</a>
                                </li>
                                <li>
                                  <a href="">Hidden Object</a>
                                </li>
                                <li>
                                  <a href="">Metroidvania</a>
                                </li>
                                <li>
                                  <a href="">Puzzle</a>
                                </li>
                                <li>
                                  <a href="">Story-Rich</a>
                                </li>
                              </div>
                            </div>

                            <div className={style.linia2_2}>
                              <div className={style.linia2_2_1}>
                                <li>
                                  <a href="">Role-Playing</a>
                                </li>
                                <li>
                                  <a href="">Action RPG</a>
                                </li>
                                <li>
                                  <a href="">Adventure RPG</a>
                                </li>
                                <li>
                                  <a href="">JRPG</a>
                                </li>
                                <li>
                                  <a href="">Party-Based</a>
                                </li>
                                <li>
                                  <a href="">Rogue-Like</a>
                                </li>
                                <li>
                                  <a href="">Strategy-RPG</a>
                                </li>
                                <li>
                                  <a href="">Turn-Based</a>
                                </li>
                              </div>
                              <div className={style.linia2_2_2}>
                                <li>
                                  <a href="">Simulation</a>
                                </li>
                                <li>
                                  <a href="">Building & Automation</a>
                                </li>
                                <li>
                                  <a href="">Dating</a>
                                </li>
                                <li>
                                  <a href="">Farming & Crafting</a>
                                </li>
                                <li>
                                  <a href="">Hobby & Job</a>
                                </li>
                                <li>
                                  <a href="">Life & Immersive</a>
                                </li>
                                <li>
                                  <a href="">Sandbox & Physics</a>
                                </li>
                              </div>
                            </div>
                          </div>
                          <div className={style.linia3}>
                            <div className={style.linia3_1}>
                              <h1>THEMES</h1>

                              <li>
                                <a href="">Anime</a>
                              </li>
                              <li>
                                <a href="">Horror</a>
                              </li>
                              <hr />
                              <li>
                                <a href="">Mystery & Detective</a>
                              </li>
                              <li>
                                <a href="">Open World</a>
                              </li>
                              <hr />
                              <li>
                                <a href="">Sci-Fi & Cyberpunk</a>
                              </li>
                              <li>
                                <a href="">Space</a>
                              </li>
                              <hr />
                            </div>
                            <div className={style.linia3_1}>
                              <h1>PLAYER SUPPORT</h1>
                              <li>
                                <a href="">Co-Operative</a>
                              </li>
                              <li>
                                <a href="">LAN</a>
                              </li>
                              <hr />
                              <li>
                                <a href="">Local & Party</a>
                              </li>
                              <li>
                                <a href="">MMO</a>
                              </li>
                              <hr />
                              <li>
                                <a href="">Multiplayer</a>
                              </li>
                              <li>
                                <a href="">Online Competitive</a>
                              </li>
                              <hr />
                            </div>
                          </div>
                        </ul>
                      )}
                    </li>
                    <li className={style.likk}>
                      <a href="#">Point Shop</a>
                    </li>
                    <li className={style.likk}>
                      <a href="#">News</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className={style.input}>
                <input type="text" placeholder=" search" />
                <button>
                  <img width="20" height="20" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[800px] bg-gray-900">
        <div className="flex flex-col justify-center m-auto">
          {/* Task List */}
          <div className="col-span-3 md:col-span-2 flex flex-col justify-center m-auto">
            <h2 className="text-2xl font-semibold mb-4">Список задач:</h2>
            {isLoading ? (
              <p>Загрузка данных...</p>
            ) : (
              <ul className="grid grid-cols-4 gap-[50px] grid-rows-4">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="bg-gray-800 rounded-md p-4 shadow-md"
                  >
                    <strong className="text-lg font-semibold">
                      {task.taskName}
                    </strong>
                    <p className="text-gray-600">{task.taskText}</p>
                    <Link to={"/Page1"}>
                      <img
                        src={task.imageUrl}
                        alt={task.taskName}
                        className="w-full mt-2"
                      />
                    </Link>
                    <button onClick={() => addToFavorites(task.id)}>
                      Добавить в избранное
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="bg-red-500 text-white px-4 py-2 mt-2 hover:bg-red-600"
                    >
                      Удалить
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {isNotRegisteredModalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 shadow-md">
              <p>Вы должны быть зарегистрированы, чтобы удалить задачу.</p>
              <button
                onClick={() => setNotRegisteredModalVisible(false)}
                className="bg-blue-500 text-white px-4 py-2 mt-4 hover:bg-blue-600"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
