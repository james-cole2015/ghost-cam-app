:root {
  --primary-color: #2d1b4e;
  --secondary-color: #7c3aed;
  --accent-color: #ec4899;
  --bg-dark: #1a0b2e;
  --bg-light: #2d1b4e;
  --text-light: #e2e8f0;
  --text-muted: #94a3b8;
  --border-color: #4c1d95;
  --shadow-glow: 0 0 20px rgba(124, 58, 237, 0.3);
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, var(--bg-dark) 0%, var(--bg-light) 100%);
  color: var(--text-light);
  min-height: 100vh;
}

.app {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  background: rgba(26, 11, 46, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(45deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  color: var(--text-muted);
  font-style: italic;
}

/* Main Content */
.main-content {
  padding: 2rem 0;
}

.disclaimer-banner {
  background: linear-gradient(45deg, #dc2626, #ea580c);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 500;
  box-shadow: var(--shadow-glow);
}

/* Tab Navigation */
.tab-nav {
  display: flex;
  gap: 0;
  margin-bottom: 2rem;
  border-radius: 12px;
  background: rgba(45, 27, 78, 0.5);
  padding: 4px;
}

.tab {
  flex: 1;
  padding: 1rem 2rem;
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  transition: var(--transition);
  border-radius: 8px;
  font-weight: 500;
}

.tab:hover {
  color: var(--text-light);
  background: rgba(124, 58, 237, 0.2);
}

.tab.active {
  background: var(--secondary-color);
  color: white;
  box-shadow: var(--shadow-glow);
}

/* Upload Form */
.upload-form {
  background: rgba(45, 27, 78, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-light);
}

.file-input {
  width: 100%;
  padding: 1rem;
  border: 2px dashed var(--border-color);
  border-radius: 8px;
  background: rgba(26, 11, 46, 0.5);
  color: var(--text-light);
  cursor: pointer;
  transition: var(--transition);
}

.file-input:hover {
  border-color: var(--secondary-color);
  background: rgba(124, 58, 237, 0.1);
}

.text-input,
.textarea-input {
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: rgba(26, 11, 46, 0.7);
  color: var(--text-light);
  font-size: 1rem;
}

.text-input:focus,
.textarea-input:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
}

.textarea-input {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, var(--secondary-color), var(--accent-color));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Feed View */
.feed-container {
  max-width: 800px;
  margin: 0 auto;
}

.feed-header {
  text-align: center;
  margin-bottom: 2rem;
}

.feed-header h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sightings-grid {
  display: grid;
  gap: 2rem;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: var(--text-muted);
}

.no-sightings {
  text-align: center;
  padding: 3rem;
  color: var(--text-muted);
}

/* Sighting Card */
.sighting-card {
  background: rgba(45, 27, 78, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  transition: var(--transition);
}

.sighting-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

.sighting-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid var(--border-color);
}

.sighting-content {
  padding: 1.5rem;
}

.sighting-location {
  color: var(--secondary-color);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.sighting-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.sighting-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.witness-name {
  font-weight: 500;
}

/* Error States */
.error-message {
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid #dc2626;
  color: #fca5a5;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.success-message {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid #22c55e;
  color: #86efac;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .logo {
    font-size: 1.5rem;
  }
  
  .upload-form {
    margin: 0 10px;
    padding: 1.5rem;
  }
  
  .tab {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sighting-card {
  animation: fadeIn 0.5s ease-out;
}

/* Placeholder for missing images */
.image-placeholder {
  width: 100%;
  height: 300px;
  background: linear-gradient(45deg, var(--bg-dark), var(--bg-light));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 3rem;
  border-bottom: 1px solid var(--border-color);
}