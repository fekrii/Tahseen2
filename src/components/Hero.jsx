import { BsArrowDown } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

import TopFade from "/assets/images/top-fade.webp";
import BottomFade from "/assets/images/bottom-fade.webp";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <img loading="lazy" className="hero__top-fade" src={TopFade} width={"100%"} alt="fade" />
      <img
        loading="lazy"
        className="hero__bottom-fade"
        src={BottomFade}
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
