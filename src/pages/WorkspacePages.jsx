import { useState } from 'react'
import { Icon, Notifications, Sidebar } from './Dashboard'
import './WorkspacePages.css'

const jobApplications = [
  { company: 'Atlassian', role: 'Software Engineer Intern', location: 'Bengaluru · Hybrid', date: 'Oct 12, 2026', status: 'In review', tone: 'review' },
  { company: 'Razorpay', role: 'Frontend Developer Intern', location: 'Bengaluru · On-site', date: 'Oct 10, 2026', status: 'Interview', tone: 'interview' },
  { company: 'Adobe', role: 'Member of Technical Staff', location: 'Noida · Hybrid', date: 'Oct 08, 2026', status: 'Assessment', tone: 'assessment' },
  { company: 'Figma', role: 'Product Engineering Intern', location: 'Remote', date: 'Oct 05, 2026', status: 'Saved', tone: 'saved' },
  { company: 'Microsoft', role: 'Explore Intern', location: 'Hyderabad · Hybrid', date: 'Oct 02, 2026', status: 'In review', tone: 'review' },
]

const practiceProblems = [
  { title: 'Two Sum', topic: 'Arrays', difficulty: 'Easy', status: 'Solved', source: 'LeetCode' },
  { title: 'Longest Substring Without Repeating Characters', topic: 'Strings', difficulty: 'Medium', status: 'Solved', source: 'LeetCode' },
  { title: 'Merge Intervals', topic: 'Arrays', difficulty: 'Medium', status: 'In progress', source: 'LeetCode' },
  { title: 'Number of Islands', topic: 'Graphs', difficulty: 'Medium', status: 'To do', source: 'NeetCode' },
  { title: 'Coin Change', topic: 'Dynamic programming', difficulty: 'Medium', status: 'To do', source: 'LeetCode' },
  { title: 'Binary Tree Level Order Traversal', topic: 'Trees', difficulty: 'Medium', status: 'Solved', source: 'NeetCode' },
]

const roleSkills = {
  'Frontend engineer': [
    { name: 'React & frontend', value: 88, color: 'green', match: true },
    { name: 'JavaScript', value: 79, color: 'blue', match: true },
    { name: 'Data structures', value: 64, color: 'purple', match: false },
    { name: 'Testing fundamentals', value: 48, color: 'orange', match: false },
  ],
  'Software engineer': [
    { name: 'Problem solving', value: 82, color: 'green', match: true },
    { name: 'Data structures', value: 68, color: 'blue', match: true },
    { name: 'System design basics', value: 45, color: 'purple', match: false },
    { name: 'Communication', value: 56, color: 'orange', match: false },
  ],
  'Product analyst': [
    { name: 'SQL & data analysis', value: 72, color: 'green', match: true },
    { name: 'Communication', value: 81, color: 'blue', match: true },
    { name: 'Product thinking', value: 63, color: 'purple', match: false },
    { name: 'Experiment design', value: 42, color: 'orange', match: false },
  ],
}

const resumeSections = [
  { name: 'Contact information', detail: 'Email, phone, LinkedIn', complete: true },
  { name: 'Professional summary', detail: 'A concise introduction to your strengths', complete: true },
  { name: 'Education', detail: 'Northstar University · B.S. Computer Science', complete: true },
  { name: 'Experience', detail: 'Add impact and measurable outcomes', complete: false },
  { name: 'Projects', detail: 'Showcase two relevant projects', complete: true },
  { name: 'Skills', detail: 'Tailor skills to your target role', complete: false },
]

function WorkspaceLayout({ active, eyebrow, title, description, children, actions }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="cp-dashboard">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeSection={active}
      />
      <main className="cp-main">
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
            <div className="cp-breadcrumb">
              <a href="/dashboard">Workspace</a>
              <Icon name="chevron" />
              <strong>{title}</strong>
            </div>
          </div>
          <div className="cp-topbar-actions">
            <span className="cp-season-pill"><span /> Placement season 2026</span>
            <Notifications />
            <span className="cp-user-avatar cp-topbar-avatar" aria-label="Ava Morgan">AM</span>
          </div>
        </header>

        <div className="cp-content wp-content">
          <header className="wp-page-heading">
            <div>
              <span className="cp-section-kicker">{eyebrow}</span>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            {actions && <div className="wp-page-actions">{actions}</div>}
          </header>
          {children}
          <footer className="cp-footer wp-footer">
            <span>CareerPilot · Your placement journey, with a plan.</span>
            <span>All information shown is sample data.</span>
          </footer>
        </div>
      </main>
    </div>
  )
}

