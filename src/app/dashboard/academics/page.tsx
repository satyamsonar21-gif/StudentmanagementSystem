import type { Metadata } from "next";
export const metadata: Metadata = { title: "Academics — EduTrack Pro" };

const timetable = [
  { day: "Mon", slots: ["Thermodynamics · Hall A-102", "Fluid Mechanics Lab · Workshop B", ""] },
  { day: "Tue", slots: ["Machine Design · Hall B-204", "Ethics Seminar · Auditorium", ""] },
  { day: "Wed", slots: ["Thermodynamics · Hall A-102", "Mathematics III · Online Portal", ""] },
  { day: "Thu", slots: ["AutoCAD Practical · Comp Lab 4", "Machine Design · Hall B-204", ""] },
  { day: "Fri", slots: ["Guest Lecture · Hall C-01", "Project Review · Office 302", ""] },
];

const gradebook = [
  { course: "Thermodynamics",   mid: 82, final: 88, lab: 91, total: 87, grade: "A-", status: "Pass" },
  { course: "Fluid Mechanics",  mid: 74, final: 79, lab: 85, total: 79, grade: "B+", status: "Pass" },
  { course: "Machine Design",   mid: 91, final: 94, lab: 90, total: 92, grade: "A",  status: "Pass" },
  { course: "Mathematics III",  mid: 88, final: 86, lab: 100,total: 88, grade: "A-", status: "Pass" },
  { course: "AutoCAD Practical",mid: 70, final: 72, lab: 78, total: 73, grade: "B",  status: "Pass" },
];

const attendance = [
  { course: "Thermodynamics", pct: 96, classes: 24, color: "success" },
  { course: "Fluid Mech",     pct: 88, classes: 22, color: "accent" },
  { course: "Machine Des",    pct: 74, classes: 18, color: "danger" },
  { course: "Mathematics III",pct: 100,classes: 20, color: "success" },
];

const reports = [
  { name: "Mid-Term Assessment",       date: "Oct 2023", size: "1.2 MB", icon: "description" },
  { name: "Lab Safety Certification",  date: "Aug 2023", size: "0.8 MB", icon: "verified" },
  { name: "Semester 4 Transcript",     date: "Jun 2023", size: "2.5 MB", icon: "school" },
];

export default function AcademicsPage() {
  return (
    <>
      <header className="page-header">
        <h1>Student Academics</h1>
        <div className="header-actions">
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>2023-24 · Sem 5 · Mechanical Engineering</span>
          <button className="btn btn-accent btn-sm">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
            Export Transcript
          </button>
        </div>
      </header>
      <main className="page-body">
        {/* Stats row */}
        <div className="stats-grid fade-up" style={{ marginBottom: 24 }}>
          {[
            { label: "Semester GPA",     value: "3.82", cc: "success" },
            { label: "Avg Attendance",   value: "89.5%",cc: "accent" },
            { label: "Credits This Sem", value: "22",   cc: "" },
            { label: "Rank in Batch",    value: "#12",  cc: "" },
          ].map(s => (
            <div className="stat-card" key={s.label}>
              <div className="stat-label">{s.label}</div>
              <div className={`stat-value ${s.cc}`}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Timetable */}
            <div className="card fade-up fade-up-d1">
              <div className="card-header"><h3>Interactive Timetable</h3><span className="chip chip-accent">Week 12</span></div>
              <div style={{ overflowX: "auto" }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>9 AM – 11 AM</th>
                      <th>11 AM – 1 PM</th>
                      <th>2 PM – 4 PM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetable.map(row => (
                      <tr key={row.day}>
                        <td style={{ fontWeight: 700, color: "var(--accent)", width: 56 }}>{row.day}</td>
                        {row.slots.map((s, i) => (
                          <td key={i} style={{ fontSize: 13 }}>
                            {s ? (
                              <div style={{ background: "var(--accent-light)", color: "var(--accent)", padding: "6px 10px", borderRadius: 6, fontSize: 12.5, fontWeight: 600, lineHeight: 1.4 }}>{s}</div>
                            ) : (
                              <span style={{ color: "var(--border)", fontSize: 12 }}>—</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Gradebook */}
            <div className="card fade-up fade-up-d2">
              <div className="card-header"><h3>Gradebook</h3></div>
              <div style={{ overflowX: "auto" }}>
                <table className="data-table">
                  <thead>
                    <tr><th>Course</th><th>Mid-Term</th><th>Final</th><th>Lab</th><th>Total</th><th>Grade</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {gradebook.map(g => (
                      <tr key={g.course}>
                        <td style={{ fontWeight: 500 }}>{g.course}</td>
                        <td>{g.mid}</td>
                        <td>{g.final}</td>
                        <td>{g.lab}</td>
                        <td style={{ fontWeight: 700 }}>{g.total}</td>
                        <td><span className={`chip ${Number(g.total) >= 90 ? "chip-success" : Number(g.total) >= 75 ? "chip-accent" : "chip-warning"}`}>{g.grade}</span></td>
                        <td><span className="chip chip-success">{g.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Lab & Activity Log */}
            <div className="card fade-up fade-up-d3">
              <div className="card-header"><h3>Lab & Activity Log</h3></div>
              <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { act: "Fluid Dynamics CFD Simulation", type: "Lab", date: "Nov 3, 2023", score: "94/100", icon: "science" },
                  { act: "Stress Analysis Report Submitted", type: "Assignment", date: "Oct 28, 2023", score: "Submitted", icon: "assignment_turned_in" },
                  { act: "AutoCAD Model Review",            type: "Practical", date: "Oct 20, 2023", score: "87/100", icon: "computer" },
                  { act: "Thermodynamics Quiz 3",           type: "Quiz", date: "Oct 14, 2023", score: "18/20", icon: "quiz" },
                ].map(a => (
                  <div key={a.act} style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 14px", background: "var(--surface-low)", borderRadius: 8, border: "1px solid var(--border-subtle)" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: "var(--accent)", flexShrink: 0 }}>{a.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 600 }}>{a.act}</div>
                      <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 1 }}>{a.type} · {a.date}</div>
                    </div>
                    <span className="chip chip-success">{a.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Attendance */}
            <div className="card fade-up fade-up-d1">
              <div className="card-header"><h3>Attendance Tracking</h3></div>
              <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {attendance.map(a => (
                  <div key={a.course}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontSize: 13.5, fontWeight: 600 }}>{a.course}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {a.pct < 75 && <span className="chip chip-danger" style={{ fontSize: 10 }}>BELOW THRESHOLD</span>}
                        <span style={{ fontSize: 14, fontWeight: 700, color: `var(--${a.color})` }}>{a.pct}%</span>
                      </div>
                    </div>
                    <div className="progress-bar">
                      <div className={`progress-fill ${a.color}`} style={{ width: `${a.pct}%` }} />
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>{a.classes} classes attended</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Reports */}
            <div className="card fade-up fade-up-d2">
              <div className="card-header"><h3>Academic Reports</h3></div>
              <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {reports.map(r => (
                  <div key={r.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", background: "var(--surface-low)", borderRadius: 8, border: "1px solid var(--border-subtle)" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: "var(--accent)" }}>{r.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{r.name}</div>
                      <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>{r.date} · {r.size}</div>
                    </div>
                    <button className="btn btn-ghost btn-sm" style={{ padding: "4px 8px" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
                    </button>
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
