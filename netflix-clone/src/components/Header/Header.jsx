import React from "react";
import "./header.css";
import HeaderData from "./HeaderData";
import Netflix from "../../assets/images/icons/netflix.png";

function Header() {
  return (
    <>
      <div className="header_outer_container ">
        <div className="header_container">
          <div className="header_left">
            <ul ><li><img src={Netflix} alt="" /></li></ul>
            <ul className="headerMiddleList d-flex">
              {HeaderData[0].first.map(({ text, url, img }, i) => {
                return (
                  <li key={i}>
                    <a href={url}> {img ? <img src={img} alt={url} /> : text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="header_right">
            <ul className="d-flex">
            {HeaderData[1].second.map(({ text, url, img }, i) => {
                return (
                  <li key={i}>
                    <a href={url}> {img ? <img src={img} alt="" /> : text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
