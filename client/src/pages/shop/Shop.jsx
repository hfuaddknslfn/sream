import React, { useState, useEffect } from "react";
import style from "../shop/Store.module.scss";
import Header from "../../Header/Header";
import { useLocation, useParams } from "react-router-dom";
import Todo from "../../components/Todo";
import { db, deleteDoc, updateDoc, doc } from "../../firebase"; // Импортируйте необходимые функции из вашего файла firebase
import queryString from "query-string";

const Store = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState("");
  const [editedTaskText, setEditedTaskText] = useState("");
  const [editedTaskId, setEditedTaskId] = useState(null);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);

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
  const searchParams = queryString.parse(location.search);
  const taskId = searchParams.taskId;
  const taskName = searchParams.taskName;
  const taskText = searchParams.taskText;
  const imageUrl = searchParams.imageUrl;

  useEffect(() => {
    // Устанавливаем значение editedTaskId при изменении taskId
    setEditedTaskId(taskId);
  }, [taskId]);

  console.log(editedTaskId);

  const handleDeleteTodo = async (taskIdToDelete) => {
    if (taskIdToDelete === null) {
      console.error("Недопустимый todoId: null");
      return;
    }

    try {
      await deleteDoc(doc(db, "todos", taskIdToDelete));
      console.log("Задача удалена успешно.");
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
    }
  };

  const handleEditTodo = async () => {
    if (!editedTaskName || !editedTaskText || !editedTaskId) return;
    const updatedData = {
      title: editedTaskName,
      text: editedTaskText,
    };

    try {
      await updateDoc(doc(db, "todos", editedTaskId), updatedData);
      setEditModalVisible(false);
    } catch (error) {
      console.error("Ошибка при обновлении задачи:", error);
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
      <div className="h-[1200px]">
        {/* ... */}
        <div className="bg-gray-900 text-white p-4 flex flex-col justify-center m-auto w-[500px] h-[300px] rounded-[18px] py-12">
          <h1 className="text-3xl font-semibold">Store Page</h1>
          {taskName && <p className="text-xl">Task Name: {taskName}</p>}
          {taskText && <p className="text-xl">Task Text: {taskText}</p>}
          {imageUrl && <img src={imageUrl} alt="Task Image" className="mt-4" />}
          {taskName && (
            <div>
              <button
                className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDeleteTodo(editedTaskId)}
              >
                Удалить задачу
              </button>
              // Для редактирования задачи
              <button
                className="mt-4 ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setEditModalVisible(true)}
              >
                Редактировать задачу
              </button>
            </div>
          )}
          {/* Остальное содержимое страницы Store */}
        </div>

        {isEditModalVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Редактировать задачу
              </h2>
              <input
                type="text"
                placeholder="Название задачи"
                value={editedTaskName}
                onChange={(e) => setEditedTaskName(e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded w-full"
              />
              <textarea
                placeholder="Описание задачи"
                value={editedTaskText}
                onChange={(e) => setEditedTaskText(e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded w-full"
              />
              <button
                onClick={handleEditTodo}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Сохранить изменения
              </button>
              <button
                onClick={() => setEditModalVisible(false)}
                className="bg-red-500 text-white p-2 rounded ml-2 hover:bg-red-600"
              >
                Отмена
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
