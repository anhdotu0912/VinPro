import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hệ thống Cảnh báo - NutriAgent AI',
};

export default function WarningsPage() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--danger)' }}>Hệ thống Cảnh báo</h2>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        {/* Warning Item 1 */}
        <div className="glass-panel" style={{ borderLeft: '4px solid var(--danger)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>Chỉ số đường huyết vượt ngưỡng</h3>
              <p style={{ color: 'var(--text-main)', fontWeight: 500 }}>Bệnh nhân: Nguyễn Văn A (Đái tháo đường type 2)</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Phát hiện đường huyết lúc đói là 8.5 mmol/L (Mục tiêu: &lt; 7.0 mmol/L). Hệ thống AI đề xuất cần điều chỉnh lại tỷ lệ Carbohydrate.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
              <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>Xem chi tiết</button>
              <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem', backgroundColor: 'var(--danger)', borderColor: 'var(--danger)' }}>Gọi điện</button>
            </div>
          </div>
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Duyệt thực đơn dự phòng tuần tới</button>
          </div>
        </div>

        {/* Warning Item 2 */}
        <div className="glass-panel" style={{ borderLeft: '4px solid var(--warning)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>Lượng Natri tiêu thụ cao</h3>
              <p style={{ color: 'var(--text-main)', fontWeight: 500 }}>Bệnh nhân: Trần Thị B (Suy thận mạn độ 3)</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Nhật ký ăn uống hôm qua cho thấy lượng muối nạp vào đạt 3g (Mục tiêu: &lt; 2g/ngày).
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
              <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
