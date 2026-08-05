'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ExpertLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('bacsita@nutrimed.vn');
  const [password, setPassword] = useState('123456');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Giả lập đăng nhập thành công
    router.push('/expert');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <div style={{ background: 'var(--surface-color)', padding: '1rem', borderRadius: '50%' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="var(--primary)" />
                <path d="M2 17L12 22L22 17" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <h1 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Dành cho Bác sĩ</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Đăng nhập vào hệ thống quản lý NutriMed AI.</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Mã Bác sĩ hoặc Email</label>
            <input 
              type="text" 
              className="form-input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>Mật khẩu</label>
            </div>
            <input 
              type="password" 
              className="form-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.875rem', fontSize: '1rem', marginTop: '0.5rem' }}>
            Đăng nhập
          </button>

        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          Chưa có tài khoản?{' '}
          <Link href="/expert/register" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
            Đăng ký cấp phép
          </Link>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
            &larr; Quay lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
