import React from "react";

const PopUp = ({ onClose }) => {
  return (
    <div className="fixed popup inset-0 flex  items-center justify-center z-40  bg-black ">
      <div className="w-full h-screen flex flex-col -mt-28 items-center z-20 justify-center relative">
        <img className="max-w-[90%] h-auto z-30" src="/popup34.png" alt="" />
        <div className="glow-overlay w-32 h-32 md:w-96 md:h-96"></div>
        <button
          onClick={onClose}
          className="absolute flex items-center bottom-28 p-4 cursor-pointer btn left-32 z-50"
        >
          <img src="/cancel.png" alt="Cancel" />
        </button>
        <div className=" flex font-custom fixed md:flex-row bottom-5 flex-col items-center px-4 justify-center">
        <span className=" md:flex gap-2 mr-6 hidden">
          <img src="/Rectangle 16.svg" alt="" />
          <img src="/Rectangle 12.svg" alt="" />
          <img src="/Rectangle 13.svg" alt="" />
          <img src="/Rectangle 14.svg" alt="" />
          <img src="/Rectangle 15.svg" alt="" />
        </span>
        <p className=" md:max-w[480px] text-sm md:text-base">
          UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO CREATE A SOCIAL AND
          IMMERSIVE GAMING METAVERSE.
        </p>
      </div>
      </div>
      
    </div>
  );
};

export default PopUp;
