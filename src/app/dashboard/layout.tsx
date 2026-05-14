import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Dashboard — EduTrack Pro",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Sidebar variant="student" />
      <div className="main-content">{children}</div>
    </div>
  );
}
