"use client";

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:items-start"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-[100px] xl:py-[60px]">
          {/* text */}
          <div className="flex flex-col gap-5 order-2 xl:order-none w-auto max-w-[490px] text-center xl:text-left">
            {/* hello */}
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="max-h-[150px]"
            >
              <h1 className="h1">
                Hello!
                <br />
                I'm <span className="text-accent">Karthik</span>
              </h1>
            </motion.div>
            {/* bio */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-2 xl:ml-12"
            >
              <h3 className="h3 text-white/60">Data Analyst</h3>
              <p className="p max-w-[312px]">
              I shape ideas into interactive web experiences and insightful data models, one cup of coffee at a time!
              </p>
            </motion.div>
            {/* take action */}
            <motion.h3
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h3 xl:ml-24"
            >
              Let's create something <br />
              remarkable together!
            </motion.h3>
            {/* btn and socials */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col xl:flex-row xl:mt-[5px] items-center gap-8"
            >
              <a href="/assets/resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
          {/* photo */}
          <div className="mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </motion.div>
  );
};

export default Home;