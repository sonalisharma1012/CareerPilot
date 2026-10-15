import { useState } from 'react'
import './Dashboard.css'

const navigation = [
  { id: 'overview', path: '/dashboard', label: 'Overview', icon: 'grid' },
  { id: 'jobs', path: '/jobs', label: 'Job tracker', icon: 'briefcase' },
  { id: 'dsa', path: '/dsa', label: 'DSA practice', icon: 'code' },
  { id: 'skills', path: '/skills', label: 'Skill matching', icon: 'spark' },
  { id: 'resume', path: '/resume', label: 'Resume builder', icon: 'file' },
  { id: 'profile', path: '/profile', label: 'My profile', icon: 'user' },
]

const applications = [
  {
    company: 'Atlassian',
    role: 'Software Engineer Intern',
    initials: 'A',
    tone: 'lavender',
    date: 'Applied Oct 12',
    status: 'In review',
    statusTone: 'review',
  },
  {
    company: 'Razorpay',
    role: 'Frontend Developer Intern',
    initials: 'R',
    tone: 'blue',
    date: 'Applied Oct 10',
    status: 'Interview',
    statusTone: 'interview',
  },
  {
    company: 'Adobe',
    role: 'Member of Technical Staff',
    initials: 'A',
    tone: 'peach',
    date: 'Applied Oct 08',
    status: 'Assessment',
    statusTone: 'assessment',
  },
]

const weeklyPractice = [
  { day: 'M', solved: 4 },
  { day: 'T', solved: 6 },
  { day: 'W', solved: 3 },
  { day: 'T', solved: 7 },
  { day: 'F', solved: 5 },
  { day: 'S', solved: 2 },
  { day: 'S', solved: 0 },
]

const skills = [
  { name: 'Problem solving', value: 82, color: 'green' },
  { name: 'React & frontend', value: 74, color: 'blue' },
  { name: 'Data structures', value: 68, color: 'purple' },
  { name: 'Communication', value: 56, color: 'orange' },
]

