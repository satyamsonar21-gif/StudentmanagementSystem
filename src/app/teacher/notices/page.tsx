import type { Metadata } from "next";

export const metadata: Metadata = { title: "Teacher - Notices" };

const notices = [
  { title: "Final Semester Exam Draft", body: "Please review the draft schedule and report any conflicts by 5 PM today.", date: "2h ago", urgent: true },
  { title: "Annual Sports Meet 2024", body: "Volunteer registration is now open for the upcoming sports events.", date: "1d ago", urgent: false },
  { title: "Library Maintenance", body: "The East Wing library will be closed for maintenance this Sunday.", date: "2d ago", urgent: false },
];

export default function TeacherNoticesPage() {
  return (
    <>
      <header className="page-header">
        <h1>Notice Center</h1>
      </header>
      <main className="page-body">
        <div className="card fade-up">
          <div style={{ padding: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {notices.map(n => (
                <div key={n.title} className="notice-item" style={{ borderBottom: "1px solid var(--border-subtle)", paddingBottom: 16 }}>
                  {n.urgent && <span className="chip chip-danger" style={{ fontSize: 10, alignSelf: "flex-start", marginBottom: 6 }}>Urgent</span>}
                  <div className="notice-title" style={{ fontSize: 16 }}>{n.title}</div>
                  <div className="notice-body" style={{ marginTop: 4, fontSize: 14 }}>{n.body}</div>
                  <div className="notice-meta" style={{ marginTop: 8 }}>{n.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
