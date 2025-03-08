// src/pages/SoftwareDevelopment.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { solutions } from '../pages/solutionsData';
import './sd.css';
const SoftwareDevelopment = () => {
  const navigate = useNavigate();
  const solution = solutions['software-development'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="solution-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>{solution.title}</h1>
          <p className="lead-text">{solution.description}</p>
          <button 
            className="cta-button"
            onClick={() => navigate('/contact')}
          >
            Schedule Demo
          </button>
        </div>
        <img 
          src={solution.image} 
          alt="Software Development" 
          className="public/img/software.png"
        />
      </section>

      <section className="benefits-section">
        <h2>Key Benefits</h2>
        <div className="benefits-grid">
          {solution.benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-number">{index + 1}</div>
              <h3>{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Core Features</h2>
        <div className="features-grid">
          {solution.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-container">👨💻</div>
              <h3>{feature}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
 
export default SoftwareDevelopment;