import React, { useState } from "react";
import "./Galeria.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Img1 from "./photos/img1.jpg";
import Img2 from "./photos/img2.jpg";
import Img3 from "./photos/img3.jpg";
import Img4 from "./photos/img4.jpg";
import Img5 from "./photos/img5.jpg";
import Img6 from "./photos/img6.jpg";
import Img7 from "./photos/img7.jpg";
import Img8 from "./photos/img8.jpg";

export const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
      </div>
      <div className="galleryContainer">
      <section className="contentGallery">
        <div className="title">
          <h1>GALERIA</h1>
        </div>
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </section>
      </div>
    </>
  );
};
