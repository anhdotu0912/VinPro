import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quản lý Thực đơn - NutriAgent AI',
};

export default function MenusPage() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Danh sách Thực đơn</h2>
        <div>
          <button className="btn btn-outline" style={{ marginRight: '1rem' }}>+ Tạo thủ công</button>
          <button className="btn btn-primary">Tạo bằng AI</button>
        </div>
      </header>

      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--warning)' }}>Đang chờ phê duyệt</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Bệnh nhân</th>
              <th>Bệnh lý</th>
              <th>Ngày tạo</th>
              <th>Độ ưu tiên</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nguyễn Văn A</strong></td>
              <td>Đái tháo đường type 2</td>
              <td>Hôm nay, 08:30</td>
              <td><span className="badge badge-danger">Cao</span></td>
              <td>
                <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>Phê duyệt</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="glass-panel">
        <h3 style={{ marginBottom: '1rem' }}>Đã phê duyệt gần đây</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Bệnh nhân</th>
              <th>Bệnh lý</th>
              <th>Ngày tạo</th>
              <th>Người duyệt</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Trần Thị B</strong></td>
              <td>Suy thận mạn độ 3</td>
              <td>Hôm qua, 15:45</td>
              <td>Bs. Trần Văn C</td>
              <td>
                <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>Xem chi tiết</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
