const OurParteners = ({ images }) => {
  return (
    <div className="our-parteners">
      <p>القائمون على المشروع</p>
      <div className="our-parteners-logos">
        {images.map((image, index) => {
          return (
            <div key={index} className="square-holder">
              <img src={image} alt="our-aprteners-logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurParteners;
