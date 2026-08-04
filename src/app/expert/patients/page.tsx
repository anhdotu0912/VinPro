import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quản lý Bệnh nhân - NutriAgent AI',
};

export default function PatientsPage() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Danh sách Bệnh nhân</h2>
        <button className="btn btn-primary">+ Thêm bệnh nhân mới</button>
      </header>

      <div className="glass-panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Họ tên</th>
              <th>Độ tuổi</th>
              <th>Bệnh lý nền</th>
              <th>BMI</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nguyễn Văn A</strong></td>
              <td>55</td>
              <td>Đái tháo đường type 2</td>
              <td>26.5 (Thừa cân)</td>
              <td><span className="badge badge-warning">Cần chú ý</span></td>
              <td>
                <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem', marginRight: '0.5rem' }}>Xem chi tiết</button>
                <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>Liên hệ</button>
              </td>
            </tr>
            <tr>
              <td><strong>Trần Thị B</strong></td>
              <td>62</td>
              <td>Suy thận mạn độ 3</td>
              <td>22.1 (Bình thường)</td>
              <td><span className="badge badge-success">Ổn định</span></td>
              <td>
                <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem', marginRight: '0.5rem' }}>Xem chi tiết</button>
                <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>Liên hệ</button>
              </td>
            </tr>
            <tr>
              <td><strong>Lê Văn C</strong></td>
              <td>45</td>
              <td>Tăng huyết áp</td>
              <td>28.4 (Béo phì)</td>
              <td><span className="badge badge-success">Ổn định</span></td>
              <td>
                <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem', marginRight: '0.5rem' }}>Xem chi tiết</button>
                <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>Liên hệ</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
