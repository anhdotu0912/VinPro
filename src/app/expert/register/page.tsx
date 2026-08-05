'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ExpertRegister() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Giả lập đăng ký cấp phép thành công
    router.push('/expert');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Đăng ký Cấp phép</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Tạo tài khoản dành cho Chuyên gia Dinh dưỡng / Bác sĩ.</p>
        </div>

        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Họ và tên Bác sĩ</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Vd: BS. Phạm Minh Tuấn"
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Email công việc</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="Vd: bacsita@nutrimed.vn"
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Mã chứng chỉ hành nghề</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Vd: CCHN-12345"
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Mật khẩu</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Tối thiểu 8 ký tự"
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.875rem', fontSize: '1rem', marginTop: '0.5rem' }}>
            Gửi yêu cầu cấp phép
          </button>

        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          Đã có tài khoản?{' '}
          <Link href="/expert/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
            Đăng nhập ngay
          </Link>
        </div>
      </div>
    </div>
  );
}
