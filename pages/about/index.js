/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import styles from './skils.module.css';
import React, { useState } from "react";

// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPhp,
  FaJava,
  FaAngular,
  FaBootstrap,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiSymfony,
  SiPython,
  SiDjango,
  SiSpring,
  SiTerraform,
  SiJenkins,
  SiGithub,
  SiGitlab,
  SiAnsible,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

// Data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: (
          <>
            Backend <br /> Development
          </>
        ),
        icons: [
          { icon: <FaPhp />, text: "PHP" },
          { icon: <SiSymfony />, text: "Symfony" },
          { icon: <SiPython />, text: "Python" },
          { icon: <SiDjango />, text: "Django" },
          { icon: <FaJava />, text: "Java" },
          { icon: <SiSpring />, text: "Spring" },
        ],
      },
      {
        title: (
          <>
            Front <br /> Development
          </>
        ),
        icons: [
          { icon: <FaHtml5 />, text: "HTML5" },
          { icon: <FaCss3 />, text: "CSS3" },
          { icon: <FaJs />, text: "JavaScript" },
          { icon: <FaReact />, text: "React" },
          { icon: <FaAngular />, text: "Angular" },
          { icon: <SiNextdotjs />, text: "Next.js" },
          { icon: <SiTailwindcss />, text: "Tailwind" },
          { icon: <FaBootstrap />, text: "Bootstrap" },
        ],
      },
      {
        title: "Devops",
        icons: [
          { icon: <FaAws />, text: "AWS" },
          { icon: <SiTerraform />, text: "Terraform" },
          { icon: <SiJenkins />, text: "Jenkins" },
          { icon: <SiGithub />, text: "Github" },
          { icon: <SiGitlab />, text: "Gitlab" },
          { icon: <SiAnsible />, text: "Ansible" },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack dev - Powens- Django, ReactJs",
        stage: "2023 / Today",
      },
      {
        title: "Backend developper - Powens- Python, SQL",
        stage: "2022 / 2023",
      },
      {
        title: "Intern - Saren & co - Symfony, SQL, twig",
        stage: "2021 ",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: <>M1, M2 in software and web architecture IEF2I</>,
        stage: "2022/2024",
      },
      {
        title: "L3 Computer Science Diploma - UFR Rouen",
        stage: "2019/2022",
      },
      {
        title: "L3 Electromechanical Diploma - UFR Monpelier  ",
        stage: "2016/2019",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
        style={{ marginLeft: 280, scale: 2, marginBottom: 100 }}
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row mr-1 gap-x-0 z-10 mt-4">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center z-10">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent software
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="maw-w-[500px] mx:auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            2 years ago, I began working as a software engineer. Since then,
            I've a very pationating projects and collaborated on digital
            products for business and consumer use.{" "}
          </motion.p>
          {/*counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl-max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                {/*experiences */}
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={3} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                {/*experiences */}
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={2} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied companies
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                {/*experiences */}
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={20} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                {/*experiences */}
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={5} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Masters
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {" "}
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-row md:flex-row max-w-max gap-x-2 item-center text-white/60 "
              >
                <div className="font-light mb-2 md:mb-0  w-30">
                  {/*title */}
                  {item.title}
                </div>
                <div className="hidden md:flex">-</div>
                <div className="hidden md:flex">{item.stage}</div>
                {/* icons */}
                <div
                  className={`flex gap-x-3 ${
                    index === 0 ? "flex-row w-[340px] overflow-x-scroll" : ""
                  } ${styles["custom-scrollbar"]} ${styles["skils"]}`}
                >
                  {item.icons?.map((iconItem, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col items-center">
                      <div className="text-2xl text-white">{iconItem.icon}</div>
                      <div className="text-white">{iconItem.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
