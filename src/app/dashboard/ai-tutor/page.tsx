"use client";
import { useState } from "react";

const recentQueries = [
  { q: "Shear stress in asymmetrical loading", tag: "MECH", time: "2H AGO" },
  { q: "Dijkstra's with priority queue",       tag: "CS",   time: "5H AGO" },
  { q: "Navier-Stokes for incompressible flow",tag: "MECH", time: "1D AGO" },
];

const formulas = [
  { name: "Bernoulli's Principle", formula: "P + ½ρv² + ρgh = C" },
  { name: "Moment of Inertia",     formula: "I = (π/64) × d⁴" },
  { name: "Euler's Column Load",   formula: "Pcr = π²EI / (KL)²" },
];

const initialMessages = [
  { role: "ai",   content: "Hello! I'm your AI Engineering Tutor. I can help with Mechanics, Thermodynamics, Circuits, Algorithms and more. What would you like to explore today?" },
  { role: "user", content: "Solve the truss reaction forces for a simply-supported beam with a 5 kN midpoint load." },
  { role: "ai",   content: "Great question! For a simply-supported beam with a 5 kN central point load:\n\nReaction R_A = 2.5 kN (Vertical)\nReaction R_B = 2.5 kN (Vertical)\n\nCalculation verified using Method of Joints. Accuracy: 100%.\n\nWould you like me to draw the shear-force and bending-moment diagrams?" },
];

export default function AiTutorPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  function send() {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setMessages(m => [...m, { role: "ai", content: "That's a great engineering question! Let me analyse it step by step.\n\nBased on first principles and the parameters you've provided, the solution involves applying the relevant governing equations. I'll walk you through the derivation and key assumptions.\n\nWould you like a worked example or the theoretical framework first?" }]);
      setLoading(false);
    }, 1200);
  }

  return (
    <>
      <header className="page-header">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#7c3aed,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#fff" }}>psychology</span>
          </div>
          <h1>Engineering AI Tutor</h1>
          <span className="chip chip-success" style={{ fontSize: 10 }}>Online</span>
        </div>
        <div className="header-actions">
          <span style={{ fontSize: 12.5, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 15 }}>chat_bubble</span>
            13 / 20 questions used today
          </span>
          <button className="btn btn-outline btn-sm">
            <span className="material-symbols-outlined" style={{ fontSize: 15 }}>add</span>New Session
          </button>
        </div>
      </header>

      <main style={{ display: "flex", height: "calc(100vh - 60px)", overflow: "hidden" }}>
        {/* Chat area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: m.role === "user" ? "flex-end" : "flex-start" }}>
                {m.role === "ai" && (
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    <div style={{ width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg,#7c3aed,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 13, color: "#fff" }}>psychology</span>
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)" }}>AI Tutor</span>
                  </div>
                )}
                <div className={`chat-bubble ${m.role}`} style={{ whiteSpace: "pre-line" }}>{m.content}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg,#7c3aed,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 13, color: "#fff" }}>psychology</span>
                </div>
                <div style={{ display: "flex", gap: 5, padding: "10px 14px", background: "var(--surface-low)", borderRadius: 10 }}>
                  {[0,1,2].map(i => (
                    <div key={i} className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--text-muted)", animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{ padding: "16px 32px", borderTop: "1px solid var(--border-subtle)", background: "var(--surface)" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                placeholder="Ask about any engineering topic… (Enter to send, Shift+Enter for new line)"
                rows={2}
                style={{ flex: 1, resize: "none", padding: "10px 14px", borderRadius: 8, border: "1.5px solid var(--border-subtle)", fontSize: 14, fontFamily: "var(--font)", lineHeight: 1.5, outline: "none" }}
              />
              <button onClick={send} className="btn btn-accent" style={{ padding: "10px 14px", alignSelf: "flex-end" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ width: 280, borderLeft: "1px solid var(--border-subtle)", background: "var(--surface)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Quick Formulas */}
          <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid var(--border-subtle)" }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: "var(--accent)" }}>functions</span>
              Quick Formulas
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {formulas.map(f => (
                <div key={f.name} style={{ padding: "10px 12px", background: "var(--surface-low)", borderRadius: 8, border: "1px solid var(--border-subtle)" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 5 }}>{f.name}</div>
                  <code style={{ fontSize: 12.5, fontFamily: "'Courier New',monospace", color: "var(--primary)", background: "var(--surface-high)", padding: "3px 8px", borderRadius: 4, display: "block" }}>{f.formula}</code>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Queries */}
          <div style={{ padding: "16px 20px", flex: 1, overflowY: "auto" }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: "var(--accent)" }}>history</span>
              Recent Queries
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {recentQueries.map(q => (
                <button key={q.q} onClick={() => setInput(q.q)} style={{ textAlign: "left", padding: "10px 12px", background: "var(--surface-low)", borderRadius: 8, border: "1px solid var(--border-subtle)", cursor: "pointer" }}>
                  <div style={{ fontSize: 12.5, fontWeight: 500, lineHeight: 1.4 }}>{q.q}</div>
                  <div style={{ display: "flex", gap: 6, marginTop: 5 }}>
                    <span className="chip chip-accent" style={{ fontSize: 10 }}>{q.tag}</span>
                    <span style={{ fontSize: 10.5, color: "var(--text-muted)" }}>{q.time}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Usage meter */}
          <div style={{ padding: "14px 20px", borderTop: "1px solid var(--border-subtle)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600 }}>Daily Usage</span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>13/20</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill warning" style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
