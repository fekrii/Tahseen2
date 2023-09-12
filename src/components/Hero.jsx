import React from "react";
import Navbar from "./Navbar";
import { BsArrowDown } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <img
        loading="lazy"
        className="hero__top-fade"
        src={require("../assets/images/top-fade.webp")}
        width={"100%"}
        alt="fade"
      />
      <img
        loading="lazy"
        className="hero__bottom-fade"
        src={require("../assets/images/bottom-fade.png")}
        width={"100%"}
        height={"50%"}
        alt="fade"
      />

      <HeroContent />
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="hero__content">
      <div className="hero__content__pagination hero__content__side"></div>

      <div className="hero__content__main">
        <p>تحسين</p>
        <h1 className="bigTitle">قـرى مـستدامـة ببصمة كـربونية تحـت الـصفر.</h1>
        <span>
          <BsArrowDown fontSize={24} /> تصفح للأسفل
        </span>
      </div>

      <SocialMedia />
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="hero__content__social hero__content__side">
      <h3>Follow us</h3>
      <AiOutlineInstagram />
    </div>
  );
};
export default Hero;
