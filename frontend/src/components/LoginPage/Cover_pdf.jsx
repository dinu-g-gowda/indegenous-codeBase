import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
import './coverPdf.css'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Sample.css";

// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// console.log(pdfjs.version,"pdfjs.version")
function Cover_pdf({url}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, [])

  return (
    <div className="page" >
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <div className="container" id="block_container" >
          <div >
            <Page pageNumber={pageNumber} />
          </div>
        </div>
      </Document>
    </div>
  );
};

export default Cover_pdf;
