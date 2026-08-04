import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert Dashboard - NutriAgent AI',
};

export default function ExpertDashboard() {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2><span className="text-gradient">Bảng Điều Khiển Chuyên Gia</span></h2>
        <Link href="/" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Đăng xuất</Link>
      </header>

      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Yêu cầu phê duyệt thực đơn</h3>
        
        <table className="data-table">
          <thead>
            <tr>
              <th>Bệnh nhân</th>
              <th>Bệnh lý</th>
              <th>Ngày tạo</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Nguyễn Văn A</strong> (55t)
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>BMI: 26.5</div>
              </td>
              <td>Đái tháo đường type 2</td>
              <td>Hôm nay, 08:30</td>
              <td><span className="badge badge-warning">Chờ duyệt</span></td>
              <td>
                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', marginRight: '0.5rem' }}>Xem chi tiết</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Trần Thị B</strong> (62t)
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>BMI: 22.1</div>
              </td>
              <td>Suy thận mạn độ 3</td>
              <td>Hôm qua, 15:45</td>
              <td><span className="badge badge-success">Đã duyệt</span></td>
              <td>
                <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Xem hồ sơ</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Detail View Mockup (Active Review) */}
      <div className="glass-panel" style={{ borderLeft: '4px solid var(--primary)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <h3>Chi tiết thực đơn: Nguyễn Văn A</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Mục tiêu: 1800 kcal | Carbs &lt; 50% | Theo dõi đường huyết</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-danger" style={{ padding: '0.5rem 1rem' }}>Từ chối</button>
            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Chỉnh sửa</button>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Phê duyệt ngay</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--primary-dark)' }}>Phân tích từ AI Agent</h4>
            <div style={{ background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Tổng Năng Lượng:</span> <strong>1750 kcal</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Carbohydrate:</span> <strong>180g (41%)</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Protein:</span> <strong>90g (21%)</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Fat:</span> <strong>75g (38%)</strong>
                </li>
              </ul>
              
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                <p style={{ color: 'var(--success)', fontSize: '0.875rem' }}>✓ Năng lượng nằm trong ngưỡng mục tiêu.</p>
                <p style={{ color: 'var(--warning)', fontSize: '0.875rem', marginTop: '0.5rem' }}>⚠️ Chú ý: Bệnh nhân có tiền sử dị ứng đậu phộng, thực đơn đã tự động loại bỏ các món liên quan.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--primary-dark)' }}>Nội dung thực đơn</h4>
            <div style={{ padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)' }}>
              <p><strong>Sáng:</strong> Phở xào gạo lứt (150g) + Thịt bò mềm (50g) + Rau xanh</p>
              <p style={{ margin: '1rem 0' }}><strong>Trưa:</strong> Cơm gạo lứt (100g) + Cá hồi áp chảo (100g) + Canh rau ngót</p>
              <p><strong>Tối:</strong> Salad ức gà (150g thịt gà) + Sốt giấm táo + Khoai lang luộc (100g)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
