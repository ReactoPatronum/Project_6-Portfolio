import React from "react";
import Image from "next/image";

const Skill = ({src,name}) => {
  return (
    <div className=" shadow-[#040c16] hover:scale-110 duration-500 rounded-full">
      <Image width={200} height={200} objectFit="cover"  alt="x" src={src} />
      <p className="font-bold text-lg">{name.toUpperCase()}</p>
    </div>
  );
};

export default Skill;
