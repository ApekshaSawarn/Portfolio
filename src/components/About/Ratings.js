import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLeetcode,
    SiGeeksforgeeks,
    SiHackerrank,
    SiCodingninjas,
    SiCodechef,
} from "react-icons/si";

function Ratings() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" as="a" href="https://leetcode.com/sawarn03apeksha/" style={{color:"inherit"}}>
        <SiLeetcode/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" as="a" href="https://www.geeksforgeeks.org/user/apekshasawarn10/" style={{color:"inherit"}}>
        <SiGeeksforgeeks />
      </Col>
      <Col xs={4} md={2} className="tech-icons" as="a" href="https://www.hackerrank.com/profile/apekshasawarn10" style={{color:"inherit"}}>
        <SiHackerrank />
      </Col>
      <Col xs={4} md={2} className="tech-icons" as="a" href="https://www.naukri.com/code360/profile/7b914c0b-df77-4e34-8e63-eacb69e883dd" style={{color:"inherit"}}>
        <SiCodingninjas />
      </Col>
      <Col xs={4} md={2} className="tech-icons" as="a" href="https://www.leetcode.com" style={{color:"inherit"}}>
        <SiCodechef />
      </Col>
    </Row>
  );
}

export default Ratings;
