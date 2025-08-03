function SightingCard({ sighting }) {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleImageError = (e) => {
    e.target.style.display = 'none'
    e.target.nextSibling.style.display = 'flex'
  }

  return (
    <div className="sighting-card">
      <img 
        src={sighting.imageUrl} 
        alt={`Ghost sighting at ${sighting.location}`}
        className="sighting-image"
        onError={handleImageError}
      />
      <div className="image-placeholder" style={{ display: 'none' }}>
        👻
      </div>
      
      <div className="sighting-content">
        <div className="sighting-location">
          📍 {sighting.location}
        </div>
        
        <p className="sighting-description">
          {sighting.description}
        </p>
        
        <div className="sighting-meta">
          <span className="witness-name">
            Witnessed by: {sighting.witnessName}
          </span>
          <span className="sighting-date">
            {formatDate(sighting.timestamp)}
          </span>
        </div>
        
        {sighting.contactEmail && (
          <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Contact: {sighting.contactEmail}
          </div>
        )}
        
        {sighting.phoneNumber && (
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Phone: {sighting.phoneNumber}
          </div>
        )}
      </div>
    </div>
  )
}

export default SightingCard