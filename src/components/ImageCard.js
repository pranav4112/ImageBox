import React from "react";
import "../App.css";
import Modal from "./Modal";
import { useState } from "react";

const ImageCard = ({ images }) => {
  
  const [showModal, setshowModal] = useState(false);
  const [imgsrc, setimgsrc] = useState('');
  const [downloadId, setdownloadId] = useState(0);

  const openModal = (src,id)=>{
    setshowModal(true);
    setimgsrc(src);
    setdownloadId(id);
  }

  const closeModal = ()=>{
    setshowModal(false);
  }
  
  return (
    <div className="cardWrapper">
      {images.map((image) => {
        const tags = image.tags.split(", ");


        return (
          <div key={image.id} className="card">
            <img src={image.webformatURL} onClick={()=> openModal(image.largeImageURL,image.id)}  alt="random" />

            <div className="textbox">
              <p className="user">Image by <span >{image.user}</span> </p>
              <p className="p views">Views: <span className="userDetails">{image.views}</span> </p>
              <p className="p downloads">Downloads: <span className="userDetails">{image.downloads}</span></p>
              <p className="p likes">Likes: <span className="userDetails">{image.likes}</span></p>

              {tags.map((tag)=>{
                return(
                  <span className="tag">#{tag} </span>
                )
              })}
            </div>

          </div>
        );
      })}

      {showModal ? 
        <Modal closeModal={closeModal} imgsrc={imgsrc} downloadId={downloadId}/>
        :
        null
      }
    </div>
  );
};

export default ImageCard;
