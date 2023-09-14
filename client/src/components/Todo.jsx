import React from "react";

const Todo = ({ todo, handleComplete, handleDelete }) => {
  return (
    <div className="flex flex-col m-auto justify-center">
      <h3 className="flex justify-center m-auto">{todo.taskName}</h3>
      <p className="flex justify-center m-auto">{todo.text}</p>
      <img
        src={todo.imageUrl}
        alt="Изображение задачи"
        className="w-[100px] h-[100px]"
        width="100"
      />
      <button onClick={() => handleComplete(todo)}>Завершить</button>
      <button onClick={() => handleDelete(todo.id)}>Удалить</button>
    </div>
  );
};

export default Todo;
