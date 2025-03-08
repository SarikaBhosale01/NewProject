import React from 'react';
import { FaUsers, FaCalendarCheck, FaChartLine, FaBookOpen, FaUniversity, FaTasks } from 'react-icons/fa';

const EducationProjectManagement = () => {
  return (
    <div className="education-pm-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Project Management in Education</h1>
          <p>Transforming educational outcomes through effective planning and execution
          Project Management in Education is a strategic approach that enables educational institutions to systematically plan,
           execute, and monitor initiatives to achieve academic and organizational goals. By applying structured methodologies like Agile or PMBOK, schools, colleges, and universities can effectively manage curriculum development, 
           infrastructure upgrades, research projects, and extracurricular programs. This discipline fosters collaboration among educators, administrators, and stakeholders, ensuring alignment with timelines, budgets, 
           and quality standards.  It enhances accountability through measurable milestones, optimizes resource allocation for classrooms and technology, and improves student outcomes by tracking academic progress. Project management in education also supports 
           accreditation processes, grant-funded research, and crisis response planning, ultimately driving institutional efficiency, innovation, and student success in an increasingly complex educational landscape.


          </p>
        </div>
      </section>

      {/* Importance Section */}
      <section className="importance-section">
        <h2>Why Project Management Matters in Education</h2>
        <div className="importance-grid">
          <div className="importance-card">
            <FaCalendarCheck className="icon" />
            <h3>Structured Planning</h3>
            <p>Ensures academic timelines are met with systematic scheduling of curricula, events, and resource allocation</p>
          </div>
          <div className="importance-card">
            <FaUsers className="icon" />
            <h3>Collaboration</h3>
            <p>Facilitates teamwork between faculty, administration, and students for shared educational goals</p>
          </div>
          <div className="importance-card">
            <FaChartLine className="icon" />
            <h3>Performance Tracking</h3>
            <p>Monitors student progress and institutional effectiveness through measurable milestones</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="benefits-section">
        <div className="benefits-content">
          <div className="benefits-text">
            <h2>Key Benefits of Educational PM</h2>
            <ul>
              <li><FaBookOpen /> Optimized resource allocation for classrooms and labs</li>
              <li><FaUniversity /> Efficient management of academic calendars</li>
              <li><FaTasks /> Streamlined accreditation processes</li>
              <li>Enhanced research project coordination</li>
              <li>Improved extracurricular activity planning</li>
            </ul>
          </div>
          <div className="benefits-image">
            <img src="https://media.istockphoto.com/id/980272768/photo/project-management-concept-chart-with-keywords-and-icons.jpg?s=612x612&w=0&k=20&c=OB3Lhh1-vD8ZU_07PM6F_vnN-hJTYhtWYID9UrFJRyU=" alt="Education Project Management" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <h2>Impactful Numbers</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">68%</div>
            <div className="stat-label">Faster Curriculum Implementation</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">92%</div>
            <div className="stat-label">Faculty Collaboration Improvement</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">45%</div>
            <div className="stat-label">Reduction in Administrative Delays</div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="implementation-section">
        <h2>Successful Educational PM Strategies</h2>
        <div className="strategy-grid">
          <div className="strategy-card">
            <h3>Academic Planning</h3>
            <p>Timeline-driven development of curricula and learning modules</p>
          </div>
          <div className="strategy-card">
            <h3>Research Management</h3>
            <p>Coordinated oversight of academic research projects and funding</p>
          </div>
          <div className="strategy-card">
            <h3>Infrastructure Projects</h3>
            <p>Efficient management of campus development initiatives</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .education-pm-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.2rem;
          background:(rgba(200, 122, 122, 0.7)
        }

        .hero-section {
          background: linear-gradient(rgba(0,0,0,0.7), url('/img/edu-hero.jpg') center/cover;
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
          padding: 2rem;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .importance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .importance-card {
          background: #fff;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          text-align: center;
        }

        .icon {
          font-size: 2.5rem;
          color:rgb(56, 127, 198);
          margin-bottom: 1rem;
        }

        .benefits-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          margin: 4rem 0;
        }

        .benefits-image img {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat-card {
          background: #3498db;
          color: white;
          padding: 2rem;
          border-radius: 10px;
          text-align: center;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .strategy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .strategy-card {
          background: #fff;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .strategy-card:hover {
          transform: translateY(-5px);
        }

        @media (max-width: 768px) {
          .benefits-content {
            grid-template-columns: 1fr;
          }
          
          .hero-content h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EducationProjectManagement;