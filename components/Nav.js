import Image from "next/image";
import { useState } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";


const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <nav className="px-5 md:h-[4.375rem] w-full relative md:border border-[#141414] flex items-center justify-between md:justify-normal">
      <Image src="/logo.svg" alt="Ultiverse Logo" width={30} height={38} />
      <div className="bg-[#1A1A1A] w-[40rem] h-full ml-4 hidden md:block relative">
        <span className="bg-[#00FFE6] absolute w-[20%] h-[4.375rem]"></span>
      </div>
      <ul className="h-full md:flex items-center hidden">
        <li className="uppercase relative border-[#141414] px-16 border-l border-r font-custom cursor-pointer font-medium text-base h-full flex items-center justify-center">
          About
          <span className=" text-xs absolute text[#1A1A1A] bottom-2 left-3 ">
            001
          </span>
        </li>
        <li className="uppercase relative border-[#141414] px-16 border-l border-r font-custom cursor-pointer font-medium text-base h-full flex items-center justify-center">
          <FaDiscord className=" w-4 h-4" />
          <span className=" text-xs absolute text[#1A1A1A] bottom-2 left-3 ">
            002
          </span>
        </li>
        <li className="uppercase relative border-[#141414] px-16 border-l border-r font-custom cursor-pointer font-medium text-base h-full flex items-center justify-center">
          <FaTwitter className=" w-4 h-4" />
          <span className=" text-xs absolute text[#1A1A1A] bottom-2 left-3 ">
            003
          </span>
        </li>
        <li className="uppercase relative whitespace-nowrap w-full border-[#141414] px-12 border-l border-r font-custom cursor-pointer font-medium text-base h-full flex items-center justify-center">
          Launch Multiverse
          <span className=" text-xs absolute text[#1A1A1A] bottom-2 left-3 ">
            004
          </span>
        </li>
        <li className=" w-full border-[#141414] px-8  font-custom font-medium text-base h-full flex items-center justify-center cursor-pointer">
          <svg
            width="37"
            height="10"
            viewBox="0 0 47 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47 1H1.24513e-06M47 9H7.70988"
              stroke="white"
              stroke-opacity="0.5"
              stroke-width="0.5"
            />
          </svg>
        </li>
      </ul>
      {isMenu && (
        <div className=" bg-black z-50 h-screen w-full p-3 absolute top-10">
          <ul className="h-full flex  flex-col">
            <li className="uppercase relative border-[#141414] px-16 border-l border-r font-custom cursor-pointer font-medium text-base h-full flex items-center justify-center">
              About
              <span className=" text-xs absolute text[#1A1A1A] bottom-2 left-3 ">
                001
              </span>
            </li>
            <li className="uppercase relative border-[#141414] px-16 border-l border-r font-custom cursor-pointer font-medium text-base h-full flex items-center justify-center">
              <FaDiscord className=" w-4 h-4" />
              <span className=" text-xs absolute text[#1A1A1A] bottom-2 left-3 ">
                002
              </span>
            </li>
            <li className="uppercase relative border-[#141414] px-16 border-l border-r font-custom cursor-pointer font-medium text-base h-full flex items-center justify-center">
              <FaTwitter className=" w-4 h-4" />
              <span className=" text-xs absolute text[#1A1A1A] bottom-2 left-3 ">
                003
              </span>
            </li>
            <li className="uppercase relative whitespace-nowrap w-full border-[#141414] px-12 border-l border-r font-custom cursor-pointer font-medium text-base h-full flex items-center justify-center">
              Launch Multiverse
              <span className=" text-xs absolute text[#1A1A1A] bottom-2 left-3 ">
                004
              </span>
            </li>
            <li className=" w-full border-[#141414] px-8  font-custom font-medium text-base h-full flex items-center justify-center cursor-pointer">
              <svg
                width="37"
                height="10"
                viewBox="0 0 47 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47 1H1.24513e-06M47 9H7.70988"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="0.5"
                />
              </svg>
            </li>
          </ul>
        </div>
      )}

      <div onClick={handleMenu} className=" md:hidden">
        {!isMenu ? (
          <svg
            width="37"
            height="10"
            viewBox="0 0 47 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47 1H1.24513e-06M47 9H7.70988"
              stroke="white"
              stroke-opacity="0.5"
              stroke-width="0.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#484848]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
    </nav>
  );
};

export default Nav;
