import React from 'react';

const projectList = [

  {
    title: 'Food Ordering App',
    desc: 'React + Bootstrap frontend project',
    demo: 'https://splendorous-travesseiro-f40930.netlify.app/',
    repo: 'https://github.com/Aravindprahash/trendyfoods',
    tech: ['React', 'Javascript', 'Bootstrap', 'Routing']
  },
  {
    title: 'Movie Ticket Booking App',
    desc: 'React + Bootstrap frontend project with login flow.',
    demo: 'https://ticketbooking-mu.vercel.app/login',
    repo: 'https://github.com/Aravindprahash/ticketbooking',
    tech: ['React', 'Javascript' , 'Bootstrap', 'Routing' , 'oAuth']
  },
  {
    title: 'Desserts Ordering App - MERN',
    desc: 'React + Bootstrap frontend project with login flow.',
    demo: 'https://blissfullbites-mern.vercel.app',
    repo: 'https://github.com/Aravindprahash/blissfullbites-mern',
    tech: ['MongoDB', 'Express.js' , 'React.js', 'Node.js' , 'oAuth', 'Javascript', 'Bootstrap']
  },
];

function Projects() {
  return (
    <>
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .projects-section {
            background: linear-gradient(135deg, #1f2c4b, #0f0f0f, #2e5795);
            background-size: 300% 300%;
            animation: gradientFlow 12s ease infinite;
            min-height: 100vh;
            padding: 60px 0;
            color: white;
          }

          .project-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .project-card:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
          }

          .project-btn {
            transition: all 0.2s ease;
          }

          .project-btn:hover {
            transform: scale(1.05);
          }

          .badge {
            background-color: #6c757d;
            font-size: 0.8rem;
            padding: 6px 10px;
            border-radius: 20px;
          }
        `}
      </style>

      <div className="projects-section">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">My Projects</h2>
          <div className="row">
            {projectList.map((p, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card project-card h-100 text-white">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{p.title}</h5>
                    <p className="card-text">{p.desc}</p>
                    <div className="mb-3">
                      {p.tech.map((t, idx) => (
                        <span className="badge me-2" key={idx}>{t}</span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <a href={p.demo} className="btn btn-sm btn-light me-2 project-btn" target="_blank" rel="noreferrer">
                        🔗 Live Demo
                      </a>
                      <a href={p.repo} className="btn btn-sm btn-outline-light project-btn" target="_blank" rel="noreferrer">
                        📁 Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
