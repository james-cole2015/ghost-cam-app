import { useState } from 'react'
import { uploadImage, submitSighting } from '../services/api'

function UploadForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    witnessName: '',
    location: '',
    description: '',
    contactEmail: '',
    phoneNumber: ''
  })
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setMessage('File size must be less than 10MB')
        setMessageType('error')
        return
      }
      setSelectedFile(file)
      setMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!selectedFile) {
      setMessage('Please select an image to upload')
      setMessageType('error')
      return
    }

    if (!formData.witnessName || !formData.location || !formData.description) {
      setMessage('Please fill in all required fields')
      setMessageType('error')
      return
    }

    setUploading(true)
    setMessage('')

    try {
      const imageKey = await uploadImage(selectedFile)
      
      const sightingData = {
        ...formData,
        imageUrl: `https://ghostcam-uploads.s3.amazonaws.com/${imageKey}`,
        imageKey: imageKey,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ipAddress: 'client-provided'
      }

      await submitSighting(sightingData)
      
      setMessage('Ghost sighting uploaded successfully!')
      setMessageType('success')
      
      setFormData({
        witnessName: '',
        location: '',
        description: '',
        contactEmail: '',
        phoneNumber: ''
      })
      setSelectedFile(null)
      
      setTimeout(() => {
        onSuccess()
      }, 1500)
      
    } catch (error) {
      setMessage('Upload failed. Please try again.')
      setMessageType('error')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="upload-form">
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        Report a Ghost Sighting
      </h2>
      
      {message && (
        <div className={`${messageType === 'error' ? 'error-message' : 'success-message'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Ghost Photo/Video *</label>
          <input
            type="file"
            id="image"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="file-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="witnessName">Your Name *</label>
          <input
            type="text"
            id="witnessName"
            name="witnessName"
            value={formData.witnessName}
            onChange={handleInputChange}
            className="text-input"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="text-input"
            placeholder="Where did you see the ghost?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Describe Your Experience *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="textarea-input"
            placeholder="Tell us what happened... be as detailed as possible"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactEmail">Email Address</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleInputChange}
            className="text-input"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="text-input"
            placeholder="(555) 123-4567"
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : '👻 Submit Sighting'}
        </button>
      </form>
    </div>
  )
}

export default UploadForm