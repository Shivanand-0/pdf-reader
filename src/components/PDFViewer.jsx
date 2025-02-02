import React, { useState, useRef  } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";



const PDFViewer = ({ fileUrl }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [scale] = useState(1);
   


    const defaultLayoutPluginInstance = defaultLayoutPlugin(
        {
            toolbarPlugin: {
                zoomPlugin: {
                    renderZoomIn: (props) => (isFullScreen ? <></> : <button onClick={props.onClick}>+</button>),
                    renderZoomOut: (props) => (isFullScreen ? <></> : <button onClick={props.onClick}>-</button>),
                },
            },
            fullScreenPlugin: {
                onEnterFullScreen: () => setIsFullScreen(true),
                onExitFullScreen: () => setIsFullScreen(false),
            },
        }
    );


    return (
        <div style={{ height: "100vh", width: "100%" , transform: `scale(${scale})`, transformOrigin: 'center'}} 
        
        
        >
            {/* <h3>Selected Word: {selectedWord}</h3>
            <p>Meaning: {wordMeaning}</p>*/}
            <p style={{ fontSize:2 , height: "1vh"}}>Shiv</p> 

            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
                <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
        </div>
    );
};

export default PDFViewer;
