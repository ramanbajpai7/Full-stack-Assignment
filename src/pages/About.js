import React from "react";
import "./About.css";
import { useSelector } from "react-redux";
const About = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`home-container ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {" "}
      <div className="about-page">
        <h1 className="about-title">The Team</h1>
        <p className="about-description">
          Meet the 26 of us building and supporting LogicTech every day. We're
          headquartered in the Uttar Pradesh district of India, but our team is
          spread across the world.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="/image copy 8.png"
              alt="Matt Wigham"
              className="team-image"
            />
            <h4>Gopesh</h4>
            <p>Co-founder / CEO</p>
            <p>Delhi, India</p>
            <p>@mattwigham</p>
          </div>
          <div className="team-member">
            <img
              src="/image copy 9.png"
              alt="Eric Turner"
              className="team-image"
            />
            <h4>Ayush kumar</h4>
            <p>Co-founder / Design Director</p>
            <p>Mumbai, India</p>
            <p>@eturner</p>
          </div>
          <div className="team-member">
            <img
              src="/image copy 10.png"
              alt="Karen Kenney"
              className="team-image"
            />
            <h4>Mousam Jha</h4>
            <p>Software Developer</p>
            <p>Bangalore, India</p>
            <p>@Almightykaren</p>
          </div>
          <div className="team-member">
            <img
              src="/image copy 11.png"
              alt="Dan Christofferson"
              className="team-image"
            />
            <h4>Sajal</h4>
            <p>Community Director</p>
            <p>Delhi, India</p>
            <p>@beeeteeth</p>
          </div>
          <div className="team-member">
            <img
              src="/image copy 12.png"
              alt="Lee Jensen"
              className="team-image"
            />
            <h4>Deepak</h4>
            <p>Engineering Director</p>
            <p>Bangalore, India</p>
            <p>@ouetteim</p>
          </div>
          <div className="team-member">
            <img
              src="/image copy 13.png"
              alt="Rachel Gollay"
              className="team-image"
            />
            <h4>Sameer Malik</h4>
            <p>Support Director</p>
            <p>Pune, India</p>
            <p>@racheltastic</p>
          </div>
          <div className="team-member">
            <img
              src="/image copy 14.png"
              alt="Prachi Goyal"
              className="team-image"
            />
            <h4>Prerna Singh</h4>
            <p>Software Developer</p>
            <p>Gurugram, India</p>
            <p>@prachitastic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
