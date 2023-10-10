
import React, {useRef} from "react";
import TahseenLogo from "../assets/images/full-logo.svg";

const Footer = () => {



  return (
    <div className="footer">
      {/* <div className="footer__links">
        <h1 className="footer__links__title">تعرف علينا</h1>
        <a className="footer__links__item" href="#">
          فريقنا
        </a>
        <a className="footer__links__item" href="#">
          الوظائف
        </a>
        <a className="footer__links__item" href="#">
          صحافة
        </a>
      </div> */}



      {/* <div className="footer__links">
        <h1 className="footer__links__title">المزيد عن تحسين</h1>
        <a className="footer__links__item" href="">
          عن تحسين
        </a>
        <a className="footer__links__item" href="#">
          المساهمون والكتاب
        </a>
        <a className="footer__links__item" href="#">
          تواصل معنا
        </a>
        <a className="footer__links__item" href="#">
          ادعم تحسين
        </a>
        <a className="footer__links__item" href="#">
          شروط الخصوصية
        </a>
      </div> */}

      <div className="footer__about">
        <img src={TahseenLogo} height={60} alt="logo" />
        <p>قـرى مـستدامـة ببصمة كـربونية تحـت الـصفر.</p>
        <br></br>
        <span>Copyright 2023 TAHSEEN, Inc. Terms & Privacy</span>
      </div>
    </div>
  );
};

export default Footer;
