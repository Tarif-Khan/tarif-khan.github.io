import React from 'react';
import '../styles/resumeview.css';

const Resume = () => {
  const pdfUrl = "/Khan_Tarif_Resume.pdf";

  return (
    <div className="content-wrapper">
      <h2 className="section-title">Resume</h2>
      <iframe
        src={pdfUrl}
        title="Resume PDF"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Resume;
