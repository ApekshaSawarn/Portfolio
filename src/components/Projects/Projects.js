import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CricStream from "../../Assets/Projects/CricStream.png";
import shopvista from "../../Assets/Projects/shopvista.png";
import editor from "../../Assets/Projects/codeEditor.png";
import smarthome from "../../Assets/Projects/smarthome.png";
import todo from "../../Assets/Projects/todo.png";
import Image_Steganography from "../../Assets/Projects/image_steganography.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TimeBound"
              description="A user-friendly web app designed to help you stay focused on your goals. Easily add, track, and manage your goals with customizable titles, descriptions, and labels. Start and pause timers to accurately monitor your progress, even if you close your browser or turn off your computer, ensuring uninterrupted productivity."
              ghLink="https://github.com/ApekshaSawarn/TimeBound"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CricStream}
              isBlog={false}
              title="CricStream"
              description="Experience real-time cricket score updates with our web application powered by TypeScript for dynamic frontend interactions, MySQL for seamless data storage, and SpringBoot for a resilient backend infrastructure, ensuring smooth and reliable performance throughout the game."
              ghLink="https://github.com/ApekshaSawarn/CrickStream"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopvista}
              isBlog={false}
              title="ShopVista"
              description="The online Shopping Cart E-Commerce Website Project in Java, JDBC, Servlets, and JSP facilitates seamless online shopping by allowing users to add, remove, and manage cart items with ease. It offers functionalities such as adding items to the cart, removing items, and adjusting quantities, providing users with a convenient and efficient shopping experience."
              ghLink="https://github.com/ApekshaSawarn/ShopVista"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image_Steganography}
              isBlog={false}
              title="Image Steganography"
              description="This project enables secure communication by embedding messages within image files. It utilized Python as the primary programming language, along with libraries such as PIL (Python Imaging Library) or OpenCV for image manipulation and steganography."
              ghLink="https://github.com/ApekshaSawarn/Image-Steganography"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Brain Tumor Detection"
              description="
              A web app developed using Python, alongside libraries like TensorFlow and the Flask framework, aids in the early detection of brain tumors. This project is designed to take MRI scan images of the brain as input and analyze them using machine learning algorithms such as CNN to identify potential tumor growth."
              ghLink="https://github.com/ApekshaSawarn/Brain-Tumor-Detection"            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smarthome}
              isBlog={false}
              title="Home Automation System"
              description="A home automation system built using IoT integrates smart devices and sensors to automate and control various aspects of a home, such as lighting, temperature, security, and appliances. Users can remotely monitor and manage their home's environment and devices through a central hub or smartphone app, enhancing convenience, energy efficiency, and security."
              ghLink="https://github.com/ApekshaSawarn"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
