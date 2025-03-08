// import { useState } from 'react';
// import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { FaUser, FaEnvelope, FaLock, FaGoogle, FaGithub } from 'react-icons/fa';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { toast } from 'react-toastify';
// //import { Alert } from 'react-bootstrap';
// const RegistrationForm = () => {
//   const [passwordStrength, setPasswordStrength] = useState('');
//   const [, setShowSuccess] = useState(false);
//   const [] = useState(initialState);
//   // Form validation schema
//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string()
//       .min(8, 'Password must be at least 8 characters')
//       .required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Confirm Password is required')
//   });

//   // Password strength calculator
//   const calculatePasswordStrength = (password) => {
//     const strength = {
//       color: 'red',
//       text: 'Weak',
//       width: '33%'
//     };

//     if (password.length >= 8) {
//       strength.color = 'orange';
//       strength.text = 'Medium';
//       strength.width = '66%';
//     }
//     if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^A-Za-z0-9]/)) {
//       strength.color = 'green';
//       strength.text = 'Strong';
//       strength.width = '100%';
//     }

//     return strength;
//   };

//   // Form submission handler
//   const handleSubmit = async (_values, { setSubmitting, resetForm }) => {
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       toast.success('Registration successful!');
//       resetForm();
//       setShowSuccess(true);
//     } catch (error) {
//       toast.error('Registration failed. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Container className="registration-container">
//         <Row className="justify-content-center">
//           <Col xs={12} md={8} lg={6}>
//             <div className="registration-card p-4 shadow">
//               <h2 className="text-center mb-4">
//                 Create Account
//                 <div className="underline"></div>
//               </h2>

//               <Formik
//                 initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//               >
//                 {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
//                   <Form onSubmit={handleSubmit}>
//                     {/* Name Field */}
//                     <Form.Group className="mb-3">
//                       <Form.Label>
//                         <FaUser className="me-2" />
//                         Full Name
//                       </Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name"
//                         placeholder="Enter your name"
//                         onChange={handleChange}
//                         value={values.name}
//                         isInvalid={touched.name && !!errors.name}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {errors.name}
//                       </Form.Control.Feedback>
//                     </Form.Group>

//                     {/* Email Field */}
//                     <Form.Group className="mb-3">
//                       <Form.Label>
//                         <FaEnvelope className="me-2" />
//                         Email Address
//                       </Form.Label>
//                       <Form.Control
//                         type="email"
//                         name="email"
//                         placeholder="Enter email"
//                         onChange={handleChange}
//                         value={values.email}
//                         isInvalid={touched.email && !!errors.email}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {errors.email}
//                       </Form.Control.Feedback>
//                     </Form.Group>

//                     {/* Password Field */}
//                     <Form.Group className="mb-3">
//                       <Form.Label>
//                         <FaLock className="me-2" />
//                         Password
//                       </Form.Label>
//                       <Form.Control
//                         type="password"
//                         name="password"
//                         placeholder="Enter password"
//                         onChange={(e) => {
//                           handleChange(e);
//                           setPasswordStrength(calculatePasswordStrength(e.target.value));
//                         }}
//                         value={values.password}
//                         isInvalid={touched.password && !!errors.password}
//                       />
//                       {values.password && (
//                         <div className="password-strength mt-2">
//                           <div 
//                             className="strength-bar" 
//                             style={{ 
//                               width: passwordStrength.width,
//                               backgroundColor: passwordStrength.color
//                             }}
//                           ></div>
//                           <span style={{ color: passwordStrength.color }}>
//                             {passwordStrength.text}
//                           </span>
//                         </div>
//                       )}
//                       <Form.Control.Feedback type="invalid">
//                         {errors.password}
//                       </Form.Control.Feedback>
//                     </Form.Group>

//                     {/* Confirm Password Field */}
//                     <Form.Group className="mb-4">
//                       <Form.Label>
//                         <FaLock className="me-2" />
//                         Confirm Password
//                       </Form.Label>
//                       <Form.Control
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm password"
//                         onChange={handleChange}
//                         value={values.confirmPassword}
//                         isInvalid={touched.confirmPassword && !!errors.confirmPassword}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {errors.confirmPassword}
//                       </Form.Control.Feedback>
//                     </Form.Group>

