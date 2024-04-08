import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useState, useRef } from "react";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_9hfaizs",
        "template_gsnhsog",
        {
          from_name: form.name,
          to_name: "Ronak",
          from_email: form.email,
          to_email: "ronakkothari301@gmail.com",
          message: form.message,
        },
        "uguF-eDxbSv_0uBhG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("I will get back to you as soon as possible!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Something went wrong! Please try again.");
        }
      );
  };

  return (
    <div className="shadow-xl xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full xl:w-1/2 flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-white px-6 py-4 text-black rounded-lg text-black outlined-none norder-none font-medium"
              placeholder="What's your name?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-white px-6 py-4 text-black rounded-lg text-black outlined-none norder-none font-medium"
              placeholder="What's your email?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-white px-6 py-4 text-black rounded-lg text-black outlined-none norder-none font-medium"
              placeholder="What do you want to say?"
            />
          </label>
          <button
            type="submit"
            className="bg-black py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
