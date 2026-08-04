'use client';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: 'var(--primary-dark)', fontSize: '2rem', marginBottom: '0.5rem' }}>NutriAgent</h1>
        <p style={{ color: 'var(--text-muted)' }}>Trợ lý Dinh dưỡng Lâm sàng</p>
      </div>

      <div className="glass-panel" style={{ marginBottom: '1.5rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Số điện thoại</label>
            <input type="text" placeholder="Nhập số điện thoại" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Mật khẩu</label>
            <input type="password" placeholder="Nhập mật khẩu" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }} />
          </div>
          
          <Link href="/patient" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
            Đăng nhập
          </Link>
        </form>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>Bạn chưa có tài khoản?</p>
        <Link href="/patient/onboarding" className="btn btn-outline" style={{ width: '100%' }}>
          Đăng ký & Khởi tạo Hồ sơ
        </Link>
      </div>
    </div>
  );
}
