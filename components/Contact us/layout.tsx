import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './contact.css';

interface ContactFormModalProps {
  isVisible: boolean; // Control visibility externally
  onClose: () => void; // Handle closing externally
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    onClose(); // Close the modal after submission
  };

  return (
    <Modal
      title="Reach Us"
      open={isVisible}
      onCancel={onClose}
      footer={null} // Hide default footer buttons
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="form-row checkbox-row">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          <label>
            By checking the box, you agree to our form terms and consent to cookie use.
          </label>
        </div>
        <Button
          type="primary"
          block
          onClick={handleSubmit}
          style={{ marginTop: '15px' }}
        >
          Submit Application
        </Button>
      </form>
    </Modal>
  );
};

export default ContactFormModal;
