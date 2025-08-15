import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <>
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .about-section {
            background: linear-gradient(135deg, #2c3e50, #4ca1af, #2c3e50);
            background-size: 300% 300%;
            animation: gradientFlow 10s ease infinite;
            min-height: 100vh;
            padding: 60px 0;
            color: white;
            font-family: 'Segoe UI', sans-serif;
          }

          .about-heading {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .about-text {
            font-size: 1.1rem;
            line-height: 1.7;
            opacity: 0.95;
          }

          .profile-img {
            border: 5px solid #ffffff;
            box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
            transition: transform 0.4s ease;
          }

          .profile-img:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="about-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <img
                src={profilePic}
                alt="Profile"
                className="img-fluid rounded-circle profile-img"
                style={{ width: '360px', height: '360px', objectFit: 'cover' }}
              />
            </Col>
            <Col md={6}>
              <h2 className="about-heading"> About Me</h2>
              <p className="about-text">
                I'm a passionate <strong>Full Stack Developer</strong> skilled in building dynamic and responsive web applications.
                I enjoy crafting clean, user-friendly interfaces and writing scalable backend logic.
              </p>
              <p className="about-text">
                Technologies I work with: React.js, Node.js, Express, MongoDB, Bootstrap, and more.
              </p>
              <p className="about-text">
                I’m always open to new opportunities, collaborations, and challenges that help me grow as a developer.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
