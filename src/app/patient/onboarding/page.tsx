'use client';
import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <div style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)' }}>Hồ sơ Y tế của bạn</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Vui lòng cung cấp thông tin để AI lên thực đơn phù hợp nhất.</p>
      </header>

      <div className="glass-panel" style={{ marginBottom: '1.5rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Chiều cao (cm)</label>
              <input type="number" placeholder="Ví dụ: 165" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Cân nặng (kg)</label>
              <input type="number" placeholder="Ví dụ: 60" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Bệnh lý hiện tại</label>
            <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'white' }}>
              <option>Đái tháo đường Type 2</option>
              <option>Suy thận mạn</option>
              <option>Tăng huyết áp</option>
              <option>Bệnh Gout</option>
              <option>Khác</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Mục tiêu dinh dưỡng</label>
            <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'white' }}>
              <option>Giữ nguyên cân nặng</option>
              <option>Giảm cân</option>
              <option>Tăng cân</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Thuốc đang sử dụng (Nếu có)</label>
            <textarea placeholder="Nhập tên thuốc để tránh tương tác thực phẩm..." style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', minHeight: '80px' }}></textarea>
          </div>
          
          <Link href="/patient" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
            Lưu Hồ sơ & Bắt đầu
          </Link>
        </form>
      </div>
    </div>
  );
}