export function Icon({ name, className = '' }) {
  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-12 0v2h6v-2" /></>,
    code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-10-2 12" /></>,
    spark: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8m-8 4h8" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12a2 2 0 0 0 4 0" /></>,
    arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
  }

  return (
    <svg
      className={`cp-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Brand({ sidebar = false }) {
  return (
    <a className={`cp-brand${sidebar ? ' cp-brand-sidebar' : ''}`} href="/">
      <span className="cp-brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M5 22.5 15.8 5l4.1 6.6L26 5l-4.5 22H5Z" />
          <path d="M12.2 17.5h8.3" />
        </svg>
      </span>
      <span>career<span>pilot</span></span>
    </a>
  )
}

export function Sidebar({ isOpen, onClose, activeSection }) {
  return (
    <>
      <button
        type="button"
        className={`cp-sidebar-scrim${isOpen ? ' is-visible' : ''}`}
        aria-label="Close navigation menu"
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
      />
      <aside className={`cp-sidebar${isOpen ? ' is-open' : ''}`}>
        <div className="cp-sidebar-top">
          <Brand sidebar />
          <button
            className="cp-sidebar-close"
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <div className="cp-sidebar-label">WORKSPACE</div>
        <nav className="cp-sidebar-nav" aria-label="Dashboard navigation">
          {navigation.map((item) => (
            <a
              className={`cp-sidebar-link${activeSection === item.id ? ' is-active' : ''}`}
              href={item.path}
              key={item.id}
              aria-current={activeSection === item.id ? 'page' : undefined}
              onClick={onClose}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {activeSection === item.id && <span className="cp-active-indicator" />}
            </a>
          ))}
        </nav>

        <div className="cp-sidebar-bottom">
          <div className="cp-sidebar-tip">
            <span className="cp-tip-icon"><Icon name="spark" /></span>
            <strong>Keep your momentum</strong>
            <p>One focused step today adds up to real progress.</p>
            <a href="/dashboard#weekly-plan" onClick={onClose}>
              View your plan <Icon name="arrow" />
            </a>
          </div>
          <a className="cp-sidebar-profile" href="/profile" onClick={onClose}>
            <span className="cp-user-avatar">AM</span>
            <span className="cp-user-meta">
              <strong>Ava Morgan</strong>
              <small>Computer Science · Year 3</small>
            </span>
            <Icon name="chevron" className="cp-profile-chevron" />
          </a>
        </div>
      </aside>
    </>
  )
}

export function Notifications() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="cp-notifications">
      <button
        className="cp-notification-button"
        type="button"
        aria-label="Notifications"
        aria-expanded={isOpen}
        aria-controls="sample-notifications"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Icon name="bell" />
        <span />
      </button>
      {isOpen && (
        <section
          className="cp-notification-popover"
          id="sample-notifications"
          aria-label="Sample notifications"
        >
          <div className="cp-notification-heading">
            <strong>Notifications</strong>
            <button
              type="button"
              aria-label="Close notifications"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          <article className="cp-notification-item">
            <span className="cp-notification-dot" />
            <span>
              <strong>Interview coming up</strong>
              <small>Razorpay · Sample reminder for Thursday</small>
            </span>
          </article>
          <article className="cp-notification-item">
            <span className="cp-notification-dot is-muted" />
            <span>
              <strong>Keep your practice streak going</strong>
              <small>You solved 27 sample problems this week</small>
            </span>
          </article>
          <p>Example notifications only. Nothing is sent or stored.</p>
        </section>
      )}
    </div>
  )
}

function MetricCard({ label, value, note, icon, trend, color }) {
  return (
    <article className="cp-metric-card">
      <div className={`cp-metric-icon ${color}`}><Icon name={icon} /></div>
      <span className="cp-metric-label">{label}</span>
      <div className="cp-metric-value">{value}</div>
      <div className="cp-metric-note">
        {trend && <span className="cp-trend">{trend}</span>}
        {note}
      </div>
    </article>
  )
}

function ReadinessCard() {
  return (
    <section className="cp-readiness-card" id="readiness">
      <div className="cp-readiness-copy">
        <span className="cp-section-kicker">YOUR PLACEMENT READINESS</span>
        <h2>You&apos;re on a good path, Ava.</h2>
        <p>
          You&apos;ve built a strong foundation. Keep sharpening your interview
          practice to be ready for what&apos;s next.
        </p>
        <a className="cp-readiness-link" href="#weekly-plan">
          See your next steps <Icon name="arrow" />
        </a>
      </div>
      <div
        className="cp-readiness-gauge"
        role="img"
        aria-label="Placement readiness is 74 percent"
      >
        <div className="cp-gauge-inner">
          <strong>74<span>%</span></strong>
          <small>Ready</small>
        </div>
      </div>
      <div className="cp-readiness-decoration" aria-hidden="true" />
    </section>
  )
}

function ApplicationsPanel() {
  return (
    <section className="cp-panel cp-applications-panel" id="applications">
      <div className="cp-panel-heading">
        <div>
          <span className="cp-section-kicker">KEEP THINGS MOVING</span>
          <h2>Recent applications</h2>
        </div>
        <a className="cp-panel-action" href="/jobs">
          View all <Icon name="arrow" />
        </a>
      </div>
      <div className="cp-application-list">
        {applications.map((application) => (
          <article className="cp-application-row" key={application.company}>
            <span className={`cp-company-avatar ${application.tone}`}>
              {application.initials}
            </span>
            <div className="cp-application-role">
              <strong>{application.company}</strong>
              <span>{application.role}</span>
            </div>
            <span className="cp-application-date">{application.date}</span>
            <span className={`cp-status ${application.statusTone}`}>
              <span />
              {application.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

function DsaPanel() {
  const maxSolved = Math.max(...weeklyPractice.map((day) => day.solved))

  return (
    <section className="cp-panel cp-dsa-panel" id="dsa-progress">
      <div className="cp-panel-heading">
        <div>
          <span className="cp-section-kicker">BUILD YOUR CONSISTENCY</span>
          <h2>DSA practice</h2>
        </div>
        <a className="cp-icon-link" href="/dsa" aria-label="View DSA practice">
          <Icon name="arrow" />
        </a>
      </div>
      <div className="cp-dsa-total">
        <strong>68</strong>
        <span>problems solved</span>
        <span className="cp-dsa-goal">Goal: 100</span>
      </div>
      <div
        className="cp-weekly-chart"
        role="img"
        aria-label="Problems solved this week: Monday 4, Tuesday 6, Wednesday 3, Thursday 7, Friday 5, Saturday 2, Sunday 0"
      >
        {weeklyPractice.map((day, index) => (
          <div className="cp-chart-column" key={`${day.day}-${index}`}>
            <div className="cp-bar-track">
              <span
                className={`cp-bar${index === 3 ? ' is-highlighted' : ''}`}
                style={{ height: `${Math.max((day.solved / maxSolved) * 100, 4)}%` }}
              />
            </div>
            <span className="cp-chart-day">{day.day}</span>
          </div>
        ))}
      </div>
      <div className="cp-dsa-footer">
        <span><span className="cp-dot" /> 27 this week</span>
        <span className="cp-dsa-streak">✳ 5 day streak</span>
      </div>
    </section>
  )
}

function SkillsPanel() {
  return (
    <section className="cp-panel cp-skills-panel" id="skills">
      <div className="cp-panel-heading">
        <div>
          <span className="cp-section-kicker">GROW WITH INTENTION</span>
          <h2>Skill progress</h2>
        </div>
        <a className="cp-panel-action" href="/skills">
          Skill matching <Icon name="arrow" />
        </a>
      </div>
      <div className="cp-skills-list">
        {skills.map((skill) => (
          <div className="cp-skill" key={skill.name}>
            <div className="cp-skill-heading">
              <span>{skill.name}</span>
              <strong>{skill.value}%</strong>
            </div>
            <div
              className="cp-skill-track"
              role="progressbar"
              aria-label={skill.name}
              aria-valuenow={skill.value}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span className={skill.color} style={{ width: `${skill.value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="cp-skill-insight">
        <span className="cp-insight-spark">✳</span>
        <span><strong>Next up:</strong> Try a mock interview to build communication confidence.</span>
      </div>
    </section>
  )
}

function WeeklyPlan() {
  return (
    <section className="cp-panel cp-plan-panel" id="weekly-plan">
      <div className="cp-panel-heading">
        <div>
          <span className="cp-section-kicker">A FEW GOOD NEXT STEPS</span>
          <h2>This week&apos;s plan</h2>
        </div>
        <span className="cp-plan-count">2 of 4 done</span>
      </div>
      <div className="cp-plan-list">
        <div className="cp-plan-row is-done">
          <span className="cp-plan-check"><Icon name="check" /></span>
          <span>Review your resume summary</span>
          <small>Resume</small>
        </div>
        <div className="cp-plan-row is-done">
          <span className="cp-plan-check"><Icon name="check" /></span>
          <span>Practice arrays &amp; hashing</span>
          <small>DSA</small>
        </div>
        <div className="cp-plan-row">
          <span className="cp-plan-check" />
          <span>Follow up on your interview</span>
          <small>Jobs</small>
        </div>
        <div className="cp-plan-row">
          <span className="cp-plan-check" />
          <span>Complete a mock interview</span>
          <small>Practice</small>
        </div>
      </div>
    </section>
  )
}

function ResumePanel() {
  return (
    <section className="cp-panel cp-resume-panel" id="resume">
      <div className="cp-resume-icon"><Icon name="file" /></div>
      <span className="cp-section-kicker">RESUME CHECK-IN</span>
      <h2>Your story is taking shape.</h2>
      <p>Two small updates can make your experience easier to scan.</p>
      <div className="cp-resume-progress">
        <div className="cp-skill-heading"><span>Resume completeness</span><strong>80%</strong></div>
        <div className="cp-skill-track" role="progressbar" aria-label="Resume completeness" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
          <span className="green" style={{ width: '80%' }} />
        </div>
      </div>
      <a className="cp-panel-action" href="/resume">
        Review your resume <Icon name="arrow" />
      </a>
    </section>
  )
}

function ProfilePanel() {
  return (
    <section className="cp-panel cp-profile-panel" id="profile">
      <div className="cp-profile-panel-heading">
        <span className="cp-user-avatar cp-user-avatar-large">AM</span>
        <div>
          <span className="cp-section-kicker">YOUR PROFILE</span>
          <h2>Ava Morgan</h2>
          <p>Computer Science · Year 3</p>
        </div>
      </div>
      <div className="cp-profile-completion">
        <span>Profile completeness</span>
        <strong>85%</strong>
      </div>
      <div className="cp-skill-track" role="progressbar" aria-label="Profile completeness" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
        <span className="green" style={{ width: '85%' }} />
      </div>
      <span className="cp-profile-hint">Add your portfolio link to complete your profile.</span>
    </section>
  )
}

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="cp-dashboard">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeSection="overview"
      />
      <main className="cp-main" id="overview">
        <header className="cp-topbar">
          <div className="cp-topbar-left">
            <button
              className="cp-menu-button"
              type="button"
              aria-label="Open dashboard navigation"
              aria-expanded={isSidebarOpen}
              onClick={() => setIsSidebarOpen(true)}
            >
              <span /><span /><span />
            </button>
            <div className="cp-breadcrumb"><span>Workspace</span><Icon name="chevron" /><strong>Overview</strong></div>
          </div>
          <div className="cp-topbar-actions">
            <span className="cp-season-pill"><span /> Placement season 2026</span>
            <Notifications />
            <span className="cp-user-avatar cp-topbar-avatar" aria-label="Ava Morgan">AM</span>
          </div>
        </header>

        <div className="cp-content">
          <section className="cp-welcome">
            <div>
              <span className="cp-section-kicker">WEDNESDAY, OCTOBER 15</span>
              <h1>Good morning, Ava <span>✳</span></h1>
              <p>Here&apos;s a little snapshot of the progress you&apos;re making.</p>
            </div>
            <a className="cp-primary-button" href="#weekly-plan">
              View weekly plan <Icon name="arrow" />
            </a>
          </section>

          <div className="cp-metrics-grid">
            <MetricCard
              label="Applications"
              value="12"
              note="roles in progress"
              trend="↑ 3"
              icon="briefcase"
              color="sage"
            />
            <MetricCard
              label="Interviews"
              value="3"
              note="one this week"
              trend=""
              icon="user"
              color="peach"
            />
            <MetricCard
              label="Offers"
              value="1"
              note="you earned this"
              trend=""
              icon="spark"
              color="lavender"
            />
            <MetricCard
              label="DSA problems"
              value="68"
              note="of 100 goal"
              trend="↑ 12"
              icon="code"
              color="blue"
            />
          </div>

          <ReadinessCard />

          <div className="cp-primary-grid">
            <ApplicationsPanel />
            <DsaPanel />
          </div>

          <div className="cp-secondary-grid">
            <SkillsPanel />
            <WeeklyPlan />
          </div>

          <div className="cp-tertiary-grid">
            <ResumePanel />
            <ProfilePanel />
          </div>

          <footer className="cp-footer">
            <span>CareerPilot · Your placement journey, with a plan.</span>
            <span>All dashboard data is sample data.</span>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
