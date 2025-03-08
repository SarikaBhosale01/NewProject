import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post('/api/contact', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', subject: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Contact form error:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you!</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : (
              <>
                <FaPaperPlane className="send-icon" />
                Send Message
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="success-message">
              Message sent successfully! We'll respond shortly.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="error-message">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: linear-gradient(rgba(47, 151, 215, 0.7), rgba(0,0,0,0.7)),
                      url('public/img/background.png') center/cover;
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-container {
          background: rgba(173, 99, 151, 0.95);
          padding: 3rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          max-width: 600px;
          width: 100%;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .contact-header h1 {
          font-size: 2.5rem;
          color:black;
          margin-bottom: 0.5rem;
        }

        .contact-header p {
          color:rgb(210, 235, 237);
          font-size: 1.1rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #bdc3c7;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #3498db;
          outline: none;
        }

        button {
          background: #3498db;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: transform 0.3s ease;
        }

        button:hover {
          transform: translateY(-2px);
        }

        .send-icon {
          font-size: 1.2rem;
        }

        .success-message {
          color: #155724;
          background: #d4edda;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
          text-align: center;
        }

        .error-message {
          color:rgb(209, 196, 197);
          background:rgb(104, 74, 184);
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Contact;