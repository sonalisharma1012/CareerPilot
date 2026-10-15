import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import {
  DsaPage,
  JobsPage,
  ProfilePage,
  ResumePage,
  SkillsPage,
} from './pages/WorkspacePages'
import './App.css'

const features = [
  {
    number: '01',
    title: 'Keep every application on track',
    description:
      'Organize roles, deadlines, and interview stages in one calm, easy-to-scan workspace.',
    label: 'Job tracking',
    href: '/jobs',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 5V3h8v2M3 10h18M8 14h3m-3 3h7" />
      </>
    ),
  },
  {
    number: '02',
    title: 'Make your practice count',
    description:
      'Build a steady DSA habit, revisit the topics that need work, and see your progress add up.',
    label: 'DSA practice',
    href: '/dsa',
    icon: (
      <>
        <path d="M8 4H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M8 20H5a2 2 0 0 1-2-2v-3m13 5h3a2 2 0 0 0 2-2v-3" />
        <path d="m9 9-2 3 2 3m6-6 2 3-2 3m-2-7-2 8" />
      </>
    ),
  },
  {
    number: '03',
    title: 'Show up with a stronger resume',
    description:
      'Shape your experience into a clear story, then tailor it to the roles you want.',
    label: 'Resume builder',
    href: '/resume',
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8m-8 4h8" />
      </>
    ),
  },
  {
    number: '04',
    title: 'Focus on skills that matter',
    description:
      'Compare your strengths with role requirements and find a useful next step to work on.',
    label: 'Skill matching',
    href: '/skills',
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4m-5-8v6m-3-3h6" />
      </>
    ),
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="CareerPilot home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M5 22.5 15.8 5l4.1 6.6L26 5l-4.5 22H5Z" />
          <path d="M12.2 17.5h8.3" />
        </svg>
      </span>
      <span>career<span className="brand-accent">pilot</span></span>
    </a>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar page-container" aria-label="Main navigation">
        <BrandMark />
        <div
          className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How it works</a>
          <a href="#student-preview" onClick={() => setIsMenuOpen(false)}>For students</a>
        </div>
        <a className="button button-nav" href="/dashboard">
          Dashboard <ArrowIcon diagonal />
        </a>
        <button
          className={`nav-menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

function ProgressRing({ value }) {
  return (
    <div
      className="progress-ring"
      style={{ '--progress': `${value * 3.6}deg` }}
      role="img"
      aria-label={`${value}% placement readiness`}
    >
      <div className="progress-ring-center">
        <strong>{value}%</strong>
        <span>ready</span>
      </div>
    </div>
  )
}

function StudentPreview() {
  return (
    <div className="preview-wrap" id="student-preview">
      <div className="preview-orbit preview-orbit-one" />
      <div className="preview-orbit preview-orbit-two" />
      <div className="dashboard-preview">
        <div className="preview-topbar">
          <div>
            <span className="preview-eyebrow">YOUR WEEKLY SNAPSHOT</span>
            <h2>Your week, in focus.</h2>
          </div>
          <span className="avatar" aria-label="Student profile">S</span>
        </div>

        <div className="readiness-card">
          <div>
            <span className="card-eyebrow">PLACEMENT READINESS</span>
            <h3>You&apos;re building momentum.</h3>
            <p>Small steps today make a confident interview tomorrow.</p>
          </div>
          <ProgressRing value={72} />
        </div>

        <div className="preview-stats">
          <div className="mini-stat">
            <span className="mini-stat-icon icon-lilac">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="5" width="16" height="16" rx="3" />
                <path d="M8 3v4m8-4v4M4 10h16" />
              </svg>
            </span>
            <span className="mini-stat-label">Applications</span>
            <strong>08 <small>in progress</small></strong>
          </div>
          <div className="mini-stat">
            <span className="mini-stat-icon icon-mint">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 4H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M8 20H5a2 2 0 0 1-2-2v-3m13 5h3a2 2 0 0 0 2-2v-3" />
                <path d="m9 9-2 3 2 3m6-6 2 3-2 3m-2-7-2 8" />
              </svg>
            </span>
            <span className="mini-stat-label">DSA problems</span>
            <strong>34 <small>of 80 goal</small></strong>
          </div>
        </div>

        <div className="weekly-focus">
          <div className="weekly-focus-heading">
            <span>This week&apos;s focus</span>
            <span className="focus-count">2 of 3 done</span>
          </div>
          <div className="focus-row">
            <span className="focus-check is-done" aria-hidden="true">✓</span>
            <span>Update your experience section</span>
            <span className="focus-tag">Resume</span>
          </div>
          <div className="focus-row">
            <span className="focus-check is-done" aria-hidden="true">✓</span>
            <span>Practice arrays &amp; hashing</span>
            <span className="focus-tag">DSA</span>
          </div>
          <div className="focus-row">
            <span className="focus-check" aria-hidden="true" />
            <span>Review your saved roles</span>
            <span className="focus-tag">Jobs</span>
          </div>
        </div>
      </div>
      <span className="preview-note">
        <span className="note-dot" />
        Your progress, all in one place
      </span>
    </div>
  )
}

function FeatureCard({ feature }) {
  return (
    <article className="feature-card">
      <div className="feature-card-top">
        <span className="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {feature.icon}
          </svg>
        </span>
        <span className="feature-number">{feature.number}</span>
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
      <a className="feature-link" href={feature.href}>
        {feature.label} <ArrowIcon diagonal />
      </a>
    </article>
  )
}

function Landingpage() {
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="hero-section page-container">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-star">✳</span>
              YOUR NEXT CHAPTER STARTS HERE
            </span>
            <h1>
              Your placement journey,
              <span> with a plan.</span>
            </h1>
            <p className="hero-description">
              From your first practice problem to your offer letter, bring your
              preparation into focus and move forward with confidence.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#features">
                Explore the platform <ArrowIcon />
              </a>
              <a className="button button-text" href="#how-it-works">
                See how it works <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-note">
              <span className="avatar-stack" aria-hidden="true">
                <span>R</span>
                <span>A</span>
                <span>M</span>
              </span>
              <span>
                A more organized way to prepare
                <strong>Built for your placement season</strong>
              </span>
            </div>
          </div>
          <StudentPreview />
          <div className="hero-bottom-line" aria-hidden="true">
            <span>PREPARE WITH PURPOSE</span>
            <span>01 — 04</span>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">A LITTLE MORE DIRECTION</span>
                <h2>Everything you need to move forward.</h2>
              </div>
              <p>
                Placement prep can feel like a lot. CareerPilot helps you bring
                the pieces together, one practical step at a time.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <FeatureCard key={feature.number} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="journey-section" id="how-it-works">
          <div className="page-container journey-content">
            <div>
              <span className="eyebrow">START WHERE YOU ARE</span>
              <h2>A clear next step beats a perfect plan.</h2>
            </div>
            <p>
              Set your goals, keep your progress visible, and build a routine
              that works for you. CareerPilot is a preparation companion—not a
              promise of a job or a substitute for your own effort.
            </p>
            <a className="button button-light" href="#top">
              Back to the top <ArrowIcon diagonal />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-container footer-content">
          <BrandMark />
          <p>Made for the work behind your next opportunity.</p>
          <span>© 2026 CareerPilot</span>
        </div>
      </footer>
    </>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const routes = {
    '/dashboard': <Dashboard />,
    '/jobs': <JobsPage />,
    '/dsa': <DsaPage />,
    '/resume': <ResumePage />,
    '/skills': <SkillsPage />,
    '/profile': <ProfilePage />,
  }

  return routes[path] || <Landingpage />
}

export default App
