import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import {motion} from 'framer-motion';
import { fadeIn } from "../../variants";

const Work = () => {
  return <div className="h-full bg-primary/30 py-36 flex items-center">
    <Circles/>
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/* text */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 lg:ml-20 xl:mb-0">
          <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 xl:mt-12" style={{fontSize:47}}>My Work<span className="text-accent">.</span></motion.h2>
          <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className="mb-4 maw-w-[400px] mx-auto lg:mx-0">Throughout my 3 years of professional experience and years of academic study, I&apos;ve had the opportunity to undertake several projects. Each project has been crafted with care, prioritizing ease of maintenance and meticulously adhering to essential design patterns in the IT industry. Here&apos;s a glimpse of some of these projects:</motion.p>  
        </div>
        <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%] ml-auto">
          {/*slider */}
          <WorkSlider/>
        </motion.div>
       
      </div>
    </div>
    <Bulb/>
  </div>;
};

export default Work;
