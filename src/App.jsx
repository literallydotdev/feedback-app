import Feedback from './components/Feedback';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1 className="logo-text">FeedbackPro</h1>
          </div>
          <nav className="nav">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <button className="btn btn-primary">Get Started</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Collect feedback that actually
                <span className="gradient-text"> drives growth</span>
              </h1>
              <p className="hero-description">
                Transform customer insights into actionable improvements. Our
                AI-powered feedback platform helps you understand what your
                users really want.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary btn-lg">
                  Start Free Trial
                </button>
                <button className="btn btn-secondary btn-lg">Watch Demo</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="dashboard-preview">
                <div className="dashboard-header">
                  <div className="dashboard-tab active">Analytics</div>
                  <div className="dashboard-tab">Feedback</div>
                  <div className="dashboard-tab">Reports</div>
                </div>
                <div className="dashboard-content">
                  <div className="metric-card">
                    <h3>1,247</h3>
                    <p>Feedback Responses</p>
                  </div>
                  <div className="metric-card">
                    <h3>94%</h3>
                    <p>Satisfaction Rate</p>
                  </div>
                  <div className="metric-card">
                    <h3>8.2s</h3>
                    <p>Avg Response Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features" id="features">
          <div className="features-content">
            <h2 className="features-title">Everything you need to succeed</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Real-time Analytics</h3>
                <p>
                  Get instant insights into customer satisfaction and identify
                  trends before they become problems.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Smart Targeting</h3>
                <p>
                  Show the right feedback form to the right users at the perfect
                  moment in their journey.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Lightning Fast</h3>
                <p>
                  Deploy in seconds with our no-code widget. Start collecting
                  feedback immediately.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Feedback Widget */}
      <Feedback />
    </div>
  );
}

export default App;
