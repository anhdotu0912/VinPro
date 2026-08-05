import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tổng quan - NutriMed AI',
};

export default function ExpertDashboard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '2rem' }}>
      
      {/* Left Column: Main Dashboard */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Header */}
        <div>
          <h1 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Chào buổi sáng, BS. Tuấn</h1>
          <p style={{ color: 'var(--text-muted)' }}>Hôm nay bạn có 5 ca tư vấn và 15 thực đơn cần phê duyệt.</p>
        </div>

        {/* 4 Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {/* Card 1 */}
          <div className="glass-panel" style={{ padding: '1.25rem', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ color: 'var(--primary)', background: 'var(--surface-color)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
              <span style={{ fontSize: '0.85rem', color: 'var(--success)', fontWeight: 600 }}>+2.4%</span>
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Tổng số bệnh nhân</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>150</div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel" style={{ padding: '1.25rem', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ color: '#2563eb', background: '#dbeafe', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>️</div>
              <span style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: 600 }}>Tốt</span>
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Tỷ lệ tuân thủ TB</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>84.2%</div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel" style={{ padding: '1.25rem', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ color: '#ea580c', background: '#ffedd5', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
              <span style={{ fontSize: '0.85rem', color: '#ea580c', fontWeight: 600 }}>Chờ duyệt</span>
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Thực đơn chờ duyệt</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>15</div>
          </div>

          {/* Card 4 */}
          <div className="glass-panel" style={{ padding: '1.25rem', background: '#fef2f2', border: '1px solid #fecaca' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ color: 'white', background: '#dc2626', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>️</div>
              <span style={{ fontSize: '0.85rem', color: '#dc2626', fontWeight: 600 }}>Khẩn cấp</span>
            </div>
            <div style={{ fontSize: '0.95rem', color: '#991b1b', marginBottom: '0.25rem' }}>Cảnh báo khẩn cấp</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#dc2626' }}>03</div>
          </div>
        </div>

        {/* Chart */}
        <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>Xu hướng Glucose trung bình</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Nhóm bệnh nhân theo dõi đặc biệt (7 ngày qua)</p>
            </div>
            <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: 'var(--radius-md)', padding: '0.25rem' }}>
              <button style={{ padding: '0.5rem 1rem', background: 'white', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', boxShadow: 'var(--shadow-sm)' }}>Tuần này</button>
              <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Tháng này</button>
            </div>
          </div>

          <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0', margin: '0 1rem' }}>
            {/* Bars */}
            {[40, 55, 75, 45, 40, 50, 35].map((height, i) => (
              <div key={i} style={{ flex: 1, height: `${height}%`, background: i === 2 ? '#fecaca' : '#cbd5e1', borderRadius: '4px 4px 0 0', opacity: i === 2 ? 1 : 0.7 }}></div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 1rem 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            <span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>CN</span>
          </div>
        </div>

        {/* Warnings List */}
        <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>Cảnh báo can thiệp gấp</h3>
            <Link href="/expert/warnings" style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Xem tất cả</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Warning 1 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#fef2f2', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150) center/cover' }}></div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Nguyễn Thị Hoa</div>
                  <div style={{ fontSize: '0.95rem', color: '#991b1b' }}>Glucose vượt ngưỡng (18.0 mmol/L)</div>
                </div>
              </div>
              <button className="btn" style={{ background: '#dc2626', color: 'white', fontSize: '0.95rem', padding: '0.5rem 1rem' }}>Liên hệ ngay</button>
            </div>

            {/* Warning 2 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#fff7ed', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'url(https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150) center/cover' }}></div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Trần Minh Quân</div>
                  <div style={{ fontSize: '0.95rem', color: '#9a3412' }}>Vượt ngưỡng Carb 3 ngày liên tiếp</div>
                </div>
              </div>
              <button className="btn" style={{ background: '#9a3412', color: 'white', fontSize: '0.95rem', padding: '0.5rem 1rem' }}>Gửi nhắc nhở</button>
            </div>

            {/* Warning 3 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'var(--surface-color)', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'url(https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150) center/cover' }}></div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Lê Thu Trang</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Chỉ số Glucose không ổn định</div>
                </div>
              </div>
              <button className="btn btn-outline" style={{ color: '#dc2626', borderColor: '#fca5a5', fontSize: '0.95rem', padding: '0.5rem 1rem' }}>Kiểm tra hồ sơ</button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Schedule Sidebar */}
      <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>Lịch tư vấn hôm nay</h3>
          <div style={{ color: 'var(--primary)', background: 'var(--surface-color)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
          
          {/* Item 1 */}
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div style={{ position: 'absolute', left: 0, top: '0.25rem', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
            <div style={{ position: 'absolute', left: '3.5px', top: '16px', bottom: '-1.5rem', width: '1px', background: '#e2e8f0' }}></div>
            
            <div style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.25rem' }}>09:00 - 09:45</div>
            <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Lê Minh Tâm</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Tư vấn sau điều trị ĐTĐ Type 2</div>
            <span style={{ fontSize: '0.85rem', background: 'var(--surface-color)', color: 'var(--primary-dark)', padding: '0.15rem 0.5rem', borderRadius: '4px', border: '1px solid #bae6fd' }}>Video Call</span>
          </div>

          {/* Item 2 */}
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div style={{ position: 'absolute', left: 0, top: '0.25rem', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
            <div style={{ position: 'absolute', left: '3.5px', top: '16px', bottom: '-1.5rem', width: '1px', background: '#e2e8f0' }}></div>
            
            <div style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.25rem' }}>10:30 - 11:15</div>
            <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Phạm Bảo Thy</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Tái khám định kỳ (Offline)</div>
          </div>

          {/* Item 3 */}
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div style={{ position: 'absolute', left: 0, top: '0.25rem', width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }}></div>
            <div style={{ position: 'absolute', left: '3.5px', top: '16px', bottom: '-1.5rem', width: '1px', background: '#e2e8f0' }}></div>
            
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.25rem' }}>14:00 - 14:45</div>
            <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Hoàng Anh Đức</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Tư vấn thực đơn mới</div>
          </div>

          {/* Item 4 */}
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div style={{ position: 'absolute', left: 0, top: '0.25rem', width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }}></div>
            
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.25rem' }}>15:30 - 16:15</div>
            <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Ngô Gia Bảo</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Cập nhật chỉ số tuần 4</div>
          </div>
        </div>

        <button className="btn btn-outline" style={{ marginTop: '2rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
          + Thêm lịch hẹn mới
        </button>
      </div>
      
    </div>
  );
}
