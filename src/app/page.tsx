import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NutriAgent AI - Trợ Lý Dinh Dưỡng Lâm Sàng',
  description: 'AI Agent hỗ trợ dinh dưỡng theo bệnh lý',
};

export default function Home() {
  return (
    <main className="container animate-fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div className="glass-panel" style={{ maxWidth: '800px' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          NutriAgent AI
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Trợ lý Dinh dưỡng & Lối sống Cá nhân hóa theo Bệnh lý. 
          Kết hợp sức mạnh của AI và sự kiểm duyệt chuyên môn từ Bác sĩ.
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem' }}>
          <Link href="/patient" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Dành cho Bệnh nhân
          </Link>
          <Link href="/expert" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Dành cho Chuyên gia
          </Link>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'left' }}>
          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Cá nhân hóa</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Thực đơn thiết kế riêng dựa trên hồ sơ bệnh án và mục tiêu sức khỏe.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>An toàn y tế (HITL)</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Mọi đề xuất từ AI đều phải qua sự kiểm duyệt của chuyên gia dinh dưỡng.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Giám sát liên tục</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Theo dõi nhật ký ăn uống và đưa ra cảnh báo kịp thời khi vượt ngưỡng.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
