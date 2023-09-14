import React, { useState } from "react";
import { saveAs } from "file-saver";

function DownloadLocalWebsite() {
  const [url, setUrl] = useState("http://localhost:3000"); // Замените на ваш локальный URL и порт
  const [outputDirectory, setOutputDirectory] = useState("");
  const [message, setMessage] = useState("");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleOutputDirectoryChange = (e) => {
    setOutputDirectory(e.target.value);
  };

  const downloadWebsite = () => {
    setMessage("Загрузка начата...");

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Произошла ошибка при загрузке сайта");
        }
        return response.blob();
      })
      .then((data) => {
        const filename = `${outputDirectory || "website"}.zip`; // Называйте файл, как вам нужно

        // Используйте библиотеку file-saver для скачивания файла на рабочий стол
        saveAs(data, filename);

        setMessage("Сайт успешно скачан");
      })
      .catch((error) => {
        setMessage(`Произошла ошибка: ${error.message}`);
      });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
        <h1 className="text-2xl font-semibold mb-4">Скачать локальный сайт</h1>
        <div className="mb-4">
          <label htmlFor="url" className="block text-sm mb-2">
            URL-адрес сайта:
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={handleUrlChange}
            className="w-full px-3 py-2 rounded bg-gray-900 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="outputDirectory" className="block text-sm mb-2">
            Каталог для сохранения:
          </label>
          <input
            type="text"
            id="outputDirectory"
            value={outputDirectory}
            onChange={handleOutputDirectoryChange}
            className="w-full px-3 py-2 rounded bg-gray-900 text-white"
          />
        </div>
        <button
          onClick={downloadWebsite}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold"
        >
          Скачать
        </button>
        <p className="mt-4">{message}</p>
      </div>
    </div>
  );
}

export default DownloadLocalWebsite;
