'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ExpertLayout({
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
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Expert Portal</p>
        </div>
        
        <nav className="sidebar-nav">
          <Link 
            href="/expert" 
            className={`sidebar-link ${pathname === '/expert' ? 'active' : ''}`}
          >
            📊 Tổng quan (Dashboard)
          </Link>
          <Link 
            href="/expert/patients" 
            className={`sidebar-link ${pathname.includes('/patients') ? 'active' : ''}`}
          >
            👥 Quản lý Bệnh nhân
          </Link>
          <Link 
            href="/expert/menus" 
            className={`sidebar-link ${pathname.includes('/menus') ? 'active' : ''}`}
          >
            🥗 Danh sách Thực đơn
          </Link>
          <Link 
            href="/expert/warnings" 
            className={`sidebar-link ${pathname.includes('/warnings') ? 'active' : ''}`}
          >
            ⚠️ Hệ thống Cảnh báo
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
