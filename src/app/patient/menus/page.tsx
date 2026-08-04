'use client';
import { useState } from 'react';

export default function MenusPage() {
  const [activeTab, setActiveTab] = useState('daily');

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Nhật ký Thực đơn</h2>
        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Tải ảnh bữa ăn
        </button>
      </header>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--glass-border)', marginBottom: '2rem' }}>
        <button 
          onClick={() => setActiveTab('daily')}
          style={{ 
            padding: '1rem 1.5rem', 
            background: 'none', 
            border: 'none', 
            borderBottom: activeTab === 'daily' ? '3px solid var(--primary)' : '3px solid transparent',
            color: activeTab === 'daily' ? 'var(--primary-dark)' : 'var(--text-muted)',
            fontWeight: activeTab === 'daily' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Thực đơn Ngày/Tuần
        </button>
        <button 
          onClick={() => setActiveTab('suggestions')}
          style={{ 
            padding: '1rem 1.5rem', 
            background: 'none', 
            border: 'none', 
            borderBottom: activeTab === 'suggestions' ? '3px solid var(--primary)' : '3px solid transparent',
            color: activeTab === 'suggestions' ? 'var(--primary-dark)' : 'var(--text-muted)',
            fontWeight: activeTab === 'suggestions' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Gợi ý Thực đơn <span className="badge badge-warning" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}>Mới</span>
        </button>
        <button 
          onClick={() => setActiveTab('history')}
          style={{ 
            padding: '1rem 1.5rem', 
            background: 'none', 
            border: 'none', 
            borderBottom: activeTab === 'history' ? '3px solid var(--primary)' : '3px solid transparent',
            color: activeTab === 'history' ? 'var(--primary-dark)' : 'var(--text-muted)',
            fontWeight: activeTab === 'history' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Lịch sử Nhật ký
        </button>
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {activeTab === 'daily' && (
          <div className="glass-panel">
            <h3 style={{ marginBottom: '1.5rem' }}>Thực đơn Hôm nay (Đã được duyệt)</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {/* Sáng */}
              <div style={{ padding: '1.5rem', background: 'var(--bg-color)', borderRadius: 'var(--radius-md)', border: '1px solid #d1fae5', borderLeft: '4px solid #10b981' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Bữa Sáng (07:00)</h4>
                  <span className="badge badge-success">Đã hoàn thành</span>
                </div>
                <div style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                  <p>• Phở xào gạo lứt (150g) + Thịt bò mềm (50g)</p>
                  <p>• Rau xanh luộc (100g)</p>
                </div>
              </div>

              {/* Trưa */}
              <div style={{ padding: '1.5rem', background: 'var(--bg-color)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Bữa Trưa (12:00)</h4>
                  <span className="badge badge-warning" style={{ background: '#e2e8f0', color: '#475569' }}>Sắp tới</span>
                </div>
                <div style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                  <p>• Cơm gạo lứt (1 bát nhỏ - 100g)</p>
                  <p>• Cá hồi áp chảo (100g)</p>
                  <p>• Canh rau ngót nấu tôm (1 bát)</p>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <button className="btn btn-outline" style={{ fontSize: '0.875rem', padding: '0.4rem 1rem' }}>Xác nhận bữa ăn</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'suggestions' && (
          <div className="glass-panel" style={{ borderLeft: '4px solid var(--warning)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Thực đơn tuần tới (Gợi ý từ AI)</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>AI đã tạo ra thực đơn mới dựa trên dữ liệu đường huyết tuần này. <strong>Đang chờ bác sĩ phê duyệt.</strong></p>
            <div style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-color)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ color: 'var(--text-muted)' }}>Vui lòng chờ chuyên gia dinh dưỡng của bạn duyệt thực đơn này trước khi có thể áp dụng.</p>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="glass-panel">
            <h3 style={{ marginBottom: '1.5rem' }}>Lịch sử 7 ngày qua</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Ngày</th>
                  <th>Mức độ tuân thủ</th>
                  <th>Lượng Calo</th>
                  <th>Ghi chú từ AI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hôm qua</td>
                  <td><span className="badge badge-success">Tốt (95%)</span></td>
                  <td>1750 / 1800 kcal</td>
                  <td>Đường huyết ổn định</td>
                </tr>
                <tr>
                  <td>Hôm kia</td>
                  <td><span className="badge badge-warning">Trung bình (70%)</span></td>
                  <td>2100 / 1800 kcal</td>
                  <td>Vượt giới hạn tinh bột bữa tối</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
