import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent Portal — EduTrack Pro",
};

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Sidebar variant="parent" />
      <div className="main-content">{children}</div>
    </div>
  );
}
