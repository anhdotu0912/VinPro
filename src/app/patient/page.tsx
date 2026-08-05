'use client';
import Link from 'next/link';

export default function PatientDashboard() {
  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h2>Xin chào, <span className="text-gradient">Nguyễn Văn A</span></h2>
        <p style={{ color: 'var(--text-muted)' }}>Mục tiêu dinh dưỡng: Đái tháo đường Type 2</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Kcal Summary */}
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Lượng Calo hôm nay</h3>
          <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto', borderRadius: '50%', background: 'conic-gradient(var(--primary) 65%, var(--primary-light) 65%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '140px', height: '140px', background: 'var(--surface-color)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-dark)' }}>1200</span>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>/ 1800 kcal</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Đường</p>
              <p style={{ fontWeight: 600, color: 'var(--warning)', fontSize: '1.1rem' }}>40/50g</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Muối</p>
              <p style={{ fontWeight: 600, color: 'var(--success)', fontSize: '1.1rem' }}>3/5g</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Đạm</p>
              <p style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '1.1rem' }}>45/60g</p>
            </div>
          </div>
        </div>

        {/* Menu Snippet */}
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem' }}>Thực đơn hôm nay</h3>
            <Link href="/patient/menus" style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 500 }}>Xem chi tiết</Link>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-color)', borderLeft: '4px solid var(--success)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1rem' }}>Bữa Sáng</h4>
                <span className="badge badge-success" style={{ fontSize: '0.85rem' }}>Hoàn thành</span>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Phở xào gạo lứt (150g), Thịt bò mềm (50g)</p>
            </div>

            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-color)', borderLeft: '4px solid var(--warning)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1rem' }}>Bữa Trưa (12:00)</h4>
                <span className="badge badge-warning" style={{ fontSize: '0.85rem' }}>Sắp tới</span>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Cơm gạo lứt (100g), Cá hồi áp chảo, Canh rau ngót.</p>
              <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                <Link href="/patient/log-meal" className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>Log Bữa ăn</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts & Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Hành động nhanh</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              <Link href="/patient/log-meal" className="btn btn-primary" style={{ justifyContent: 'flex-start', gap: '1rem', padding: '1rem' }}>
                <span style={{ fontSize: '1.25rem' }}></span> Ghi nhận Bữa ăn
              </Link>
              <Link href="/patient/chat" className="btn btn-outline" style={{ justifyContent: 'flex-start', gap: '1rem', padding: '1rem' }}>
                <span style={{ fontSize: '1.25rem' }}></span> Hỏi Trợ lý AI
              </Link>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem' }}>Cảnh báo mới</h3>
              <Link href="/patient/alerts" style={{ fontSize: '0.875rem', color: 'var(--danger)', fontWeight: 500 }}>Xem tất cả</Link>
            </div>
            
            <div style={{ padding: '1rem', background: '#fef3c7', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--warning)' }}>
              <h4 style={{ color: '#b45309', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Đường huyết tăng nhẹ</h4>
              <p style={{ fontSize: '0.95rem', color: '#92400e' }}>AI nhận thấy bạn đã nạp khá nhiều tinh bột vào tối qua. Hôm nay hãy chú ý giảm tinh bột và uống nhiều nước nhé!</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
