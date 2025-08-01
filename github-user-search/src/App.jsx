import { useState } from 'react'
import './App.css'

// Simple components for different routes
const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the home page of our application.</p>
  </div>
)

const About = () => (
  <div>
    <h2>About Page</h2>
    <p>This is the about page with information about our application.</p>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact Page</h2>
    <p>Get in touch with us through this contact page.</p>
  </div>
)

function App() {
  const [currentRoute, setCurrentRoute] = useState('home')

  // Simple routing function
  const renderPage = () => {
    switch(currentRoute) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      {/* Header with Navigation */}
      <header className="header">
        <h1>My React Application</h1>
        <nav className="navigation">
          <button 
            onClick={() => setCurrentRoute('home')}
            className={currentRoute === 'home' ? 'active' : ''}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentRoute('about')}
            className={currentRoute === 'about' ? 'active' : ''}
          >
            About
          </button>
          <button 
            onClick={() => setCurrentRoute('contact')}
            className={currentRoute === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My React Application. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App