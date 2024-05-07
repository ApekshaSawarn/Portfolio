import React from 'react'
import { useNavigate } from 'react-router-dom'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle'
import { Link, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <Container fluid className="contact-section">
      <Container>
        <Row style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
          <Col className="contact-header">
            <h4 style={{ paddingTop: '8rem' ,paddingBottom: 15, color:'white'}} >
              What's Next ?
            </h4>
          </Col>
        </Row>
        <Row style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
          <Col className="contact-header">
            <h1 style={{ fontSize: '2.5rem',paddingBottom: 15, color:'#cd5ff8'}} >
              Get In Touch
            </h1>
          </Col>
        </Row>
        <Row style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
          <Col md={6} className="contact-header">
            <p style={{color: 'white'}}>
              My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.
            </p>
          </Col>
        </Row>
        <Row style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
          <Col style={{paddingTop:'1.5rem'}}>
          <a href="mailto:apekshasawarn10@gmail.com" className="btn btn-outline-light">
            Mail Me
          </a>
          </Col>
        </Row>
        <Row>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Row>
      </Container>
      <Particle />
    </Container>
  )
}

export default Contact