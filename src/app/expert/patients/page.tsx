import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Danh sách Bệnh nhân - NutriMed AI',
};

export default function PatientsList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Danh sách bệnh nhân</h1>
          <p style={{ color: 'var(--text-muted)' }}>Quản lý và theo dõi chỉ số dinh dưỡng của 128 bệnh nhân đang điều trị.</p>
        </div>
        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}>
          <span>+</span> Thêm bệnh nhân mới
        </button>
      </div>

      {/* Filters */}
      <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-end', gap: '1.5rem', border: '1px solid #e2e8f0' }}>
        <div style={{ flex: 1, maxWidth: '250px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Lọc theo bệnh lý</label>
          <select className="form-input" style={{ width: '100%', background: 'var(--surface-color)' }}>
            <option>Tất cả bệnh lý</option>
            <option>Tiểu đường</option>
            <option>Tim mạch</option>
          </select>
        </div>
        
        <div style={{ flex: 1, maxWidth: '250px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Mức độ tuân thủ</label>
          <select className="form-input" style={{ width: '100%', background: 'var(--surface-color)' }}>
            <option>Tất cả mức độ</option>
            <option>Tốt (&gt;80%)</option>
            <option>Trung bình (50-80%)</option>
            <option>Thấp (&lt;50%)</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Trạng thái</label>
          <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: 'var(--radius-md)', padding: '0.25rem' }}>
            <button style={{ padding: '0.5rem 1rem', background: 'white', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-dark)', boxShadow: 'var(--shadow-sm)' }}>Tất cả</button>
            <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Cần chú ý</button>
            <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Nguy cơ</button>
          </div>
        </div>

        <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', padding: '0.75rem 0' }}>
          <span></span> Xóa bộ lọc
        </button>
      </div>

      {/* Table */}
      <div className="glass-panel" style={{ border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e2e8f0', color: 'var(--text-muted)' }}>
              <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>Bệnh nhân</th>
              <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>Mã ID</th>
              <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>Bệnh lý</th>
              <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 600, width: '20%', minWidth: '200px' }}>Chỉ số tuân thủ</th>
              <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>Trạng thái</th>
              <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            
            {/* Row 1 */}
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#dbeafe', color: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>NH</div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Nguyễn Văn Hùng</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Nam, 58 tuổi</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>BN-2024-001</td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#0369a1', background: '#e0f2fe', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>TIỂU ĐƯỜNG TUÝP 2</span>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '85%', height: '100%', background: 'var(--primary)' }}></div>
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', minWidth: '30px' }}>85%</span>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--success)', fontWeight: 500 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }}></span> Ổn định
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '1.1rem' }}>️</button>
                  <button style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', fontSize: '1.1rem' }}></button>
                </div>
              </td>
            </tr>

            {/* Row 2 */}
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fce7f3', color: '#be185d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>TL</div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Trần Thị Lan</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Nữ, 64 tuổi</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>BN-2024-042</td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#4338ca', background: '#e0e7ff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>TIỂU ĐƯỜNG TUÝP 1</span>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '42%', height: '100%', background: '#ea580c' }}></div>
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', minWidth: '30px' }}>42%</span>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: '#ea580c', fontWeight: 500 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ea580c' }}></span> Cần chú ý
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '1.1rem' }}>️</button>
                  <button style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', fontSize: '1.1rem' }}></button>
                </div>
              </td>
            </tr>

            {/* Row 3 */}
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fef2f2', color: '#be123c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>LM</div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Lê Minh</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Nam, 45 tuổi</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>BN-2024-089</td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#be123c', background: '#ffe4e6', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>TIỂU ĐƯỜNG THAI KÌ</span>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '15%', height: '100%', background: '#dc2626' }}></div>
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', minWidth: '30px' }}>15%</span>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: '#dc2626', fontWeight: 500 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#dc2626' }}></span> Nguy cơ
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '1.1rem' }}>️</button>
                  <button style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', fontSize: '1.1rem' }}></button>
                </div>
              </td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface-color)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>PT</div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Phạm Thanh Thủy</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Nữ, 52 tuổi</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>BN-2024-112</td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#0369a1', background: '#e0f2fe', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>ĐTĐ TYPE 2</span>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '92%', height: '100%', background: 'var(--primary)' }}></div>
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', minWidth: '30px' }}>92%</span>
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--success)', fontWeight: 500 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }}></span> Ổn định
                </div>
              </td>
              <td style={{ padding: '1rem 1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '1.1rem' }}>️</button>
                  <button style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', fontSize: '1.1rem' }}></button>
                </div>
              </td>
            </tr>

          </tbody>
        </table>

        {/* Pagination */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Hiển thị 1-10 của 128 bệnh nhân</div>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>&lt;</button>
            <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-dark)', color: 'white', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>1</button>
            <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>2</button>
            <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>3</button>
            <span style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>...</span>
            <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>13</button>
            <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>&gt;</button>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        
        {/* Card 1 */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid #e2e8f0' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'var(--primary-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
            
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>TỶ LỆ TUÂN THỦ TRUNG BÌNH</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
              76.4% 
              <span style={{ fontSize: '0.95rem', color: 'var(--success)', fontWeight: 600, marginBottom: '0.25rem' }}>+2.4% so với tháng trước</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid #e2e8f0' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#9a3412', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
            
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>BỆNH NHÂN CẦN CHÚ Ý</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              14 
              <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>Yêu cầu can thiệp dinh dưỡng</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid #e2e8f0' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
            
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>TIN NHẮN CHƯA ĐỌC</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              08 
              <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>Phản hồi từ bệnh nhân</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
