import React, { useState } from "react";
import website_logo from "./media/website_logo.png";
import "./FAQ.css";
import { Link } from "react-router-dom";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        type="module"
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
            <a href="./sponsor.html">Meet our sponsors</a>
          </li>
        </ul>
      </div>
      <div className="topic">Questions? Check out our FAQ's!</div>
      <img
        className="logo"
        src={website_logo}
        alt="Queen's Engineering Competition"
      />
      <div className="faq-container">
        <button className="collapsible" onClick={() => toggleFAQ(0)}>
          Q: When is the event?
        </button>
        <div className={`content ${openIndex === 0 ? "active" : ""}`}>
          <p>The 2024 competition is happening on Saturday November 9th.</p>
        </div>

        <button className="collapsible" onClick={() => toggleFAQ(1)}>
          Q: Where will the competition be held?
        </button>
        <div className={`content ${openIndex === 1 ? "active" : ""}`}>
          <p>
            The competition will be hosted on campus. Buildings include Beamish
            Munro Hall (ILC), Walter Light Hall, Mitchell Hall, and Dupuis Hall.
            There will be an awards ceremony hosted in the evening on campus as
            well.
          </p>
        </div>

        <button className="collapsible" onClick={() => toggleFAQ(2)}>
          Q: How do I sign up to compete?
        </button>
        <div className={`content ${openIndex === 2 ? "active" : ""}`}>
          <p>
            You can sign up using the link below. Please have your chosen
            competition in mind!
          </p>
          <a
            className="sign-up"
            href="https://forms.office.com/r/SjwUiqwk1L?origin=lprLink"
          >
            Sign Up
          </a>
        </div>

        <button className="collapsible" onClick={() => toggleFAQ(3)}>
          Q: Who is allowed to participate at QEC?
        </button>
        <div className={`content ${openIndex === 3 ? "active" : ""}`}>
          <p>
            Any year and any discipline of engineering is allowed and encouraged
            to participate in the competitions. It is a great way to meet new
            friends, network, and get some engineering design experience!
          </p>
        </div>

        <button className="collapsible" onClick={() => toggleFAQ(4)}>
          Q: What happens if I win my competition?
        </button>
        <div className={`content ${openIndex === 4 ? "active" : ""}`}>
          <p>
            There will be prize money awarded to the top three teams in each of
            the competitions. Specific prizes will be announced closer to the
            competition date. The first place will also have the opportunity to
            represent Queens at the Ontario Engineering Competition! Check out
            our Beyond the Finish Line section to find out more!
          </p>
        </div>

        <button className="collapsible" onClick={() => toggleFAQ(5)}>
          Q: How much does QEC cost?
        </button>
        <div className={`content ${openIndex === 5 ? "active" : ""}`}>
          <p>
            The delegate fee will be around $25 this year. The ticket includes
            your spot in one of the challenges, two meals (lunch and dinner),
            light breakfast, as well as lots of networking opportunities
            throughout the day!
          </p>
        </div>

        <button className="collapsible" onClick={() => toggleFAQ(6)}>
          Q: How do I form a team?
        </button>
        <div className={`content ${openIndex === 6 ? "active" : ""}`}>
          <p>
            Many of our competitors come with a team in mind and can sign up
            with their desired team in the signup form. If you do not have a
            team, no worries, we will find a team for you! Just let us know in
            your registration form.
          </p>
        </div>

        <button className="collapsible" onClick={() => toggleFAQ(7)}>
          Q: Can I participate in more than one competition?
        </button>
        <div className={`content ${openIndex === 7 ? "active" : ""}`}>
          <p>
            Unfortunately, you can only participate in one of eight
            competitions. Each competition is packed with its fair share of work
            so one competition will keep you and your team busy for the day!
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQ;
