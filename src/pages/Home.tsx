import React, { useEffect, useState } from 'react';
import '../styles/home.css';

const Home = () => {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="content-wrapper">
      <div className="intro-section">
        <h1 className={`main-title ${isTransitioning ? 'color-transition' : ''}`}>
          Hi, I'm Tarif!
        </h1>
        <h1 className={`main-title ${isTransitioning ? 'color-transition' : ''}`}>
          I'm a software developer.
        </h1>

        <div className="card">
          <p className="intro-text">
            I am a senior at Northeastern University's Khoury College of Computer Sciences, pursuing a Bachelor's degree in Computer Science with a concentration in Artificial Intelligence, graduating in May 2025. 
            I am passionate about leveraging AI to solve complex problems and build innovative solutions.
          </p>
          <p className="intro-text">
            My professional journey includes impactful roles at Wellington Management, Scotiabank, and Quantum Technologies. 
            At Wellington, I developed pre-trade cost models, engineered data pipelines, and authored an internal paper on AI. 
            At Scotiabank, I designed trade file management platforms and implemented robust database solutions. 
            At Quantum Technologies, I collaborated with quantitative researchers to automate trading systems, generating over $1 million in revenue.
          </p>
          <p className="intro-text">
            With a strong foundation in Python, SQL, Java, and AI frameworks like PyTorch, I am eager to contribute to cutting-edge projects that bridge research and real-world applications.
          </p>
          <p className="intro-text">
            I am currently seeking full-time opportunities where I can apply my expertise in AI and software engineering to drive innovation and impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;