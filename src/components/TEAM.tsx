import React from "react";
import "./TEAM.css";
import { Link } from "react-router-dom";
import website_logo from "./media/website_logo.png";
import Kanika from "./media/team/Kanika.jpg";
import AliCotten from "./media/team/AliCotten.jpg";
import Fernanda from "./media/team/Fernanda.jpg";
import Greyson from "./media/team/Greyson.jpg";
import Jacintha from "./media/team/Jacintha.jpg";
import Katherine from "./media/team/Katherine.jpg";
import Lucas from "./media/team/Lucas.jpeg";
import MichaelHan from "./media/team/Michaelhan.jpeg";
import MichaelMatsuda from "./media/team/MichaelMatsuda.jpg";
import Pahini from "./media/team/Pahini.jpeg";
import Robin from "./media/team/Robin.jpg";
import Sara from "./media/team/Sara.jpg";
import Sophie from "./media/team/Sophie.jpeg";
import Trent from "./media/team/Trent.jpeg";

const TEAM: React.FC = () => {
  return (
    <>
      <img
        className="logo"
        src={website_logo}
        alt="Queen's Engineering Competition"
      />
      <div className="team-topic">Meet our Team</div>
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
      <div className="member-section-container">
        <div className="member-topic">Co-Chairs</div>
        <div className="grid-container">
          <div className="center-container">
            <div className="center-item">
              <img className="team-image" src={Sara} alt="Sara Bacher" />
              <div className="info-position">
                <p>
                  Sara Bacher
                  <br />
                  Co-Chair
                  <br />
                  4th Year - Geological Engineering
                </p>
              </div>
            </div>
            <div className="center-item">
              <img
                className="team-image"
                src={Katherine}
                alt="Katherine Tesselaar"
              />
              <div className="info-position">
                <p>
                  Katherine Tesselaar
                  <br />
                  Co-Chair
                  <br />
                  3rd Year - Apple Comp
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LOGISTICS */}
        <div className="member-topic">Logistics</div>
        <div className="grid-container">
          <div className="center-container">
            <div className="center-item">
              <img className="team-image" src={Lucas} alt="Lucas Moretti" />
              <div className="info-position">
                <p>
                  Lucas Moretti
                  <br />
                  Director of Logistics
                  <br />
                  3rd Year - Apple Comp
                </p>
              </div>
            </div>
            <div className="center-item">
              <img className="team-image" src={Fernanda} alt="Fernanda Croce" />
              <div className="info-position">
                {" "}
                <p>
                  Fernanda Croce
                  <br />
                  Logistics Coordinator
                  <br />
                  2nd Year - Civil Engineering
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MARKETING */}
        <div className="member-topic">Marketing</div>
        <div className="grid-container">
          <div className="center-container">
            <div className="center-item">
              <img
                className="team-image"
                src={Robin}
                alt="Robin Krasinkiewicz"
              />
              <div className="info-position">
                {" "}
                <p>
                  Robin Krasinkiewicz
                  <br />
                  Director of Marketing
                  <br />
                  2nd Year - Engineering Physics
                </p>
              </div>
            </div>
            <div className="center-item">
              <img className="team-image" src={Kanika} alt="Kanika Poonia" />
              <div className="info-position">
                <p>
                  Kanika Poonia
                  <br />
                  Web Developer
                  <br />
                  2nd Year - Computing
                </p>
              </div>
            </div>
          </div>
          <div className="center-container">
            <div className="center-item">
              <div className="info-position">
                {" "}
                <hr />
                <p>
                  Lotus Sheikh Lewis
                  <br />
                  Marketing Coordinator
                  <br />
                  3rd Year - Sociology
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CHALLENGES */}
        <div className="member-topic">Challenges</div>
        <div className="grid-container">
          <div className="center-container">
            <div className="center-item">
              <img className="team-image" src={Greyson} alt="Greyson Martyn" />
              <div className="info-position">
                <p>
                  Greyson Martyn
                  <br />
                  Director of Challenges
                  <br />
                  4th Year - Mechanical Engineering
                </p>
              </div>
            </div>
            <div className="center-item">
              <img className="team-image" src={Jacintha} alt="Jacintha Groen" />
              <div className="info-position">
                <p>
                  Jacintha Groen in 't Woud
                  <br />
                  Challenges Coordinator
                  <br />
                  3rd Year - Mechanical Engineering
                </p>
              </div>
            </div>
          </div>
          <div className="center-container">
            <div className="center-item">
              <img className="team-image" src={Pahini} alt="Pahini Patel" />
              <div className="info-position">
                <p>
                  Pahini Patel
                  <br />
                  Challenges Coordinator
                  <br />
                  3rd Year - Civil Engineering
                </p>
              </div>
            </div>
            <div className="center-item">
              <img className="team-image" src={Trent} alt="Trent McKinley" />
              <div className="info-position">
                <p>
                  Trent McKinley
                  <br />
                  Challenges Coordinator
                  <br />
                  2nd Year - Engineering Chemistry
                </p>
              </div>
            </div>
          </div>
          <div className="center-container">
            <div className="center-item">
              <div className="info-position">
                <p>
                  Shohayb Heddokheel
                  <br />
                  Challenges Coordinator
                  <br />
                  2nd Year - Applied Science
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SPONSORSHIP */}
        <div className="member-topic">Sponsorship</div>
        <div className="grid-container">
          <div className="center-container">
            <div className="center-item">
              <img className="team-image" src={AliCotten} alt="Ali Cotten" />
              <div className="info-position">
                <p>
                  Ali Cotten
                  <br />
                  Director of Sponsorships
                  <br />
                  4th Year - Electrical Engineering
                </p>
              </div>
            </div>
            <div className="center-item">
              <img
                className="team-image"
                src={MichaelMatsuda}
                alt="Michael Matsuda"
              />
              <div className="info-position">
                <p>
                  Michael Matsuda
                  <br />
                  Sponsorship Coordinator
                  <br />
                  2nd Year - Applied Sysro
                </p>
              </div>
            </div>
          </div>
          <div className="center-container">
            <div className="center-item">
              <img className="team-image" src={Sophie} alt="Sophie Lamy" />
              <div className="info-position">
                <p>
                  Sophie Lamy
                  <br />
                  Sponsorship Coordinator
                  <br />
                  3rd Year - Mechanical Engineering
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FINANCE */}
        <div className="member-topic">Finance</div>
        <div className="grid-container">
          <div className="center-container">
            <div className="center-item">
              <img className="team-image" src={MichaelHan} alt="Michael Han" />
              <div className="info-position">
                <p>
                  Michael Han
                  <br />
                  Director of Finance
                  <br />
                  3rd Year - Apple Comp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TEAM;
