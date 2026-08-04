'use client';
import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <div className="patient-auth-container" style={{ padding: '2rem 0' }}>
      <div className="patient-auth-box" style={{ maxWidth: '800px' }}>
        <header style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Hồ sơ Y tế của bạn</h2>
          <p style={{ color: 'var(--text-muted)' }}>Vui lòng cung cấp thông tin để hệ thống AI lên thực đơn cá nhân hóa.</p>
        </header>

        <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Chỉ số Cơ thể</h3>
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
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Độ tuổi</label>
              <input type="number" placeholder="Ví dụ: 45" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }} />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Giới tính</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'white' }}>
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Tình trạng Sức khỏe</h3>
            
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
                <option>Giữ nguyên cân nặng, ổn định đường huyết</option>
                <option>Giảm cân, kiểm soát đường huyết</option>
                <option>Tăng cân an toàn</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Thuốc đang sử dụng (Nếu có)</label>
              <textarea placeholder="Nhập tên thuốc để hệ thống cảnh báo tương tác thực phẩm..." style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', minHeight: '100px', resize: 'vertical' }}></textarea>
            </div>
          </div>
          
          <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
            <Link href="/patient" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
              Lưu Hồ sơ & Chuyển tới Trang chủ
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
