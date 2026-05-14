import type { Metadata } from "next";

export const metadata: Metadata = { title: "Teacher - Analytics" };

const stats = [
  { label: "Total Students", value: "1,248", icon: "group", cc: "accent" },
  { label: "Active Notices", value: "24", icon: "campaign", cc: "" },
  { label: "High Risk Alerts", value: "15", icon: "warning", cc: "danger" },
  { label: "AI Reports Generated", value: "89", icon: "insights", cc: "success" },
];

export default function TeacherAnalyticsPage() {
  return (
    <>
      <header className="page-header">
        <h1>Analytics Overview</h1>
      </header>
      <main className="page-body">
        <div className="stats-grid fade-up">
          {stats.map(s => (
            <div className="stat-card" key={s.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="stat-label">{s.label}</div>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: "var(--text-muted)" }}>{s.icon}</span>
              </div>
              <div className={`stat-value ${s.cc}`}>{s.value}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
