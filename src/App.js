import React, { useState } from "react";
import PDFViewer from "./components/PDFViewer";

const App = () => {
    const [pdfUrl, setPdfUrl] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPdfUrl(URL.createObjectURL(file));
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>PDF Reader 📖</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            {pdfUrl && <PDFViewer fileUrl={pdfUrl} />}
        </div>
    );
};

export default App;
