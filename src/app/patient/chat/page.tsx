import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trợ lý AI - NutriAgent',
};

export default function ChatPage() {
  return (
    <div style={{ height: '100vh', display: 'flex', background: 'var(--bg-color)', margin: 0, padding: 0 }}>
      {/* Sidebar specific to Chat */}
      <aside style={{ width: '260px', background: 'var(--surface-color)', borderRight: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
          <h1 style={{ fontSize: '1.25rem', color: '#0369a1', margin: 0 }}>Clinical Assistant</h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>AI Nutrition System</p>
        </div>
        
        <nav style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/patient/chat" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: 'var(--radius-md)', fontWeight: 500 }}>
            <span></span> Chat
          </Link>
          <Link href="/patient/menus" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: 'var(--text-main)', borderRadius: 'var(--radius-md)' }}>
            <span>️</span> Menu
          </Link>
          <Link href="/patient/onboarding" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: 'var(--text-main)', borderRadius: 'var(--radius-md)' }}>
            <span>️</span> Health Profile
          </Link>
          
          <button className="btn btn-danger" style={{ marginTop: '1rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <span></span> Gọi Bác sĩ
          </button>
        </nav>
        
        <div style={{ marginTop: 'auto', padding: '1rem', borderTop: '1px solid var(--glass-border)', background: '#f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '0.95rem' }}>
              TV
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>Bệnh nhân Tuấn</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>ID: 44921</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'white' }}>
        {/* Chat Header */}
        <header style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', background: 'var(--primary-light)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              
            </div>
            <h2 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--primary-dark)' }}>Trợ lý Dinh dưỡng AI</h2>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', background: '#f1f5f9', borderRadius: '9999px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)' }}></span>
              Được giám sát bởi BS. Tuấn
            </div>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.25rem' }}>️</button>
          </div>
        </header>

        {/* Chat Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ textAlign: 'center', margin: '1rem 0 2rem' }}>
            <span style={{ background: '#f1f5f9', padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.05em' }}>
              HÔM NAY, 15 THÁNG 10
            </span>
          </div>

          {/* User Message */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
            <div style={{ background: '#dbeafe', color: '#1e40af', padding: '1rem 1.25rem', borderRadius: '1rem 1rem 0 1rem', maxWidth: '70%', fontSize: '0.95rem' }}>
              Tôi muốn ăn cháo trắng với trứng sáng nay được không?
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>08:15 AM</div>
          </div>

          {/* AI Message */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', maxWidth: '85%' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
              
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ border: '1px solid var(--glass-border)', borderRadius: '0 1rem 1rem 1rem', overflow: 'hidden' }}>
                <div style={{ padding: '1rem 1.25rem', background: 'white', fontSize: '0.95rem', lineHeight: 1.5, color: 'var(--text-main)' }}>
                  <strong>BS. Tuấn:</strong> Được cô nhé! Cháo trắng có chỉ số đường huyết cao (78), nhưng 1 bát nhỏ (~200ml) và 1 quả trứng luộc chỉ có khoảng 35g carb, vẫn an toàn cho mức đường huyết của cô hiện tại.
                </div>
                
                <div style={{ padding: '1rem 1.25rem', background: 'var(--surface-color)', borderTop: '1px solid #e0f2fe' }}>
                  <h4 style={{ color: 'var(--primary-dark)', fontSize: '0.95rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span></span> MẸO CHO CÔ
                  </h4>
                  <p style={{ color: 'var(--primary-dark)', fontStyle: 'italic', fontSize: '1rem', margin: 0 }}>
                    "Cô nên ăn kèm một đĩa rau luộc để đường huyết không bị tăng nhanh nhé."
                  </p>
                  <div style={{ textAlign: 'right', fontSize: '0.7rem', color: 'var(--primary)', marginTop: '0.5rem', opacity: 0.7 }}>
                    Nguồn: CSDL Thực phẩm VN
                  </div>
                </div>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>08:16 AM</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>
            <span style={{ display: 'flex', gap: '0.25rem' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-muted)' }}></span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.7 }}></span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.4 }}></span>
            </span>
            Hệ thống đang sẵn sàng...
          </div>
        </div>

        {/* Chat Input Area */}
        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--glass-border)', background: 'white' }}>
          
          {/* Action Pills */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <button className="pill">Thuốc này uống kèm sữa được không?</button>
            <button className="pill">Gợi ý món ăn vặt an toàn</button>
            <button className="pill">Thêm thực phẩm vào nhật ký</button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: 'var(--bg-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '0.5rem 1rem' }}>
              <input 
                type="text" 
                placeholder="Hỏi bác sĩ về dinh dưỡng của bạn..." 
                style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', padding: '0.5rem', fontSize: '0.95rem' }}
              />
              <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem', fontSize: '1.25rem' }}></button>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem', fontSize: '1.25rem' }}></button>
            </div>
            
            <button style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-lg)', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