//                     {/* Submit Button */}
//                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       <Button
//                         variant="primary"
//                         type="submit"
//                         className="w-100 mb-3"
//                         disabled={isSubmitting}
//                       >
//                         {isSubmitting ? 'Registering...' : 'Create Account'}
//                       </Button>
//                     </motion.div>
//                   </Form>
//                 )}
//               </Formik>

//               {/* Social Login Section */}
//               <div className="text-center mt-4">
//                 <p className="mb-3">Or sign up with</p>
//                 <div className="social-buttons">
//                   <Button variant="outline-danger" className="me-2">
//                     <FaGoogle /> Google
//                   </Button>
//                   <Button variant="outline-dark">
//                     <FaGithub /> GitHub
//                   </Button>
//                 </div>
//               </div>

//               {/* Login Link */}
//               <p className="text-center mt-4">
//                 Already have an account? <a href="/">Login here</a>
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </motion.div>
//   );
// };

// // Add CSS (create a separate CSS file or use styled-components)
// const styles= {
//   registrationContainer: {
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//   },
//   registrationCard: {
//     background: 'white',
//     borderRadius: '15px',
//     transition: 'transform 0.3s ease',
//     backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/04/18/20/21/flowers-7935944_1280.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   underline: {
//     width: '60px',
//     height: '3px',
//     background: '#007bff',
//     margin: '0 auto',
//     marginTop: '10px',
//   },
//   passwordStrength: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   },
//   strengthBar: {
//     height: '5px',
//     borderRadius: '2.5px',
//     transition: 'all 0.3s ease',
//   },
//   socialButtons: {
//     // Container styles here
//   },
//   socialButton: {
//     transition: 'all 0.3s ease',
//     ':hover': {
//       transform: 'translateY(-2px)'
//     }
//   }
// };

// export default RegistrationForm;
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaGithub } from 'react-icons/fa';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const RegistrationForm = () => {
  const [passwordStrength, setPasswordStrength] = useState({
    color: 'red',
    text: 'Weak',
    width: '33%'
  });

  // Form validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  // Password strength calculator
  const calculatePasswordStrength = (password) => {
    const strength = {
      color: 'red',
      text: 'Weak',
      width: '33%'
    };

    if (password.length >= 8) {
      strength.color = 'orange';
      strength.text = 'Medium';
      strength.width = '66%';
    }
    if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^A-Za-z0-9]/)) {
      strength.color = 'green';
      strength.text = 'Strong';
      strength.width = '100%';
    }

    return strength;
  };

  // Form submission handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Registration successful!');
      resetForm();
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="registration-container">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="registration-card p-4 shadow">
              <h2 className="text-center mb-4">
                Create Account
                <div className="underline"></div>
              </h2>

              <Formik
                initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FaUser className="me-2" />
                        Full Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        onChange={handleChange}
                        value={values.name}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Email Field */}
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FaEnvelope className="me-2" />
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        value={values.email}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FaLock className="me-2" />
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={(e) => {
                          handleChange(e);
                          setPasswordStrength(calculatePasswordStrength(e.target.value));
                        }}
                        value={values.password}
                        isInvalid={touched.password && !!errors.password}
                      />
                      {values.password && (
                        <div className="password-strength mt-2">
                          <div 
                            className="strength-bar" 
                            style={{ 
                              width: passwordStrength.width,
                              backgroundColor: passwordStrength.color
                            }}
                          ></div>
                          <span style={{ color: passwordStrength.color }}>
                            {passwordStrength.text}
                          </span>
                        </div>
                      )}
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Confirm Password Field */}
                    <Form.Group className="mb-4">
                      <Form.Label>
                        <FaLock className="me-2" />
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        onChange={handleChange}
                        value={values.confirmPassword}
                        isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Submit Button */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100 mb-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Registering...' : 'Create Account'}
                      </Button>
                    </motion.div>
                  </Form>
                )}
              </Formik>

              {/* Social Login Section */}
              <div className="text-center mt-4">
                <p className="mb-3">Or sign up with</p>
                <div className="social-buttons">
                  <Button variant="outline-danger" className="me-2">
                    <FaGoogle /> Google
                  </Button>
                  <Button variant="outline-dark">
                    <FaGithub /> GitHub
                  </Button>
                </div>
              </div>

              {/* Login Link */}
              <p className="text-center mt-4">
                Already have an account? <a href="/">Login here</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default RegistrationForm;