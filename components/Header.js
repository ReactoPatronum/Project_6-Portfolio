/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/E.O.png";
import { MenuIcon, XIcon, PhoneIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Header = () => {
  const [isTrue, setIsTrue] = useState(true);

  
  const handleClick = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div className="w-full font-bold h-[80px] flex justify-between lg:justify-around items-center px-4 bg-[#0a192f] text-gray-300 z-110">
      <div className="">
        <Image alt="" width={80} height={50} src={logo} />
      </div>
      <div className="hidden md:flex ">
        <ul className="flex space-x-6 text-xl">
          <li className="cursor-pointer">
            {" "}
            <Link to="mainpage" smooth={true} duration={500}>
              Anasayfa
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Beceriler
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              Projeler
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              İletişim
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!isTrue ? <XIcon className="w-8" /> : <MenuIcon className="w-8" />}
      </div>
      <motion.ul
        animate={isTrue ? { x: -1000 } : { x: 0 }}
        transition={{ duration: 0.65 }}
        className={
          !isTrue
            ? "absolute top-0 left-0 w-full flex bg-[#0a192f] md:hidden flex-col justify-center items-center "
            : "hidden"
        }
      >
        <li className="py-6 text-3xl cursor-pointer">
          {" "}
          <Link to="mainpage" smooth={true} duration={500}>
            Anasayfa
          </Link>
        </li>
        <li className="py-6 text-3xl cursor-pointer">
          <Link to="skills" smooth={true} duration={500}>
            Beceriler
          </Link>
        </li>
        <li className="py-6 text-3xl cursor-pointer">
          <Link to="projects" smooth={true} duration={500}>
            Projeler
          </Link>
        </li>
        <li className="py-6 text-3xl cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            İletişim
          </Link>
        </li>
      </motion.ul>
      <div className=" font-bold hidden lg:flex fixed flex-col top-[35%] left-2.5">
        <ul>
          <li className="p-1  w-[130px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/ReactoPatronum?tab=repositories"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="cursor-default p-1  w-[300px] hover:w-[260px] h-[60px] flex justify-between items-center ml-[-270px] hover:ml-[-10px] duration-300 bg-blue-400">
            <h2> emrekaydin2@gmail.com</h2>
            <HiOutlineMail className="w-[30px] h-[30px] text-white " />
          </li>
          <li className="cursor-default p-1  w-[200px] hover:w-[150px] h-[60px] flex justify-between items-center ml-[-170px] hover:ml-[-10px] duration-300 bg-green-400">
            <h2> 5370552554</h2>
            <PhoneIcon className="w-[30px] h-[30px] text-white " />
          </li>
          <li className="p-1  w-[130px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1qvQav5hNecCkgY77VPQFh-hIxLlDW0Bq/view?usp=sharing"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              CV İndir <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
