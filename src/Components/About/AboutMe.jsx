import React, { useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  Behance,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "praveenveera222@gmail.Com",
  },
  {
    id: 2,
    system: "Phone",
    contact: "+(91) 6383354978",
  },
  {
    id: 3,
    system: "Address",
    contact: "Jayanagar, Bengaluru",
  },
  {
    id: 4,
    system: "Follow",
    socalContact: [
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
      
    ],
  },
];
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                My mission is not just to design interfaces but To craft
                Immersive and memorable digital Journeys that leave a Lasting
                impact. Ready to Bring my passion and Expertise to a team that
                Values cutting-edge design And user Satisfaction.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socalContact, system }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                        data-aos="zoom-in"
                      >
                        <div className="abox">
                          <div className="about__contbox__item">
                            <span className="ptext fz-18 mb-20 d-block">
                              {system}
                            </span>
                            <Link to={""}>{contact}</Link>
                            {socalContact && (
                              <ul className="d-flex align-items-center gap-2 gap-xl-4">
                                {socalContact.map(({id, icon,url}) => (
                                  <li key={id}>
                                    <Link to={url}>{icon} </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
