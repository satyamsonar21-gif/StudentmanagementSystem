"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ROLES = [
  { id: "student", label: "Student", icon: "school", color: "#2563eb" },
  { id: "teacher", label: "Teacher / Faculty", icon: "person_book", color: "#16a34a" },
  { id: "parent",  label: "Parent / Guardian",  icon: "family_restroom", color: "#d97706" },
] as const;

type Role = typeof ROLES[number]["id"];

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (role === "student") router.push("/dashboard");
      else if (role === "teacher") router.push("/teacher");
      else router.push("/parent");
    }, 900);
  }

  return (
    <div className="login-shell">
      {/* Hero Panel */}
      <div className="login-hero">
        <div className="login-hero-content">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", padding: "6px 14px", borderRadius: 9999, border: "1px solid rgba(255,255,255,.15)", marginBottom: 28 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#93c5fd" }}>auto_awesome</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.8)", letterSpacing: ".05em", textTransform: "uppercase" }}>Academic Intelligence System</span>
          </div>
          <h1 className="login-hero h1" style={{ fontSize: 40, fontWeight: 800, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            Master Academic<br />Excellence with AI
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.6)", marginTop: 16, lineHeight: 1.7, maxWidth: 380 }}>
            Experience precision-driven management. Our institutional suite provides real-time analytics and predictive modelling for academic success.
          </p>
          <div className="login-hero-badge" style={{ marginTop: 32 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 15, color: "#93c5fd" }}>verified</span>
            Trusted by 500+ Institutions
          </div>

          {/* Feature list */}
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { icon: "insights", text: "Predictive Risk Analytics & AI Insights" },
              { icon: "psychology", text: "AI-powered Engineering Tutor (24/7)" },
              { icon: "family_restroom", text: "Multi-role: Students, Faculty & Parents" },
              { icon: "security", text: "Institutional-grade Security & Compliance" },
            ].map((f) => (
              <div key={f.text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#60a5fa", flexShrink: 0 }}>{f.icon}</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,.65)" }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Panel */}
      <div className="login-form-panel">
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>Welcome back</h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 4 }}>
            Enter your credentials to access the dashboard
          </p>
        </div>

        {/* Role selector */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 28 }}>
          {ROLES.map((r) => (
            <button
              key={r.id}
              onClick={() => setRole(r.id)}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                padding: "12px 8px", borderRadius: 8,
                border: `1.5px solid ${role === r.id ? r.color : "var(--border-subtle)"}`,
                background: role === r.id ? `${r.color}10` : "var(--surface)",
                cursor: "pointer", transition: "all .15s ease",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: role === r.id ? r.color : "var(--text-muted)" }}>{r.icon}</span>
              <span style={{ fontSize: 11.5, fontWeight: 600, color: role === r.id ? r.color : "var(--text-muted)", textAlign: "center", lineHeight: 1.3 }}>{r.label}</span>
            </button>
          ))}
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Institutional Email</label>
            <input
              id="email" type="email" className="form-input"
              placeholder="alex.johnson@university.edu"
              value={email} onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label className="form-label" htmlFor="password">Password</label>
              <Link href="#" style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600 }}>Forgot password?</Link>
            </div>
            <input
              id="password" type="password" className="form-input"
              placeholder="••••••••••••"
              value={password} onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            style={{ justifyContent: "center", padding: "11px 18px", marginTop: 4, fontSize: 14.5 }}
            disabled={loading}
          >
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, animation: "spin 0.8s linear infinite" }}>progress_activity</span>
                Signing in…
              </span>
            ) : (
              <>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>login</span>
                Sign In as {ROLES.find(r => r.id === role)?.label}
              </>
            )}
          </button>
        </form>

        <p style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 24, lineHeight: 1.7 }}>
          Authorized use only. By logging in, you agree to our{" "}
          <Link href="#" style={{ color: "var(--accent)" }}>Security Protocols</Link> and{" "}
          <Link href="#" style={{ color: "var(--accent)" }}>Data Usage Policy</Link>.
        </p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
