<<<<<<< HEAD
import React, { useState } from 'react';
import axios from 'axios';
import { RotateCw } from 'react-feather';
=======
// src/components/UploadProject.js
import React, { useState } from 'react';
import axios from 'axios';
>>>>>>> 43ec611711763e60138e517af3279a06d36df7f0

const UploadProject = () => {
  const [project, setProject] = useState({
    name: '',
    description: '',
    files: null
  });
<<<<<<< HEAD
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState({
    success: null,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!project.files) {
      setUploadStatus({ success: false, message: '❌ Please select at least one file' });
      return;
    }

    setIsUploading(true);
    setUploadStatus({ success: null, message: '' });

=======

  const handleSubmit = async (e) => {
    e.preventDefault();
>>>>>>> 43ec611711763e60138e517af3279a06d36df7f0
    const formData = new FormData();
    formData.append('name', project.name);
    formData.append('description', project.description);
    Array.from(project.files).forEach(file => {
      formData.append('files', file);
    });

    try {
<<<<<<< HEAD
      const {data} = await axios.post('/api/projects/upload', formData, {
        headers: {
          'Content-Type': 'form-data'
        }
      });

      setUploadStatus({
        success: true,
        message: `✅ ${data.message || 'Project uploaded successfully!'}`
      });
      setProject({ name: '', description: '', files: null });

      setTimeout(() => {
        setUploadStatus({ success: null, message: '' });
      }, 5000);

    } catch (error) {
      setUploadStatus({
        success: false,
        message: `❌ Upload failed: ${error.response?.data?.message || 'Server error'}`
      });
    } finally {
      setIsUploading(false);
=======
      await axios.post('/api/projects/upload', formData);
      alert('Project uploaded successfully!');
      setProject({ name: '', description: '', files: null });
    } catch (error) {
      console.error('Upload failed:', error);
>>>>>>> 43ec611711763e60138e517af3279a06d36df7f0
    }
  };

  return (
    <div className="upload-container">
<<<<<<< HEAD
      <form onSubmit={handleSubmit} className="upload-form">
        <h2 className="form-title">🚀 Upload Project</h2>

        <div className="form-group">
          <label className="form-label">Project Name</label>
          <input
            type="text"
            className="form-input"
=======
      <h2>Upload New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
>>>>>>> 43ec611711763e60138e517af3279a06d36df7f0
            value={project.name}
            onChange={(e) => setProject({...project, name: e.target.value})}
            required
          />
        </div>
<<<<<<< HEAD

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            className="form-textarea"
            value={project.description}
            onChange={(e) => setProject({...project, description: e.target.value})}
            rows="4"
          />
        </div>

        <div className="form-group">
          <label className="form-label file-upload-label">
            📁 Select Files
            <input
              type="file"
              multiple
              className="file-input"
              onChange={(e) => setProject({...project, files: e.target.files})}
            />
            <span className="custom-file-button">Browse Files</span>
          </label>
          <div className="file-preview">
            {project.files && 
              Array.from(project.files).map((file, index) => (
                <div key={index} className="file-item">
                  <span className="file-icon">📄</span>
                  <div className="file-info">
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </div>
                </div>
=======
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={project.description}
            onChange={(e) => setProject({...project, description: e.target.value})}
          />
        </div>

        <div className="form-group file-upload">
          <label>Upload Files</label>
          <input
            type="file"
            multiple
            onChange={(e) => setProject({...project, files: e.target.files})}
          />
          <div className="file-preview">
            {project.files && 
              Array.from(project.files).map((file, index) => (
                <span key={index} className="file-item">
                  📄 {file.name}
                </span>
>>>>>>> 43ec611711763e60138e517af3279a06d36df7f0
              ))
            }
          </div>
        </div>

<<<<<<< HEAD
        {uploadStatus.message && (
          <div className={`status-message ${uploadStatus.success ? 'success' : 'error'}`}>
            {uploadStatus.message}
          </div>
        )}

        <button 
          type="submit" 
          className="upload-button"
          disabled={isUploading}
        >
          {isUploading ? (
            <>
              <RotateCw className="loading-icon" />
              Uploading...
            </>
          ) : (
            'Launch Project 🚀'
          )}
        </button>
      </form>

      <style jsx>{`
        .upload-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(rgba(208, 64, 148, 0.7), rgba(0,0,0,0.7)),
                      url('public/img/background.png') center/cover fixed;
          padding: 2rem;
        }

        .upload-form {
          background: rgba(255, 255, 255, 0.95);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 600px;
          backdrop-filter: blur(10px);
        }

        .form-title {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 2rem;
          font-size: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: #34495e;
          font-weight: 500;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 0.8rem;
          border: 2px solid #bdc3c7;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #3498db;
        }

        .file-upload-label {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .file-input {
          display: none;
        }

        .custom-file-button {
          background: #3498db;
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          text-align: center;
          margin-top: 0.5rem;
          transition: background 0.3s ease;
        }

        .custom-file-button:hover {
          background: #2980b9;
        }

        .file-preview {
          margin-top: 1rem;
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 8px;
        }

        .file-item {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          background: white;
          margin-bottom: 0.5rem;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .file-icon {
          margin-right: 1rem;
          font-size: 1.2rem;
        }

        .file-info {
          display: flex;
          flex-direction: column;
        }

        .file-name {
          font-weight: 500;
          color: #2c3e50;
        }

        .file-size {
          font-size: 0.8rem;
          color: #7f8c8d;
        }

        .upload-button {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #3498db, #2ecc71);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.3s ease;
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        .upload-button:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        .upload-button:disabled {
          background: #95a5a6;
          cursor: not-allowed;
        }

        .status-message {
          padding: 1rem;
          margin: 1rem 0;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
        }

        .success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .loading-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
=======
        <button type="submit" className="upload-btn">
          🚀 Upload Project
        </button>
      </form>
>>>>>>> 43ec611711763e60138e517af3279a06d36df7f0
    </div>
  );
};

export default UploadProject;