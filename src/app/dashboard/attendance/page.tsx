import type { Metadata } from "next";
export const metadata: Metadata = { title: "Attendance — EduTrack Pro" };

const attendance = [
  { course: "Thermodynamics",    total: 25, present: 24, pct: 96, color: "success", code: "ME-401" },
  { course: "Fluid Mechanics",   total: 25, present: 22, pct: 88, color: "accent",  code: "ME-402" },
  { course: "Machine Design",    total: 25, present: 19, pct: 76, color: "warning", code: "ME-403" },
  { course: "Mathematics III",   total: 20, present: 20, pct: 100,color: "success", code: "MA-301" },
  { course: "AutoCAD Practical", total: 15, present: 10, pct: 67, color: "danger",  code: "ME-P01" },
];

const logs = [
  { date: "Nov 6, 2023", day: "Mon", course: "Thermodynamics",  status: "Present",  time: "09:00" },
  { date: "Nov 6, 2023", day: "Mon", course: "Fluid Mechanics",  status: "Present",  time: "11:00" },
  { date: "Nov 5, 2023", day: "Sun", course: "—",                status: "Holiday",  time: "—" },
  { date: "Nov 4, 2023", day: "Sat", course: "AutoCAD",          status: "Absent",   time: "14:00" },
  { date: "Nov 3, 2023", day: "Fri", course: "Machine Design",   status: "Present",  time: "11:00" },
  { date: "Nov 2, 2023", day: "Thu", course: "Mathematics III",  status: "Present",  time: "09:00" },
  { date: "Nov 1, 2023", day: "Wed", course: "Thermodynamics",   status: "Late",     time: "09:25" },
];

const statusChip: Record<string, string> = {
  Present: "chip-success", Absent: "chip-danger", Late: "chip-warning", Holiday: "chip-neutral",
};

export default function AttendancePage() {
  const overall = Math.round(attendance.reduce((a, s) => a + s.pct, 0) / attendance.length);
  return (
    <>
      <header className="page-header">
        <h1>Attendance Tracking</h1>
        <div className="header-actions">
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Semester 5 · 2023-24</span>
          <button className="btn btn-outline btn-sm">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>Export
          </button>
        </div>
      </header>
      <main className="page-body">
        {/* Stats */}
        <div className="stats-grid fade-up" style={{ marginBottom: 24 }}>
          <div className="stat-card">
            <div className="stat-label">Overall Attendance</div>
            <div className={`stat-value ${overall >= 75 ? "success" : "danger"}`}>{overall}%</div>
            <div className="stat-change up">↑ Above minimum threshold</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Classes Attended</div>
            <div className="stat-value">95 / 110</div>
            <div className="stat-change" style={{ color: "var(--text-muted)" }}>This semester</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Absences</div>
            <div className="stat-value warning">15</div>
            <div className="stat-change" style={{ color: "var(--text-muted)" }}>Total this semester</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">At Risk Courses</div>
            <div className="stat-value danger">1</div>
            <div className="stat-change down">AutoCAD below 75%</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20 }}>
          {/* Left: subject breakdown + log */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="card fade-up fade-up-d1">
              <div className="card-header"><h3>Course-wise Attendance</h3></div>
              <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {attendance.map(a => (
                  <div key={a.course}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <div>
                        <span style={{ fontSize: 14, fontWeight: 600 }}>{a.course}</span>
                        <span style={{ fontSize: 12, color: "var(--text-muted)", marginLeft: 8 }}>{a.code}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        {a.pct < 75 && <span className="chip chip-danger" style={{ fontSize: 10 }}>BELOW THRESHOLD</span>}
                        <span style={{ fontSize: 15, fontWeight: 800, color: `var(--${a.color})` }}>{a.pct}%</span>
                      </div>
                    </div>
                    <div className="progress-bar" style={{ height: 10 }}>
                      <div className={`progress-fill ${a.color}`} style={{ width: `${a.pct}%` }} />
                    </div>
                    <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 4 }}>{a.present} of {a.total} classes attended</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Log */}
            <div className="card fade-up fade-up-d2">
              <div className="card-header"><h3>Attendance Log</h3><span style={{ fontSize: 12, color: "var(--text-muted)" }}>Recent 7 records</span></div>
              <div style={{ overflowX: "auto" }}>
                <table className="data-table">
                  <thead><tr><th>Date</th><th>Day</th><th>Course</th><th>Time</th><th>Status</th></tr></thead>
                  <tbody>
                    {logs.map((l, i) => (
                      <tr key={i}>
                        <td style={{ fontSize: 13 }}>{l.date}</td>
                        <td style={{ color: "var(--text-muted)", fontSize: 12 }}>{l.day}</td>
                        <td style={{ fontWeight: 500 }}>{l.course}</td>
                        <td style={{ fontSize: 13, fontFamily: "monospace" }}>{l.time}</td>
                        <td><span className={`chip ${statusChip[l.status]}`}>{l.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: weekly heatmap */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="card fade-up fade-up-d1" style={{ padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Weekly Overview</div>
              {["Week 12 (Oct 30-Nov 5)", "Week 11 (Oct 23-29)", "Week 10 (Oct 16-22)"].map((week, wi) => (
                <div key={week} style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6, fontWeight: 600 }}>{week}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 4 }}>
                    {["M","T","W","T","F"].map((d, di) => {
                      const st = (wi === 0 && di === 3) ? "absent" : (wi === 2 && di === 1) ? "late" : "present";
                      return (
                        <div key={di} style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 10, color: "var(--text-muted)", marginBottom: 3 }}>{d}</div>
                          <div style={{ height: 28, borderRadius: 4, background: st === "absent" ? "var(--danger-bg)" : st === "late" ? "var(--warning-bg)" : "var(--success-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 14, color: st === "absent" ? "var(--danger)" : st === "late" ? "var(--warning)" : "var(--success)" }}>
                              {st === "absent" ? "close" : st === "late" ? "schedule" : "check"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: 14, marginTop: 8, justifyContent: "center" }}>
                {[{ c: "var(--success)", l: "Present" }, { c: "var(--warning)", l: "Late" }, { c: "var(--danger)", l: "Absent" }].map(x => (
                  <div key={x.l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: x.c }} />
                    <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{x.l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card fade-up fade-up-d2" style={{ padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: "var(--warning)" }}>warning</span>
                Attendance Alerts
              </div>
              <div style={{ padding: "12px 14px", background: "var(--danger-bg)", borderRadius: 8, border: "1px solid #fecaca", marginBottom: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--danger)" }}>AutoCAD Practical — 67%</div>
                <p style={{ fontSize: 12, color: "#991b1b", marginTop: 4, lineHeight: 1.55 }}>You need to attend the next 5 consecutive classes to reach the 75% threshold.</p>
              </div>
              <div style={{ padding: "12px 14px", background: "var(--warning-bg)", borderRadius: 8, border: "1px solid #fde68a" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--warning)" }}>Machine Design — 76%</div>
                <p style={{ fontSize: 12, color: "#92400e", marginTop: 4, lineHeight: 1.55 }}>Borderline. Do not miss any more sessions this semester.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
