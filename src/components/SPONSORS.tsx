import React from "react";
import website_logo from "./media/website_logo.png";
import { Link } from "react-router-dom";
import "./SPONSORS.css";
const SPONSORS: React.FC = () => {
  return (
    <div>
      <img
        className="logo"
        src={website_logo}
        alt="Queen's Engineering Competition"
      />
      <div className="topic">Meet our Sponsors!</div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>

      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <div className="wrapper">
        <ul>
          <li>
            <Link to="/faq">FAQ's</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Meet Our Team</Link>
          </li>
          <li>
            <Link to="/sponsors">Meet Our Sponsors</Link>
          </li>
        </ul>
      </div>
      <div className="work-with-us-container">
        <div className="work-with-us">
          <h4>Work With Us!</h4>
          <p>
            A unique opportunity for companies to engage with future leaders in
            the engineering field and demonstrate a commitment to fostering
            education and innovation! Contact us through email or any of our
            social media accounts linked on the home page.
          </p>
          <div className="email-box">
            <a href="mailto:qec@engsoc.queensu.ca">qec@engsoc.queensu.ca</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPONSORS;
