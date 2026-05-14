import type { Metadata } from "next";
export const metadata: Metadata = { title: "Learn-Hub — EduTrack Pro" };

const recommended = [
  { title: "Advanced Kinematics & Motion Control", desc: "Multi-axis robotic systems and trajectory planning using MATLAB.", tag: "Robotics", dur: "8 weeks", level: "Advanced" },
  { title: "Neural Networks for Controls", desc: "Applying AI to classical control theory for autonomous vehicles.", tag: "AI / ML", dur: "6 weeks", level: "Advanced" },
  { title: "FEA with ANSYS", desc: "Finite element modelling and stress simulation for real components.", tag: "Structural", dur: "5 weeks", level: "Intermediate" },
  { title: "Sustainable Energy Systems", desc: "Solar, wind and hydrogen fuel cells engineering principles.", tag: "Energy", dur: "7 weeks", level: "Intermediate" },
];

const categories = [
  { name: "Mechatronics System Design", courses: 14, icon: "precision_manufacturing", color: "#2563eb" },
  { name: "Heat & Mass Transfer",       courses: 9,  icon: "device_thermostat",       color: "#ea580c" },
  { name: "Algorithms in Engineering",  courses: 11, icon: "code",                    color: "#7c3aed" },
  { name: "Industrial Automation 4.0",  courses: 8,  icon: "robot_2",                 color: "#0891b2" },
  { name: "Material Science",           courses: 12, icon: "science",                 color: "#16a34a" },
  { name: "Fluid Dynamics",             courses: 10, icon: "waves",                   color: "#db2777" },
];

export default function CoursesPage() {
  return (
    <>
      <header className="page-header">
        <h1>Learn-Hub</h1>
        <div className="header-actions">
          <button className="btn btn-outline btn-sm">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>tune</span>Filter
          </button>
          <button className="btn btn-accent btn-sm">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>Browse All
          </button>
        </div>
      </header>
      <main className="page-body">
        {/* Hero banner */}
        <div className="fade-up" style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e3a6e 100%)", borderRadius: 12, padding: "28px 32px", marginBottom: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -40, top: -40, width: 220, height: 220, borderRadius: "50%", background: "rgba(37,99,235,.15)" }} />
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#60a5fa", marginBottom: 8 }}>Engineering Curriculum</p>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Master Engineering Excellence</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.6)", marginTop: 8, maxWidth: 420, lineHeight: 1.7 }}>Specialised curriculum for the next generation of engineers. From Robotics to Structural Analysis.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {[{ v: "68%", l: "Degree progress" }, { v: "4", l: "Modules this week" }, { v: "Top 18%", l: "Peer rank" }].map(s => (
              <div key={s.l} style={{ background: "rgba(255,255,255,.08)", borderRadius: 8, padding: "10px 16px", textAlign: "center", border: "1px solid rgba(255,255,255,.12)" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{s.v}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.5)", marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommended */}
        <div className="fade-up fade-up-d1" style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div>
              <div className="section-title" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#7c3aed" }}>auto_awesome</span>
                AI Recommended for You
              </div>
              <div className="section-sub">Curated based on your academic profile and goals</div>
            </div>
            <button className="btn btn-outline btn-sm">See all recommendations</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 14 }}>
            {recommended.map(c => (
              <div key={c.title} className="course-card">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--accent)" }}>{c.tag}</span>
                  <span className="chip chip-neutral" style={{ fontSize: 10 }}>{c.level}</span>
                </div>
                <div className="course-title">{c.title}</div>
                <div className="course-meta">{c.desc}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
                  <span style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>schedule</span>{c.dur}
                  </span>
                  <button className="btn btn-accent btn-sm" style={{ padding: "5px 12px", fontSize: 12 }}>Enrol</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Degree & streak */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }} className="fade-up fade-up-d2">
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: "var(--accent)" }}>school</span>
              Degree Completion Progress
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Mechanical Engineering Major</span>
              <span style={{ fontWeight: 800, fontSize: 20, color: "var(--accent)" }}>68%</span>
            </div>
            <div className="progress-bar" style={{ height: 10 }}>
              <div className="progress-fill accent" style={{ width: "68%" }} />
            </div>
            <p style={{ fontSize: 12.5, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.6 }}>Keep focus on Thermodynamics this semester to stay on track.</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#f59e0b" }}>local_fire_department</span>
              Learning Streak
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, marginBottom: 10 }}>
              {["M","T","W","T","F","S","S"].map((d, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 10, color: "var(--text-muted)", marginBottom: 4 }}>{d}</div>
                  <div style={{ aspectRatio: "1", borderRadius: 4, background: i < 4 ? "var(--accent)" : "var(--surface-high)" }} />
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.6 }}>4 modules completed this week — beating <strong style={{ color: "var(--accent)" }}>82%</strong> of peers.</p>
          </div>
        </div>

        {/* Categories */}
        <div className="fade-up fade-up-d3">
          <div style={{ marginBottom: 14 }}>
            <div className="section-title">Course Categories</div>
            <div className="section-sub">Browse all engineering disciplines</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 12 }}>
            {categories.map(cat => (
              <button key={cat.name} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, padding: "16px", background: "var(--surface)", border: "1px solid var(--border-subtle)", borderRadius: 10, cursor: "pointer", textAlign: "left", transition: "all .15s" }}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: `${cat.color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: cat.color }}>{cat.icon}</span>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.35 }}>{cat.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 3 }}>{cat.courses} courses</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
