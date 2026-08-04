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
    <div style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)' }}>Nhật ký Bữa ăn</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Chụp ảnh hoặc nhập món ăn bạn vừa dùng.</p>
      </header>

      <div className="glass-panel" style={{ marginBottom: '1.5rem' }}>
        <div style={{ 
          border: '2px dashed var(--glass-border)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '2rem 1rem', 
          textAlign: 'center',
          marginBottom: '1.5rem',
          background: 'var(--bg-color)',
          cursor: 'pointer'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>📷</div>
          <p style={{ fontWeight: 500 }}>Chụp ảnh bữa ăn</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AI sẽ tự động nhận diện món ăn và Kcal</p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>hoặc</div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Nhập tên món ăn</label>
            <input 
              type="text" 
              placeholder="VD: 1 bát phở bò, 1 cốc trà đá..." 
              value={mealText}
              onChange={(e) => setMealText(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }} 
            />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }} disabled={!mealText}>
            Phân tích & Lưu
          </button>
        </form>
      </div>

      {/* AI Analysis Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content animate-fade-in">
            <h3 style={{ color: 'var(--primary-dark)', marginBottom: '1rem', textAlign: 'center' }}>AI Đang Phân Tích...</h3>
            
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Món ăn:</strong> {mealText}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Ước tính Kcal:</strong> ~450 kcal</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ flex: 1, textAlign: 'center', padding: '0.5rem', background: '#fee2e2', borderRadius: '4px' }}>
                  <p style={{ fontSize: '0.75rem', color: '#b91c1c' }}>Đường/Tinh bột</p>
                  <p style={{ fontWeight: 'bold', color: '#b91c1c' }}>Cao</p>
                </div>
                <div style={{ flex: 1, textAlign: 'center', padding: '0.5rem', background: '#d1fae5', borderRadius: '4px' }}>
                  <p style={{ fontSize: '0.75rem', color: '#047857' }}>Đạm</p>
                  <p style={{ fontWeight: 'bold', color: '#047857' }}>Vừa đủ</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '1rem', background: '#fef3c7', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.85rem', color: '#92400e' }}>
                <strong>Cảnh báo (Tiểu đường Type 2):</strong> Món này chứa khá nhiều tinh bột. Bạn nên kết hợp uống nhiều nước và vận động nhẹ sau bữa ăn để tránh tăng đường huyết đột ngột nhé!
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => setShowPopup(false)} className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }}>Thử lại</button>
              <Link href="/patient" className="btn btn-primary" style={{ flex: 1, padding: '0.5rem', textAlign: 'center' }}>Xác nhận Lưu</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
