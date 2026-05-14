import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduTrack Pro — Academic Intelligence System",
  description:
    "Enterprise College Management System — real-time analytics, AI tutoring, and predictive modelling for academic success. Trusted by 500+ institutions.",
  keywords: "student management, academic dashboard, AI tutor, college ERP, EduTrack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
