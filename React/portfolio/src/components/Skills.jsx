import React from "react";
import { motion } from "framer-motion";
import {
  AiFillIeCircle,
  AiFillReconciliation,
  AiOutlineJava,
  AiOutlineJavaScript,
} from "react-icons/ai";

const Skills = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "-100%",
      opacity: 0,
    },
    twoAndThree: {
      y: "-100%",
      opacity: 0,
    },
    four: {
      x: "100%",
      opacity: 0,
    },
  };
  return (
    <div id="skills">
      <h2>Skills</h2>
      <section>
        <motion.div
          className="skillBox1"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay:0.2
          }}
        >
          <AiFillReconciliation />
          <span>React Js</span>
        </motion.div>
        <motion.div
          className="skillBox2"
          initial={animations.twoAndThree}
          whileInView={animations.whileInView}
        >
          <AiOutlineJava />
          <span>Java</span>
        </motion.div>

        <motion.div
          className="skillBox3"
          initial={animations.four}
          whileInView={animations.whileInView}
        >
          <AiOutlineJavaScript />
          <span>Java Script</span>
        </motion.div>
        <motion.div
          className="skillBox4"
          initial={animations.one}
          whileInView={animations.whileInView}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
