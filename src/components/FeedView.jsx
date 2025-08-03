import SightingCard from './SightingCard'

function FeedView({ sightings, loading }) {
  if (loading) {
    return (
      <div className="feed-container">
        <div className="loading">
          <h3>👻 Summoning spirits...</h3>
          <p>Loading ghost sightings from the ethereal realm</p>
        </div>
      </div>
    )
  }

  if (!sightings || sightings.length === 0) {
    return (
      <div className="feed-container">
        <div className="no-sightings">
          <h3>🌫️ No spirits detected</h3>
          <p>Be the first to report a paranormal encounter!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h2>Recent Ghost Sightings</h2>
        <p>Paranormal encounters from around the world</p>
      </div>
      
      <div className="sightings-grid">
        {sightings.map((sighting) => (
          <SightingCard key={sighting.id} sighting={sighting} />
        ))}
      </div>
    </div>
  )
}

export default FeedView