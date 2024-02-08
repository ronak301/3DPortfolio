import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

export default function SectionWrapper(Component, idName) {
  return function HOC() {
    return (
      <motion.section
        id={idName}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer()}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        style={styles.section}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
}
