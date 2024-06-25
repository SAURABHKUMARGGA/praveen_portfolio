import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  PlayFill,
  Behance,
} from "react-bootstrap-icons";

import bannerMan from "../../assets/img/banner/banner-man.png";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";
// import bnArrow from "../../assets/img/banner/bn-arrow.png";
// import VideoPlay from "../Shared/VideoPlay/VideoPlay";

const socalIcon = [
  // {
  //   id: 1,
  //   icon: <Facebook />,
  // },
 
  {
    id: 3,
    icon: <Linkedin />,
    url:"https://www.linkedin.com/in/praveen-kumar-64796a175?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    icon: <Behance />,
    url:"https://www.behance.net/praveenveera1",
  },
  {
    id: 5,
    icon: <Instagram />,
    url:"https://www.instagram.com/praveen_ux_ui?igsh=Y3dtOWJidzJoZXA3",
  },
];
const Banner = () => {

  const [position, setPosition] = useState(false);

  useEffect(() => {
    if(!position){
      setPosition(true)
    }
  }, []);

 
  return (
    <section id="home">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="banner__content">
              <Link to={"#"} className="bn__currently">
                <span className="d-block">
                  Currently available for freelance
                </span>
               
              </Link>
              <h1>
                <span className="hone"> Creative Graphic</span>
                <span className="d-block designers" data-text="Designer">
                  Designer
                </span>
              </h1>
              <div className="video__area">
              
                My mission is not just to design interfaces but To craft
                Immersive and memorable digital Journeys that leave a Lasting
                impact. Ready to Bring my passion and Expertise to a team that
                Values cutting-edge design And user Satisfaction.
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`banner__thumb  ${
                position  ? "right_up_animat" : "right_up"
              }`}
             
            >
              <img src={bannerMan} alt="man-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <Link to={""}>
            <img src={dial} alt="img" />
          </Link>
          <Link to={"#"}>(+91) 6383354978</Link>
        </div>
        <div className="right__infoscroll">
          <Link className="scroll">
            scroll down
          </Link>
          <Link className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
      </div>
      <div className="banner__rightinfo">
        <div className="right__infoscroll">
          <Link to={""} className="scroll">
            Follow Me
          </Link>
          <Link to={""} className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
        <div className="banner__xlsocial">
          <ul className="banner__soci d-grid justify-content-center">
            {socalIcon.map(({ icon, id , url}) => {
              return (
                <li key={id}>
                  <Link to={url} >
                    <i>{icon}</i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
      
    </section>
  );
};

export default Banner;
