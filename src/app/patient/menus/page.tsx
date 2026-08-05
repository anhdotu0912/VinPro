import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thực đơn của tôi - Sống Khỏe',
};

export default function MenusPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '2rem' }}>
      {/* Top Bar */}
      <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Chào cụ Lan</span>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-dark)', fontWeight: 600, fontSize: '0.95rem' }}>
          CL
        </div>
      </header>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Thực đơn tuần này</h2>
        <p style={{ color: 'var(--text-muted)' }}>Chào cô Lan, hãy theo dõi thực đơn dinh dưỡng hôm nay nhé!</p>
      </div>

      {/* Week Navigation */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {[
          { day: 'Thứ 2', date: '14', active: true },
          { day: 'Thứ 3', date: '15', active: false },
          { day: 'Thứ 4', date: '16', active: false },
          { day: 'Thứ 5', date: '17', active: false },
          { day: 'Thứ 6', date: '18', active: false },
          { day: 'Thứ 7', date: '19', active: false },
          { day: 'CN', date: '20', active: false },
        ].map((item, index) => (
          <div 
            key={index}
            style={{ 
              minWidth: '70px', 
              padding: '0.75rem 0.5rem', 
              textAlign: 'center', 
              background: item.active ? 'white' : 'transparent',
              border: item.active ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-md)',
              color: item.active ? 'var(--primary-dark)' : 'var(--text-main)',
              fontWeight: item.active ? 700 : 500,
              cursor: 'pointer',
              boxShadow: item.active ? 'var(--shadow-sm)' : 'none'
            }}
          >
            <div style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>{item.day}</div>
            <div style={{ fontSize: '1.25rem' }}>{item.date}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
        
        {/* Left Column: Meals List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Breakfast */}
          <div className="glass-panel" style={{ padding: '1rem', display: 'flex', gap: '1rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>07:30</div>
            <div style={{ width: '100px', height: '100px', borderRadius: 'var(--radius-md)', background: 'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200) center/cover' }}></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Bữa sáng</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>Cháo yến mạch thịt bằm</h4>
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
                <div><span style={{ color: 'var(--text-muted)' }}>Năng lượng</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>320 Kcal</div></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Tinh bột</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>45g</div></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Đạm</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>12g</div></div>
              </div>
            </div>
          </div>

          {/* Lunch (Current) */}
          <div className="glass-panel" style={{ padding: '1rem', display: 'flex', gap: '1rem', position: 'relative', border: '2px solid var(--primary)', background: 'var(--surface-color)' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '0 var(--radius-md) 0 var(--radius-md)', fontSize: '0.95rem', fontWeight: 600 }}>
              Bữa hiện tại 12:00
            </div>
            <div style={{ width: '100px', height: '100px', borderRadius: 'var(--radius-md)', background: 'url(https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=200) center/cover' }}></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem', marginTop: '0.5rem' }}>Bữa trưa</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '0.75rem' }}>Cơm lứt + Cá lóc kho tộ + Rau luộc</h4>
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
                <div><span style={{ color: 'var(--text-muted)' }}>Năng lượng</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>550 Kcal</div></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Tinh bột</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>65g</div></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Đạm</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>32g</div></div>
              </div>
            </div>
          </div>

          {/* Snack */}
          <div className="glass-panel" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c', fontSize: '1.5rem' }}>
              
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.85rem', color: '#ea580c', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Bữa phụ</div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', margin: 0 }}>Sữa đậu nành không đường</h4>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>15:30</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>85 Kcal</div>
            </div>
          </div>

          {/* Dinner */}
          <div className="glass-panel" style={{ padding: '1rem', display: 'flex', gap: '1rem', position: 'relative', opacity: 0.7 }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>18:30</div>
            <div style={{ width: '100px', height: '100px', borderRadius: 'var(--radius-md)', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#cbd5e1' }}>
              ️
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Bữa tối</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>Canh bí đỏ thịt bằm + 1/2 bát cơm</h4>
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
                <div><span style={{ color: 'var(--text-muted)' }}>Năng lượng</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>410 Kcal</div></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Tinh bột</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>40g</div></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Đạm</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>15g</div></div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Nutrition Details & Advice */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Nutrition Details */}
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
              <span></span> Chi tiết dinh dưỡng <br/><span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Hôm nay)</span>
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  <span style={{ color: 'var(--text-main)' }}>Tinh bột (Glucid)</span>
                  <span><span style={{ color: 'var(--text-main)' }}>65g</span> <span style={{ color: 'var(--text-muted)' }}>/ 45%</span></span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '45%', backgroundColor: '#b45309' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  <span style={{ color: 'var(--text-main)' }}>Chất đạm (Protein)</span>
                  <span><span style={{ color: 'var(--text-main)' }}>32g</span> <span style={{ color: 'var(--text-muted)' }}>/ 30%</span></span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '30%', backgroundColor: '#b91c1c' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  <span style={{ color: 'var(--text-main)' }}>Chất béo (Lipid)</span>
                  <span><span style={{ color: 'var(--text-main)' }}>15g</span> <span style={{ color: 'var(--text-muted)' }}>/ 20%</span></span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '20%', backgroundColor: '#0284c7' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  <span style={{ color: 'var(--text-main)' }}>Chất xơ</span>
                  <span><span style={{ color: 'var(--text-main)' }}>12g</span> <span style={{ color: 'var(--text-muted)' }}>/ 5%</span></span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '5%', backgroundColor: '#0369a1' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Advice */}
          <div className="glass-panel" style={{ padding: '1.5rem', background: 'var(--primary-dark)', color: 'white', border: 'none' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', marginBottom: '1rem' }}>
              <span></span> Lời khuyên từ Bác sĩ Ảo
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', opacity: 0.9 }}>
              Cô Lan nhớ ăn kèm <strong style={{ color: '#6ee7b7' }}>nhiều rau luộc</strong> trong bữa trưa nay nhé! Chất xơ trong rau sẽ giúp cơ thể hấp thụ đường chậm hơn, rất tốt để ổn định đường huyết sau khi ăn.
            </p>
            <button className="btn" style={{ width: '100%', background: '#a7f3d0', color: 'var(--primary-dark)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <span></span> Tải danh sách đi chợ
            </button>
          </div>

          {/* Daily Progress */}
          <div className="glass-panel" style={{ padding: '1.25rem', background: 'var(--surface-color)', border: '1px solid #e0f2fe', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '2rem' }}></div>
            <div>
              <div style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Tiến độ hôm nay</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--primary-dark)', fontWeight: 500 }}>Cô đã hoàn thành 2/4 bữa ăn đúng giờ!</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
