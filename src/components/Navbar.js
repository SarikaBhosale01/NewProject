import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
//import Education from '../pages/Education';

const Navbar = () => {
  const navigate = useNavigate();
  const [showSolutions, setShowSolutions] = useState(false);
  const dropdownRef = useRef(null);
  // const handleSolutionClick = (solution) => {
  //   navigate(`/solutions/${solution.toLowerCase().replace(/\s+/g, '-')}`);
  //   setShowSolutions(false);
  // };
  
  const solutions = [
    "Enterprise",
    "Hybrid PM",
    "Construction",
    "Software Development",
    "Education",
    "Marketing",
    "Startup",
    "Testing",
    "Real Estate",
    "Consulting Services",
    "Manufacturing",
    "All Solutions"
    
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSolutions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleSolutions = () => setShowSolutions(!showSolutions);

  return (
    <nav style={styles.navbar}>
<<<<<<< HEAD
      <div style={styles.logoContainer}>
        <NavLink to="/" style={styles.logoLink}>
          <img 
            src="/img/project.png" 
            alt="Logo" 
            style={styles.logoImage} 
          />
          <span style={styles.logoText}>Project Manager</span>
        </NavLink>
      </div>

      <div style={styles.navRight}>
        <div style={styles.navSection}>
          <button 
            onClick={toggleSolutions}
            style={styles.solutionsButton}
            ref={dropdownRef}
          >
            Solutions
            <span style={styles.arrowIcon}>{showSolutions ? '▲' : '▼'}</span>
          </button>

          {showSolutions && (
            <div style={styles.dropdown}>
              {solutions.map((solution) => (
                <NavLink
                  key={solution}
                  to={`/solutions/${solution.toLowerCase().replace(/\s+/g, '-')}`}
                  style={styles.dropdownItem}
                  onClick={() => setShowSolutions(false)}
                >
                  {solution}
                </NavLink>
              ))}
              
            </div>
          )}
        </div>
        
        


        <NavLink to="/solutions/software-development" style={styles.navLink} className="dropdown-item">Software Development</NavLink>
        <div style={styles.navLinks}>
          <NavLink to="/home" style={styles.navLink}>
            Features
          </NavLink>
          <NavLink to="/Education" style={styles.navLink}>
            Education
          </NavLink>
          <NavLink to="/Dashboard" style={styles.navLink}>
            Dashboard
          </NavLink>

          <NavLink to="/about"style={styles.navLink} className="nav-link">About</NavLink>
    <NavLink to="/contact" style={styles.navLink} className="nav-link">Contact</NavLink>
    <NavLink to="/project-info" style={styles.navLink}>
            view all details
          </NavLink>
          {/* <NavLink to="/"style={styles.navLink}>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Login
          </button>
          </NavLink> */}
          {/* <NavLink to="/UploadProject" style={styles.navLink}>
          UploadProject
          </NavLink> */}
                    <NavLink to="/"style={styles.navLink}>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
          </NavLink>
          
        </div>
=======
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>
        <img src="/src/img/project.png" alt=""  />Project Manager
        </Link>
      </div>
      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>
          Dashboard
        </Link>
        <Link to="/create-project" style={styles.link}>
          Create Project
        </Link>
        <Link to="/projects" style={styles.link}> View-All-projects</Link>
        <button onClick={handleLogout} style={styles.button}>
          Logout
        </button>
        
>>>>>>> 43ec611711763e60138e517af3279a06d36df7f0
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1a237e',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'relative',
    width:'100%'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoImage: {
    width: '40px',
    height: '40px',
    borderRadius: '4px',
  },
  logoText: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: 'white',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '0rem',
  },
  navSection: {
    position: 'relative',
  },
  solutionsButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: 'rgba(178, 28, 28, 0.1)',
    },
  },
  arrowIcon: {
    fontSize: '0.8rem',
    marginLeft: '4px',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: 'white',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    minWidth: '220px',
    marginTop: '8px',
    zIndex: '1000',
    overflow: 'hidden',
  },
  dropdownItem: {
    display: 'block',
    padding: '12px 16px',
    color: '#1a237e',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#f5f5f5',
    },
    ':not(:last-child)': {
      borderBottom: '1px solid #eee',
    },
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
  },
  logoutButton: {
    padding: '7px 16px',
    backgroundColor: '#d32f2f',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#b71c1c',
    },
  },
};

export default Navbar;