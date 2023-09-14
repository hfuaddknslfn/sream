import React from "react";

const TaskBlock = ({ title, text, imageUrl }) => {
  return (
    <div>
      <h2>Название задачи:</h2>
      <p>{title}</p>
      <h2>Текст задачи:</h2>
      <p>{text}</p>
      {imageUrl && (
        <img src={imageUrl} alt="Выбранное изображение" width="200" />
      )}
    </div>
  );
};

export default TaskBlock;
