import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../styles/pdfviewer.css";

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string; // Path or URL to the PDF
  downloadLabel?: string; // Optional label for the download button
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, downloadLabel = "Download Resume" }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setError(null);
    setIsLoading(false);
  };

  const onDocumentLoadError = (error: any) => {
    console.error("Error loading PDF:", error.message || error);
    setError("Failed to load the PDF. Ensure the file is accessible and the URL is correct.");
    setIsLoading(false);
  };

  return (
    <div className="pdf-viewer">
      <div className="pdf-container">
        {isLoading && !error && <div className="loading-message">Loading PDF...</div>}
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          !isLoading && (
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} />
              ))}
            </Document>
          )
        )}
      </div>
      <a href={pdfUrl} download="Khan Tarif Resume.pdf" className="download-button">
        {downloadLabel}
      </a>
    </div>
  );
};

export default PDFViewer;
