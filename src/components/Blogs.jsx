import React from "react";
import { blogs } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { Box, Text } from "@chakra-ui/react";

const Blogs = () => {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      style={{
        backgroundColor: "#151030",
        padding: 32,
        paddingBottom: 48,
        borderRadius: 16,
      }}>
      <h2 className={styles.sectionHeadText}>Blogs</h2>
      <div className="mt-12 gap-10">
        {blogs.map((blog, index) => (
          <Box
            mb={4}
            d="flex"
            flex={1}
            paddingLeft={8}
            paddingRight={8}
            paddingBottom={2}
            paddingTop={1}
            borderRadius={8}
            key={blog.name}
            _hover={{ backgroundColor: "black", cursor: "pointer" }}
            backgroundColor={"#191919"}>
            <Text color={"white"} mt={2} fontSize={14}>
              {blog.title}
            </Text>
            <Text mt={2} fontSize={12} color="white-100">
              {blog.description}
            </Text>
          </Box>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Blogs, "blogs");
