import React from "react";
import react from "/public/react.png";
import firebase from "/public/firebase.webp";
import next from "/public/next.jpeg";
import redux from "/public/redux.png";
import sanity from "/public/sanity.png";
import tailwind from "/public/tailwind.png";
import html from "/public/html.png";
import css from "/public/css.png";
import Skill from "./Skill";
import {motion} from "framer-motion"

const Skills = () => {
  return (
    <div className=" bg-[#0a192f] text-gray-300" name="skills">
      <motion.div
       whileInView={{x: [-200, 0] , opacity: [0, 1] }}
       transition={{ duration: 1 ,delay:"0"}}
      className="max-w-[1000px] mx-auto p-4 flex-flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl font-bold inline border-b-4 border-pink-600">
            Kullandığım Teknolojiler
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <Skill name="react" src={react} />
          <Skill name="next.js" src={next} />
          <Skill name="sanity.io" src={sanity} />
          <Skill name="redux" src={redux} />
          <Skill name="firebase" src={firebase} />
          <Skill name="tailwind css" src={tailwind} />
          <Skill name="html" src={html} />
          <Skill name="css" src={css} />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
