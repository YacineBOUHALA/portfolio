import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import {motion} from 'framer-motion';
import { fadeIn } from "../../variants";

const Services = () => {
  return <div className="h-full bg-primary/30 py-36 flex items-center">
    <Circles/>
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/* text */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 lg:ml-20 xl:mb-0">
          <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 xl:mt-8" style={{fontSize:47}}>My services<span className="text-accent">.</span></motion.h2>
          <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className="mb-4 maw-w-[400px] mx-auto lg:mx-0">With 2 years of experience under my belt and a Master&apos;s degree in software and web architecture, I have developed a comprehensive set of cross-functional and full-stack skills in the field of IT. Here is a glimpse of my abilities:</motion.p>  
        </div>
        <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%]">
          {/*slider */}
          <ServiceSlider/>
        </motion.div>
       
      </div>
    </div>
    <Bulb/>
  </div>;
};

export default Services;
