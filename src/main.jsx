import { useState, useEffect } from 'react'
import Header from './components/Header'
import UploadForm from './components/UploadForm'
import FeedView from './components/FeedView'
import { fetchSightings } from './services/api'

function App() {
  const [sightings, setSightings] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('feed')

  useEffect(() => {
    loadSightings()
  }, [])

  const loadSightings = async () => {
    try {
      setLoading(true)
      const data = await fetchSightings()
      setSightings(data)
    } catch (error) {
      console.error('Failed to load sightings:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleNewSighting = () => {
    loadSightings()
    setActiveTab('feed')
  }

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <div className="disclaimer-banner">
            ⚠️ This is an intentionally insecure app for demonstration purposes only. Do not submit real or sensitive data.
          </div>

          <nav className="tab-nav">
            <button 
              className={`tab ${activeTab === 'feed' ? 'active' : ''}`}
              onClick={() => setActiveTab('feed')}
            >
              👻 Ghost Feed
            </button>
            <button 
              className={`tab ${activeTab === 'upload' ? 'active' : ''}`}
              onClick={() => setActiveTab('upload')}
            >
              📸 Report Sighting
            </button>
          </nav>

          <div className="tab-content">
            {activeTab === 'upload' ? (
              <UploadForm onSuccess={handleNewSighting} />
            ) : (
              <FeedView sightings={sightings} loading={loading} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App