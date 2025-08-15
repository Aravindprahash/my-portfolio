import React from 'react';
import profilePic from '../assets/profile.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <>
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .home-background {
            background: linear-gradient(-45deg, #9095a1, #2e5795, #1a1a1a);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
          }

          .btn-animate:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease;
          }

          .btn-animate:active {
            transform: scale(0.95);
            transition: transform 0.1s ease;
          }

          .icon-animate {
            transition: transform 0.3s ease;
          }

          .icon-animate:hover {
            transform: scale(1.2) rotate(5deg);
            color: #d4de15ff !important;
          }

          .icon-animate:active {
            transform: scale(0.9);
          }
        `}
      </style>

      <div className="min-vh-100 d-flex align-items-center text-white home-background">
        <div className="container text-center">
          <img
            src={profilePic}
            alt="Profile"
            className="img-fluid rounded-circle mb-4 shadow"
            style={{
              width: '180px',
              height: '180px',
              objectFit: 'cover',
              border: '4px solid white',
            }}
          />
          <h1 className="fw-bold">Hey! I'm Aravind Prahash👋</h1>
          <p className="lead">MERN Stack / Frontend / Web Developer</p>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="/projects" className="btn btn-light btn-animate">
              View My Projects
            </a>
            <a href="/resume" className="btn btn-outline-light btn-animate">
              Download Resume
            </a>
          </div>

          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/aravind-prahash-a-897114299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-3 me-3 icon-animate"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Aravindprahash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-3 icon-animate"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
