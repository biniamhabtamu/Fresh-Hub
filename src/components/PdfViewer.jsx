// components/PdfViewer.jsx
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfPath }) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-viewer">
      <Document
        file={pdfPath}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div>Loading PDF...</div>}
        error={<div>Error loading PDF. Please try again later.</div>}
      >
        <Page 
          pageNumber={pageNumber} 
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <div className="pdf-controls">
        <button 
          onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button 
          onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
          disabled={pageNumber >= numPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;