'use client'


import React, { useState, useEffect } from 'react'
import './contactform.css'

interface FormData {
  id: string;
  name: string;
  email: string;
  company?: string;
  description: string;
  budget?: string;
  submittedAt: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<Omit<FormData, 'id' | 'submittedAt'>>({
    name: '',
    email: '',
    company: '',
    description: '',
    budget: ''
  })

  const [submissions, setSubmissions] = useState<FormData[]>([])
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  // Load submissions from localStorage on component mount
  useEffect(() => {
    const storedSubmissions = localStorage.getItem('contactSubmissions')
    if (storedSubmissions) {
      setSubmissions(JSON.parse(storedSubmissions))
    }
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors in the form'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Create new submission with ID and timestamp
      const newSubmission: FormData = {
        ...formData,
        id: crypto.randomUUID(),
        submittedAt: new Date().toISOString()
      }

      // Update submissions state and localStorage
      const updatedSubmissions = [...submissions, newSubmission]
      setSubmissions(updatedSubmissions)
      localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions))

      // Clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        description: '',
        budget: ''
      })

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. Your submission has been saved!'
      })

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to save your submission. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      {submitStatus.message && (
        <div className={`status-message ${submitStatus.type}`}>
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Name" 
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Company Email" 
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="company" 
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name (Optional)" 
          />
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="description" 
            value={formData.description}
            onChange={handleChange}
            placeholder="Project Description" 
            className={errors.description ? 'error' : ''}
          />
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="budget" 
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budget Range (Optional)" 
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <div className="contact-details">
        <h2>Contact Details</h2>
        <div className="details-row">
          <div className="detail-item">
            <span>Call:</span>
          </div>
          <div className="detail-item">
            <span>Email: </span>
            <a href="mailto:hello@acroynasoftwaresolutions.com">
              hello@acroynasoftwaresolutions.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

