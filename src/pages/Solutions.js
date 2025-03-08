// src/pages/Solutions.js
import { useParams, useNavigate } from 'react-router-dom';
import { solutions, defaultSolution } from '../pages/solutionsData';
import './Solution.css';

const Solutions = () => {
  const { solutionId } = useParams();
  const navigate = useNavigate();

  // Get solution data safely
  const solution = solutions[solutionId] || defaultSolution;
  const pageTitle = solution.title || "Solution Details";

  // Handle back navigation
  const handleBack = () => navigate(-1);

  return (
    <div className="solution-page">
      <button onClick={handleBack} className="back-button">
        &larr; Back to Solutions
      </button>

      <div className="hero-section">
        <img 
          src={solution.image} 
          alt={pageTitle}
          className="public/img/software.png"
        />
        <div className="solution-header">
          <h1>{pageTitle}</h1>
          <p>Comprehensive management solution for {pageTitle}</p>
        </div>
      </div>

      <div className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          {solution.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>{feature}</h3>
              <p>Detailed description of {feature.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;