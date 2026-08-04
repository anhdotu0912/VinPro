import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Tổng quan - NutriAgent AI',
};

export default function ExpertDashboard() {
  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h2><span className="text-gradient">Tổng quan (Dashboard)</span></h2>
        <p style={{ color: 'var(--text-muted)' }}>Chào mừng Bác sĩ, hôm nay bạn có <strong style={{ color: 'var(--warning)' }}>3</strong> thực đơn đang chờ duyệt.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>124</h3>
          <p style={{ color: 'var(--text-muted)' }}>Tổng Bệnh nhân</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.5rem', color: 'var(--warning)' }}>3</h3>
          <p style={{ color: 'var(--text-muted)' }}>Thực đơn chờ duyệt</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.5rem', color: 'var(--danger)' }}>1</h3>
          <p style={{ color: 'var(--text-muted)' }}>Cảnh báo Mức cao</p>
        </div>
      </div>
      
      <div className="glass-panel">
        <h3 style={{ marginBottom: '1rem' }}>Ghi chú công việc hôm nay</h3>
        <ul style={{ listStyle: 'none' }}>
          <li style={{ padding: '1rem 0', borderBottom: '1px solid var(--glass-border)' }}>
            <span className="badge badge-warning" style={{ marginRight: '1rem' }}>Ưu tiên</span>
            Duyệt thực đơn tuần cho bệnh nhân Đái tháo đường (Nguyễn Văn A)
          </li>
          <li style={{ padding: '1rem 0', borderBottom: '1px solid var(--glass-border)' }}>
            <span className="badge badge-danger" style={{ marginRight: '1rem' }}>Khẩn cấp</span>
            Kiểm tra cảnh báo lượng Natri vượt ngưỡng của bệnh nhân Suy thận mạn (Trần Thị B)
          </li>
        </ul>
      </div>
    </div>
  );
}

