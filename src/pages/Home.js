import { motion } from 'framer-motion';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import { FaRocket, FaUsers, FaChartLine, FaFileUpload, FaStepForward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Import CSS file
import  './Home.css';
import p4Image from '../img/p4.png'; // Adjust image path

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container text-center"
        >
          <h1 className="display-3 mb-4 fw-bold">
            Transform Your Projects with 
            <span className="text-primary"> Project Manager</span>
          </h1>
          <p className="lead mb-4">Collaborate, Track, and Deliver Success</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="primary" 
              size="lg"
              className="rounded-pill px-5"
              onClick={() => navigate('/register')}
            >
              Get Started Free
            </Button>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-5"
          >
            <FaStepForward size={40} className="text-white" />
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Why Choose ProManage?</h2>
          <Row className="g-4">
            {[
              { icon: <FaRocket />, title: "Boost Productivity", text: "30% faster project completion" },
              { icon: <FaUsers />, title: "Team Collaboration", text: "Real-time updates & messaging" },
              { icon: <FaChartLine />, title: "Advanced Analytics", text: "Track progress with insights" },
              { icon: <FaFileUpload />, title: "File Management", text: "Centralized document storage" }
            ].map((item, index) => (
              <Col md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-100 shadow-sm text-center p-4 hover-effect">
                    <div className="icon-wrapper fs-1 text-primary mb-3">
                      {item.icon}
                    </div>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Feature Carousel */}
      <section className="py-5 feature-carousel">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Latest Features</h2>
          <Carousel fade indicators={false}>
            <Carousel.Item>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3>AI-Powered Insights</h3>
                    <p className="lead">Predict project risks and optimize resources with machine learning</p>
                  </motion.div>
                </div>
                <div className="col-md-6">
                  <img
                    src={p4Image}
                    className="img-fluid rounded-3 shadow"
                    alt="AI Analytics"
                  />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Get Started in 3 Steps</h2>
          <div className="steps-timeline">
            {[
              { title: "Create Project", text: "Set up your workspace" },
              { title: "Add Team", text: "Invite collaborators" },
              { title: "Track Progress", text: "Monitor in real-time" }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="step-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="step-number">{index + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;