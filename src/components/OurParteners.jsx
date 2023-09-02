
import React from "react";



const OurParteners = () => {

    function importAll(r) {
        return r.keys().map(r);
      }


    var images = importAll(require.context('../assets/images/our-parteners', false, /\.(png|jpeg|svg|mp4)$/));

    return (
        <div className="our-parteners">
            <p>شركائنا</p>
            <div className="our-parteners-logos">
                {images.map((image, index) => {
                    return (
                        <div className="square-holder">
                            <img src={image} index={index} alt="our-aprteners-logo" />
                        </div>
                    )
                })}

            </div>
        </div>
    );
    };



export default OurParteners;
