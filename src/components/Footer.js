import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="align-items-center">

      
          <Col md={12} className="text-center">
            <a href="https://github.com/Aravindprahash" className="text-light mx-2" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aravind-prahash-a-897114299" className="text-light mx-2" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:aravindprahasha@gmail.com" className="text-light mx-2">
              <FaEnvelope size={20} />
            </a>
          </Col>
        </Row>

        <hr className="border-top border-secondary mt-4" />
        <Row>
          <Col className="text-center small">
            &copy; {new Date().getFullYear()} Aravind Prashash A. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
