import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Sample.css";

// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';




function Sample(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, [])

  return (
    <div >
      <div className="page_container" >
        <nav className="nav">
          <button id="button_change" onClick={goToPrevPage} className="previous">
            Prev
          </button>
          <button id="button_change" onClick={goToNextPage} className="next">
            Next
          </button>
          <p className="p">
            Page {pageNumber} & {pageNumber + 1}  of {numPages}
          </p>
        </nav>
    <div style={{width:'60vw',height:"70vh"}} className="page">
              <Document file={props.url} onLoadSuccess={onDocumentLoadSuccess}>
          <div className="container" id="block_container" style={{display:"flex"}} >
            <div>

              <Page pageNumber={pageNumber} />
            </div>
            <div>

              <Page pageNumber={pageNumber + 1} />
            </div>
          </div>
        </Document>
        </div>
      </div>
    </div>
  );
};

export default Sample;
