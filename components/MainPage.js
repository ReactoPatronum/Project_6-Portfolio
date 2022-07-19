import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion"; 
import { Link } from "react-scroll";

const MainPage = () => {
  return (
    <div
    name="mainpage" className="bg-[#0a192f] w-full h-screen">
      <motion.div
      whileInView={{x: [-200, 0] , opacity: [0, 1] }}
      transition={{ duration: 1 ,delay:"0"}}
      className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Selam , Ben <motion.span
           whileInView={{x: [-400, 0] , opacity: [0, 1] }}
           transition={{ duration: 1 ,delay:"1"}}
          className="text-red-500">Emre</motion.span>
        </h1>
        <h2 className="text-4xl sm:text-7xl text-[#8892b0]">
          Self-Taught React DEV
        </h2>
        <p className="text-[#8892b0] text-xl py-4 max-w-[700px]">
          Yeni teknolojilerle çalışmayı seven bir react geliştiricisiyim. Şuan
          da ise responsive full-stack uygulamalar ile uğraşıyorum.
        </p>
        <div>
        <Link to="projects" smooth={true} duration={500}>
        <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-200">
            Projeleri Gör <span className="group-hover:rotate-90 transition-all duration-200"><ArrowRightIcon className="w-5 ml-4 " /></span>
          </button>
            </Link>
          
        </div>
      </motion.div>
    </div>
  );
};

export default MainPage;
