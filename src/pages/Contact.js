import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatusMessage('Message sent successfully!');
        setStatusType('success');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatusMessage(' Failed to send message.');
        setStatusType('error');
      }
    } catch (err) {
      console.error(err);
      setStatusMessage(' Server error. Please try again later.');
      setStatusType('error');
    }
  };

  return (
    <div className="contact-section">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center mb-5">
          Looking for a MERN Stack Developer ? Contact Me.. 
        </p>
        <Row>
    
          <Col md={6} className="contact-info">
            <div className="info-item mb-4">
              <i className="bi bi-geo-alt-fill icon"></i>
              <div>
                <h5>Address</h5>
                <p>345, 7th Cross Road, Neeladri Nagar,<br></br> Electronic city, Karnataka-560100</p>
              </div>
            </div>
            <div className="info-item mb-4">
              <i className="bi bi-telephone-fill icon"></i>
              <div>
                <h5>Phone</h5>
                <p>+91 9342662214</p>
              </div>
            </div>
            <div className="info-item">
              <i className="bi bi-envelope-fill icon"></i>
              <div>
                <h5>Email</h5>
                <p>aravindprahasha@gmail.com</p>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <Form onSubmit={handleSubmit} className="contact-form p-4 shadow rounded bg-white">
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </Form.Group>

              <Button type="submit" variant="dark" className="w-100">Send</Button>

              {statusMessage && (
                <div className={`mt-3 text-${statusType === 'success' ? 'success' : 'danger'}`}>
                  {statusMessage}
                </div>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
