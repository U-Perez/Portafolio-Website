"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={250}
            height={250}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hey, Urias
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-700">
              Software Engineer{" "}
            </span>
            recent graduate from the technological university of the
            Riviera Maya, Qroo
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default HomePage;
