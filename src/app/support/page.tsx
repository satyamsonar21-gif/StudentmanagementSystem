import type { Metadata } from "next";

export const metadata: Metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Support</h1>
      <p>Contact support or view help resources here.</p>
    </div>
  );
}
