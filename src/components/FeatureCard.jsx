// import React from "react";
import React, { useState, useEffect } from "react";






const FeatureCard = ({ title, subtitle, description, number }) => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState("");

  function importAll(r) {
    return r.keys().map(r);
  }


  const getImages = (number) => {
    if (number === "00") {
      var temp = importAll(require.context('../assets/images/00', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/00.docx");
      setFile(tempFile);
    }
    else if(number === "01"){
      var temp = importAll(require.context('../assets/images/01', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/01.pdf");
      setFile(tempFile);
    } else if (number === "02") {
      var temp = importAll(require.context('../assets/images/02', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/02.pdf");
      setFile(tempFile);
    } else if (number === "03") {
      var temp = importAll(require.context('../assets/images/03', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/03.pdf");
      setFile(tempFile);
    } else if (number === "04") {
      var temp = importAll(require.context('../assets/images/04', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/04.pdf");
      setFile(tempFile);
    } else if (number === "05") {
      var temp = importAll(require.context('../assets/images/05', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/05.pdf");
      setFile(tempFile);
    } else if (number === "06") {
      var temp = importAll(require.context('../assets/images/06', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/06.pdf");
      setFile(tempFile);
    } else if (number === "07") {
      var temp = importAll(require.context('../assets/images/07', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/07.pdf");
      setFile(tempFile);
    } else if (number === "08") {
      var temp = importAll(require.context('../assets/images/08', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/08.pdf");
      setFile(tempFile);
    } else if (number === "09") {
      var temp = importAll(require.context('../assets/images/09', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/09.pdf");
      setFile(tempFile);
    } else if (number === "10") {
      var temp = importAll(require.context('../assets/images/10', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/10.pdf");
      setFile(tempFile);
    } else if (number === "11") {
      var temp = importAll(require.context('../assets/images/11', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/11.pdf");
      setFile(tempFile);
    } else {
      var temp = importAll(require.context('../assets/images/00', false, /\.(png|jpeg|svg|mp4)$/));
      setImages(temp);
      var tempFile = require("../assets/files/00.docx");
      setFile(tempFile);
    }
  }

  useEffect(() => {
    getImages(number);
  }, [number]);





  console.log("images >>", images);


  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = images[currentImageIndex];

  const renderMedia = () => {
    console.log("currentImage >>", currentImage);
    if (currentImage === undefined) {
      return null;
    }


    if (currentImage.endsWith(".png") || currentImage.endsWith(".jpg") || currentImage.endsWith(".jpeg")) {
      return <img loading="lazy" src={currentImage} alt="" />;
    } else if (currentImage.endsWith(".mp4")) {
      return (
        <video key={currentImage} controls>
          <source src={currentImage} type="video/mp4" />
        </video>
      );
    } else {
      return null; // Handle unsupported media types
    }
  };

  const hasNextImage = currentImageIndex < images.length - 1;
  const hasPreviousImage = currentImageIndex > 0;

  return (
    
    <div className="featurecard">
      <div className="featurecard__image">
      {renderMedia()}
      {hasNextImage && (
        <button className="carousel-button next" onClick={nextImage}>
          التالي
        </button>
      )}
      {hasPreviousImage && (
        <button className="carousel-button previous" onClick={previousImage}>
          السابق
        </button>
      )}



      </div>
      <div className="featurecard__information">
        <p>{title}</p>
        <h1>{subtitle}</h1>
        <h3>{description}</h3>
        <a href={file} target="_blank" download><span>اقرأ المزيد</span></a>
        
        <div className="featurecard__information__fadednumber">
          <h4>{number}</h4>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
