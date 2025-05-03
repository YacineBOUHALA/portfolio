// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Woob",
          path: "/themp2.png",
          url: "https://woob.dev/",
        },
        {
          title: "Risend Roboter",
          path: "/themp1.png",
          url: "https://github.com/YacineBOUHALA/Rasende-Roboter",
        },
        {
          title: "hashiwakakero auto-solver",
          path: "/hashi.png",
          url: "https://github.com/YacineBOUHALA/Hashiwokakero",
        },
        {
          title: "aws project: ITravel",
          path: "/itravel.png",
          url: "https://github.com/YacineBOUHALA/ITravel",
        },
      ],
    },
    {
      images: [
        {
          title: "CI/CD automatic deploy",
          path: "/ciCD.png",
          url: "https://github.com/YacineBOUHALA/aws-ci_cd-automatic-deploy",
        },
        {
          title: "Saren&co",
          path: "/saren.png",
          url: "https://www.compagniedemenagement.fr/transport/",
        },
        {
          title: "SEO problematic",
          path: "/SEO.png",
          url: "https://github.com/YacineBOUHALA/SEO_problematic_myflix/tree/main/SEO",
        },
        {
          title: "snake Game",
          path: "/snake.png",
          url: "https://github.com/YacineBOUHALA/snake",
        },
      ],
    },
  ],
};

// icons
import { BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative rounded-lg overflow-hidden felx items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden">
                  <Image src={image.path} width={500} height={300} alt="" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">
                        <a href={image.url}>{image.title}</a>
                      </div>
                      <div className="translate-y-[500%] group-hover-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"></div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
