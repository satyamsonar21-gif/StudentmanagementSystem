import type { Metadata } from "next";

export const metadata: Metadata = { title: "Teacher - Settings" };

export default function TeacherSettingsPage() {
  return (
    <>
      <header className="page-header">
        <h1>Settings</h1>
      </header>
      <main className="page-body">
        <div className="card fade-up" style={{ maxWidth: 600 }}>
          <div className="card-body">
            <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Display Name</label>
                <input id="name" type="text" defaultValue="Prof. Sarah Miller" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input id="email" type="email" defaultValue="sarah.miller@example.edu" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="notifications">Email Notifications</label>
                <select id="notifications" className="form-input">
                  <option>Enabled</option>
                  <option>Disabled</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="theme">Theme Preference</label>
                <select id="theme" className="form-input">
                  <option>System</option>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
              <div style={{ marginTop: 8 }}>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
