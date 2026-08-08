"use client";
import { useState } from "react";
import Link from 'next/link';



const MENUS_DATA: Record<string, any[]> = {
  'Thứ 2': [
    { type: 'Bữa Sáng', title: 'Cháo gạo lứt thịt bằm', time: '07:30 AM', kcal: 320, G: 45, P: 15, L: 8, desc: '1 bát vừa (250ml), thêm 10g gừng sợi.', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Sáng', title: 'Sữa tươi không đường', time: '09:30 AM', kcal: 120, G: 10, P: 8, L: 4, desc: '1 hộp (180ml)', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Trưa', title: 'Cơm gạo lứt & Cá chẽm hấp', time: '12:00 PM', kcal: 580, G: 60, P: 40, L: 15, desc: '100g cơm, 150g cá chẽm, 200g rau xanh luộc.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Chiều', title: 'Sữa chua Hy Lạp & Dâu tây', time: '03:30 PM', kcal: 150, G: 12, P: 8, L: 5, desc: '1 hộp sữa chua không đường, 5 quả dâu.', img: 'https://images.unsplash.com/photo-1525203135335-74d272fc8d9c?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Tối', title: 'Canh sườn non rau ngót, Thịt ba chỉ rim', time: '06:30 PM', kcal: 410, G: 40, P: 15, L: 12, desc: '1/2 chén cơm gạo lứt, 100g sườn non, 50g thịt.', img: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Tối', title: 'Nửa quả lựu', time: '08:30 PM', kcal: 50, G: 10, P: 1, L: 0, desc: '1/2 quả lựu vừa.', img: 'https://images.unsplash.com/photo-1615486171448-4ffd3e6ab816?auto=format&fit=crop&q=80&w=300' },
  ],
  'Thứ 3': [
    { type: 'Bữa Sáng', title: 'Phở bò ức, ít bánh phở', time: '07:30 AM', kcal: 350, G: 40, P: 25, L: 10, desc: '1 bát phở nhỏ, 100g ức bò, nhiều hành lá.', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Sáng', title: 'Bánh mì đen', time: '09:30 AM', kcal: 140, G: 25, P: 4, L: 2, desc: '2 lát bánh mì đen.', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Trưa', title: 'Cơm gạo lứt & Thịt gà xé', time: '12:00 PM', kcal: 520, G: 55, P: 35, L: 12, desc: '100g cơm, 150g ức gà, 200g rau xà lách.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Chiều', title: 'Trà sen vàng ít đường', time: '03:30 PM', kcal: 120, G: 20, P: 2, L: 1, desc: '1 ly trà sen ít ngọt.', img: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Tối', title: 'Cá hồi áp chảo & Măng tây', time: '06:30 PM', kcal: 450, G: 20, P: 35, L: 25, desc: '150g cá hồi, 100g măng tây nướng.', img: 'https://images.unsplash.com/photo-1525203135335-74d272fc8d9c?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Tối', title: 'Bánh mì đen', time: '08:30 PM', kcal: 70, G: 12, P: 2, L: 1, desc: '1 lát bánh mì đen.', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300' },
  ],
  'Thứ 4': [
    { type: 'Bữa Sáng', title: 'Bánh mì đen & Trứng ốp la', time: '07:30 AM', kcal: 300, G: 35, P: 18, L: 10, desc: '2 lát bánh mì đen, 2 quả trứng.', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Sáng', title: 'Đu đủ chín', time: '09:30 AM', kcal: 60, G: 15, P: 1, L: 0, desc: '1/4 quả đu đủ.', img: 'https://images.unsplash.com/photo-1615486171448-4ffd3e6ab816?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Trưa', title: 'Salad Tôm & Bơ', time: '12:30 PM', kcal: 450, G: 20, P: 25, L: 30, desc: '150g tôm luộc, 1/2 quả bơ, rau xanh trộn.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Chiều', title: 'Sữa chua không đường', time: '03:30 PM', kcal: 85, G: 12, P: 5, L: 2, desc: '1 hộp.', img: 'https://images.unsplash.com/photo-1525203135335-74d272fc8d9c?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Tối', title: 'Thịt nướng & Đậu bắp nướng', time: '06:30 PM', kcal: 480, G: 35, P: 30, L: 15, desc: '150g thịt nướng, 100g đậu bắp.', img: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Tối', title: 'Táo tàu', time: '08:30 PM', kcal: 40, G: 10, P: 0, L: 0, desc: '1 quả nhỏ.', img: 'https://images.unsplash.com/photo-1615486171448-4ffd3e6ab816?auto=format&fit=crop&q=80&w=300' },
  ],
  'Thứ 5': [
    { type: 'Bữa Sáng', title: 'Ngũ cốc yến mạch & Sữa tươi', time: '08:00 AM', kcal: 380, G: 50, P: 12, L: 8, desc: '50g yến mạch, 200ml sữa tươi không đường.', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Sáng', title: 'Táo xanh', time: '09:30 AM', kcal: 95, G: 25, P: 0, L: 0, desc: '1 quả táo xanh.', img: 'https://images.unsplash.com/photo-1615486171448-4ffd3e6ab816?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Trưa', title: 'Bún gạo lứt & Bò xào', time: '12:00 PM', kcal: 550, G: 65, P: 30, L: 18, desc: '1 bát bún gạo lứt nhỏ, 150g bò xào cần tây.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Chiều', title: 'Trái cóc', time: '03:30 PM', kcal: 40, G: 10, P: 0, L: 0, desc: '1 quả cóc tươi.', img: 'https://images.unsplash.com/photo-1615486171448-4ffd3e6ab816?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Tối', title: 'Canh rong biển & Tôm', time: '07:00 PM', kcal: 300, G: 20, P: 25, L: 10, desc: '1 bát canh rong biển, 100g tôm lột vỏ.', img: 'https://images.unsplash.com/photo-1525203135335-74d272fc8d9c?auto=format&fit=crop&q=80&w=300' },
    { type: 'Bữa Phụ Tối', title: 'Sữa đậu nành', time: '08:30 PM', kcal: 180, G: 25, P: 8, L: 5, desc: '1 hộp sữa đậu nành ít đường.', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300' },
  ]
};

export default function MenusApprovalPage() {
  const [activeDay, setActiveDay] = useState('Thứ 2');
  const [showInsight, setShowInsight] = useState(false);
  const days = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5'];

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
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>BN-2023-4412 • Nam • 62 tuổi • Tiểu đường Type 2</div>
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
          <div 
            className="glass-panel" 
            style={{ padding: '1.5rem', border: '1px solid #e2e8f0', position: 'relative' }}
            onMouseEnter={() => setShowInsight(true)}
            onMouseLeave={() => setShowInsight(false)}
          >
            {/* NutriMed AI Insight Popup */}
            {showInsight && (
              <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '1rem', width: '320px', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)', padding: '1.5rem', border: '1px solid #e2e8f0', zIndex: 50 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--primary-dark)', fontWeight: 600, fontSize: '0.95rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
                  NutriMed AI Insight
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>
                  "Bệnh nhân có chỉ số đường huyết sau ăn lúc 20:00 ngày hôm qua đạt 9.2 mmol/L. Tôi đã tự động điều chỉnh giảm 15g Glucid cho bữa tối tiếp theo."
                </p>
              </div>
            )}
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
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
            {days.map(day => (
              <div 
                key={day}
                onClick={() => setActiveDay(day)}
                style={{ 
                  padding: '0.75rem 1rem', 
                  cursor: 'pointer', 
                  fontWeight: activeDay === day ? 600 : 500,
                  color: activeDay === day ? 'var(--primary-dark)' : 'var(--text-muted)',
                  borderBottom: activeDay === day ? '2px solid var(--primary)' : '2px solid transparent',
                  transition: 'all 0.2s'
                }}
              >
                {day}
              </div>
            ))}
          </div>

          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
            <span></span> Chi tiết Thực đơn {activeDay}
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {MENUS_DATA[activeDay].map((meal, index) => (
              <div key={index} className="glass-panel" style={{ padding: '1.25rem', border: '1px solid #e2e8f0', display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '120px', height: '100px', borderRadius: 'var(--radius-md)', background: `url(${meal.img}) center/cover`, position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', background: 'rgba(255,255,255,0.9)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, color: 'var(--primary-dark)' }}>{meal.time}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-main)' }}>{meal.type}: {meal.title}</h4>
                    <div style={{ fontWeight: 600, color: 'var(--primary)' }}>{meal.kcal} kcal</div>
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    {meal.desc}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    <span>G: <span style={{ color: 'var(--text-main)' }}>{meal.G}g</span></span>
                    <span>P: <span style={{ color: 'var(--text-main)' }}>{meal.P}g</span></span>
                    <span>L: <span style={{ color: 'var(--text-main)' }}>{meal.L}g</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
