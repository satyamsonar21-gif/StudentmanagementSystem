"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export type SidebarVariant = "student" | "teacher" | "parent";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const studentNav: NavItem[] = [
  { label: "Dashboard",       href: "/dashboard",           icon: "dashboard" },
  { label: "Academics",       href: "/dashboard/academics", icon: "school" },
  { label: "Learn-Hub",       href: "/dashboard/courses",   icon: "auto_stories" },
  { label: "AI Tutor",        href: "/dashboard/ai-tutor",  icon: "psychology" },
  { label: "News & Trends",   href: "/dashboard/news",      icon: "newspaper" },
  { label: "Attendance",      href: "/dashboard/attendance",icon: "event_available" },
];

const teacherNav: NavItem[] = [
  { label: "Dashboard",       href: "/teacher",             icon: "dashboard" },
  { label: "Students",        href: "/teacher/students",    icon: "group" },
  { label: "Analytics",       href: "/teacher/analytics",   icon: "insights" },
  { label: "Notices",         href: "/teacher/notices",     icon: "campaign" },
  { label: "Settings",        href: "/teacher/settings",    icon: "settings" },
];

const parentNav: NavItem[] = [
  { label: "Dashboard",       href: "/parent",              icon: "dashboard" },
  { label: "Student Directory",href: "/parent/directory",   icon: "group" },
  { label: "Academic Records",href: "/parent/records",      icon: "school" },
  { label: "Risk Analytics",  href: "/parent/analytics",   icon: "insights" },
  { label: "Attendance",      href: "/parent/attendance",   icon: "event_available" },
  { label: "Settings",        href: "/parent/settings",     icon: "settings" },
];

const navMap = { student: studentNav, teacher: teacherNav, parent: parentNav };

const userMap = {
  student: { name: "Alex Johnson",   role: "Undergraduate Engineer", initial: "AJ" },
  teacher: { name: "Prof. Sarah Miller", role: "Senior Faculty",     initial: "SM" },
  parent:  { name: "Sarah (Parent)", role: "Parent Portal",          initial: "SP" },
};

export default function Sidebar({ variant = "student" }: { variant?: SidebarVariant }) {
  const pathname = usePathname();
  const router = useRouter();
  const nav = navMap[variant];
  const user = userMap[variant];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="brand">EduTrack Pro</div>
        <div className="brand-sub">Academic Management</div>
      </div>

      <nav className="sidebar-nav">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href || pathname.startsWith(item.href + "/") && item.href !== "/dashboard" ? "active" : ""}
          >
            <span className="material-symbols-outlined nav-icon" style={{ fontSize: 20 }}>
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}

        <div className="sidebar-divider" />

        <button
          onClick={() => router.push("/login")}
          style={{ color: "rgba(255,255,255,.55)", display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 8, fontSize: 13.5, fontWeight: 500, width: "100%", cursor: "pointer", background: "none", border: "none" }}
        >
          <span className="material-symbols-outlined nav-icon" style={{ fontSize: 20, opacity: .8 }}>logout</span>
          Sign Out
        </button>
      </nav>

      <div className="sidebar-user">
        <div className="sidebar-avatar">{user.initial}</div>
        <div className="sidebar-user-info">
          <div className="user-name">{user.name}</div>
          <div className="user-role">{user.role}</div>
        </div>
      </div>
    </aside>
  );
}
