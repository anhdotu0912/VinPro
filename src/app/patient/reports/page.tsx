import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Báo cáo Tuân thủ - NutriAgent',
};

export default function ReportsPage() {
  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h2>Báo cáo Tuân thủ Dinh dưỡng</h2>
        <p style={{ color: 'var(--text-muted)' }}>Theo dõi tiến độ sức khỏe của bạn trong 30 ngày qua</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>92%</h3>
          <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Tuân thủ Calo</p>
        </div>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <h3 style={{ fontSize: '2.5rem', color: '#10b981', marginBottom: '0.5rem' }}>85%</h3>
          <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Tuân thủ Đường (Carbs)</p>
        </div>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <h3 style={{ fontSize: '2.5rem', color: 'var(--warning)', marginBottom: '0.5rem' }}>60%</h3>
          <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Tuân thủ Muối (Natri)</p>
        </div>
      </div>

      <div className="glass-panel" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)' }}>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>Biểu đồ đang cập nhật...</span>
          <p style={{ marginTop: '1rem' }}>[Khu vực hiển thị Biểu đồ Line Chart]</p>
          <p style={{ fontSize: '0.875rem' }}>(Tích hợp thư viện Chart.js hoặc Recharts ở giai đoạn sau)</p>
        </div>
      </div>
    </div>
  );
}
