import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import GameSearch from "../Info/Gamesearch";
// import GameCard from "../Info/Gamecard";
// import GamePageDetail from "../Info/Gamepagedetail";
const Catalog = () => {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/Catalogjs.json");
        setJsonData(response.data);
      } catch (error) {
        console.error("Ошибка загрузки JSON:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-100%">
      <div className="flex flex-col justify-center m-auto">
        <div className="pr-44 gap-x-[280px] gap-y-[30px] grid grid-cols-4 grid-rows-4">
          {jsonData.map((item, index) => (
            <Link to={"/Page1"}>
              <div className="w-[250px] px-12 rounded overflow-hidden shadow-lg bg-slate-900 items-center gap-x-[300px]">
                <div className="flex flex-row items-center">
                  <img src={item.img} alt="" className="w-[70px] h-[70px]" />
                  {item.name}
                  <div className="py-32"></div>
                </div>
              </div>
            </Link>
          ))}

          {jsonData.map((item, index) => (
            <div
              className="w-[250px] rounded overflow-hidden shadow-lg bg-slate-900 items-center"
              key={index}
            >
              <div className="flex text-center items-center">
                <div className="items-center">
                  {item.title}
                  <div className="py-20"></div>
                </div>
              </div>
            </div>
          ))}
          {jsonData.map((item, index) => (
            <div
              className="w-[250px] rounded overflow-hidden shadow-lg bg-slate-900 items-center"
              key={index}
            >
              <div className="flex text-center items-center">
                <div className="items-center">
                  {item.title2}
                  <div className=""></div>
                </div>
              </div>
            </div>
          ))}
          <div className=""></div>
          {/* <GamePageDetail />
          <GameCard />
          <GameSearch /> */}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
