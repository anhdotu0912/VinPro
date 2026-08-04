'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide bottom nav on login or onboarding screens
  const isAuthScreen = pathname.includes('/login') || pathname.includes('/onboarding');

  return (
    <div className="mobile-app-container">
      {/* Main Content Area */}
      <main className="mobile-main">
        {children}
      </main>

      {/* Bottom Navigation */}
      {!isAuthScreen && (
        <nav className="bottom-nav">
          <Link href="/patient" className={`bottom-nav-item ${pathname === '/patient' ? 'active' : ''}`}>
            <div className="bottom-nav-icon">🏠</div>
            <span>Trang chủ</span>
          </Link>
          <Link href="/patient/menus" className={`bottom-nav-item ${pathname.includes('/menus') ? 'active' : ''}`}>
            <div className="bottom-nav-icon">🍽️</div>
            <span>Thực đơn</span>
          </Link>
          <Link href="/patient/log-meal" className={`bottom-nav-item ${pathname.includes('/log-meal') ? 'active' : ''}`}>
            <div className="bottom-nav-icon" style={{ 
              background: 'var(--primary)', 
              color: 'white', 
              borderRadius: '50%', 
              width: '40px', 
              height: '40px',
              marginTop: '-15px',
              boxShadow: 'var(--shadow-md)'
            }}>📷</div>
            <span style={{ marginTop: '5px' }}>Log</span>
          </Link>
          <Link href="/patient/chat" className={`bottom-nav-item ${pathname.includes('/chat') ? 'active' : ''}`}>
            <div className="bottom-nav-icon">🤖</div>
            <span>Trợ lý AI</span>
          </Link>
          <Link href="/patient/alerts" className={`bottom-nav-item ${pathname.includes('/alerts') ? 'active' : ''}`}>
            <div className="bottom-nav-icon">⚠️</div>
            <span>Cảnh báo</span>
          </Link>
        </nav>
      )}
    </div>
  );
}
