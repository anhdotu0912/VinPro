import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Báo cáo Sức khỏe - Sống Khỏe',
};

export default function ReportsPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '2rem' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '0.75rem' }}>Báo cáo Sức khỏe</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', fontSize: '0.875rem', color: 'var(--text-main)', cursor: 'pointer' }}>
            <span> Tuần này: 14/10 - 20/10</span>
            <span style={{ fontSize: '0.85rem' }}>▼</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white' }}>
            <span></span> PDF
          </button>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span></span> Chia sẻ
          </button>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {/* Sức khỏe Tổng thể */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '2rem', alignSelf: 'flex-start' }}>Sức khỏe Tổng thể</h3>
          
          <div className="circular-progress" style={{ width: '160px', height: '160px', marginBottom: '2rem' }}>
            <svg width="160" height="160" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r="70" fill="none" stroke="#f1f5f9" strokeWidth="12"></circle>
              <circle cx="80" cy="80" r="70" fill="none" stroke="var(--primary-dark)" strokeWidth="12" strokeDasharray="439.8" strokeDashoffset="65.97" strokeLinecap="round" style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}></circle>
            </svg>
            <div className="circular-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-dark)', lineHeight: 1 }}>85</span>
              <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>trên 100</span>
            </div>
          </div>
          
          <div style={{ background: 'var(--surface-color)', color: '#0369a1', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.5 }}>
            "Tuần này cô đã kiểm soát đường huyết rất tốt! Hãy tiếp tục duy trì thực đơn ít béo này nhé."
          </div>
        </div>

        {/* Biểu đồ Đường huyết */}
        <div className="glass-panel" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>Biểu đồ Đường huyết (mmol/L)</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 500 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#86efac' }}></span>
              Vùng an toàn: 4.4 - 7.2
            </div>
          </div>
          
          <div style={{ flex: 1, position: 'relative', minHeight: '220px' }}>
            {/* SVG Chart */}
            <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              {/* Y-axis labels */}
              <text x="-10" y="200" fontSize="12" fill="var(--text-muted)" textAnchor="end">0</text>
              <text x="-10" y="156" fontSize="12" fill="var(--text-muted)" textAnchor="end">4.4</text>
              <text x="-10" y="100" fontSize="12" fill="var(--text-muted)" textAnchor="end">7.2</text>
              <text x="-10" y="44" fontSize="12" fill="var(--text-muted)" textAnchor="end">10</text>
              
              {/* Horizontal Grid lines */}
              <line x1="10" y1="200" x2="600" y2="200" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="10" y1="156" x2="600" y2="156" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="10" y1="100" x2="600" y2="100" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="10" y1="44" x2="600" y2="44" stroke="#e2e8f0" strokeWidth="1" />
              
              {/* Safe zone band (4.4 to 7.2 -> y from 156 to 100) */}
              <rect x="10" y="100" width="590" height="56" fill="#bae6fd" opacity="0.4" />
              
              {/* Data line (smooth path) */}
              <path d="M 50 130 C 80 130, 100 104, 130 104 C 160 104, 190 134, 210 134 C 240 134, 270 84, 290 84 C 320 84, 350 144, 370 144 C 400 144, 430 74, 450 74 C 480 74, 510 164, 530 164 C 550 164, 580 114, 590 114" fill="none" stroke="var(--primary-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Data points */}
              <circle cx="50" cy="130" r="4" fill="var(--primary-dark)" />
              <circle cx="130" cy="104" r="4" fill="var(--primary-dark)" />
              <circle cx="210" cy="134" r="4" fill="var(--primary-dark)" />
              <circle cx="290" cy="84" r="4" fill="var(--primary-dark)" />
              <circle cx="370" cy="144" r="4" fill="var(--primary-dark)" />
              <circle cx="450" cy="74" r="4" fill="var(--primary-dark)" />
              <circle cx="530" cy="164" r="4" fill="var(--primary-dark)" />
              <circle cx="590" cy="114" r="4" fill="var(--primary-dark)" />
            </svg>
            
            {/* X-axis labels */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '30px', marginRight: '10px', marginTop: '10px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              <span>Thứ 2</span>
              <span>Thứ 3</span>
              <span>Thứ 4</span>
              <span>Thứ 5</span>
              <span>Thứ 6</span>
              <span>Thứ 7</span>
              <span>CN</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {/* Lời khuyên */}
        <div className="glass-panel" style={{ background: 'var(--primary-dark)', color: 'white', padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
          {/* Faint cross background */}
          <div style={{ position: 'absolute', top: '10%', right: '10%', fontSize: '10rem', opacity: 0.05, lineHeight: 1 }}>+</div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
              
            </div>
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Lời khuyên từ Bác sĩ ảo</h3>
          </div>
          
          <p style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem', opacity: 0.9, position: 'relative', zIndex: 1 }}>
            Dựa trên dữ liệu tuần này, cô Lan đang thích nghi rất tốt với chế độ ăn mới. Bác sĩ khuyên cô nên duy trì việc đi bộ nhẹ khoảng 15 phút sau mỗi bữa tối để giúp cơ thể ổn định đường huyết tự nhiên hiệu quả hơn nữa.
          </p>
          
          <button style={{ alignSelf: 'flex-start', background: 'white', color: 'var(--primary-dark)', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Xem chi tiết bài tập →
          </button>
        </div>

        {/* Cân nặng & Calo + Tuân thủ 7 ngày */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>CÂN NẶNG</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>58 <span style={{ fontSize: '1rem', fontWeight: 500 }}>kg</span></div>
              <div style={{ background: '#e0f2fe', color: '#0284c7', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.95rem', fontWeight: 600 }}>~ -0.5kg</div>
            </div>
            
            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>CALO TB/NGÀY</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>1,450 <span style={{ fontSize: '1rem', fontWeight: 500 }}>kcal</span></div>
              <div style={{ background: '#ffedd5', color: '#ea580c', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.95rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Đạt mục tiêu
              </div>
            </div>
          </div>
          
          <div className="glass-panel" style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Tuân thủ thực đơn 7 ngày qua</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
              {[2, 3, 4, 5, 6, 7].map(day => (
                <div key={day} style={{ flex: 1, aspectRatio: '1/1', background: 'var(--primary-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>
                  {day}
                </div>
              ))}
              <div style={{ flex: 1, aspectRatio: '1/1', background: 'var(--warning)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>
                CN
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chi tiết tuân thủ theo bữa ăn */}
      <div className="glass-panel" style={{ padding: '2rem 1.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '2rem' }}>Chi tiết tuân thủ theo bữa ăn</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
          {/* Sáng */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c' }}>️</span>
                Bữa Sáng
              </div>
              <span style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>92%</span>
            </div>
            <div className="progress-bar-container" style={{ marginBottom: '1rem' }}>
              <div className="progress-bar-fill progress-bar-primary" style={{ width: '92%' }}></div>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Rất tốt, cô luôn ăn sáng đúng giờ và đúng định lượng.
            </p>
          </div>

          {/* Trưa */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}></span>
                Bữa Trưa
              </div>
              <span style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>85%</span>
            </div>
            <div className="progress-bar-container" style={{ marginBottom: '1rem' }}>
              <div className="progress-bar-fill progress-bar-primary" style={{ width: '85%' }}></div>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Thỉnh thoảng cô ăn hơi nhiều tinh bột hơn mức khuyến nghị.
            </p>
          </div>

          {/* Tối */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}></span>
                Bữa Tối
              </div>
              <span style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>78%</span>
            </div>
            <div className="progress-bar-container" style={{ marginBottom: '1rem' }}>
              <div className="progress-bar-fill progress-bar-primary" style={{ width: '78%' }}></div>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Cần giảm bớt gia vị mặn vào bữa tối để tránh tích nước.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
