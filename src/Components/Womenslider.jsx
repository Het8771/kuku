import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import women from "../assets/images/women.png";
import fullframe from "../assets/images/fullframe.svg";
import necklase from "../assets/images/necklase.svg";
import earrings from "../assets/images/earrings.svg";

const images = [women, fullframe, necklase, earrings];

function Womenslider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen flex items-center justify-center overflow-hidden relative">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Jew"
          className="w-full h-full object-cover absolute"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </section>
  );
}

export default Womenslider;

