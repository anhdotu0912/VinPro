import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nhật ký Thực đơn - Sống Khỏe',
};

export default function LogMealPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '4rem' }}>
      {/* Top Bar */}
      <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <button style={{ background: 'none', border: 'none', fontSize: '1.25rem', color: 'var(--text-muted)', cursor: 'pointer' }}></button>
        <button style={{ background: 'none', border: 'none', fontSize: '1.25rem', color: 'var(--primary)', cursor: 'pointer' }}></button>
      </header>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Chào bạn Nguyễn Văn A! <span style={{ fontSize: '1.2rem' }}></span>
        </h2>
        
        {/* Alert Banner */}
        <div style={{ background: '#ffedd5', color: '#c2410c', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.95rem' }}>
          <span>️</span> Hôm qua bạn đã nạp hơi nhiều Carb, hôm nay mình ăn thanh đạm hơn nhé!
        </div>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {/* Calories Card */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Năng lượng (Kcal)</h3>
          
          <div className="circular-progress" style={{ position: 'relative', width: '120px', height: '120px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', top: 0, left: 0 }}>
              <circle cx="60" cy="60" r="50" fill="none" stroke="var(--glass-border)" strokeWidth="10"></circle>
              <circle cx="60" cy="60" r="50" fill="none" strokeWidth="10" strokeLinecap="round" style={{ stroke: 'var(--primary)', strokeDasharray: '314.159', strokeDashoffset: '78.54', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}></circle>
            </svg>
            <div className="circular-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.2 }}>1200</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ 1600</span>
            </div>
          </div>
          
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>Bạn còn 400 kcal nữa ạ</p>
        </div>

        {/* Carbs Card */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tinh bột (Carb)</h3>
          
          <div className="circular-progress" style={{ position: 'relative', width: '120px', height: '120px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', top: 0, left: 0 }}>
              <circle cx="60" cy="60" r="50" fill="none" stroke="var(--glass-border)" strokeWidth="10"></circle>
              <circle cx="60" cy="60" r="50" fill="none" strokeWidth="10" strokeLinecap="round" style={{ stroke: 'var(--danger)', strokeDasharray: '314.159', strokeDashoffset: '62.83', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}></circle>
            </svg>
            <div className="circular-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--danger)', lineHeight: 1.2 }}>120g</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ 150g</span>
            </div>
          </div>
          
          <p style={{ fontSize: '0.875rem', color: 'var(--danger)', margin: 0, fontWeight: 600 }}>! Sắp chạm giới hạn</p>
        </div>

        {/* Protein & Fat Card */}
        <div className="glass-panel" style={{ background: 'var(--surface-color)', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem', padding: '1.5rem' }}>
          <div style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
              <span style={{ color: 'var(--primary)' }}></span> Đạm (Protein)
            </div>
            <div style={{ fontWeight: 600 }}>65g <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '1rem' }}>/ 80g</span></div>
          </div>
          
          <div style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
              <span style={{ color: 'var(--primary)' }}></span> Chất béo
            </div>
            <div style={{ fontWeight: 600 }}>30g <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '1rem' }}>/ 45g</span></div>
          </div>
        </div>
      </div>

      {/* Today's Menu */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>Thực đơn hôm nay</h3>
        <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Thứ Hai, 14 tháng 10</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        {/* Breakfast */}
        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-md)', background: 'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200) center/cover' }}></div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Bữa sáng</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Rau mồng tơi, bắp cải luộc, cà chua, bơ</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>2 bát cháo cá lóc</div>
            </div>
          </div>
          <div style={{ fontWeight: 600, color: 'var(--text-muted)' }}>450 kcal</div>
        </div>

        {/* Morning Snack */}
        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-md)', background: 'url(https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80&w=200) center/cover' }}></div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Bữa phụ sáng</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Sữa tươi ko đường</div>
            </div>
          </div>
          <div style={{ fontWeight: 600, color: 'var(--text-muted)' }}>120 kcal</div>
        </div>

        {/* Lunch */}
        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-md)', background: 'url(https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=200) center/cover' }}></div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Bữa trưa</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Nửa bát cơm gạo lứt + Cá kho + Trứng luộc</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>1/2 đĩa rau luộc</div>
            </div>
          </div>
          <div style={{ fontWeight: 600, color: 'var(--text-muted)' }}>500 kcal</div>
        </div>

        {/* Afternoon Snack */}
        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-md)', background: 'url(https://images.unsplash.com/photo-1572911299948-4e8913998fb9?auto=format&fit=crop&q=80&w=200) center/cover' }}></div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Bữa phụ chiều</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Sữa chua ko đường</div>
            </div>
          </div>
          <div style={{ fontWeight: 600, color: 'var(--text-muted)' }}>100 kcal</div>
        </div>

        {/* Dinner */}
        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-md)', background: 'url(https://images.unsplash.com/photo-1544025162-811c79e65e64?auto=format&fit=crop&q=80&w=200) center/cover' }}></div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Bữa tối</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>1/2 chén cơm gạo lứt + Thịt ba chỉ rim</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Cà tím luộc, Canh sườn non rau ngót</div>
            </div>
          </div>
          <div style={{ fontWeight: 600, color: 'var(--text-muted)' }}>480 kcal</div>
        </div>

        {/* Evening Snack */}
        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-md)', background: 'url(https://images.unsplash.com/photo-1601000676451-c06db954e7d1?auto=format&fit=crop&q=80&w=200) center/cover' }}></div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Bữa phụ tối</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>1/2 quả lựu</div>
            </div>
          </div>
          <div style={{ fontWeight: 600, color: 'var(--text-muted)' }}>70 kcal</div>
        </div>
      </div>

      {/* Suggestion Box */}
      <div style={{ border: '2px dashed #cbd5e1', borderRadius: 'var(--radius-lg)', padding: '3rem 2rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <div style={{ fontSize: '2rem', color: 'var(--text-muted)', marginBottom: '1rem' }}></div>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Bữa tối này bạn muốn ăn gì?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '400px', margin: '0 auto 1.5rem' }}>Sống Khỏe sẽ gợi ý món ăn phù hợp với lượng Carb còn lại của bạn.</p>
        <button className="btn btn-primary" style={{ padding: '0.75rem 2rem', borderRadius: '9999px' }}>Nhấn để xem gợi ý</button>
      </div>

      {/* Floating Action Button */}
      <button style={{ position: 'fixed', bottom: '2rem', right: '2rem', background: 'var(--warning)', color: 'white', border: 'none', padding: '1rem 1.5rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '1rem', boxShadow: 'var(--shadow-lg)', cursor: 'pointer', zIndex: 50 }}>
        <span></span> CHỤP ẢNH BỮA ĂN (LOG FOOD)
      </button>

    </div>
  );
}
