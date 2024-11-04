import React from "react";
import "./Topic.css";
import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import website_logo from "./media/website_logo.png";
import flipcard1 from "./media/flipcard1.png";
import flipcard2 from "./media/flipcard2.png";
import flipcard3 from "./media/flipcard3.png";
import flipcard4 from "./media/flipcard4.png";
import flipcard5 from "./media/flipcard5.png";
import flipcard6 from "./media/flipcard6.png";
import flipcard7 from "./media/flipcard7.png";
import flipcard8 from "./media/flipcard8.png";
import flipcard9 from "./media/flipcard9.png";

const Topic: React.FC = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
      <body>
      <img
            className="logo"
            src={website_logo}
            alt="Queen's Engineering Competition"
          />
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
          
          <div className="header-links">
            <a
              className="sign-up"
              href="https://forms.office.com/r/SjwUiqwk1L?origin=lprLink"
            >
              Sign Up
            </a>

            <a className="insta" href="https://www.instagram.com/quengcomp/">
              <IoLogoInstagram
                name="logo-instagram"
                size="large"
              ></IoLogoInstagram>
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/company/queensengineeringcompetition/mycompany/"
            >
              <IoLogoLinkedin
                name="logo-linkedin"
                size="large"
              ></IoLogoLinkedin>
            </a>
            <a className="engineering" href="https://www.engsoc.queensu.ca/">
              <img
                src="https://www.engsoc.queensu.ca/wp-content/uploads/2024/01/EngSocLogo_ShortWordmark-1030x615.png"
                alt="Queen's Engineering Society"
              />
            </a>
            

            <label htmlFor="active" className="menu-btn">
              <i className="fas fa-bars"></i>
            </label>
          </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"></script>
        <section className="homeHero">
          <div className="homeHero--inner">
            <h2 className="homeHero__title">
              <div className="title">Innovation Professionalism Excellence</div>
            </h2>
          </div>
        </section>
        <div className="cb-cursor">
          <div className="cb-cursor-text"></div>
          <div className="cb-cursor-video">
            <div>
              <video
                id="myVideo"
                className="my-video"
                preload="auto"
                loop
                muted
                playsInline
                autoPlay
                src="src/components/media/i.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>{" "}
        <section id="about" className="about">
          <h2>Get to know QEC</h2>
          <p>
            The Queen's Engineering Competition (QEC) stands as a beacon of
            innovation and excellence within the Faculty of Engineering and
            Applied Science. Each year, this esteemed event gathers delegates
            for a conference-style case competition, offering a platform to
            tackle real-world engineering challenges. Participants select from a
            diverse array of eight industry-relevant challenges, showcasing
            their creativity and problem-solving prowess beyond the confines of
            traditional academia. QEC not only nurtures technical skills but
            also cultivates professionalism and leadership among aspiring
            engineers. Check out our various competitions below!{" "}
          </p>
        </section>
        <div className="flip-card-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-card-heading">
                  <h3>Communication</h3>
                </div>
                <img className="img-configure" src={flipcard1} alt="image" />
              </div>
              <div className="flip-card-back">
                <p>
                  Participants are tasked with articulating intricate technical
                  problems in accessible ways, ensuring clarity and relevance
                  for a broad audience. This challenge underscores the critical
                  role of clear and transparent communication in engineering.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-card-heading">
                  <h3>Bioengineering</h3>
                </div>
                <img className="img-configure" src={flipcard2} alt="image" />
              </div>
              <div className="flip-card-back">
                <p>
                  In Bioengineering, participants are expected to explore the
                  intersection of biology, engineering, and technology to
                  develop innovative solutions that address pressing healthcare
                  issues. Your mission is to harness the principles of
                  bioengineering to create a product, process, or system that
                  can improve human health and wellbeing.
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-card-heading">
                  <h3>Junior Design</h3>
                </div>
                <img className="img-configure" src={flipcard3} alt="image" />
              </div>
              <div className="flip-card-back">
                <p>
                  The Junior Design component of the QEC serves as a pivotal
                  opportunity for aspiring engineers to cultivate their critical
                  thinking, design prowess, and creative expression.
                  Participants embark on a journey to conceptualize and develop
                  solutions to real-world challenges, navigating every phase
                  from ideation to execution with diligence and innovation.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-card-heading">
                  <h3>Programming</h3>
                </div>
                <img className="img-configure" src={flipcard5} alt="image" />
              </div>
              <div className="flip-card-back">
                <p>
                  Programming category stands as a testament to competitors'
                  dedication to developing high-quality software solutions for
                  challenging engineering problems. Participants strive to
                  create industry-standard software that not only addresses the
                  specified engineering issues but also emphasizes efficiency,
                  user-friendly interfaces, and practicality.
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-card-heading">
                  <h3>Consulting</h3>
                </div>
                <img className="img-configure" src={flipcard6} alt="image" />
              </div>
              <div className="flip-card-back">
                <p>
                  Participants are challenged with real-world engineering
                  problems, requiring them to devise comprehensive theoretical
                  solutions for prospective clients. Drawing on their technical
                  expertise and skills, competitors meticulously analyze the
                  problem's facets, including economic viability, environmental
                  impact, political feasibility, and social implications.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-card-heading">
                  <h3>Debate</h3>
                </div>
                <img className="img-configure" src={flipcard7} alt="image" />
              </div>
              <div className="flip-card-back">
                <p>
                  Competitors engage in rigorous intellectual discourse, tasked
                  with constructing persuasive arguments on assigned
                  resolutions. This challenge demands a broad spectrum of
                  knowledge as participants navigate complex topics within a
                  structured debate format. Arguments must be articulated
                  concisely and supported with sound reasoning and evidence.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-card-heading">
                  <h3>Re-Engineering</h3>
                </div>
                <img className="img-configure" src={flipcard4} alt="image" />
              </div>
              <div className="flip-card-back">
                <p>
                  In the re-engineering category of the QEC, competitors are
                  challenged to reimagine and redesign existing engineering
                  processes or products in innovative and sustainable ways.
                  Emphasizing creativity, and environmental impact, participants
                  must showcase their ability to innovate by proposing solutions
                  that improve upon existing designs and address contemporary
                  environmental challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-card-heading">
                  <h3>Senior Design</h3>
                </div>
                <img className="img-configure" src={flipcard8} alt="image" />
              </div>
              <div className="flip-card-back">
                <p>
                  The Senior Design segment of the QEC represents a pinnacle for
                  experienced participants to demonstrate their advanced
                  critical thinking, innovative design capabilities, and
                  creative expression. Seniors engage in a comprehensive process
                  of identifying and tackling real-world challenges, from
                  initial problem-solving to the development of robust
                  solutions.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-card-heading">
                  <h3>Innovation</h3>
                </div>
                <img className="img-configure" src={flipcard9} alt="image" />
              </div>
              <div className="flip-card-back">
                <p>The innovation contest is not taking place this year. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>© 2024 Queen's Engineering Competition</p>
          <div className="email-box">
            <p>
              Any questions? Contact us at:
              <a href="mailto:qec@engsoc.queensu.ca">qec@engsoc.queensu.ca</a>
            </p>
          </div>
        </div>
        </body>
    </>
  );
};

export default Topic;
