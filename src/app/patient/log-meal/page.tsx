'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LogMealPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [mealText, setMealText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.createElement; // just to ignore unused React
    e.preventDefault();
    if (mealText) {
      setShowPopup(true);
    }
  };

  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Nhật ký Bữa ăn</h2>
        <p style={{ color: 'var(--text-muted)' }}>Chụp ảnh hoặc nhập mô tả món ăn bạn vừa dùng. AI sẽ tự động phân tích thành phần dinh dưỡng.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* Upload Image Section */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Tải ảnh lên</h3>
          
          <div style={{ 
            border: '2px dashed var(--glass-border)', 
            borderRadius: 'var(--radius-lg)', 
            padding: '4rem 2rem', 
            textAlign: 'center',
            background: 'var(--bg-color)',
            cursor: 'pointer',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>📷</div>
            <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Kéo thả hoặc Nhấp để chọn ảnh</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Hỗ trợ JPG, PNG (Tối đa 5MB)</p>
          </div>
        </div>

        {/* Text Input Section */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Nhập thủ công</h3>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.75rem' }}>Mô tả món ăn</label>
              <textarea 
                placeholder="VD: 1 bát cơm gạo lứt, 1 lát cá hồi áp chảo, 1 bát canh mồng tơi..." 
                value={mealText}
                onChange={(e) => setMealText(e.target.value)}
                style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', minHeight: '150px', resize: 'vertical' }} 
              />
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} disabled={!mealText}>
              Phân tích & Lưu Bữa Ăn
            </button>
          </form>
        </div>

      </div>

      {/* AI Analysis Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--primary-dark)', fontSize: '1.25rem' }}>Kết quả Phân tích AI</h3>
              <button onClick={() => setShowPopup(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}>&times;</button>
            </div>
            
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '1rem', marginBottom: '0.75rem' }}><strong>Món ăn:</strong> {mealText}</p>
              <p style={{ fontSize: '1rem', marginBottom: '1rem' }}><strong>Ước tính Kcal:</strong> ~450 kcal</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ textAlign: 'center', padding: '1rem', background: '#fee2e2', borderRadius: 'var(--radius-md)' }}>
                  <p style={{ fontSize: '0.85rem', color: '#b91c1c', marginBottom: '0.25rem' }}>Đường / Tinh bột</p>
                  <p style={{ fontWeight: 'bold', color: '#b91c1c', fontSize: '1.1rem' }}>Cao</p>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem', background: '#d1fae5', borderRadius: 'var(--radius-md)' }}>
                  <p style={{ fontSize: '0.85rem', color: '#047857', marginBottom: '0.25rem' }}>Đạm (Protein)</p>
                  <p style={{ fontWeight: 'bold', color: '#047857', fontSize: '1.1rem' }}>Vừa đủ</p>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem', background: '#e0f2fe', borderRadius: 'var(--radius-md)' }}>
                  <p style={{ fontSize: '0.85rem', color: '#0369a1', marginBottom: '0.25rem' }}>Chất Xơ</p>
                  <p style={{ fontWeight: 'bold', color: '#0369a1', fontSize: '1.1rem' }}>Thấp</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '1.25rem', background: '#fef3c7', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--warning)', marginBottom: '2rem' }}>
              <h4 style={{ color: '#b45309', marginBottom: '0.5rem', fontSize: '1rem' }}>Lời khuyên từ AI (Dựa trên hồ sơ Tiểu đường Type 2):</h4>
              <p style={{ fontSize: '0.9rem', color: '#92400e', lineHeight: 1.6 }}>
                Món này chứa khá nhiều tinh bột và ít chất xơ. Bạn nên bổ sung thêm một đĩa rau xanh luộc vào bữa ăn này, kết hợp vận động nhẹ (đi bộ 15 phút) sau bữa ăn để giúp ổn định đường huyết tốt hơn.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => setShowPopup(false)} className="btn btn-outline" style={{ flex: 1, padding: '0.875rem' }}>Thử lại</button>
              <Link href="/patient" className="btn btn-primary" style={{ flex: 2, padding: '0.875rem', textAlign: 'center' }}>Xác nhận Lưu Bữa Ăn</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
