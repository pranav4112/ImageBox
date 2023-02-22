import React from 'react';
import "../App.css";
import { useEffect } from 'react';
import {saveAs} from "file-saver";

const Modal = ({imgsrc,closeModal,downloadId}) => {

    useEffect(() => {
        document.body.style.overflowY = "hidden";

      return () => {
        document.body.style.overflowY = "scroll";
      }
    }, [])

    const download = () => {
      const url = imgsrc;
      const name = `Image_${downloadId}.png`;
      saveAs(url,name);
    }
    
  return (
    <>
        <div className="modalBack" onClick={closeModal}></div>
        <div className="modalFront">
            <span className='cross' onClick={closeModal}>
              <i class="fa-solid fa-xmark"></i>
            </span>
            <img src={imgsrc} alt="random" />
            <button className='searchbtn download' onClick={download}>Download</button>
        </div>
    </>
  )
}

export default Modal;