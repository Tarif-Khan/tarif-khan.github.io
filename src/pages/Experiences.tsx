import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const experienceData = [
  {
    id: 1,
    position: "Quantitative Researcher Co-op",
    company: "Wellington Management",
    location: "Boston, MA",
    date: "December 2023 - July 2024",
    link: "https://www.wellington.com/en",
    responsibilities: [
      "Developed pre-trade cost models for Municipal Bonds, Securitized Products, Derivatives, and Futures in Python",
      "Built a project leveraging Python to process Citi and Morgan Stanley BWIC files daily into two data lakes",
      "Engineered a notebook to scrape a general inbox of trade insights and summarize everything with the GPT-4 API",
      "Published an internal paper on Artificial Intelligence outlining the constructs of LLMs and transformers",
      "Implemented a system to scrape HIIVE, William Blair and Citi IOI emails and process the data into data lakes",
      "Deployed an internal API for scraping and processing Outlook emails used by 30 users across 128 daily jobs"
    ],
    skills: ["Python", "SQL", "R", "JavaScript", "React"]
  },
  {
    id: 2,
    position: "Teaching Assistant: Algorithms and Data Structures",
    company: "Khoury College of Computer Sciences at Northeastern University",
    location: "Boston, MA",
    date: "April 2024 - June 2024",
    link: "https://www.khoury.northeastern.edu/",
    responsibilities: [
      "Assisted 110 students by holding office hours, and instructing recitations",
      "Graded weekly homework assignments, midterm exam, and the final exam alongside professors",
    ],
    skills: ["Python", "Java"]
  },
  {
    id: 3,
    position: "Career Peer Ambassador",
    company: "Khoury College of Computer Sciences at Northeastern University",
    location: "Boston, MA",
    date: "September 2023 - April 2024",
    link: "https://www.khoury.northeastern.edu/",
    responsibilities: [
      "Mentored 328 freshmen from the class of 2027 with regards to class programming and career planning",
      "Connected 43 freshmen from low income minority backgrounds to summer internships in computer science",
    ],
    skills: []
  },
  {
    id: 4,
    position: "Quantitative Software Engineer Summer Intern",
    company: "Quantum Technologies",
    location: "New York, NY",
    date: "June 2023 - September 2023",
    responsibilities: [
      "Collaborated with quantitative researchers to implement a proprietary trading strategy for XAUUSD using Python",
      "Enhanced the performance of traders through trade cost analysis (TCA) up to a 15% increase in alpha per trade",
      "Created a SQL-based database to store and manage trade history details for 6200 trades",
    ],
    skills: ["Python", "SQL", "Java", "R"]
  },
  {
    id: 5,
    position: "Software Engineering Co-op",
    company: "Scotiabank",
    location: "New York, NY",
    date: "January 2023 - June 2023",
    link: "https://www.gbm.scotiabank.com/en/about-overview/our-global-presence/united-states-campaign.html/",
    responsibilities: [
      "Released a platform to recover lost single as well as grouped trade files sent from Goldman Sachs, JP Morgan, Omgeo, Jane Street and 11 other clients through input of a Swift Reference or Message ID",
      "Integrated SQL queries extracted from XML property files using JavaSQL to match input to a trade file",
      "Searched through 6 servers using JSCH to search for, display contents, and present file paths for matching files",
      "Leveraged Java Swing prioritizing a Multiple Document Interface and JTables for the GUI",
      "Located and restored 6800 lost trade files in the first two months of release"
    ],
    skills: ["Java", "SQL", "XML", "Swift"]
  },
  {
    id: 6,
    position: "Teaching Assistant: Discrete Structures",
    company: "Khoury College of Computer Sciences at Northeastern University",
    location: "Boston, MA",
    date: "August 2022 - December 2022",
    link: "https://www.khoury.northeastern.edu/",
    responsibilities: [
      "Administered weekly office hours and facilitated discussion through Piazza threads for 755 students",
      "Graded weekly homework assignments, midterm exam, and the final exam alongside professors",
    ],
    skills: []
  },
];

const Experiences = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My journey through technology and innovation
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <GlassCard key={experience.id} delay={index * 0.1} className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <motion.h3
                    className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {experience.position}
                  </motion.h3>
                  <motion.div
                    className="flex items-center space-x-4 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {experience.company}
                    </span>
                    {experience.link && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </motion.div>
                  <motion.div
                    className="flex items-center text-gray-600 dark:text-gray-400 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="mr-4">{experience.location}</span>
                    <span className="text-sm">{experience.date}</span>
                  </motion.div>
                </div>
              </div>

              <motion.ul
                className="space-y-3 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {responsibility}
                  </li>
                ))}
              </motion.ul>

              {experience.skills.length > 0 && (
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;