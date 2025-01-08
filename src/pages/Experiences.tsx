import React from 'react';
import '../styles/experiences.css';
import { MapPin } from 'lucide-react';

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
      "Gradedweekly homework assignments, midterm exam, and the final exam alongside professors",
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
    <div className="experience-container">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Experience</h2>
      <div className="experience-grid">
        {experienceData.map((experience) => (
          <a 
            key={experience.id}
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer" 
            className="experience-card"
          >
            <div className="position">{experience.position}</div>
            <div className="company-info">
              <div className="company">{experience.company}</div>
              <div className="location">
                <MapPin size={16} className="inline mr-1" />
                {experience.location}
              </div>
            </div>
            <div className="date">{experience.date}</div>
            <ul className="responsibilities">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
            <div className="skills">
              {experience.skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experiences;