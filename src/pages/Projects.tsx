import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Calendar } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const projectsData = [
  {
    id: 1,
    title: "Python Plagiarism Detector",
    date: "September 2024 - December 2024",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Python-Plagiarism-Detector-",
    details: [
      "Developed a Python-based plagiarism detection tool to identify similarities between multiple text files, leveraging algorithms for text preprocessing, tokenization, and similarity measurement",
      "Implemented advanced text similarity techniques using cosine similarity, Jaccard index, and bag-of-words models to accurately detect and quantify plagiarism",
      "Optimized performance and accuracy by implementing N-gram modeling, LLM post checking, and AST Tree comparisons with placeholders for imports as well as variable/function naming",
      "Proposed project to the Khoury College of Computer Sciences for adoption of this tool for all courses that use Python"
    ],
    skills: ["Python"]
  },
  {
    id: 2,
    title: "Zombies for Life",
    date: "July 2024 - August 2024",
    location: "New York, NY",
    link: "https://play.unity.com/en/games/b64ca121-5c2d-4d28-ab60-8e1bb2ce193e/z0mb13z4l1-f3",
    details: [
      "Created a zombie survival game with group mates from scratch using Unity and C#",
      "Distributed the game on Unity online with over 190 plays",
      "Implemented adversarial AI agents using A* and finite state machines with perceptrons",
    ],
    skills: ["C#", "Unity"]
  },
  {
    id: 3,
    title: "Community Center Program",
    date: "June 2024 - July 2024",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Community-Center",
    details: [
      "Published a C++ program for managing community center operations, emphasizing system design and object-oriented principles",
      "Developed a robust user authentication system for residents, non-residents, city officials, and organizations, ensuring secure and role-specific access",
      "Engineered a facility management module for event scheduling, budget tracking, and payment processing, enhancing operational efficiency",
      "Implemented modular components to support scalability and future feature integration"
    ],
    skills: ["C++"]
  },
  {
    id: 4,
    title: "Make Money",
    date: "September 2023 - December 2023",
    location: "Boston, MA",
    link: "https://main--mellifluous-hotteok-2f6aed.netlify.app/#/MakeMoney/Home",
    details: [
      "Engineered a robust backend infrastructure using Node.js, Express, and MongoDB, using the Yahoo Finance API to fetch and store real-time stock data",
      "Integrated MongoDB to store users who also have both a public and private watchlist of stocks",
      "Developed a responsive and simple frontend interface with React, JavaScript, and Redux, empowering users to effortlessly navigate and manage their stock portfolios",
      "Employed the use of Axios in order to make seamless HTTP requests to the backend"
    ],
    skills: ["React", "MongoDB", "Express.js", "JavaScript", "Node.js", "HTML", "CSS"]
  },
  {
    id: 5,
    title: "NUFS File System",
    date: "November 2022 - December 2022",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/NUFS-File-System",
    details: [
      "Created a file system in C using NUFS where files, directories, and other types of data can be stored",
      "Designed the file system to be able to create, modify, delete, and allocate memory for both single use as well as looped use applications",
      "Tested the file system on the Khoury Virtual Machine using the Perl Script provided which tests for single use as well as looped use applications",
    ],
    skills: ["C"]
  },
  {
    id: 6,
    title: "Image Processing Program",
    date: "June 2022 - June 2022",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Image-Processing-Program",
    details: [
      "Implemented an image processing program where pngs, ppms, jpegs, and jpgs can be edited in various ways with the use of filters, rotations, and a combination of both",
      "Filtered images using the command design pattern as each pixel's RGB component was manipulated using loops",
      "Designed the program using a Model, View, Controller methodology",
      "Developed the project using Java's Swing package on the IntelliJ IDE with a model, view, controller design recipe"
    ],
    skills: ["Java", "Java Swing", "JUnit 4"]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Showcasing innovation through code and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <GlassCard key={project.id} delay={index * 0.1} className="p-6 h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <motion.h3
                    className="text-xl font-bold text-gray-800 dark:text-white flex-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>

                <motion.div
                  className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4 space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                </motion.div>

                <motion.ul
                  className="space-y-2 mb-6 flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {project.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  className="flex flex-wrap gap-2 mt-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;