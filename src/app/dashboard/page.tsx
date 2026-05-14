import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Dashboard — EduTrack Pro" };

const subjects = [
  { code: "ROB-402", name: "Advanced Robotics",     prof: "Prof. Miller", grade: "A",  gc: "success" },
  { code: "EEE-510", name: "Quantum Circuitry",     prof: "Prof. Tanaka", grade: "B+", gc: "accent"  },
  { code: "CIV-309", name: "Sustainable Materials", prof: "Prof. Evans",  grade: "A-", gc: "success" },
  { code: "CSE-440", name: "Embedded Systems",      prof: "Prof. Zhang",  grade: "B",  gc: "accent"  },
];

const notices = [
  { title: "Thermodynamics Mid-term Rescheduled", body: "Exam moved to Monday at 09:00 AM in Hall B.", date: "2h ago", type: "warning" },
  { title: "Lab Report Submission Portal",        body: "Final call for submission of CAD fluid dynamics files.", date: "5h ago", type: "danger" },
  { title: "Autumn Break Announcement",           body: "College closed Oct 28th – Nov 2nd.", date: "1d ago", type: "neutral" },
  { title: "Annual Tech Symposium",               body: "Hackathon registration is now open.", date: "2d ago", type: "accent" },
];

export default function DashboardPage() {
  return (
    <>
      <header className="page-header">
        <h1>Student Dashboard</h1>
        <div className="header-actions">
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Semester 5 · 2023-24</span>
          <button className="btn btn-outline btn-sm">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>notifications</span>
            Notices <span className="chip chip-danger" style={{ padding: "1px 7px", fontSize: 10, marginLeft: 2 }}>4</span>
          </button>
        </div>
      </header>
      <main className="page-body">
        {/* Banner */}
        <div className="fade-up" style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e3a6e 100%)", borderRadius: 12, padding: "24px 28px", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", right: -40, top: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(37,99,235,.2)" }} />
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", marginBottom: 6 }}>Good morning ☀️</p>
            <h2 style={{ fontSize: 24, fontWeight: 700 }}>Alex Johnson</h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.65)", marginTop: 4 }}>Here's your academic summary for the current semester.</p>
          </div>
          <div style={{ textAlign: "right", position: "relative" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 4 }}>Degree Progress</div>
            <div style={{ fontSize: 38, fontWeight: 800, lineHeight: 1 }}>68%</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)", marginTop: 4 }}>Mechanical Engineering</div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid fade-up fade-up-d1" style={{ marginBottom: 24 }}>
          {[
            { label: "Current GPA",   value: "3.82",  change: "↑ +0.14 this semester", cc: "success" },
            { label: "Attendance",    value: "91.4%", change: "↑ Above threshold",      cc: "accent"  },
            { label: "Credits",       value: "126/185",change: "59 remaining",          cc: ""        },
            { label: "Upcoming Exams",value: "3",     change: "Within 2 weeks",         cc: "warning" },
          ].map(s => (
            <div className="stat-card" key={s.label}>
              <div className="stat-label">{s.label}</div>
              <div className={`stat-value ${s.cc}`}>{s.value}</div>
              <div className="stat-change" style={{ color: s.cc === "warning" ? "var(--warning)" : "var(--text-muted)" }}>{s.change}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Subjects table */}
            <div className="card fade-up fade-up-d2">
              <div className="card-header">
                <h3>Active Engineering Courses</h3>
                <Link href="/dashboard/academics" className="btn btn-ghost btn-sm">View Academics →</Link>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table className="data-table">
                  <thead><tr><th>Course</th><th>Code</th><th>Instructor</th><th>Grade</th></tr></thead>
                  <tbody>
                    {subjects.map(s => (
                      <tr key={s.code}>
                        <td style={{ fontWeight: 500 }}>{s.name}</td>
                        <td><span className="chip chip-neutral">{s.code}</span></td>
                        <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{s.prof}</td>
                        <td><span className={`chip chip-${s.gc}`}>{s.grade}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Projects */}
            <div className="card fade-up fade-up-d3">
              <div className="card-header"><h3>Project Portfolio</h3></div>
              <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { name: "Autonomous Solar Drone", date: "Sep 2023" },
                  { name: "LoRa Sensor Network",    date: "July 2023" },
                  { name: "Bridge Stress Analysis", date: "May 2023" },
                ].map(p => (
                  <div key={p.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "var(--surface-low)", borderRadius: 8, border: "1px solid var(--border-subtle)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18, color: "var(--accent)" }}>engineering</span>
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>{p.name}</div>
                        <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{p.date}</div>
                      </div>
                    </div>
                    <span className="chip chip-success">Completed</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certs */}
            <div className="card fade-up fade-up-d4">
              <div className="card-header"><h3>Earned Certifications</h3><button className="btn btn-ghost btn-sm">View All</button></div>
              <div className="card-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { name: "AWS Certified Solutions Architect", org: "Verified by AWS",     cred: "9942-XJ",  color: "#f97316" },
                  { name: "NVIDIA AI Fundamentals",            org: "NVIDIA AI Institute", cred: "NV-8812",  color: "#76b900" },
                ].map(c => (
                  <div key={c.cred} style={{ padding: 14, border: "1.5px solid var(--border-subtle)", borderRadius: 8, position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: 4, bottom: 0, background: c.color, borderRadius: "8px 0 0 8px" }} />
                    <div style={{ paddingLeft: 8 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.4 }}>{c.name}</div>
                      <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 3 }}>{c.org}</div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4, fontFamily: "monospace" }}>#{c.cred}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: notices + quick links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="card fade-up fade-up-d2" style={{ flex: 1 }}>
              <div className="card-header"><h3>Notices Feed</h3></div>
              <div style={{ padding: "0 20px" }}>
                {notices.map(n => (
                  <div key={n.title} className="notice-item">
                    <span className={`chip chip-${n.type}`} style={{ fontSize: 10, padding: "2px 7px", alignSelf: "flex-start" }}>
                      {n.type === "warning" ? "Exam" : n.type === "danger" ? "Urgent" : n.type === "accent" ? "Event" : "Info"}
                    </span>
                    <div className="notice-title">{n.title}</div>
                    <div className="notice-body">{n.body}</div>
                    <div className="notice-meta">{n.date}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card fade-up fade-up-d3" style={{ padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Quick Access</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "AI Tutor",       href: "/dashboard/ai-tutor", icon: "psychology",  color: "#7c3aed" },
                  { label: "Course Catalogue",href: "/dashboard/courses",  icon: "auto_stories",color: "#2563eb" },
                  { label: "News & Trends",  href: "/dashboard/news",     icon: "newspaper",   color: "#0891b2" },
                ].map(q => (
                  <a key={q.href} href={q.href} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, border: "1px solid var(--border-subtle)", background: "var(--surface-low)", transition: "all .15s" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: q.color }}>{q.icon}</span>
                    <span style={{ fontSize: 13.5, fontWeight: 600 }}>{q.label}</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 15, color: "var(--text-muted)", marginLeft: "auto" }}>chevron_right</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
