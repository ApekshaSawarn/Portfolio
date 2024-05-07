import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            
            <p className="home-about-body">I'm a <i>
                <b className="purple"> persistent, energetic, and dependable individual </b>
              </i> with an interest in solving complex technological challenges.
              <br />
              <br />
              I have solved over 1300+ problems across platforms such as &nbsp;
              <i>
                <b className="purple">LeetCode and GeeksForGeeks. </b> My rating is  &nbsp;
                <b className="purple">
                  1450
                </b>
                &nbsp; and I hold a rank of 40k out of over 3M+ Users on LeetCode.
              </i>
              <br />
              <br />            
              In addition to my proficiency in problem-solving, I possess knowledge of &nbsp;
              <b className="purple">full-stack technologies</b>, with a particular inclination towards backend development. I am well-versed in both 
              <i>
                <b className="purple">
                  {" "}
                  Node.js and Spring Boot.
                </b>
              </i>
              <br />
              <br />
              With solid communication and leadership skills, I am an innovative and goal-driven individual.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ApekshaSawarn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:apekshasawarn10@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/apeksha-sawarn-986057231"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/____apeksha_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
