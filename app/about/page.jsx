"use client";


import { FaDatabase, FaAws, FaPython, FaTable, FaFileExcel } from "react-icons/fa";


import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { motion } from "framer-motion";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// about data
const about = {
  title: "About me",
  description:
   "Driven by a passion for data analytics and development, I specialize in creating insightful dashboards and interactive web experiences. With strong skills in SQL, Power BI, and Python, I aim to bridge the gap between raw data and actionable insights, empowering businesses and individuals to achieve their goals.",
   info: [
    {
      fieldName: "Name",
      fieldValue: "Karthik Medaka",
    },
    {
      fieldName: "Experience",
      fieldValue: "0.5+ Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 6281209224",
    },
    {
      fieldName: "Email",
      fieldValue: "karthik123medaka@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "India",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Telugu",
    },
  ],

};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Skilled in data analytics and programming, I utilize modern tools and technologies to transform raw data into meaningful insights and deliver efficient solutions.",
  skillList: [
    {
      icon: <FaDatabase />, // General database icon
      name: "SQL Server",
    },
    {
      icon: <FaTable />, // General table icon for Power BI
      name: "Power BI",
    },
    {
      icon: <FaPython />, // Python programming
      name: "Python",
    },
    {
      icon: <FaFileExcel />, // Excel file icon
      name: "Excel",
    },
    {
      icon: <FaAws />, // AWS cloud icon
      name: "AWS",
    },
  ],
};



// experience data


// education data
const education = {
  icon: "/assets/about/cap.svg", // Adjust the icon path if needed
  title: "My Education",
  description:
    "Solid academic foundation in Information Technology, enriched by practical projects and certifications.",
  items: [
    {
      institution: "Bapatla Engineering College",
      degree: "Bachelor of Technology in Information Technology",
      duration: "2022 - 2025",
    },
    {
      institution: "AANM & VVRSR Polytechnic, Gudlavalleru",
      degree: "Diploma in Information Technology",
      duration: "2019 - 2022",
    },
    {
      institution: "Z.P.H.S.",
      degree: "High School (Class 10)",
      duration: "2018 - 2019",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6 xl:items-start"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[25vh]">
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-4">
                  <h2 className="h2">{about.title}</h2>
                  <p className="p">{about.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent uppercase">
                            {item.fieldName}
                          </span>
                          <h3 className="text-xl text-center lg:text-left">
                            {item.fieldValue}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-4">
                  <h2 className="h2">{skills.title}</h2>
                  <p className="p">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex flex-col justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              {/* Display the skill name directly on smaller screens */}
                              <p className="text-sm mt-2 xl:hidden group-hover:text-accent transition-all duration-300">
                                {skill.name}
                              </p>
                            </TooltipTrigger>
                            {/* Tooltip content only visible on xl screens and larger */}
                            <TooltipContent className="hidden xl:block">
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* experience */}
          

            {/* education */}
            <TabsContent value="education" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-accent">{education.title}</h2>
      <p className="text-lg text-gray-300">{education.description}</p>
    </div>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {education.items.map((item, index) => (
          <li
            key={index}
            className="bg-secondary/90 h-[200px] py-6 px-8 rounded-2xl shadow-lg flex flex-col justify-between items-center lg:items-start transition-transform duration-300 hover:scale-105"
          >
            <span className="text-accent text-sm font-semibold">{item.duration}</span>
            <h3 className="text-xl font-medium text-white text-center lg:text-left">
              {item.degree}
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
              <p className="text-white/80 text-sm">{item.institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
</TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
