import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="intro-section">
        <h1 className="main-title"> Hi, I'm Tarif!</h1>
        <h1 className="main-title"> I'm a software developer.</h1>
        <p className="intro-text"> 
          I am a senior at Northeastern University's Khoury College of Computer Sciences, pursuing a Bachelor's degree in Computer Science with a concentration in Artificial Intelligence, graduating in May 2025. 
          I am passionate about leveraging AI to solve complex problems and build innovative solutions. 
        </p>
        <p className="intro-text">My professional journey includes impactful roles at Wellington Management, Scotiabank, and Quantum Technologies. 
          At Wellington, I developed pre-trade cost models, engineered data pipelines, and authored an internal paper on AI. 
          At Scotiabank, I designed trade file management platforms and implemented robust database solutions. 
          At Quantum Technologies, I collaborated with quantitative researchers to automate trading systems, generating over $1 million in revenue. </p>
        <p className="intro-text">With a strong foundation in Python, SQL, Java, and AI frameworks like PyTorch, I am eager to contribute to cutting-edge projects that bridge research and real-world applications. </p>
        <p className="intro-text">I am currently seeking full-time opportunities where I can apply my expertise in AI and software engineering to drive innovation and impact.</p>
      </div>
    </div>
  );
};

export default Home;