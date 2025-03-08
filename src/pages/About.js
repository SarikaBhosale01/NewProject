import React from 'react';
import { FaUsers, FaChartLine, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Driving innovation through collaboration</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>To empower teams and organizations with cutting-edge project management solutions that streamline workflows and boost productivity.</p>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3>500+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat-card">
          <FaChartLine className="stat-icon" />
          <h3>98%</h3>
          <p>Success Rate</p>
        </div>
        <div className="stat-card">
          <FaAward className="stat-icon" />
          <h3>25+</h3>
          <p>Awards Won</p>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/img/team1.jpg" alt="Team Member" />
            <h3>kiran hari </h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <img src="/img/team2.jpg" alt="Team Member" />
            <h3>kaveri rahane</h3>
            <p>CTO</p>
          </div>
          <div className="team-card">
            <img src="/img/team3.jpg" alt="Team Member" />
            <h3>sarika bhosale</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background: rgba(163, 127, 153, 0.6);
        }

        .hero-section {
          background: url('/img/about-hero.jpg') center/cover;
          height: 400px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .hero-content {
          text-align: center;
          color: white;
          background: rgba(0,0,0,0.6);
          padding: 2rem;
          border-radius: 15px;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .mission-section {
          background:rgb(96, 162, 228);
          padding: 4rem 2rem;
          border-radius: 15px;
          margin-bottom: 3rem;
          text-align: center;
        }

        .mission-content {
          max-width: 800px;
          margin: 0 auto;
          
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          background:rgb(204, 141, 236);
        }

        .stat-icon {
          font-size: 2.5rem;
          color: #3498db;
          margin-bottom: 1rem;
        }

        .team-section {
          margin-bottom: 4rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          
        }

        .team-card {
          text-align: center;
          background:rgb(96, 162, 228);
          padding: 1.5rem;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          background:rgb(148, 108, 171);
        }

        .team-card img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default About;