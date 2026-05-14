import type { Metadata } from "next";
export const metadata: Metadata = { title: "Parent Portal — EduTrack Pro" };

const courses = [
  { name: "Data Structures",     grade: "A",  score: 94, teacher: "Prof. Gable",  status: "Excellent" },
  { name: "Operating Systems",   grade: "B+", score: 87, teacher: "Dr. Torres",  status: "Good" },
  { name: "DBMS Lab",            grade: "A-", score: 91, teacher: "Dr. Patel",   status: "Excellent" },
  { name: "Computer Networks",   grade: "B",  score: 82, teacher: "Prof. Wright",  status: "Good" },
  { name: "Software Engineering",grade: "A",  score: 96, teacher: "Prof. Chen",  status: "Excellent" },
];

const activity = [
  { type: "grade",   icon: "grade",        color: "#16a34a", title: "New Grade Posted",       body: "Leo received A (94%) in Advanced Algebra Midterm.", time: "2h ago" },
  { type: "attend",  icon: "event_available",color: "#2563eb", title: "Attendance Confirmed", body: "Leo marked as Present for the morning session.",      time: "5h ago" },
  { type: "notice",  icon: "campaign",     color: "#d97706", title: "Notice from Mrs. Gable", body: "\"Leo showed great leadership in our group science project today.\"", time: "1d ago" },
  { type: "grade",   icon: "grade",        color: "#16a34a", title: "Physics Quiz Result",    body: "Leo scored 18/20 in the weekly Physics quiz.",        time: "2d ago" },
];

const teachers = [
  { name: "Prof. Gable", course: "Data Structures", lastMsg: "Thank you for the update on…",              time: "1h ago",  unread: 2 },
  { name: "Dr. Torres",  course: "Operating Systems",  lastMsg: "The upcoming practical exams…",             time: "3h ago",  unread: 0 },
  { name: "Dr. Patel",   course: "DBMS Lab",           lastMsg: "Leo's lab practical is next Wednesday…",    time: "1d ago",  unread: 1 },
];

const gradeChip: Record<string, string> = { Excellent: "chip-success", Good: "chip-accent", Average: "chip-warning" };

export default function ParentPage() {
  return (
    <>
      <header className="page-header">
        <h1>Parent Portal</h1>
        <div className="header-actions">
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Monitoring: Leo Johnson · Sem 5 (CS)</span>
          <button className="btn btn-outline btn-sm">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>notifications</span>
            Alerts <span className="chip chip-danger" style={{ padding: "1px 7px", fontSize: 10, marginLeft: 2 }}>3</span>
          </button>
        </div>
      </header>
      <main className="page-body">
        {/* Welcome */}
        <div className="fade-up" style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e3a6e 100%)", borderRadius: 12, padding: "22px 28px", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.55)", marginBottom: 4 }}>Welcome back, Sarah</p>
            <h2 style={{ fontSize: 22, fontWeight: 700 }}>Here is Leo&apos;s progress overview</h2>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.6)", marginTop: 4 }}>Leo is in the <strong style={{ color: "#60a5fa" }}>top 5%</strong> of his cohort for engagement and attendance.</p>
          </div>
          <div style={{ background: "rgba(255,255,255,.08)", borderRadius: 10, padding: "12px 20px", textAlign: "center", border: "1px solid rgba(255,255,255,.12)" }}>
            <div style={{ fontSize: 30, fontWeight: 800 }}>3.92</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 2 }}>Current GPA</div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid fade-up fade-up-d1" style={{ marginBottom: 24 }}>
          {[
            { label: "GPA", value: "3.92", cc: "success", sub: "Top 5% of cohort" },
            { label: "Attendance", value: "95%", cc: "accent", sub: "Above threshold" },
            { label: "Assignments Done", value: "28/30", cc: "", sub: "2 pending" },
            { label: "Behaviour Score", value: "Excellent", cc: "success", sub: "This semester" },
          ].map(s => (
            <div className="stat-card" key={s.label}>
              <div className="stat-label">{s.label}</div>
              <div className={`stat-value ${s.cc}`} style={{ fontSize: 22 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Academic performance */}
            <div className="card fade-up fade-up-d2">
              <div className="card-header"><h3>Academic Performance — Leo&apos;s Courses</h3></div>
              <div style={{ overflowX: "auto" }}>
                <table className="data-table">
                  <thead><tr><th>Course</th><th>Instructor</th><th>Score</th><th>Grade</th><th>Status</th></tr></thead>
                  <tbody>
                    {courses.map(s => (
                      <tr key={s.name}>
                        <td style={{ fontWeight: 600 }}>{s.name}</td>
                        <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{s.teacher}</td>
                        <td>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div className="progress-bar" style={{ width: 60 }}>
                              <div className="progress-fill success" style={{ width: `${s.score}%` }} />
                            </div>
                            <span style={{ fontWeight: 700, fontSize: 13 }}>{s.score}</span>
                          </div>
                        </td>
                        <td><span className={`chip ${s.score >= 90 ? "chip-success" : "chip-accent"}`}>{s.grade}</span></td>
                        <td><span className={`chip ${gradeChip[s.status]}`}>{s.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Instructor Channel */}
            <div className="card fade-up fade-up-d3">
              <div className="card-header">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: "var(--accent)" }}>forum</span>
                  <h3>Instructor Channel</h3>
                </div>
                <button className="btn btn-accent btn-sm">New Message</button>
              </div>
              <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {teachers.map(t => (
                  <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 14px", background: "var(--surface-low)", borderRadius: 8, border: "1px solid var(--border-subtle)", cursor: "pointer" }}>
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name} <span style={{ fontSize: 12, fontWeight: 400, color: "var(--text-muted)" }}>· {t.course}</span></div>
                      <div style={{ fontSize: 12.5, color: "var(--text-muted)", marginTop: 2 }}>{t.lastMsg}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{t.time}</div>
                      {t.unread > 0 && <div style={{ marginTop: 4, background: "var(--accent)", color: "#fff", borderRadius: 9999, fontSize: 10, fontWeight: 700, padding: "1px 7px", display: "inline-block" }}>{t.unread}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: activity */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="card fade-up fade-up-d2" style={{ flex: 1 }}>
              <div className="card-header"><h3>My Child&apos;s Activity</h3></div>
              <div style={{ padding: "0 20px" }}>
                {activity.map(a => (
                  <div key={a.title} className="notice-item">
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: `${a.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 15, color: a.color }}>{a.icon}</span>
                      </div>
                      <div className="notice-title" style={{ fontSize: 13 }}>{a.title}</div>
                    </div>
                    <div className="notice-body">{a.body}</div>
                    <div className="notice-meta">{a.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card fade-up fade-up-d3" style={{ padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Overall Standing</div>
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ fontSize: 48, fontWeight: 900, color: "var(--success)", lineHeight: 1 }}>Top 5%</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>of his cohort for engagement</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Engagement",  pct: 95, color: "success" },
                  { label: "Academics",   pct: 92, color: "success" },
                  { label: "Attendance",  pct: 95, color: "success" },
                  { label: "Behaviour",   pct: 98, color: "success" },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 12.5 }}>{item.label}</span>
                      <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--success)" }}>{item.pct}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className={`progress-fill ${item.color}`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
