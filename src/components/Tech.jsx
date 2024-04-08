import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      style={{
        backgroundColor: "#151030",
        padding: 32,
        paddingBottom: 48,
        borderRadius: 16,
      }}>
      <p className={styles.sectionSubText}>Technologies i have worked with</p>
      <h2 className={styles.sectionHeadText}>Tech</h2>
      <div className="mt-12 gap-10 flex flex-row flex-wrap justify-center">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
            <p className="text-white text-center mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "tech");
