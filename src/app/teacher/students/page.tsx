import type { Metadata } from "next";

export const metadata: Metadata = { title: "Teacher - Students" };

const students = [
  { name: "Julianne Devis", branch: "CS-Sem 5", id: "#4402", gpa: 1.8, att: 61, risk: "High" },
  { name: "Marcus Aurelius", branch: "IT-Sem 4", id: "#4419", gpa: 2.1, att: 68, risk: "High" },
  { name: "Sarah Lee", branch: "CS-Sem 5", id: "#4490", gpa: 2.4, att: 72, risk: "Medium" },
  { name: "David Kim", branch: "EC-Sem 6", id: "#4321", gpa: 2.6, att: 74, risk: "Medium" },
];

const riskColor: Record<string, string> = { High: "danger", Medium: "warning", Low: "success" };

export default function TeacherStudentsPage() {
  return (
    <section className="max-w-5xl mx-auto p-6 space-y-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-2">Students</h1>
        <p className="text-gray-300">Manage student roster and view key metrics.</p>
      </header>
      <div className="card bg-white/10 backdrop-blur-lg rounded-lg p-4 overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="border-b border-white/20">
            <tr>
              <th className="px-4 py-2">Student</th>
              <th className="px-4 py-2">Branch</th>
              <th className="px-4 py-2">CGPA</th>
              <th className="px-4 py-2">Attendance</th>
              <th className="px-4 py-2">Risk</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
                      {s.name.split(' ')[0][0]}{s.name.split(' ')[1][0]}
                    </div>
                    <div>
                      <div className="font-medium">{s.name}</div>
                      <div className="text-xs text-muted">ID {s.id}</div>
                    </div>
                  </div>
                </td>
                <td><span className="chip chip-neutral">{s.branch}</span></td>
                <td className={s.gpa < 2.0 ? "text-danger" : "text-warning"}>{s.gpa.toFixed(1)}</td>
                <td>
                  <div className="flex items-center gap-1">
                    <div className="progress-bar" style={{ width: 60 }}>
                      <div className={`progress-fill ${s.att < 70 ? "danger" : "warning"}`} style={{ width: `${s.att}%` }} />
                    </div>
                    <span className="text-xs font-medium">{s.att}%</span>
                  </div>
                </td>
                <td><span className={`chip chip-${riskColor[s.risk]}`}>{s.risk}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
