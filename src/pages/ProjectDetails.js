<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, ProgressBar, Modal } from 'react-bootstrap';
import { FaEdit, FaTrash, FaCalendarAlt, FaUsers, FaTasks } from 'react-icons/fa';
import axios from 'axios';
import PropTypes from 'prop-types';
import './pro.css';
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 // Import Sidebar

>>>>>>> 43ec611711763e60138e517af3279a06d36df7f0
const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (!projectId || !/^[0-9a-fA-F]{24}$/.test(projectId)) {
      setError('Invalid project ID format');
      setLoading(false);
    }
    const fetchProject = async () => {
      try {
        // Frontend: src/components/ProjectDetails.js
        const response = await axios.get(`http://localhost:5000/api/projects/${projectId}`, // Add full URL
       { headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }});
        //const response = await axios.get(`/api/projects/${projectId}`);
        setProject(response.data);
      } catch (err) {
        console.error('API Error:', err);
        setError('Failed to load project details');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      navigate('/projects');
    } catch (err) {
      setError('Failed to delete project');
    }
    setShowDeleteModal(false);
  };

<<<<<<< HEAD
  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;
  if (!project) return <div className="text-center mt-5">Project not found</div>;
=======
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
 
>>>>>>> 43ec611711763e60138e517af3279a06d36df7f0


  
  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-4">{project.title}</h1>
            <div>
              <Button variant="outline-primary" className="me-2" onClick={() => navigate(`/edit-project/${projectId}`)}>
                <FaEdit className="me-2" /> Edit
              </Button>
              <Button variant="outline-danger" onClick={() => setShowDeleteModal(true)}>
                <FaTrash className="me-2" /> Delete
              </Button>
            </div>
          </div>
          <Badge bg={project.status === 'Completed' ? 'success' : 'warning'} className="mb-3">
            {project.status}
          </Badge>
        </Col>
      </Row>

      <Row className="g-4">
        <Col lg={8}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4">
                <FaTasks className="me-2" /> Project Description
              </Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4">
                <FaCalendarAlt className="me-2" /> Timeline
              </Card.Title>
              <div className="mb-3">
                <strong>Start Date:</strong> {new Date(project.startDate).toLocaleDateString()}
              </div>
              <div className="mb-4">
                <strong>End Date:</strong> {new Date(project.endDate).toLocaleDateString()}
              </div>
              <ProgressBar now={project.progress} label={`${project.progress}%`} variant="success" />
            </Card.Body>
          </Card>

          <Card className="mt-4 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4">
                <FaUsers className="me-2" /> Team Members
              </Card.Title>
              <div className="d-flex flex-wrap gap-2">
                {project.teamMembers.map((member) => (
                  <Badge key={member._id} bg="info" pill>
                    {member.name}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this project? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete Project
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    teamMembers: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default ProjectDetails;