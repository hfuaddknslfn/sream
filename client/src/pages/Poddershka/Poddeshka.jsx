import React from "react";
import Header from "../../Header/Header";
// import { useSpring, animated } from "react-spring";
import Catalog from "./Catalog";
import { Link } from "react-router-dom";
const Poddershka = () => {
  // const glowEffect = useSpring({
  //   from: { boxShadow: "100px 100px 100px rgba(10, 10, 62)" },
  //   to: async (next) => {
  //     while (true) {
  //       await next({ boxShadow: "0px 0px 30px 10px rgba(10, 10, 62)" });
  //       await next({ boxShadow: "0px 0px 0px rgba(10, 10, 62)" });
  //     }
  //   },
  // });
  return (
    <div className="">
      <Header />
      {/* <animated.div style={glowEffect}></animated.div> */}
      <div className="w-100% h-[1800px] bg-gradient-to-r from-[#121316] via-[#0b143b] to-[#121316] shadow-[0px 0px 20px 5px rgba(0, 0, 255, 0.7)]">
        <div className="flex flex-col w-[1400px] py-12 text-2xl text-white gap-6">
          <div className="flex flex-col">
            <div className="flex flex-col gap-6 w-[1000px]">
              <h1>Поддержка Steam</h1>
              <h1 className="text-[#6643ff]">С чем вам нужна помощь?</h1>
              <div className=" bg-[#1c1c3a] px-[100px] py-[50px]">
                <h1 className="text-[24px] text-center">
                  Войдите в свой аккаунт Steam, чтобы просмотреть покупки и
                  статус аккаунта, а также получить персональную помощь.
                </h1>
                <div className="flex flex-row gap-4">
                  <Link to={"/Auth"}>
                    <button className="px-4 py-4 w-60 rounded-md text-base bg-gradient-to-r from-cyan-500 to-blue-500">
                      Войти в Steam
                    </button>
                  </Link>
                  <Link to={"/AccountRecovery"}>
                    <button className="bg-[#2d3d50] w-12/12 py-4 px-2 rounded-md text-base ease-in-out duration-300 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                      Помогите, я не могу войти в свой аккаунт
                    </button>
                  </Link>
                </div>
              </div>
              <Catalog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poddershka;
