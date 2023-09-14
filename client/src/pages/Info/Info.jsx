import React, { useRef, useEffect, useState } from "react";
import Header from "../../Header/Header";
import Images from "../../images/logo_steam.svg";
import Pubg from "../../images/Pubg.jpg";
import SteamDeck from "../../images/Steamdeck.jpg";
import Gta from "../../images/GTA.jpg";
import Gule from "../../images/Gule.jpg";
import Duty from "../../images/Duty.jpg";
import Dead from "../../images/Dead.jpg";
import Destiny from "../../images/Destiny.jpg";
import Naraka from "../../images/Naraka.jpg";
import Rainbow from "../../images/Rainbow.jpg";
import Legens from "../../images/Dota.jpg";
import Video from "../../Video/Portal2.mp4";
import { Element } from "react-scroll";
import Container3 from "../Info/Container3";
import Container4 from "./Container4";
import { Link } from "react-router-dom";

const Info = () => {
  const scrollRef = useRef();

  const scrollToPosition = () => {
    const targetPosition = 1000; // Замените на желаемую позицию в пикселях
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const imageLeft = document.querySelector(".element-left");
    const imageRight = document.querySelector(".element-right");
    const imagePredLeft = document.querySelector(".element-Predleft");
    const imagePredRight = document.querySelector(".element-Predright");
    const imageLeft3 = document.querySelector(".element-left3");
    const imageRight3 = document.querySelector(".element-right3");
    const imageLeft4 = document.querySelector(".element-left4");
    const imageRight4 = document.querySelector(".element-right4");
    const imageLeft5 = document.querySelector(".element-left5");
    const imageRight5 = document.querySelector(".element-right5");
    const windowHeight = window.innerHeight;

    if (imageLeft && imageRight && imagePredLeft && imagePredRight) {
      const rectLeft = imageLeft.getBoundingClientRect();
      const rectRight = imageRight.getBoundingClientRect();
      const rectPredLeft = imagePredLeft.getBoundingClientRect();
      const rectPredRight = imagePredRight.getBoundingClientRect();
      const rectLeft3 = imageLeft3.getBoundingClientRect();
      const rectRight3 = imageRight3.getBoundingClientRect();
      const rectLeft4 = imageLeft4.getBoundingClientRect();
      const rectRight4 = imageRight4.getBoundingClientRect();
      const rectLeft5 = imageLeft5.getBoundingClientRect();
      const rectRight5 = imageRight5.getBoundingClientRect();

      if (rectLeft.top < windowHeight * 0.75) {
        imageLeft.style.opacity = 1;
      }

      if (rectRight.top < windowHeight * 0.75) {
        imageRight.style.opacity = 1;
      }
      if (rectPredLeft.top < windowHeight * 0.75) {
        imagePredLeft.style.opacity = 1;
      }
      if (rectPredRight.top < windowHeight * 0.75) {
        imagePredRight.style.opacity = 1;
      }
      if (rectLeft3.top < windowHeight * 0.75) {
        imageLeft3.style.opacity = 1;
      }

      if (rectRight3.top < windowHeight * 0.75) {
        imageRight3.style.opacity = 1;
      }
      if (rectLeft4.top < windowHeight * 0.75) {
        imageLeft4.style.opacity = 1;
      }

      if (rectRight4.top < windowHeight * 0.75) {
        imageRight4.style.opacity = 1;
      }
      if (rectLeft5.top < windowHeight * 0.75) {
        imageLeft5.style.opacity = 1;
      }

      if (rectRight5.top < windowHeight * 0.75) {
        imageRight5.style.opacity = 1;
      }
    }
  }

  scrollRef.current = scrollToPosition;
  let min = 3256325;
  let max = 46734374;
  let summer = Math.floor(Math.random() * (max - min + 1) + min);
  let min2 = 25364;
  let max2 = 569448;
  let summer2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);
  return (
    <div className="bg-[#1D2024] w-100% h-[2800px]">
      <Header />
      <div className="flex-col flex text-white pt-20 pl-80">
        <div className="flex flex-row relative">
          <div className="flex flex-col w-[400px]">
            <img className="w-64 h-32" src={Images} alt="" />
            <h1 className="text-2xl w-9/12 pl-[80px]">
              Steam — превосходная платформа для игроков и разработчиков.
            </h1>
            <div className="flex flex-row gap-16 pt-6">
              <div className="felx flex-col gap-4">
                <h3 className="text-sky-500">в сети</h3>
                <h1 className="text-2xl">{summer}</h1>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lime-500">в игре</h3>
                <h1 className="text-2xl">{summer2}</h1>
              </div>
            </div>
            <div className="pt-6">
              <Link to={"/DownloadLocalWebsite"}>
                <button className="bg-gradient-to-r from-sky-500 to-indigo-500 w-60 h-12 rounded-xl">
                  download Steam
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-row relative w-[700px] z-20 h-full">
            <div className="">
              <img
                className="pr-40 px-6"
                src="https://cdn.akamai.steamstatic.com/store/about/videos/about_hero_loop_web.png"
                alt=""
              />
              <video
                className="px-[200px] pl-[210px] pr-[198px] pt-[156px] flex absolute z-10"
                autoPlay
                muted
                loop
              >
                <source src={Video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1200px] bg-[#1D2024] w-100%">
        <div className="flex text-white justify-center pb-96">
          <button onClick={() => scrollRef.current()}>DOWN</button>
        </div>
        <div className="rounded-full shadow-[0_30px_1400px_200px_rgba(100,100,250,0.1)] flex flex-col gap-4 bg-gray-800 justify-center m-auto text-center text-white w-[1200px] h-[420px] text-xl">
          <div className="w-100%">
            <div className="">
              <Link to={"/Page1"}>
                <Element
                  name="imageLeft3"
                  className="element-left3 w-80 pb-12 px-20"
                >
                  <img src={Pubg} alt="Image Left3" />
                </Element>
              </Link>
              <Link to={"/Page1"}>
                <Element
                  name="imageRight3"
                  className="element-right3  pb-12 px-20 pl-32"
                >
                  <img src={SteamDeck} alt="Image Right3" />
                </Element>
              </Link>
            </div>
            <div className="">
              <Link to={"/Page1"}>
                <Element
                  name="imageLeft4"
                  className="element-left4 pl-64 pb-12 px-20"
                >
                  <img src={Gta} alt="Image Left4" />
                </Element>
              </Link>
              <Link to={"/Page1"}>
                <Element
                  name="imageRight4"
                  className="element-right4 pr-64 pb-12 px-20"
                >
                  <img src={Legens} alt="Image Right4" />
                </Element>
              </Link>
            </div>
            <div className="">
              <Link to={"/Page1"}>
                <Element
                  name="imageLeft5"
                  className="element-left5 pb-12 px-20"
                >
                  <img src={Destiny} alt="Image Left5" />
                </Element>
              </Link>
              <Link to={"/Page1"}>
                <Element
                  name="imageRight5"
                  className="element-right5 w-80 pb-12 px-20"
                >
                  <img src={Duty} alt="Image Right5" />
                </Element>
              </Link>
            </div>
          </div>
          <div className="w-96 m-auto">
            <b className="text-4xl">Мгновенный доступ к играм</b>
            <h1 className="">
              Steam предлагает около 30 000 игр на любой вкус, а также
              эксклюзивные предложения, автоматическое обновление игр и другие
              замечательные возможности.
            </h1>
            <button className="text-[#3d3d9f]">Catalog</button>
          </div>
        </div>
        <Link to={"/Page1"}>
          <Element name="imageLeft" className="element-left pl-12">
            <img className="w-40" src={Dead} alt="Image Left" />
          </Element>
        </Link>
        <Link to={"/Page1"}>
          <Element name="imageRight" className="element-right">
            <img src={Gule} alt="Image Right" />
          </Element>
        </Link>
        <Link to={"/Page1"}>
          <Element name="imagePredLeft" className="element-Predleft">
            <img src={Naraka} alt="image PredLeft" />
          </Element>
        </Link>
        <Link to={"/Page1"}>
          <Element name="imagePredRight" className="element-Predright">
            <img className="w-56" src={Rainbow} alt="image PredRight" />
          </Element>
        </Link>
      </div>
      <div>
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
};

export default Info;
