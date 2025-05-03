// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";
import { MdBuild, MdWeb, MdCode  } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";

import {Swiper, SwiperSlide} from "swiper/react"
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// data
const serviceData = [
  {
    icon: <MdCode />,
    title: 'Backend Developement',
    description: 'database management, and API development, performance optimization, robust security protocols.',
  },
  {
    icon: <MdWeb />,
    title: 'Frontend Developement',
    description: 'responsive web development, cross-browser compatibility and accessibility, UI/UX design sensibility',
  },
  {
    icon: <MdBuild />,
    title: 'Devops',
    description: 'infrastructure deployment, continuous integration and continuous deployment (CI/CD), cloud computing',
  },
  {
    icon: <FaLeaf />,
    title: 'GreenIT',
    description: 'reducing carbon footprint, eco-friendly solutions to minimize environmental impact, resoources optimization',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: ' keyword research, on-page optimization, improving website visibility, organics search rankings, SEO best practices',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{320:{slidesPerView:1, spaceBetween:15}, 320:{slidesPerView:3, spaceBetween:15},}} freeMode={true} pagination={{clickable:true}} modules={[FreeMode, Pagination]} className="h-[240px] sm:h-[340px] ">
    {
      serviceData.map((item, index)=>{
          return <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title and desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
      
          </SwiperSlide>
      })
    }
  </Swiper>;
};

export default ServiceSlider;
