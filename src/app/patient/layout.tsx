'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="dashboard-layout animate-fade-in">
      <aside className="sidebar">
        <div>
          <h2 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>NutriAgent</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Patient Portal</p>
        </div>
        
        <nav className="sidebar-nav">
          <Link 
            href="/patient" 
            className={`sidebar-link ${pathname === '/patient' ? 'active' : ''}`}
          >
            📊 Tổng quan
          </Link>
          <Link 
            href="/patient/chat" 
            className={`sidebar-link ${pathname.includes('/chat') ? 'active' : ''}`}
          >
            💬 Chat với AI
          </Link>
          <Link 
            href="/patient/menus" 
            className={`sidebar-link ${pathname.includes('/menus') ? 'active' : ''}`}
          >
            🍱 Nhật ký Thực đơn
          </Link>
          <Link 
            href="/patient/reports" 
            className={`sidebar-link ${pathname.includes('/reports') ? 'active' : ''}`}
          >
            📈 Báo cáo Tuân thủ
          </Link>
          <Link 
            href="/patient/alerts" 
            className={`sidebar-link ${pathname.includes('/alerts') ? 'active' : ''}`}
          >
            ⚠️ Cảnh báo
          </Link>
        </nav>
        
        <div style={{ marginTop: 'auto' }}>
          <Link href="/" className="btn btn-outline" style={{ width: '100%' }}>
            Đăng xuất
          </Link>
        </div>
      </aside>

      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
}
