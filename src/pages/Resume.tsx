import React from 'react';
import '../styles/resumeview.css';

const Resume = () => {
  const pdfUrl = "/Khan Tarif Resume.pdf";

  return (
    <div className="content-wrapper">
      <h2 className="section-title">Resume</h2>
      <iframe
        src={pdfUrl}
        title="Khan Tarif Resume"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Resume;