function PagePanel({ title, kicker, action, children, className = '' }) {
  return (
    <section className={`cp-panel wp-panel ${className}`}>
      {(title || kicker || action) && (
        <div className="cp-panel-heading">
          <div>
            {kicker && <span className="cp-section-kicker">{kicker}</span>}
            {title && <h2>{title}</h2>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}

function PageStat({ label, value, note, icon, tone = 'sage' }) {
  return (
    <article className="cp-metric-card wp-stat">
      <div className={`cp-metric-icon ${tone}`}><Icon name={icon} /></div>
      <span className="cp-metric-label">{label}</span>
      <strong className="cp-metric-value">{value}</strong>
      <span className="cp-metric-note">{note}</span>
    </article>
  )
}

function ProgressBar({ label, value, color = 'green', note }) {
  return (
    <div className="wp-progress-item">
      <div className="cp-skill-heading">
        <span>{label}{note && <small>{note}</small>}</span>
        <strong>{value}%</strong>
      </div>
      <div
        className="cp-skill-track"
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span className={color} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

function FilterTabs({ items, selected, onSelect, label }) {
  return (
    <div className="wp-filter-tabs" role="group" aria-label={label}>
      {items.map((item) => (
        <button
          type="button"
          className={selected === item ? 'is-selected' : ''}
          key={item}
          aria-pressed={selected === item}
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

function JobsPage() {
  const [filter, setFilter] = useState('All')
  const filteredJobs = filter === 'All'
    ? jobApplications
    : jobApplications.filter((job) => job.status === filter)
  const filters = ['All', 'In review', 'Interview', 'Assessment', 'Saved']

  return (
    <WorkspaceLayout
      active="jobs"
      eyebrow="YOUR SEARCH, ORGANIZED"
      title="Job tracker"
      description="Keep applications, conversations, and next steps in one place."
      actions={<a className="cp-primary-button" href="#job-list">Browse sample roles <Icon name="arrow" /></a>}
    >
      <div className="wp-stats-grid">
        <PageStat label="Applications" value="12" note="3 added this month" icon="briefcase" />
        <PageStat label="Interviews" value="3" note="1 coming up this week" icon="user" tone="peach" />
        <PageStat label="Assessments" value="2" note="1 needs your attention" icon="check" tone="lavender" />
        <PageStat label="Saved roles" value="5" note="Ready when you are" icon="file" tone="blue" />
      </div>

      <PagePanel
        className="wp-table-panel"
        kicker="RECENT ACTIVITY"
        title="Your applications"
        action={<span className="wp-sample-tag">SAMPLE DATA</span>}
      >
        <FilterTabs items={filters} selected={filter} onSelect={setFilter} label="Filter applications" />
        <div className="wp-job-table-wrap" id="job-list">
          <table className="wp-job-table">
            <thead>
              <tr><th scope="col">Company &amp; role</th><th scope="col">Date added</th><th scope="col">Status</th><th scope="col">Location</th></tr>
            </thead>
            <tbody>
              {filteredJobs.map((job) => (
                <tr key={job.company}>
                  <td>
                    <div className="wp-company-cell">
                      <span className={`cp-company-avatar ${job.tone}`}>{job.company.slice(0, 1)}</span>
                      <span><strong>{job.company}</strong><small>{job.role}</small></span>
                    </div>
                  </td>
                  <td>{job.date}</td>
                  <td><span className={`cp-status ${job.tone}`}><span />{job.status}</span></td>
                  <td>{job.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredJobs.length === 0 && <p className="wp-empty-state">No sample roles in this stage yet.</p>}
        </div>
        <p className="wp-data-note">These example applications are for demonstration only and are not saved.</p>
      </PagePanel>
    </WorkspaceLayout>
  )
}

function DsaPage() {
  const [topic, setTopic] = useState('All topics')
  const topics = ['All topics', 'Arrays', 'Strings', 'Graphs', 'Trees', 'Dynamic programming']
  const visibleProblems = topic === 'All topics'
    ? practiceProblems
    : practiceProblems.filter((problem) => problem.topic === topic)

  return (
    <WorkspaceLayout
      active="dsa"
      eyebrow="PRACTICE WITH PURPOSE"
      title="DSA practice"
      description="Build a steady problem-solving habit and focus on the topics that move you forward."
      actions={<a className="cp-primary-button" href="#problem-list">Continue practice <Icon name="arrow" /></a>}
    >
      <div className="wp-stats-grid">
        <PageStat label="Problems solved" value="68" note="of 100 weekly goal" icon="code" />
        <PageStat label="Practice streak" value="5 days" note="Your best is 9 days" icon="spark" tone="peach" />
        <PageStat label="Topics covered" value="8 / 12" note="Keep exploring" icon="grid" tone="lavender" />
        <PageStat label="Study time" value="6.5 hrs" note="This week · sample" icon="user" tone="blue" />
      </div>

      <div className="wp-dsa-grid">
        <PagePanel className="wp-topic-panel" kicker="YOUR TOPIC MAP" title="Progress by topic">
          <ProgressBar label="Arrays & hashing" value={85} color="green" note="12 / 14" />
          <ProgressBar label="Two pointers" value={72} color="blue" note="8 / 11" />
          <ProgressBar label="Trees & graphs" value={54} color="purple" note="7 / 13" />
          <ProgressBar label="Dynamic programming" value={38} color="orange" note="5 / 13" />
          <ProgressBar label="Intervals & greedy" value={65} color="green" note="6 / 9" />
        </PagePanel>
        <PagePanel className="wp-streak-panel" kicker="A LITTLE EACH DAY" title="This week">
          <div className="wp-week-bars" aria-label="Sample weekly DSA practice">
            {[['M', 48], ['T', 78], ['W', 38], ['T', 92], ['F', 66], ['S', 28], ['S', 8]].map(([day, height], index) => (
              <div className="wp-week-column" key={`${day}-${index}`}>
                <span className={`wp-week-bar${index === 3 ? ' is-current' : ''}`} style={{ height: `${height}%` }} />
                <small>{day}</small>
              </div>
            ))}
          </div>
          <div className="wp-week-total"><strong>27</strong><span>problems solved this week</span></div>
          <p className="wp-data-note">Sample activity · keep a pace that works for you.</p>
        </PagePanel>
      </div>

      <PagePanel
        className="wp-problems-panel"
        kicker="YOUR PRACTICE LIST"
        title="Recent problems"
        action={<span className="wp-sample-tag">SAMPLE DATA</span>}
      >
        <FilterTabs items={topics} selected={topic} onSelect={setTopic} label="Filter problems by topic" />
        <div className="wp-problem-list" id="problem-list">
          {visibleProblems.map((problem) => (
            <article className="wp-problem-row" key={problem.title}>
              <span className={`wp-problem-state ${problem.status === 'Solved' ? 'is-solved' : ''}`}>
                {problem.status === 'Solved' ? <Icon name="check" /> : ''}
              </span>
              <div className="wp-problem-name"><strong>{problem.title}</strong><small>{problem.topic} · {problem.source}</small></div>
              <span className={`wp-difficulty ${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span>
              <span className={`wp-problem-status ${problem.status.toLowerCase().replace(' ', '-')}`}>{problem.status}</span>
            </article>
          ))}
        </div>
      </PagePanel>
    </WorkspaceLayout>
  )
}

function ResumePage() {
  const [showPreview, setShowPreview] = useState(false)
  const completedSections = resumeSections.filter((section) => section.complete).length
  const completeness = Math.round((completedSections / resumeSections.length) * 100)

  return (
    <WorkspaceLayout
      active="resume"
      eyebrow="TELL YOUR STORY CLEARLY"
      title="Resume builder"
      description="A clear, role-focused resume makes it easier for people to see what you can do."
      actions={
        <button className="wp-outline-button" type="button" onClick={() => setShowPreview((show) => !show)}>
          {showPreview ? 'Edit sections' : 'Preview resume'}
        </button>
      }
    >
      <div className="wp-resume-layout">
        <div className="wp-resume-main">
          <PagePanel
            className="wp-resume-checklist"
            kicker="YOUR FIRST DRAFT"
            title="Resume sections"
            action={<span className="wp-sample-tag">MOCK PROFILE</span>}
          >
            <div className="wp-resume-progress">
              <div className="cp-skill-heading"><span>Resume completeness</span><strong>{completeness}%</strong></div>
              <div className="cp-skill-track" role="progressbar" aria-label="Resume completeness" aria-valuenow={completeness} aria-valuemin="0" aria-valuemax="100">
                <span className="green" style={{ width: `${completeness}%` }} />
              </div>
            </div>
            {showPreview ? (
              <article className="wp-resume-preview">
                <span className="cp-section-kicker">SAMPLE RESUME PREVIEW</span>
                <h2>Ava Morgan</h2>
                <p>Computer Science student focused on building accessible, user-friendly web experiences.</p>
                <h3>Selected project</h3>
                <p><strong>Campus Connect</strong> · Built a React event discovery app used by 120 student testers.</p>
                <p className="wp-data-note">Preview content is sample text and is not exported or saved.</p>
              </article>
            ) : (
              <div className="wp-resume-sections">
                {resumeSections.map((section) => (
                  <article className="wp-resume-section" key={section.name}>
                    <span className={`wp-section-check${section.complete ? ' is-complete' : ''}`}>
                      {section.complete && <Icon name="check" />}
                    </span>
                    <div><strong>{section.name}</strong><small>{section.detail}</small></div>
                    <span className={`wp-section-status${section.complete ? ' complete' : ''}`}>
                      {section.complete ? 'Complete' : 'Needs attention'}
                    </span>
                  </article>
                ))}
              </div>
            )}
          </PagePanel>
        </div>

        <aside className="wp-resume-aside">
          <PagePanel className="wp-resume-tip" kicker="A HELPFUL REMINDER" title="Lead with impact">
            <p>For each project or experience, say what you built, what you did, and what changed because of it.</p>
            <div className="wp-example">
              <span>INSTEAD OF</span>
              <p>Worked on a student events website.</p>
              <span>TRY SOMETHING LIKE</span>
              <p>Built a React event finder that helped 120 students discover campus activities.</p>
            </div>
          </PagePanel>
          <PagePanel className="wp-resume-target" kicker="CURRENT FOCUS" title="Frontend engineer">
            <p>Keep your resume aligned with the work you want to do next.</p>
            <div className="wp-tag-list"><span>React</span><span>JavaScript</span><span>Accessibility</span></div>
          </PagePanel>
        </aside>
      </div>
      <p className="wp-data-note wp-resume-disclaimer">This is a sample resume workspace. Your changes are not stored or sent anywhere.</p>
    </WorkspaceLayout>
  )
}

function SkillsPage() {
  const [role, setRole] = useState('Frontend engineer')
  const matches = roleSkills[role]
  const average = Math.round(matches.reduce((sum, skill) => sum + skill.value, 0) / matches.length)
  const strongMatches = matches.filter((skill) => skill.match).length

  return (
    <WorkspaceLayout
      active="skills"
      eyebrow="FIND YOUR NEXT FOCUS"
      title="Skill matching"
      description="Compare your current strengths with a role you’re interested in, then choose a useful next step."
      actions={<label className="wp-role-picker"><span>Compare to</span><select value={role} onChange={(event) => setRole(event.target.value)}>{Object.keys(roleSkills).map((roleName) => <option key={roleName}>{roleName}</option>)}</select></label>}
    >
      <div className="wp-skills-summary">
        <div>
          <span className="cp-section-kicker">SAMPLE ROLE MATCH</span>
          <h2>{role}</h2>
          <p>A snapshot to help guide your preparation—not a hiring decision.</p>
        </div>
        <div className="wp-match-score"><strong>{average}<small>%</small></strong><span>overall alignment</span></div>
      </div>

      <div className="wp-skill-match-grid">
        <PagePanel className="wp-skill-breakdown" kicker="SKILL BREAKDOWN" title="Your strengths & growth areas">
          <div className="wp-match-legend"><span><i className="match" /> Strong match</span><span><i className="develop" /> Keep developing</span></div>
          <div className="wp-role-skills">
            {matches.map((skill) => (
              <div className="wp-role-skill" key={skill.name}>
                <div className="cp-skill-heading">
                  <span>{skill.name}<small className={`wp-match-label ${skill.match ? 'is-match' : ''}`}>{skill.match ? 'Good match' : 'Growth area'}</small></span>
                  <strong>{skill.value}%</strong>
                </div>
                <div className="cp-skill-track" role="progressbar" aria-label={`${skill.name} match`} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100">
                  <span className={skill.color} style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </PagePanel>
        <PagePanel className="wp-match-next" kicker="A PRACTICAL NEXT STEP" title="Build on what you know">
          <p>You already show a strong match in {strongMatches} of {matches.length} sample skills for this role.</p>
          <div className="wp-next-step">
            <span className="wp-next-step-icon"><Icon name="code" /></span>
            <span><strong>Pick one growth area</strong><small>Set aside 30 minutes to practice a focused example.</small></span>
          </div>
          <a className="cp-primary-button" href="/dsa">Explore DSA practice <Icon name="arrow" /></a>
        </PagePanel>
      </div>

      <PagePanel className="wp-skill-note" kicker="HOW TO USE THIS VIEW" title="A guide, not a scorecard">
        <p>Skill percentages are illustrative sample values. Real job requirements vary by team, and this view does not evaluate or rank candidates.</p>
        <a className="wp-inline-link" href="/profile">Review your profile <Icon name="arrow" /></a>
      </PagePanel>
    </WorkspaceLayout>
  )
}

function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'Ava Morgan',
    email: 'ava.morgan@example.edu',
    university: 'Northstar University',
    degree: 'B.S. Computer Science',
    graduation: '2027',
    portfolio: '',
  })
  const [notice, setNotice] = useState('')

  function updateField(event) {
    setNotice('')
    setProfile((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('Preview updated locally. This sample profile is not saved to a server.')
  }

  return (
    <WorkspaceLayout
      active="profile"
      eyebrow="YOUR PLACEMENT SNAPSHOT"
      title="My profile"
      description="Keep your student details and career interests clear and ready to review."
      actions={<span className="wp-sample-tag">SAMPLE PROFILE</span>}
    >
      <div className="wp-profile-layout">
        <form className="cp-panel wp-profile-form" onSubmit={handleSubmit}>
          <div className="cp-panel-heading">
            <div><span className="cp-section-kicker">STUDENT DETAILS</span><h2>About you</h2></div>
            <span className="wp-profile-complete">85% complete</span>
          </div>
          <div className="wp-form-grid">
            <label className="wp-field"><span>Full name</span><input name="name" value={profile.name} onChange={updateField} /></label>
            <label className="wp-field"><span>College email</span><input name="email" type="email" value={profile.email} onChange={updateField} /></label>
            <label className="wp-field"><span>University</span><input name="university" value={profile.university} onChange={updateField} /></label>
            <label className="wp-field"><span>Degree</span><input name="degree" value={profile.degree} onChange={updateField} /></label>
            <label className="wp-field"><span>Expected graduation</span><select name="graduation" value={profile.graduation} onChange={updateField}><option>2026</option><option>2027</option><option>2028</option></select></label>
            <label className="wp-field"><span>Portfolio URL <small>Optional</small></span><input name="portfolio" type="url" placeholder="https://" value={profile.portfolio} onChange={updateField} /></label>
          </div>
          <div className="wp-form-footer">
            {notice ? <p className="wp-form-notice" role="status">{notice}</p> : <p className="wp-form-hint">Edits stay in this browser view only.</p>}
            <button className="cp-primary-button" type="submit">Update sample preview</button>
          </div>
        </form>

        <aside className="wp-profile-aside">
          <PagePanel className="wp-profile-card">
            <span className="cp-user-avatar cp-user-avatar-large">AM</span>
            <span className="cp-section-kicker">PLACEMENT PROFILE</span>
            <h2>{profile.name || 'Your name'}</h2>
            <p>{profile.degree}</p>
            <p>{profile.university} · Class of {profile.graduation}</p>
            <div className="wp-profile-tags"><span>Frontend</span><span>Internships</span><span>India</span></div>
          </PagePanel>
          <PagePanel className="wp-profile-tip" kicker="YOUR NEXT STEP" title="Add your portfolio">
            <p>A project link helps you share your work alongside your resume.</p>
            <a className="wp-inline-link" href="/resume">Visit resume builder <Icon name="arrow" /></a>
          </PagePanel>
        </aside>
      </div>
      <p className="wp-data-note wp-profile-disclaimer">Sample contact details are fictional. Profile details are not transmitted or saved.</p>
    </WorkspaceLayout>
  )
}

export { JobsPage, DsaPage, ResumePage, SkillsPage, ProfilePage }
