import React, { useEffect } from "react";
import { Element } from "react-scroll";

const Container3 = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const imageLeft10 = document.querySelector(".element-left10");
    const imageRight10 = document.querySelector(".element-right10");
    const imageLeft15 = document.querySelector(".element-left15");
    const imageRight15 = document.querySelector(".element-right15");
    const imageLeft16 = document.querySelector(".element-left16");
    const imageRight16 = document.querySelector(".element-right16");
    const windowHeight = window.innerHeight;

    if (imageLeft10 && imageRight10) {
      const rectLeft10 = imageLeft10.getBoundingClientRect();
      const rectRight10 = imageRight10.getBoundingClientRect();
      const rectLeft15 = imageLeft15.getBoundingClientRect();
      const rectRight15 = imageRight15.getBoundingClientRect();
      const rectLeft16 = imageLeft16.getBoundingClientRect();
      const rectRight16 = imageRight16.getBoundingClientRect();

      if (rectLeft10.top < windowHeight * 0.75) {
        imageLeft10.style.opacity = 1;
      }

      if (rectRight10.top < windowHeight * 0.75) {
        imageRight10.style.opacity = 1;
      }
      if (rectLeft15.top < windowHeight * 0.75) {
        imageLeft15.style.opacity = 1;
      }

      if (rectRight15.top < windowHeight * 0.75) {
        imageRight15.style.opacity = 1;
      }
      if (rectLeft16.top < windowHeight * 0.75) {
        imageLeft16.style.opacity = 1;
      }

      if (rectRight16.top < windowHeight * 0.75) {
        imageRight16.style.opacity = 1;
      }
    }
  }
  return (
    <div className="w-100% h-[1400px] bg-[#1a1c1f]">
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-center m-auto pt-32 gap-8">
          <h1 className="w-96 text-3xl text-white pt-32">
            <b className="text-bold text-4xl">Вступайте в сооб</b>
            -Заводите знакомства, вступайте в группы, общайтесь и не только!
            Более 100 миллионов возможных друзей (или врагов) не дадут вам
            соскучиться.
          </h1>
          <div className="pt-32 w-96 h-60">
            <Element name="imageLeft10" className="element-left10">
              <img
                className="w-96 h-60"
                src="https://cdn.akamai.steamstatic.com/store/about/cta_hero_community.png"
                alt="Image Left"
              />
            </Element>
            <Element name="imageRight10" className="element-right10"></Element>
          </div>
        </div>
        <div className="flex flex-row justify-center m-auto gap-8">
          <div className="pt-32 w-96 h-60">
            <Element name="imageLeft15" className="element-left15">
              <img
                className="w-96 h-80"
                src="https://cdn.akamai.steamstatic.com/store/about/cta_hero_hardware.png"
                alt="Image Left"
              />
            </Element>
            <Element name="imageRight15" className="element-right15"></Element>
          </div>
          <h1 className="w-96 text-3xl text-white pt-32">
            <b className="text-bold text-4xl">Выпустите свою игру</b> Steamworks
            — это набор инструментов и служб, которые помогают издателям и
            разработчикам эффективно распространять игры в Steam.
          </h1>
        </div>
        <div className="flex flex-row justify-center m-auto gap-8">
          <h1 className="w-96 text-3xl text-white pt-32">
            <b className="text-bold text-4x">Попробуйте устройства</b> Steam Мы
            разработали Steam Deck и шлем Valve Index, чтобы играть в
            компьютерные игры было ещё лучше.
          </h1>
          <div className="pt-32 w-96 h-60">
            <Element name="imageLeft16" className="element-left16">
              <img
                className="w-96 h-60"
                src="https://cdn.akamai.steamstatic.com/store/about/cta_hero_steamworks.png"
                alt="Image Left"
              />
            </Element>
            <Element name="imageRight16" className="element-right16"></Element>
          </div>
        </div>
      </div>
      <div className="w-96 justify-between ml-2">
        <div className="flex flex-row gap-12 pl-4 justify-center m-auto"></div>
      </div>
    </div>
  );
};

export default Container3;
