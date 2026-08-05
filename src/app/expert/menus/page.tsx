import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thực đơn cần duyệt - NutriMed AI',
};

export default function MenusApprovalPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '2rem', height: 'calc(100vh - 120px)' }}>
      
      {/* Left Column: List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderRight: '1px solid #e2e8f0', paddingRight: '1.5rem', overflowY: 'auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Chờ phê duyệt
            <span style={{ background: '#f1f5f9', color: 'var(--text-main)', fontSize: '0.95rem', padding: '0.1rem 0.5rem', borderRadius: '9999px' }}>12</span>
          </h2>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            Lọc
          </button>
        </div>

        {/* Item 1 (Active) */}
        <div className="glass-panel" style={{ padding: '1rem', border: '2px solid var(--primary)', cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <div style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>Nguyễn Văn An</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>10:45 AM</div>
          </div>
          <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Thực đơn Tuần 42</div>
          <div style={{ background: 'var(--surface-color)', color: 'var(--primary-dark)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', display: 'flex', gap: '0.5rem' }}>
            <span></span>
            <span>AI đề xuất giảm 10% Carb do đường huyết tăng nhẹ trong 3 ngày qua.</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="glass-panel" style={{ padding: '1rem', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Trần Thị Bích</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Hôm qua</div>
          </div>
          <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Thực đơn Phục hồi Tim mạch</div>
          <div style={{ background: '#f1f5f9', color: 'var(--text-main)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', display: 'flex', gap: '0.5rem' }}>
            <span style={{ color: '#3b82f6' }}>ℹ️</span>
            <span>Thực đơn tiêu chuẩn dựa trên chỉ số BMI mới cập nhật.</span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="glass-panel" style={{ padding: '1rem', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Lê Minh Đức</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>15/10/2023</div>
          </div>
          <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Thực đơn Kiểm soát Thận</div>
          <div style={{ background: '#fef2f2', color: '#991b1b', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', display: 'flex', gap: '0.5rem' }}>
            <span>️</span>
            <span>Cần chú ý lượng Kali vượt ngưỡng 5% so với tháng trước.</span>
          </div>
        </div>

        {/* Item 4 */}
        <div className="glass-panel" style={{ padding: '1rem', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Phạm Hoàng Nam</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>14/10/2023</div>
          </div>
          <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Thực đơn Tăng cơ 2500kcal</div>
          <div style={{ background: '#f1f5f9', color: 'var(--text-main)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', display: 'flex', gap: '0.5rem' }}>
            <span style={{ color: 'var(--success)' }}>️</span>
            <span>Đã điều chỉnh Protein theo cường độ tập luyện mới.</span>
          </div>
        </div>
      </div>

      {/* Right Column: Detail */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', overflowY: 'auto', paddingRight: '1rem', position: 'relative' }}>
        
        {/* Detail Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150) center/cover' }}></div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-main)' }}>Nguyễn Văn An</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>BN-2023-4412 • Nam • 62 tuổi • Đái tháo đường Type 2</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline" style={{ color: '#dc2626', borderColor: '#fca5a5', background: 'white' }}>Từ chối</button>
            <button className="btn btn-outline" style={{ color: '#3b82f6', borderColor: '#93c5fd', background: 'white' }}>Chỉnh sửa</button>
            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span></span> Phê duyệt nhanh
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem' }}>
          {/* Total Calo */}
          <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>TỔNG CALO</div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
              1,850 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>kcal</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#ea580c', fontSize: '0.95rem', fontWeight: 500 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
              <span>-150 kcal so với t.trước</span>
            </div>
          </div>

          {/* Nutrition Ratio */}
          <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>TỶ LỆ DINH DƯỠNG (P:L:C) 20% : 25% : 55%</div>
            
            <div style={{ display: 'flex', height: '12px', borderRadius: '6px', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <div style={{ width: '20%', background: '#0284c7' }}></div>
              <div style={{ width: '25%', background: '#3b82f6' }}></div>
              <div style={{ width: '55%', background: '#b45309' }}></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7' }}></span>
                <span style={{ color: 'var(--text-muted)' }}>Protein</span>
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>(92g)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}></span>
                <span style={{ color: 'var(--text-muted)' }}>Lipid</span>
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>(51g)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#b45309' }}></span>
                <span style={{ color: 'var(--text-muted)' }}>Glucid</span>
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>(254g)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Meals List */}
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
            <span></span> Chi tiết Thực đơn Thứ Hai
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Breakfast */}
            <div className="glass-panel" style={{ padding: '1.25rem', border: '1px solid #e2e8f0', display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '120px', height: '100px', borderRadius: 'var(--radius-md)', background: 'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300) center/cover', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', background: 'rgba(255,255,255,0.9)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, color: 'var(--primary-dark)' }}>07:30 AM</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-main)' }}>Bữa Sáng: Cháo gạo lứt thịt bằm</h4>
                  <div style={{ fontWeight: 600, color: 'var(--primary)' }}>320 kcal</div>
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  1 bát vừa (250ml), thêm 10g gừng sợi.
                </div>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  <span>G: <span style={{ color: 'var(--text-main)' }}>45g</span></span>
                  <span>P: <span style={{ color: 'var(--text-main)' }}>15g</span></span>
                  <span>L: <span style={{ color: 'var(--text-main)' }}>8g</span></span>
                </div>
              </div>
            </div>

            {/* Lunch */}
            <div className="glass-panel" style={{ padding: '1.25rem', border: '1px solid #e2e8f0', display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '120px', height: '100px', borderRadius: 'var(--radius-md)', background: 'url(https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=300) center/cover', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', background: 'rgba(255,255,255,0.9)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, color: 'var(--primary-dark)' }}>12:00 PM</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-main)' }}>Bữa Trưa: Cơm gạo lứt & Cá chẽm hấp</h4>
                  <div style={{ fontWeight: 600, color: 'var(--primary)' }}>580 kcal</div>
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  100g cơm, 150g cá chẽm, 200g rau xanh luộc.
                </div>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  <span>G: <span style={{ color: 'var(--text-main)' }}>60g</span></span>
                  <span>P: <span style={{ color: 'var(--text-main)' }}>40g</span></span>
                  <span>L: <span style={{ color: 'var(--text-main)' }}>15g</span></span>
                </div>
              </div>
            </div>

            {/* Snack */}
            <div className="glass-panel" style={{ padding: '1.25rem', border: '1px solid #e2e8f0', display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '120px', height: '100px', borderRadius: 'var(--radius-md)', background: 'url(https://images.unsplash.com/photo-1525203135335-74d272fc8d9c?auto=format&fit=crop&q=80&w=300) center/cover', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', background: 'rgba(255,255,255,0.9)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, color: 'var(--primary-dark)' }}>03:30 PM</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-main)' }}>Bữa Phụ: Sữa chua Hy Lạp & Dâu tây</h4>
                  <div style={{ fontWeight: 600, color: 'var(--primary)' }}>150 kcal</div>
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  1 hộp sữa chua không đường, 5 quả dâu.
                </div>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  <span>G: <span style={{ color: 'var(--text-main)' }}>12g</span></span>
                  <span>P: <span style={{ color: 'var(--text-main)' }}>8g</span></span>
                  <span>L: <span style={{ color: 'var(--text-main)' }}>5g</span></span>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* NutriMed AI Insight Popup (Positioned over Lunch realistically, but fixed here for demo) */}
        <div style={{ position: 'absolute', bottom: '80px', right: '40px', width: '320px', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)', padding: '1.5rem', border: '1px solid #e2e8f0', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--primary-dark)', fontWeight: 600, fontSize: '0.95rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
            NutriMed AI Insight
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>
            "Bệnh nhân có chỉ số đường huyết sau ăn lúc 20:00 ngày hôm qua đạt 9.2 mmol/L. Tôi đã tự động điều chỉnh giảm 15g Glucid cho bữa tối tiếp theo."
          </p>
        </div>

      </div>
    </div>
  );
}
