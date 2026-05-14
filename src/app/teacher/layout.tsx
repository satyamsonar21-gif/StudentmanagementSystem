import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teacher Portal — EduTrack Pro",
};

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Sidebar variant="teacher" />
      <div className="main-content">{children}</div>
    </div>
  );
}
