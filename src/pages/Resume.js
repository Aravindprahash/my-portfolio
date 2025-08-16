import React from 'react';

function Resume() {
  return (
    <>
      <style>
        {`
          .resume-section {
            background: linear-gradient(to right, #1f4037, #99f2c8);
            padding: 60px 0;
            min-height: 100vh;
            font-family: 'Segoe UI', sans-serif;
            color: #fff;
            text-align: center;
          }

          .resume-heading {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .resume-subtext {
            font-size: 1.1rem;
            margin-bottom: 30px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }

          .resume-skills span {
            display: inline-block;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 10px 16px;
            margin: 6px;
            font-size: 0.95rem;
            font-weight: 500;
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: background 0.3s ease;
          }

          .resume-skills span:hover {
            background-color: rgba(255, 255, 255, 0.25);
          }

          .resume-button {
            background-color: #fff;
            color: #1f4037;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 1rem;
            margin-top: 30px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
          }

          .resume-button:hover {
            background-color: #f1f1f1;
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="resume-section">
        <h2 className="resume-heading">📄 My Resume</h2>
        <p className="resume-subtext">
          Here is a quick overview of my skill set and experiences. Download my resume below to know more about my projects,
          education, and professional journey.
        </p>

        <div className="resume-skills">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Bootstrap</span>
          <span>Git & GitHub</span>
          <span>REST APIs</span>
        </div>

        <a
          href="/aravindprahash-a-resume.pdf"
          className="resume-button"
          target="_blank"
          rel="noreferrer"
        >
          ⬇️ Download Resume
        </a>
      </div>
    </>
  );
}

export default Resume;
