import type { Metadata } from "next";
export const metadata: Metadata = { title: "Teacher Dashboard — EduTrack Pro" };

const watchlist = [
  { name: "Julianne Devis",  branch: "CS-Sem 5", id: "#4402", gpa: 1.8, att: 61, risk: "High" },
  { name: "Marcus Aurelius", branch: "IT-Sem 4", id: "#4419", gpa: 2.1, att: 68, risk: "High" },
  { name: "Sarah Lee",       branch: "CS-Sem 5", id: "#4490", gpa: 2.4, att: 72, risk: "Medium" },
  { name: "David Kim",       branch: "EC-Sem 6", id: "#4321", gpa: 2.6, att: 74, risk: "Medium" },
];

const notices = [
  { title: "Final Semester Exam Draft", body: "Please review the draft schedule and report any conflicts by 5 PM today.", date: "2h ago", urgent: true },
  { title: "Annual Sports Meet 2024",   body: "Volunteer registration is now open for the upcoming sports events.",    date: "1d ago", urgent: false },
  { title: "Library Maintenance",       body: "The East Wing library will be closed for maintenance this Sunday.",     date: "2d ago", urgent: false },
];

const riskColor: Record<string, string> = { High: "danger", Medium: "warning", Low: "success" };

export default function TeacherPage() {
  return (
    <>
      <header className="page-header">
        <h1>Academic Dashboard</h1>
        <div className="header-actions">
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Prof. Sarah Miller · Senior Faculty</span>
          <button className="btn btn-accent btn-sm">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>Post Notice
          </button>
        </div>
      </header>
      <main className="page-body">
        {/* Stats */}
        <div className="stats-grid fade-up" style={{ marginBottom: 24 }}>
          {[
            { label: "Total Students",   value: "1,248", icon: "group",    cc: "accent"   },
            { label: "Active Notices",   value: "24",    icon: "campaign", cc: ""         },
            { label: "High Risk Alerts", value: "15",    icon: "warning",  cc: "danger"   },
            { label: "AI Reports Gen.",  value: "89",    icon: "insights", cc: "success"  },
          ].map(s => (
            <div className="stat-card" key={s.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="stat-label">{s.label}</div>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: "var(--text-muted)" }}>{s.icon}</span>
              </div>
              <div className={`stat-value ${s.cc}`}>{s.value}</div>
            </div>
          ))}
        </div>

        <div className="dashboard-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* AI Data Analyser */}
            <div className="card fade-up fade-up-d1">
              <div className="card-header">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#7c3aed" }}>analytics</span>
                  <h3>AI Data Analyser</h3>
                </div>
                <span className="chip chip-accent">Beta</span>
              </div>
              <div className="card-body">
                <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 16, lineHeight: 1.65 }}>
                  Upload student performance spreadsheets to generate predictive risk insights and intervention recommendations.
                </p>
                <div style={{ border: "2px dashed var(--border)", borderRadius: 10, padding: "32px", textAlign: "center", background: "var(--surface-low)", cursor: "pointer", transition: "all .15s" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 40, color: "var(--text-muted)", marginBottom: 10, display: "block" }}>cloud_upload</span>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Drop CSV or Excel file here</div>
                  <div style={{ fontSize: 12.5, color: "var(--text-muted)" }}>or click to browse — Max file size 25 MB</div>
                  <button className="btn btn-accent btn-sm" style={{ marginTop: 16 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 15 }}>upload_file</span>Browse Files
                  </button>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 16 }}>
                  {[
                    { label: "Reports Generated", value: "89", color: "var(--accent)" },
                    { label: "Risk Flags",         value: "15", color: "var(--danger)" },
                    { label: "Avg. Accuracy",      value: "94%",color: "var(--success)" },
                  ].map(m => (
                    <div key={m.label} style={{ padding: "12px", background: "var(--surface-low)", borderRadius: 8, textAlign: "center", border: "1px solid var(--border-subtle)" }}>
                      <div style={{ fontSize: 20, fontWeight: 800, color: m.color }}>{m.value}</div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Priority Watchlist */}
            <div className="card fade-up fade-up-d2">
              <div className="card-header">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: "var(--danger)" }}>priority_high</span>
                  <h3>Priority Watchlist</h3>
                </div>
                <button className="btn btn-ghost btn-sm">View All Students</button>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table className="data-table">
                  <thead>
                    <tr><th>Student</th><th>Branch</th><th>CGPA</th><th>Attendance</th><th>Risk Level</th><th>Action</th></tr>
                  </thead>
                  <tbody>
                    {watchlist.map(w => (
                      <tr key={w.id}>
                        <td>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ width: 32, height: 32, borderRadius: "50%", background: w.risk === "High" ? "var(--danger-bg)" : "var(--warning-bg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: w.risk === "High" ? "var(--danger)" : "var(--warning)", flexShrink: 0 }}>
                              {w.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div>
                              <div style={{ fontWeight: 600, fontSize: 14 }}>{w.name}</div>
                              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>ID {w.id}</div>
                            </div>
                          </div>
                        </td>
                        <td><span className="chip chip-neutral">{w.branch}</span></td>
                        <td style={{ fontWeight: 700, color: w.gpa < 2.0 ? "var(--danger)" : "var(--warning)" }}>{w.gpa.toFixed(1)}</td>
                        <td>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div className="progress-bar" style={{ width: 60 }}>
                              <div className={`progress-fill ${w.att < 70 ? "danger" : "warning"}`} style={{ width: `${w.att}%` }} />
                            </div>
                            <span style={{ fontSize: 13, fontWeight: 600 }}>{w.att}%</span>
                          </div>
                        </td>
                        <td><span className={`chip chip-${riskColor[w.risk]}`}>{w.risk}</span></td>
                        <td>
                          <button className="btn btn-outline btn-sm" style={{ padding: "4px 10px", fontSize: 12 }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>contact_mail</span>Contact
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: Notice board */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="card fade-up fade-up-d1">
              <div className="card-header">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: "var(--accent)" }}>add_box</span>
                  <h3>Notice Center</h3>
                </div>
                <button className="btn btn-accent btn-sm">+ New</button>
              </div>
              <div style={{ padding: "0 20px" }}>
                {notices.map(n => (
                  <div key={n.title} className="notice-item">
                    {n.urgent && <span className="chip chip-danger" style={{ fontSize: 10, alignSelf: "flex-start" }}>Urgent</span>}
                    <div className="notice-title">{n.title}</div>
                    <div className="notice-body">{n.body}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
                      <div className="notice-meta">{n.date}</div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button className="btn btn-ghost btn-sm" style={{ padding: "3px 8px" }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>edit</span>
                        </button>
                        <button className="btn btn-ghost btn-sm" style={{ padding: "3px 8px" }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats card */}
            <div className="card fade-up fade-up-d2" style={{ padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Batch Performance Overview</div>
              {[
                { label: "Students Above 3.5 GPA",   pct: 34, color: "success" },
                { label: "Students 2.5–3.5 GPA",      pct: 48, color: "accent"  },
                { label: "Students Below 2.5 GPA",    pct: 18, color: "danger"  },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: 12.5 }}>{item.label}</span>
                    <span style={{ fontWeight: 700, fontSize: 13, color: `var(--${item.color})` }}>{item.pct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className={`progress-fill ${item.color}`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
