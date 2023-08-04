import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomCursor from "./cursor";
import PopUp from "./PopUp";

const Characters = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const flippingElements = document.querySelectorAll(".flip-animation");

    flippingElements.forEach((element, index) => {
      setInterval(() => {
        element.classList.add("reverse-flip-animation");
      }, (index + 1) * 4000);
    });
  }, []);
  return (
    <div className="bg-image flex items-center justify-center">
      <CustomCursor />
      <div
        onClick={openPopup}
        className="content absolute bottom-0 hidden md:block  z-50 right-0 mt-48"
      >
        <Image src="/union3.png" width={350} height={400} />
        <span
          className={`absolute bg-white bg-opacity-10 shadow-md rounded-full z-50 w-20 h-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse ${
            isHovered ? "hovered" : ""
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="absolute bg-white bg-opacity-20 shadow-md rounded-full w-16 h-16 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <span className="absolute bg-white bg-opacity-30 shadow-md rounded-full w-10 h-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse flex items-center justify-center">
              <button className="cursor-pointer ">
                <img src="/play.png" alt="play button" />
              </button>
            </span>
          </span>
        </span>
      </div>
      <div className=" image-wrapper z-10">
        <img src="/Tips2.png" alt="" />
      </div>
      <div className="glow hidden md:block">
        <div className="overlay"></div>
      </div>
      <div className=" w-full md:hidden h-full bg-black absolute bg-opacity-50 z-40 flex items-center justify-center">
        <div className=" bg-white bg-opacity-20 rounded-full animate-pulse">
          <button className="   p-5" onClick={openPopup}>
            <img src="/play.png" alt="play button" />
          </button>
        </div>
      </div>
      <div className="  font-custom  flex flex-col w-full gap-[100px] md:gap-2 z-30 ml-4 md:mt-40">
        <div className=" flex gap-2 ">
          <span className=" text-secondaryColor hidden md:block">001</span>
          <span className=" flip-animation" data-delay="0">
            <img className=" h-[8.75rem]" src="/i.svg" alt="" />
          </span>
          <span className=" flip-animation" data-delay="1000">
            <img className=" h-[8.75rem]" src="/m.svg" alt="" />
          </span>
          <span className=" flip-animation" data-delay="2000">
            <img className=" h-[8.75rem]" src="/m.svg" alt="" />
          </span>
          <span className=" flip-animation" data-delay="3000">
            <img className=" h-[8.75rem]" src="/e.svg" alt="" />
          </span>
          <span className=" flip-animation" data-delay="4000">
            <img className=" h-[8.75rem]" src="/r.svg" alt="" />
          </span>
          <span className=" flip-animation" data-delay="5000">
            <img className=" h-[8.75rem]" src="/s.svg" alt="" />
          </span>
          <span className=" flip-animation" data-delay="6000">
            <img className=" h-[8.75rem]" src="/i.svg" alt="" />
          </span>
          <span className=" flip-animation" data-delay="0">
            <img className=" h-[8.75rem]" src="/v.svg" alt="" />
          </span>
          <span className=" flip-animation" data-delay="7000">
            <img className=" h-[8.75rem]" src="/e.svg" alt="" />
          </span>
        </div>
        <div className=" flex gap-2 md:ml-20 ">
          <span>
            <img className=" h-[8.75rem]" src="/m.svg" alt="" />
          </span>
          <span>
            <img className=" h-[8.75rem]" src="/e.svg" alt="" />
          </span>
          <span>
            <img className=" h-[8.75rem]" src="/t.svg" alt="" />
          </span>
          <span>
            <img className=" h-[8.75rem]" src="/a.svg" alt="" />
          </span>
          <span>
            <img className=" h-[8.75rem]" src="/vv.svg" alt="" />
          </span>
          <span>
            <img className=" h-[8.75rem]" src="/e.svg" alt="" />
          </span>
          <span>
            <img className=" h-[8.75rem]" src="/r.svg" alt="" />
          </span>
          <span>
            <img className=" h-[8.75rem]" src="/s.svg" alt="" />
          </span>
          <span>
            <img className=" h-[8.75rem]" src="/e.svg" alt="" />
          </span>
        </div>
      </div>
      {isPopupOpen && <PopUp onClose={closePopup} />}
    </div>
  );
};

export default Characters;
