'use client';
import Link from 'next/link';

export default function PatientDashboard() {
  return (
    <div style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem' }}>Xin chào, Nguyễn Văn A</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mục tiêu: Đái tháo đường Type 2</p>
        </div>
      </header>

      {/* Kcal & Nutrition Summary (Circular Progress Mockup) */}
      <div className="glass-panel" style={{ marginBottom: '1.5rem', textAlign: 'center', padding: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Lượng Calo hôm nay</h3>
        <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto', borderRadius: '50%', background: 'conic-gradient(var(--primary) 65%, var(--primary-light) 65%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100px', height: '100px', background: 'var(--surface-color)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)' }}>1200</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ 1800 kcal</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Đường</p>
            <p style={{ fontWeight: 600, color: 'var(--warning)' }}>40/50g</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Muối</p>
            <p style={{ fontWeight: 600, color: 'var(--success)' }}>3/5g</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Đạm</p>
            <p style={{ fontWeight: 600, color: 'var(--primary)' }}>45/60g</p>
          </div>
        </div>
      </div>

      {/* Today's Menu Snippet */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.1rem' }}>Thực đơn hôm nay</h3>
          <Link href="/patient/menus" style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 500 }}>Xem tất cả</Link>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', borderLeft: '4px solid var(--warning)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <h4 style={{ fontSize: '1rem' }}>Bữa Trưa (12:00)</h4>
            <span className="badge badge-warning" style={{ fontSize: '0.7rem' }}>Sắp tới</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Cơm gạo lứt (100g), Cá hồi áp chảo, Canh rau ngót.</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
            <Link href="/patient/log-meal" className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', flex: 1 }}>Xác nhận bữa ăn</Link>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Cảnh báo & Lời khuyên</h3>
        <div className="glass-panel" style={{ padding: '1rem', background: '#fef3c7', borderColor: '#fde68a' }}>
          <h4 style={{ color: '#b45309', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Mức đường huyết hôm qua hơi cao</h4>
          <p style={{ fontSize: '0.85rem', color: '#92400e' }}>AI nhận thấy bạn đã ăn bánh ngọt vào tối qua. Hôm nay hãy chú ý giảm tinh bột vào bữa tối nhé!</p>
        </div>
      </div>
    </div>
  );
}
