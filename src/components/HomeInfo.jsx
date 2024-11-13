import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>

    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm: leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi! I am <span className="font-semibold">Scott</span> 👋
      <br />A react developer from the Philippines
    </h1>
  ),
  2: (
    <InfoBox
      text="I developed many front-end websites using Vite, ReactJS, and Tailwind. By continuously using React, I picked up many skills along the way. "
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Deployed multiple projects, curious about them? "
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done? Or looking for a developer? I'm just one call away "
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
