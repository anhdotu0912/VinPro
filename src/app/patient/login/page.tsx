'use client';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="patient-auth-container">
      <div className="patient-auth-box">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ color: 'var(--primary-dark)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>NutriAgent</h1>
          <p style={{ color: 'var(--text-muted)' }}>Cổng Thông Tin Dinh Dưỡng Bệnh Nhân</p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Số điện thoại</label>
            <input type="text" placeholder="Nhập số điện thoại" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Mật khẩu</label>
            <input type="password" placeholder="Nhập mật khẩu" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', fontSize: '1rem' }} />
          </div>
          
          <Link href="/patient" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.1rem' }}>
            Đăng nhập
          </Link>
        </form>

        <div style={{ textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Bạn chưa có tài khoản?</p>
          <Link href="/patient/onboarding" className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>
            Đăng ký & Khởi tạo Hồ sơ Y tế
          </Link>
        </div>
      </div>
    </div>
  );
}
