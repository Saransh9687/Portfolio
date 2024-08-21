import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";

const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I'm
            <br />
            Saransh Mittal
          </motion.h1>

          <Typewriter
            options={{
              strings: ["Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
        <div>
          <a href="mailto:msaransh56@gmail.com">Hire me</a>
          <a href="#projects">Projects <BsArrowUpRight/></a>
        </div>

        </div>
        
      </section>

      <section> 
        <img src="" alt="Saransh Mittal" />

      </section>
      <BsChevronDown/>
    </div>
  );
};

export default Home;
