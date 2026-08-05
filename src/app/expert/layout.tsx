'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ExpertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Helper to check active paths
  const isActive = (path: string) => {
    if (path === '/expert' && pathname === '/expert') return true;
    if (path !== '/expert' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', color: 'var(--text-main)' }}>
      {/* Sidebar */}
      <aside style={{ width: '260px', backgroundColor: 'white', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, bottom: 0, left: 0, zIndex: 10 }}>
        <div style={{ padding: '2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-dark)', fontWeight: 700, fontSize: '1.25rem' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="var(--primary)" />
            <path d="M2 17L12 22L22 17" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          NutriMed AI
        </div>
        
        <nav style={{ flex: 1, padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <Link 
            href="/expert" 
            style={{ 
              display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem', 
              backgroundColor: isActive('/expert') ? '#f0f9ff' : 'transparent',
              borderLeft: isActive('/expert') ? '4px solid var(--primary)' : '4px solid transparent',
              color: isActive('/expert') ? 'var(--primary-dark)' : 'var(--text-main)',
              fontWeight: isActive('/expert') ? 600 : 500,
              textDecoration: 'none'
            }}
          >
            <span></span> Tổng quan
          </Link>
          <Link 
            href="/expert/patients" 
            style={{ 
              display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem', 
              backgroundColor: isActive('/expert/patients') ? '#f0f9ff' : 'transparent',
              borderLeft: isActive('/expert/patients') ? '4px solid var(--primary)' : '4px solid transparent',
              color: isActive('/expert/patients') ? 'var(--primary-dark)' : 'var(--text-main)',
              fontWeight: isActive('/expert/patients') ? 600 : 500,
              textDecoration: 'none'
            }}
          >
            <span></span> Danh sách bệnh nhân
          </Link>
          <Link 
            href="/expert/menus" 
            style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', 
              backgroundColor: isActive('/expert/menus') ? '#f0f9ff' : 'transparent',
              borderLeft: isActive('/expert/menus') ? '4px solid var(--primary)' : '4px solid transparent',
              color: isActive('/expert/menus') ? 'var(--primary-dark)' : 'var(--text-main)',
              fontWeight: isActive('/expert/menus') ? 600 : 500,
              textDecoration: 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span></span> Thực đơn cần duyệt
            </div>
            <span style={{ backgroundColor: 'var(--primary-dark)', color: 'white', fontSize: '0.85rem', padding: '0.1rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>15</span>
          </Link>
          <Link 
            href="/expert/warnings" 
            style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', 
              backgroundColor: isActive('/expert/warnings') ? '#f0f9ff' : 'transparent',
              borderLeft: isActive('/expert/warnings') ? '4px solid var(--primary)' : '4px solid transparent',
              color: isActive('/expert/warnings') ? 'var(--primary-dark)' : 'var(--text-main)',
              fontWeight: isActive('/expert/warnings') ? 600 : 500,
              textDecoration: 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>️</span> Cảnh báo
            </div>
            <span style={{ backgroundColor: '#dc2626', color: 'white', fontSize: '0.85rem', padding: '0.1rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>03</span>
          </Link>
          
          <div style={{ marginTop: '1rem', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, cursor: 'pointer' }}>
            <span>️</span> Cài đặt
          </div>
        </nav>
        
        <div style={{ padding: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'url(https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150) center/cover' }}></div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-main)' }}>BS. Phạm Minh Tuấn</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Trưởng khoa Dinh dưỡng</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ marginLeft: '260px', flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Top Header */}
        <header style={{ height: '70px', backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', position: 'sticky', top: 0, zIndex: 9 }}>
          
          {/* Search Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f1f5f9', padding: '0.5rem 1rem', borderRadius: '9999px', width: '300px' }}>
            <span style={{ color: 'var(--text-muted)' }}></span>
            <input 
              type="text" 
              placeholder="Tìm kiếm hồ sơ bệnh nhân..." 
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '1rem' }}
            />
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button style={{ background: 'none', border: 'none', fontSize: '1.25rem', color: 'var(--text-muted)', cursor: 'pointer', position: 'relative' }}>
              
              <span style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#dc2626' }}></span>
            </button>
            <button style={{ background: 'none', border: 'none', fontSize: '1.25rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
              
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'url(https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150) center/cover' }}></div>
              <span style={{ fontWeight: 600, fontSize: '1rem' }}>BS. Tuấn</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>▼</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div style={{ padding: '2rem', flex: 1 }}>
          {children}
        </div>

      </main>
    </div>
  );
}
