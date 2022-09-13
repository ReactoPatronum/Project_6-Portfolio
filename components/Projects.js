import React from "react";
import Image from "next/image";
import styles from "/styles/Projects.module.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import roco from "/public/roco.png";
import twitter from "/public/twitter-image.png";
import milyoner from "/public/milyoner.png";
import ecommerce from "/public/e commerce.png";
import tiktok from "/public/tiktok-project.png";
import satgitsin from "/public/satgitsin.png";

const Projects = () => {
  return (
    <div name="projects" className=" bg-[#0a192f] ">
      <div id="projects" className={styles.container}>
        <div className={styles.projects}>
          <h1 className="text-gray-300 mt-20">Son Projeler</h1>
          <p className="text-gray-400 hover:underline font-semibold">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ReactoPatronum?tab=repositories"
            >
              Github Repo
            </a>
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1qvQav5hNecCkgY77VPQFh-hIxLlDW0Bq/view?usp=sharing"
            rel="noreferrer"
            className="font-semibold text-gray-400 hover:underline text-sm"
          >
            CV &apos; yi Görüntüle
          </a>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={styles.project__swiper}
          initialSlide={1}
        >
          <SwiperSlide className={styles.swiper__slide}>
            <Image src={tiktok} alt="" />
            <h3>Tiktok Klon</h3>
            <p>
              <strong>Kullanılan Teknolojiler:</strong> React, Next.js
              ,Tailwind-Css , Firebase, Sanity CMS , Google Auth , React Context
            </p>
          </SwiperSlide>

          <SwiperSlide className={styles.swiper__slide}>
            <Image src={satgitsin} alt="" />
            <h3>Satgitsin.com</h3>
            <p>
              <strong>Kullanılan Teknolojiler:</strong> React, Next.js
              ,Tailwind-Css , Firebase, Firebase Auth , React Context
            </p>
          </SwiperSlide>

          <SwiperSlide className={styles.swiper__slide}>
            <Image src={ecommerce} alt="" />
            <h3>E-Ticaret Websitesi</h3>
            <p>
              <strong>Kullanılan Teknolojiler:</strong> React, Next.js , Redux,
              Sanity CMS ,Tailwind-Css , Auth0
            </p>
          </SwiperSlide>

          <SwiperSlide className={styles.swiper__slide}>
          <Image src={milyoner} alt="" />
          <h3>Kim Milyoner Olmak İster</h3>
          <p>
            <strong>Kullanılan Teknolojiler:</strong> React, Next.js,Tailwind-Css
         
          </p>
        </SwiperSlide>

          <SwiperSlide className={styles.swiper__slide}>
            <Image src={twitter} alt="" />
            <h3>Twitter App</h3>
            <p>
              <strong>Kullanılan Teknolojiler:</strong> React, Next.js ,
              Firebase,Tailwind-Css , Firebase-Authentication , React Context
            </p>
          </SwiperSlide>

          <SwiperSlide className={styles.swiper__slide}>
            <Image src={roco} alt="" />
            <h3>Rocorise</h3>
            <p>
              <strong>Kullanılan Teknolojiler:</strong> React, Next.js
              ,Tailwind-Css , Firebase
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
