import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';

const ProjectInfo = () => {
    const [project, setProject] = useState(null);
  
    useEffect(() => {
      const fetchProject = async () => {
        const response = await axios.get('/api/projects/123'); // Replace with actual endpoint
        setProject(response.data);
      };
      fetchProject();
    }, []);
  
    return (
      <div className="container-fluid">
        <Row className="min-vh-100">
          {/* Sidebar */}
          <Col md={3} className="bg-light p-4 border-end">
            <div className="sticky-top" style={{ top: '1rem' }}>
              <h3 className="mb-4">Project Overview</h3>
              <div className="list-group">
                <button className="list-group-item list-group-item-action active">
                  📌 Basic Info
                </button>
                <button className="list-group-item list-group-item-action">
                  📅 Timeline
                </button>
                <button className="list-group-item list-group-item-action">
                  📊 Statistics
                </button>
                <button className="list-group-item list-group-item-action">
                  👥 Team Members
                </button>
                <button className="list-group-item list-group-item-action">
                  📁 Documents
                </button>
              </div>
            </div>
          </Col>
  
          {/* Main Content */}
          <Col md={9} className="p-5">
            {project ? (
              <div>
                <h1 className="display-4 mb-4">{project.title}</h1>
                <div className="row">
                  <div className="col-md-8">
                    <Card className="mb-4 shadow-sm">
                      <Card.Body>
                        <Card.Title>Project Description</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                      </Card.Body>
                    </Card>
  
                    <Card className="mb-4 shadow-sm">
                      <Card.Body>
                        <Card.Title>Progress</Card.Title>
                        <div className="progress" style={{ height: '25px' }}>
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: `${project.progress}%` }}
                          >
                            {project.progress}%
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
  
                  <div className="col-md-4">
                    <Card className="mb-4 shadow-sm">
                      <Card.Body>
                        <Card.Title>Quick Stats</Card.Title>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Tasks Completed:</span>
                            <span className="badge bg-primary">45/60</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Team Members:</span>
                            <span className="badge bg-success">8</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Days Remaining:</span>
                            <span className="badge bg-warning">15</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  };
  export default ProjectInfo;