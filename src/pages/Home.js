import "./Home.css";
import { useSelector } from "react-redux";
export default function Home() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`home-container ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {" "}
      <div className="home-container">
        <div className="home-text">
          <h1>Your Idea Matters!</h1>
          <p>Grow your business with exceptional customer service</p>
        </div>

        <div className="home-image">
          <img src="/image copy 7.png" alt="Home banner" />
        </div>

        <div className="services-section">
          <h2>Experience Our Distinctive Services</h2>
          <div className="services">
            <div className="service">
              <img src="/image copy 3.png" alt="AI/ML Services" />
              <h3>AI/ML Services</h3>
              <p>Generative AI Solutions, AI Led Product Development...</p>
            </div>
            <div className="service">
              <img src="/image copy 4.png" alt="Digital Engineering" />
              <h3>Digital Engineering</h3>
              <p>Product Discovery, Microservices Development...</p>
            </div>
            <div className="service">
              <img src="/image copy 5.png" alt="Kotlin Development" />
              <h3>Kotlin Development</h3>
              <p>Kotlin Server Side Development, Android Development...</p>
            </div>
            <div className="service">
              <img src="/image copy 6.png" alt="Cloud & DevOps" />
              <h3>Cloud & DevOps</h3>
              <p>Cloud Managed Service Audits, Cloud Migration...</p>
            </div>
          </div>
        </div>

        <div className="recent-posts">
          <h2>Recent Posts</h2>
          <div className="posts">
            <div className="post">
              <img src="/image copy 2.png" alt="Post 1" />
              <p>AI for Customer Service in 2024: Examples & Tips</p>
            </div>
            <div className="post">
              <img src="/image copy.png" alt="Post 2" />
              <p>Building Customer Service Teams: Tips to Hire & Manage</p>
            </div>
            <div className="post">
              <img src="/image.png" alt="Post 3" />
              <p>Best Ecommerce Tools to Drive Sales & Enhance CX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
