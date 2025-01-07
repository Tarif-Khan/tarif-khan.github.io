import React from 'react';
import PDFViewer from '../components/PDFViewer';
import '../styles/experiences.css';
import '../styles/resumeview.css';

const Resume = () => {
  const pdfUrl = "/Khan Tarif Resume.pdf";
  return (
    <div className="content-wrapper">
      <h2 className="section-title">Resume</h2>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default Resume;