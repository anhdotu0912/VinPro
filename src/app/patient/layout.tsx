'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isAuthScreen = pathname.includes('/login') || pathname.includes('/onboarding');

  if (isAuthScreen) {
    return <>{children}</>;
  }

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)' }}>NutriAgent</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Bệnh nhân</p>
        </div>
        
        <nav className="sidebar-nav">
          <Link 
            href="/patient" 
            className={`sidebar-link ${pathname === '/patient' ? 'active' : ''}`}
          >
            Trang chủ
          </Link>
          <Link 
            href="/patient/log-meal" 
            className={`sidebar-link ${pathname.includes('/log-meal') ? 'active' : ''}`}
          >
            Nhật ký Bữa ăn
          </Link>
          <Link 
            href="/patient/menus" 
            className={`sidebar-link ${pathname.includes('/menus') ? 'active' : ''}`}
          >
            Thực đơn của tôi
          </Link>
          <Link 
            href="/patient/chat" 
            className={`sidebar-link ${pathname.includes('/chat') ? 'active' : ''}`}
          >
            Trợ lý AI
          </Link>
          <Link 
            href="/patient/alerts" 
            className={`sidebar-link ${pathname.includes('/alerts') ? 'active' : ''}`}
          >
            Cảnh báo sức khỏe
          </Link>
        </nav>
        
        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-dark)', fontWeight: 600 }}>
              NA
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>Nguyễn Văn A</p>
              <Link href="/patient/login" style={{ fontSize: '0.75rem', color: 'var(--danger)' }}>Đăng xuất</Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
}
