import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cảnh báo Tuân thủ - NutriAgent',
};

export default function AlertsPage() {
  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--danger)' }}>Cảnh báo Tuân thủ</h2>
        <p style={{ color: 'var(--text-muted)' }}>Các lưu ý quan trọng từ hệ thống AI và Bác sĩ của bạn</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        
        {/* Bác sĩ nhắc nhở */}
        <div className="glass-panel" style={{ borderLeft: '4px solid var(--danger)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ padding: '0.5rem 1rem', background: '#fee2e2', color: '#b91c1c', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
              Khẩn cấp
            </div>
            <div>
              <h3 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>Bác sĩ yêu cầu điều chỉnh bữa tối</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Đường huyết buổi sáng của bạn trong 3 ngày qua đều ở mức &gt; 8.0 mmol/L. Bác sĩ Trần Văn C đã yêu cầu giảm 30% lượng tinh bột vào bữa tối.
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Thời gian: Hôm nay, 08:30</p>
            </div>
          </div>
        </div>

        {/* AI Nhắc nhở */}
        <div className="glass-panel" style={{ borderLeft: '4px solid var(--warning)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ padding: '0.5rem 1rem', background: '#fef3c7', color: '#b45309', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
              Hệ thống AI
            </div>
            <div>
              <h3 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>Cảnh báo lượng Muối (Natri)</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Hệ thống nhận thấy món "Canh dưa chua bắp bò" bạn nhập vào trưa hôm qua chứa lượng Natri rất cao. Điều này có thể ảnh hưởng đến huyết áp của bạn.
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Thời gian: Hôm qua, 14:00</p>
              <button className="btn btn-outline" style={{ marginTop: '1rem', fontSize: '0.875rem', padding: '0.4rem 1rem' }}>
                Xem cách giảm muối hiệu quả
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
