import React from "react";
import Fb from "../../assets/images/icons/fb.png";
import Insta from "../../assets/images/icons/insta.png";
import Twitter from "../../assets/images/icons/twitter.png";
import Youtube from "../../assets/images/icons/youtube.png";
import "./footer.css";
import FooterData from "./FooterData";

function Footer() {
  return (
    <>
    <div className="Footer_Section">
      <ul className="SocialMediaIcons d-flex">
        <li>
          {" "}
          <img src={Fb} alt="" />{" "}
        </li>
        <li>
          {" "}
          <img src={Insta} alt="" />{" "}
        </li>
        <li>
          {" "}
          <img src={Twitter} alt="" />{" "}
        </li>
        <li>
          {" "}
          <img src={Youtube} alt="" />{" "}
        </li>
      </ul>   
      
              {FooterData[0].map((element, index) => {
                return (
                  <div key={index} className="Footer_list d-inline-flex col-3">
                    <ul>
                      {element.map(({ text, url },i) => {
                        return (
                          <div key={i}>
                            <li>
                              <a href={url}>{text}</a>
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}     
              </div>    
    </>
  );
}

export default Footer;
