import type { Metadata } from "next";
export const metadata: Metadata = { title: "News & Trends — EduTrack Pro" };

const featured = [
  {
    title: "Google's Quantum Processor Achieves Major Stability Milestone",
    body: "Engineering teams at Google Quantum AI have successfully reduced error rates in qubits by a factor of 10, bringing commercial quantum computing closer to reality.",
    tag: "Quantum", time: "2h ago", read: "5 min read",
  },
  {
    title: "Artemis III: Next-Gen Engine Tests Completed",
    body: "Static fire tests for the Lunar Lander variant engines show 15% increased efficiency in vacuum conditions.",
    tag: "Aerospace", time: "4h ago", read: "3 min read",
  },
  {
    title: "Optimus Gen 2: Robotics Assembly Integration",
    body: "New humanoid robots are now assisting in Gigafactory production lines for sub-assembly components.",
    tag: "Robotics", time: "6h ago", read: "4 min read",
  },
];

const campus = [
  { title: "MIT Unveils New Nano-Fabrication Lab", body: "40,000 sq ft facility focusing on next-gen semiconductor research.", tag: "Campus", time: "1d ago" },
  { title: "Stanford Global Engineering Summit 2024", body: "Registration opens for the annual cross-discipline engineering conference.", tag: "Events", time: "2d ago" },
  { title: "IEEE Student Chapter Hackathon Results", body: "Our college team placed 2nd in the national IEEE robotics challenge.", tag: "Achievement", time: "3d ago" },
];

const jobStats = [
  { field: "Software Engineering", salary: "$115k", growth: "+18%", color: "#2563eb" },
  { field: "Aerospace Engineering", salary: "$92k",  growth: "+12%", color: "#7c3aed" },
  { field: "Biomedical Engineering",salary: "$88k",  growth: "+22%", color: "#16a34a" },
  { field: "Mechanical Engineering", salary: "$84k", growth: "+9%",  color: "#ea580c" },
];

const tagColor: Record<string, string> = {
  Quantum: "#7c3aed", Aerospace: "#0891b2", Robotics: "#16a34a",
  Campus: "#2563eb", Events: "#ea580c", Achievement: "#f59e0b",
};

export default function NewsPage() {
  return (
    <>
      <header className="page-header">
        <h1>Engineering News & Trends</h1>
        <div className="header-actions">
          <button className="btn btn-outline btn-sm">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>tune</span>Filter
          </button>
          <button className="btn btn-ghost btn-sm">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>rss_feed</span>Subscribe
          </button>
        </div>
      </header>
      <main className="page-body">
        {/* Industry Trends header */}
        <div className="fade-up" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div>
            <div className="section-title">Industry Engineering Trends</div>
            <div className="section-sub">Curated from top engineering publications and research journals</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--success-bg)", padding: "6px 14px", borderRadius: 9999, border: "1px solid #bbf7d0" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: "var(--success)" }}>trending_up</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--success)" }}>82% Growth in AI-integrated roles by 2026</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Featured articles */}
            <div className="fade-up fade-up-d1" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {featured.map((a, i) => (
                <div key={a.title} className="card" style={{ padding: "20px 22px", cursor: "pointer", transition: "box-shadow .15s" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: tagColor[a.tag] || "var(--accent)", background: `${tagColor[a.tag] || "#2563eb"}15`, padding: "3px 9px", borderRadius: 9999 }}>{a.tag}</span>
                    {i === 0 && <span className="chip chip-accent" style={{ fontSize: 10 }}>Featured</span>}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}>{a.title}</h3>
                  <p style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.65 }}>{a.body}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 12 }}>
                    <span style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 13 }}>schedule</span>{a.time}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{a.read}</span>
                    <button className="btn btn-ghost btn-sm" style={{ marginLeft: "auto", padding: "4px 10px", fontSize: 12 }}>
                      Read more <span className="material-symbols-outlined" style={{ fontSize: 13 }}>arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Campus news */}
            <div className="card fade-up fade-up-d2">
              <div className="card-header"><h3>College Campus News</h3></div>
              <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {campus.map(n => (
                  <div key={n.title} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: "1px solid var(--border-subtle)" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: `${tagColor[n.tag] || "#2563eb"}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18, color: tagColor[n.tag] || "var(--accent)" }}>school</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.35 }}>{n.title}</div>
                      <div style={{ fontSize: 12.5, color: "var(--text-secondary)", marginTop: 3, lineHeight: 1.5 }}>{n.body}</div>
                      <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                        <span className="chip chip-neutral" style={{ fontSize: 10 }}>{n.tag}</span>
                        <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{n.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Job market */}
            <div className="card fade-up fade-up-d1">
              <div className="card-header"><h3>New Grad Job Market</h3></div>
              <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {jobStats.map(j => (
                  <div key={j.field} style={{ padding: "10px 12px", background: "var(--surface-low)", borderRadius: 8, border: "1px solid var(--border-subtle)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 600 }}>{j.field}</span>
                      <span className="chip chip-success" style={{ fontSize: 10 }}>{j.growth}</span>
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: j.color }}>{j.salary} <span style={{ fontSize: 11, fontWeight: 400, color: "var(--text-muted)" }}>Avg. Base</span></div>
                  </div>
                ))}
                <div style={{ padding: "12px", background: "var(--success-bg)", borderRadius: 8, border: "1px solid #bbf7d0" }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--success)" }}>Sector Stability</div>
                  <p style={{ fontSize: 12, color: "#15803d", marginTop: 4, lineHeight: 1.55 }}>Engineering job market showing high resilience against economic volatility.</p>
                </div>
              </div>
            </div>

            {/* Editor's choice */}
            <div className="card fade-up fade-up-d2" style={{ padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#f59e0b" }}>star</span>
                <span style={{ fontSize: 14, fontWeight: 700 }}>Editor&apos;s Choice: Essential Skills</span>
              </div>
              <p style={{ fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 12 }}>Most in-demand specialised skills for 2024 graduates according to HR leaders.</p>
              {["Machine Learning & AI Integration", "Computational Fluid Dynamics (CFD)", "Embedded Systems & RTOS", "Digital Twin Technology", "Agile Project Management"].map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: i < 4 ? "1px solid var(--border-subtle)" : "none" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", width: 20, textAlign: "right" }}>{i + 1}</span>
                  <span style={{ fontSize: 13 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
