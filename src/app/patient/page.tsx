import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient Dashboard - NutriAgent AI',
};

export default function PatientDashboard() {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Xin chào, <span className="text-gradient">Nguyễn Văn A</span></h2>
        <Link href="/" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Đăng xuất</Link>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Left Column - Profile & Warnings */}
        <div>
          <div className="glass-panel" style={{ marginBottom: '1.5rem', padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Hồ sơ Bệnh lý</h3>
            <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Tuổi:</strong> 55</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>BMI:</strong> 26.5 (Thừa cân)</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Bệnh lý:</strong> Đái tháo đường type 2</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Dị ứng:</strong> Đậu phộng</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--warning)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--warning)' }}>⚠️ Mục tiêu hiện tại</h3>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>• <strong>Đường huyết mục tiêu:</strong> &lt; 7.0 mmol/L</p>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>• <strong>Năng lượng:</strong> ~1800 kcal/ngày</p>
            <p style={{ fontSize: '0.875rem' }}>• <strong>Cảnh báo:</strong> Hạn chế tối đa carbohydrate hấp thu nhanh.</p>
          </div>
        </div>

        {/* Right Column - Today's Menu */}
        <div>
          <div className="glass-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 className="text-gradient">Thực đơn Đề xuất (Hôm nay)</h3>
              <span className="badge badge-warning">Đang chờ Bác sĩ duyệt</span>
            </div>
            
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              AI Agent đã tổng hợp thực đơn này dựa trên dữ liệu Bảng Thành Phần Thực Phẩm VN và phác đồ điều trị tiểu đường.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Meal Item */}
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.4)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }}>
                <h4 style={{ color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Sáng (07:00)</h4>
                <p>• Phở xào gạo lứt (150g) + Thịt bò mềm (50g)</p>
                <p>• Trau xanh luộc (100g)</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Năng lượng: 350 kcal | Carbs: 45g</p>
              </div>

              {/* Meal Item */}
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.4)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }}>
                <h4 style={{ color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Trưa (12:00)</h4>
                <p>• Cơm gạo lứt (1 bát nhỏ - 100g)</p>
                <p>• Cá hồi áp chảo (100g)</p>
                <p>• Canh rau ngót nấu tôm (1 bát)</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Năng lượng: 500 kcal | Carbs: 50g</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 'var(--radius-md)', color: '#991b1b', fontSize: '0.875rem' }}>
              <strong>Lưu ý quan trọng:</strong> Chế độ ăn này chưa được chuyên gia dinh dưỡng phê duyệt. Vui lòng chờ thông báo xác nhận trước khi áp dụng!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
