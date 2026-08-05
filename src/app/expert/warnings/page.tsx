import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cảnh báo Quan trọng - NutriMed AI',
};

export default function WarningsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', margin: 0 }}>Cảnh báo Quan trọng</h1>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white' }}>
            <span></span> Lọc theo bệnh lý
          </button>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>️</span> Xuất báo cáo
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="glass-panel" style={{ border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e2e8f0', color: 'var(--text-muted)' }}>
              <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>TÊN BỆNH NHÂN</th>
              <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>BỆNH LÝ</th>
              <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>TUÂN THỦ (7 NGÀY)</th>
              <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>VẤN ĐỀ (AI PHÁT HIỆN)</th>
              <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            
            {/* Row 1 */}
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150) center/cover' }}></div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Nguyễn Thị Lan</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ID: #BN-8921</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#1e40af', background: '#dbeafe', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>ĐTĐ Type 2</span>
                </div>
              </td>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '60%', height: '100%', background: '#b45309' }}></div>
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#b45309', minWidth: '70px' }}>Trung bình</span>
                </div>
              </td>
              <td style={{ padding: '1.5rem', width: '35%' }}>
                <div style={{ background: '#fef2f2', color: '#991b1b', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', display: 'flex', gap: '0.5rem' }}>
                  <span>️</span>
                  <span>Vượt ngưỡng Carb 3 ngày liên tiếp. Cần kiểm soát Glucose.</span>
                </div>
              </td>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button style={{ background: '#e0f2fe', color: '#0284c7', border: 'none', borderRadius: '9999px', padding: '0.5rem 1rem', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Xem Chi Tiết</button>
                  <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '1.1rem' }}></button>
                </div>
              </td>
            </tr>

            {/* Row 2 */}
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ffedd5', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>TB</div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Trần Văn B</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ID: #BN-4432</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#1e40af', background: '#dbeafe', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>Tim mạch</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#4338ca', background: '#e0e7ff', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>Gout</span>
                </div>
              </td>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '25%', height: '100%', background: '#dc2626' }}></div>
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#dc2626', minWidth: '70px' }}>Tệ</span>
                </div>
              </td>
              <td style={{ padding: '1.5rem', width: '35%' }}>
                <div style={{ border: '1px solid #fecaca', background: '#fff1f2', color: '#9f1239', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', display: 'flex', gap: '0.5rem' }}>
                  <span></span>
                  <span>AI phát hiện ăn nội tạng động vật (Hệ thống Log qua ảnh).</span>
                </div>
              </td>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button style={{ background: '#dc2626', color: 'white', border: 'none', borderRadius: 'var(--radius-sm)', padding: '0.5rem 1rem', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Gọi điện</button>
                  <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '1.1rem' }}></button>
                </div>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150) center/cover' }}></div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Lê Thị C</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ID: #BN-7710</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#1e40af', background: '#dbeafe', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>ĐTĐ Type 2</span>
                </div>
              </td>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '90%', height: '100%', background: 'var(--primary)' }}></div>
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--success)', minWidth: '70px' }}>Tốt</span>
                </div>
              </td>
              <td style={{ padding: '1.5rem', width: '35%' }}>
                <div style={{ background: 'var(--surface-color)', color: '#0369a1', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', display: 'flex', gap: '0.5rem' }}>
                  <span></span>
                  <span>Ăn đúng thực đơn AI đề xuất. Chỉ số đường huyết ổn định.</span>
                </div>
              </td>
              <td style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button style={{ background: 'var(--primary-dark)', color: 'white', border: 'none', borderRadius: 'var(--radius-sm)', padding: '0.5rem 1rem', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Duyệt thực đơn tuần tới</button>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* Bottom Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
        
        {/* Card 1 */}
        <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--surface-color)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
              
            </div>
            <span style={{ fontSize: '0.95rem', color: 'var(--success)', fontWeight: 600 }}>+12%</span>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Tỷ lệ tuân thủ chung</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>84.2%</div>
        </div>

        {/* Card 2 */}
        <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#dbeafe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
              
            </div>
            <span style={{ fontSize: '0.95rem', color: '#2563eb', fontWeight: 600 }}>28 BN</span>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Thực đơn cần duyệt</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>15</div>
        </div>

        {/* Card 3 */}
        <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#fef2f2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
              ️
            </div>
            <span style={{ fontSize: '0.95rem', color: '#dc2626', fontWeight: 600 }}>Cao</span>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>BN cần can thiệp gấp</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>03</div>
        </div>

        {/* Card 4 */}
        <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#f3f4f6', color: '#4b5563', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
              
            </div>
            <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600 }}>Hôm nay</span>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Tư vấn hoàn thành</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>12/20</div>
        </div>

      </div>

    </div>
  );
}
