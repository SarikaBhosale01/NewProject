// const express = require("express");
// const router = express.Router();
// const Project = require("../models/Projects");
// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const {
//     createProject,
//     getProjects,
//     updateProject,
//     deleteProject
//   } = require('../controllers/projectController');

// router.post('/', createProject);
// router.get('/', getProjects);
// router.put('/:id', updateProject);
// router.delete('/:id', deleteProject);
// // Get all projects
// router.get("/", async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch projects" });
//   }
// });
// router.get('/:projectId', async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.projectId)
//       .populate('teamMembers', 'name email'); // Include related data
    
//     if (!project) {
//       return res.status(404).json({ error: 'Project not found' });
//     }
    
//     res.status(200).json(project);
//   } catch (error) {
//     console.error('Error fetching project:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
// // Create a project
// router.post("/", async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const newProject = new Project({ title, description });
//     await newProject.save();
//     res.json({ success: true, message: "Project created" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to create project" });
//   }
// });


const express = require('express');
const router = express.Router();
const multer = require('multer');
require('../controllers/projectController');
//const upload = require('../config/multer');
// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// File filter for security
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/') || 
      file.mimetype === 'application/pdf' ||
      file.mimetype === 'application/msword') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file format'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: fileFilter
});

// Updated route handler
router.post('/api/projects/upload', upload.array('files'), async (req, res) => {
  try {
    // Validate input
    if (!req.body.name || !req.body.description) {
      return res.status(400).json({ 
        success: false,
        message: 'Project name and description are required'
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please upload at least one file'
      });
    }

    // Process files
    const files = req.files.map(file => ({
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype
    }));

    // Create project in database
    const newProject = new Project({
      name: req.body.name,
      description: req.body.description,
      files: files,
      createdAt: new Date()
    });

    await newProject.save();

    res.status(201).json({
      success: true,
      message: 'Project uploaded successfully',
      project: {
        id: newProject._id,
        name: newProject.name,
        files: newProject.files
      }
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error during upload'
    });
  }
});
module.exports = router;