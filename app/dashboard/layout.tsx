import React from 'react';
import Link from 'next/link';
import DashboardTopBar from "@/app/components/DashboardTopBar/DashboardTopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 260, padding: 20, borderRight: '1px solid #eee' }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link href="/dashboard/admin">Team Management</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: 24 }}>
        <DashboardTopBar />
        {children}
      </main>
    </div>
  );
}
