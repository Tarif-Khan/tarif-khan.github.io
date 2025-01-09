import React from 'react';
import { MapPin } from 'lucide-react';
import '../styles/projects.css';

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
    ],
    skills: ["C#", "Unity"]
  },
  {
    id: 3,
    title: "Antibodies vs Viruses",
    date: "July 2024 - July 2024",
    location: "New York, NY",
    link: "https://play.unity.com/en/games/cba6438d-f875-4dd8-af6b-a72c57036340/antibodies-vs-viruses",
    details: [
      "Created a game which simulates an antibody taking on viruses using Unity and C#",
      "Distributed the game on Unity online with over 50 plays",
    ],
    skills: ["C#", "Unity"]
  },
  {
    id: 4,
    title: "Community Center Program",
    date: "June 2024 - July 2024",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Community-Center",
    details: [
      "Published a C++ program for managing community center operations, emphasizing system design and object-oriented principles",
      "Developed a robust user authentication system for residents, non-residents, city officials, and organizations, ensuring secure and role-specific access",
      "Engineered a facility management module for event scheduling, budget tracking, and payment processing, enhancing operational efficiency",
      "Implemented modular components to support scalability and future feature integration",
      "Optimized data persistence and retrieval processes, improving system reliability and performance",
      "Designed a comprehensive C++ system to streamline community center operations, including user management, facility booking, and financial tracking",
      "Created a dynamic event scheduling system with conflict resolution to ensure optimal use of resources and facilities",
      "Implemented financial management features to track payments, budget allocation, and expenditure, providing transparent financial oversight",
      "Developed an admin dashboard for real-time monitoring of facility usage, event schedules, and financial metrics",
      "Enhanced user experience with intuitive interfaces and responsive design, ensuring accessibility for all user roles"
    ],
    skills: ["C++"]
  },
  {
    id: 5,
    title: "Destroy the Witches",
    date: "July 2024 - July 2024",
    location: "New York, NY",
    link: "https://play.unity.com/en/games/75fb120d-7c1b-4a83-ada5-78dcef44321b/destroy-the-witches",
    details: [
      "Created a game where a character is taking on witches baked in using AI using Unity and C#",
      "Distributed the game on Unity online with over 50 plays",
    ],
    skills: ["C#", "Unity"]
  },
  {
    id: 6,
    title: "Predator Prey Game",
    date: "June 2024 - July 2024",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Predator-Prey-Game-Scenario",
    details: [
      "Engineered a C++ simulation modeling predator-prey dynamics",
      "Developed basic AI for species, incorporating simple real-time decision-making for survival, movement, and reproduction strategies through algorithms",
      "Designed a scalable, grid-based system to manage interactions, enhancing simulation accuracy and performance",
      "Led the creation of modular, extensible code, ensuring future adaptability and ease of integration with additional features"
    ],
    skills: ["C++"]
  },
  {
    id: 7,
    title: "Roster Generator",
    date: "June 2024 - July 2024",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Roster-Generator",
    details: [
      "Designed and implemented a C++ application for automated team roster generation, optimizing the assignment process based on user-defined parameters",
      "Developed a modular architecture that allows for efficient data input, processing, and output, ensuring flexibility and scalability",
      "Integrated file handling capabilities to import and export CSV data, facilitating seamless data management and reporting",
      "Utilized advanced algorithms to balance teams based on specified criteria, enhancing fairness and performance"
    ],
    skills: ["C++"]
  },
  {
    id: 8,
    title: "Airline Reservation System",
    date: "May 2024 - June 2024",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Airline-Reservation-System",
    details: [
      "Developed a C++ based Airline Reservation System to manage flight bookings, cancellations, and user profiles",
      "Implemented key functions such as flight search, reservation management, and user authentication with efficient data handling",
      "Designed and maintained structured code with a focus on modularity and reusability, utilizing header files and separate functions",
      "Collaborated in documenting system architecture and pseudocode for clear understanding and future scalability"
    ],
    skills: ["C++"]
  },
  {
    id: 9,
    title: "Air Hockey Game",
    date: "May 2024 - June 2024",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Air-Hockey",
    details: [
      "Developed a C++ application simulating an Air Hockey game, demonstrating expertise in object-oriented programming",
      "Implemented real-time game mechanics including puck movement, collision detection, and scoring using custom-built physics logic",
      "Designed modular code structure for key components such as sliders, puck, and zones, ensuring maintainability and scalability",
      "Integrated responsive keyboard controls, delivering a user-friendly gaming experience"
    ],
    skills: ["C++"]
  },
  {
    id: 10,
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
    id: 11,
    title: "Decision Making Tool",
    date: "January 2023 - January 2023",
    location: "New York, NY",
    link: "https://github.com/Tarif-Khan/Decision-Making-Tool",
    details: [
      "Created a program in Java within the IntelliJ Idea IDE to help make decisions for the user given a number of options",
      "Designed the program using a Model, View, Controller methodology",
      "Implemented the program to be able to add, delete, modify, and randomly select options",
      "Tested the program using JUnit4 testing"
    ],
    skills: ["Java", "Java Swing", "JUnit 4"]
  },
  {
    id: 11,
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
    id: 12,
    title: "Youtube Video Analysis Tool",
    date: "October 2022 - December 2022",
    location: "Boston, MA",
    details: [
      "Created a program in Python using the Jupyter Notebook which was able to predict whether a Youtube video would be considered successful or not",
      "Designed the program to consider numerical properties of a video such as likes, views, and the number of comments in the decision making of the algorithm",
      "Programmed a sentiment analysis tool to analyze and quantify comments of each video to assist in decision making",
      "Structured the algorithm to make use of a decision tree model as well as a linear regression model through hyper parameter tuning to make its evaluation of a video",
      "Trained the model using sklearn and cleaned the data from Youtube's database",
      "Published and visualized all of the data and our findings using pandas, numpy, and seaborn",
      "Tested the project using the data set as well as newly generated data for accuracy across multiple use cases"
    ],
    skills: ["Python"]
  },
  {
    id: 13,
    title: "Memory Allocator",
    date: "November 2022 - November 2022",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Memory-Allocator",
    details: [
      "Created a memory allocator in C which is able to allocate input values to memory within the system",
      "Designed the allocator to be able to both allocate and free memory",
      "Programmed the allocator to be able to work with one input as well as hundreds of inputs",
      "Tested the memory allocator on the Khoury Virtual Machine using the Perl Script provided which tests for single use as well as looped use applications for allocating as well as freeing data",
    ],
    skills: ["C"]
  },
  {
    id: 14,
    title: "Shell in C",
    date: "October 2022 - October 2022",
    location: "Boston, MA",
    details: [
      "Created a shell bash using C which can act as a second terminal within a terminal",
      "Designed the shell to be able to invoke the following traditional methods : echo, ls, touch, mkdir, rm, |, cd, and prev",
      "Structured the shell to be able to run scripts, projects, and multiple commands per line",
      "Tested the shell bash on the Khoury Virtual Machine using the Perl Script provided which tests for single use as well as looped use applications to precisely compare the output of functions input into the bash to provide the proper result in both applications which make use of one function per line as well as multiple functions per line",
    ],
    skills: ["C"]
  },
  {
    id: 15,
    title: "Calculator in Assembly",
    date: "September 2022 - September 2022",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Calculator-in-Assembly",
    details: [
      "Created a calculator in assembly language which can add, subtract, multiply, and divide",
      "Programmed the functions to perform the arithmetic through the manipulation of memory addresses which hold the values of the algebraic expressions input to the calculator",
      "Designed the calculator to be able to be invoked in the terminal",
    ],
    skills: ["C"]
  },
  {
    id: 16,
    title: "Bill Splitting Calculator",
    date: "August 2022 - August 2022",
    location: "New York, NY",
    details: [
      "Designed a calculator which can easily split the bill in Java and planned with an object oriented approach",
      "Designed the program using a Model, View, Controller methodology",
      "Developed the project using Java’s Swing package on the IntelliJ IDE with a model, view, controller design recipe",
      "Tested the program using JUnit tests for each function to assure that methods work as intended"
    ],
    skills: ["Java", "Java Swing", "JUnit 4"]
  },
  {
    id: 17,
    title: "Image Processing Program",
    date: "June 2022 - June 2022",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Image-Processing-Program",
    details: [
      "Implemented an image processing program where pngs, ppms, jpegs, and jpgs can be edited in various ways with the use of filters, rotations, and a combination of both",
      "Filtered images using the command design pattern as each pixel’s RGB component was manipulated using loops",
      "Designed the program using a Model, View, Controller methodology",
      "Developed the project using Java’s Swing package on the IntelliJ IDE with a model, view, controller design recipe",
      "Tested the program using JUnit tests for each function to assure that methods work as intended"
    ],
    skills: ["Java", "Java Swing", "JUnit 4"]
  },
  {
    id: 18,
    title: "Marble Solitaire",
    date: "May 2022 - June 2022",
    location: "Boston, MA",
    link: "https://github.com/Tarif-Khan/Marble-Solitaire",
    details: [
      "Engineered a text based implementation of Marble Solitaire where the game can be played on the console as well as the designated GUI implemented using Java Swing",
      "Generated the implementation in Java with algorithms manipulating an array of pieces to calculate all valid move",
      "Designed the program using a Model, View, Controller methodology",
      "Developed the project using Java’s Swing package on the IntelliJ IDE with a model, view, controller design recipe",
      "Tested the program using JUnit tests for each function to assure that methods work as intended"
    ],
    skills: ["Java", "Java Swing", "JUnit 4"]
  },
  {
    id: 19,
    title: "Password Cracker",
    date: "May 2022 - June 2022",
    location: "Boston, MA",
    details: [
      "Cracked 50 unique passwords using Hashcat as well as John the Ripper alongside commonly used dictionaries and combinations",
      "Created a program in Java within the Visual Studio Code IDE which can provide a strong password with a high entropy level",
      "Designed a program in in Java within the Visual Studio Code IDE which can use Hashcat as well as John the Ripper to crack passwords on a Linux terminal or Linux/Unix based virtual machine",
    ],
    skills: ["Python"]
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <a 
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer" 
            className="project-card"
          >
            <div className="title">{project.title}</div>
            <div className="date">{project.date}</div>
            <div className="location">
              <MapPin size={16} className="inline mr-1" />
              {project.location}
            </div>
            <ul className="details">
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <div className="skills">
              {project.skills.map((skill, index) => (
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

export default Projects;