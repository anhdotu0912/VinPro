import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tổng quan - NutriAgent AI',
};

export default function PatientDashboard() {
  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h2>Xin chào, <span className="text-gradient">Nguyễn Văn A</span> 👋</h2>
        <p style={{ color: 'var(--text-muted)' }}>Mục tiêu hôm nay: Duy trì đường huyết ổn định &lt; 7.0 mmol/L.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Left Column */}
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
            <h3 style={{ marginBottom: '1rem', color: 'var(--warning)' }}>⚠️ Nhắc nhở hôm nay</h3>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>Bạn chưa cập nhật ảnh bữa sáng.</p>
            <Link href="/patient/menus" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', marginTop: '1rem', display: 'inline-block' }}>Cập nhật ngay</Link>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div className="glass-panel">
            <h3 style={{ marginBottom: '1rem' }}>Thực đơn tiếp theo: Bữa Trưa (12:00)</h3>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.4)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }}>
              <p>• Cơm gạo lứt (1 bát nhỏ - 100g)</p>
              <p>• Cá hồi áp chảo (100g)</p>
              <p>• Canh rau ngót nấu tôm (1 bát)</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Năng lượng: 500 kcal | Carbs: 50g</p>
            </div>
            <div style={{ marginTop: '1rem', textAlign: 'right' }}>
               <Link href="/patient/menus" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Xem toàn bộ thực đơn</Link>
            </div>
          </div>

          <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(135deg, var(--primary-light), white)' }}>
            <div>
              <h3 style={{ color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Bạn có câu hỏi về dinh dưỡng?</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>AI Agent luôn sẵn sàng giải đáp 24/7</p>
            </div>
            <Link href="/patient/chat" className="btn btn-primary">💬 Chat ngay</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
