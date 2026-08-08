"use client";
import { useState } from 'react';
import Link from 'next/link';

const MENUS = {
  'Thứ 2': [
    { type: 'Bữa sáng', time: '07:30', title: 'Rau mồng tơi + bắp cải luộc + 1 quả cà chua, 1/3 quả bơ, 2 bát cháo cá lóc', kcal: 320, carb: 45, protein: 12 },
    { type: 'Bữa phụ sáng', time: '09:30', title: 'Sữa tươi ko đường', kcal: 120, carb: 10, protein: 8 },
    { type: 'Bữa trưa', time: '12:00', title: '1/2 đĩa rau luộc, 2 quả trứng luộc, Cá kho, nửa bát cơm gạo lứt', kcal: 550, carb: 65, protein: 32, current: true },
    { type: 'Bữa phụ chiều', time: '15:30', title: 'Sữa chua ko đường', kcal: 85, carb: 12, protein: 5 },
    { type: 'Bữa tối', time: '18:30', title: 'Cà tím luộc, Canh sườn non rau ngót, Thịt ba chỉ rim, 1/2 chén cơm gạo lứt', kcal: 410, carb: 40, protein: 15 },
    { type: 'Bữa phụ tối', time: '20:30', title: '1/2 quả lựu', kcal: 50, carb: 10, protein: 1 }
  ],
  'Thứ 3': [
    { type: 'Bữa sáng', time: '07:30', title: 'Salad xà lách, cà chua, bơ, cá hồi. Khoai lang luộc (1 củ nhỏ)', kcal: 350, carb: 40, protein: 18 },
    { type: 'Bữa phụ sáng', time: '09:30', title: '2 lát bánh mì đen', kcal: 140, carb: 25, protein: 4 },
    { type: 'Bữa trưa', time: '12:00', title: 'Bí đỏ non luộc, Cá hồi sốt bơ tỏi, 1/2 chén cơm gạo lứt', kcal: 520, carb: 55, protein: 35 },
    { type: 'Bữa tối', time: '18:30', title: 'Rau muống luộc, Thịt vịt giả cầy, 1 bát bún gạo lứt, TM: 2 miếng ổi', kcal: 450, carb: 45, protein: 25 },
    { type: 'Bữa phụ tối', time: '20:30', title: '1 lát bánh mì đen', kcal: 70, carb: 12, protein: 2 }
  ],
  'Thứ 4': [
    { type: 'Bữa sáng', time: '07:30', title: 'Salad rau + cà chua, Thịt vịt, 1/2 chén bún gạo lứt', kcal: 340, carb: 42, protein: 20 },
    { type: 'Bữa phụ sáng', time: '09:30', title: '1/4 quả đu đủ', kcal: 60, carb: 15, protein: 1 },
    { type: 'Bữa trưa', time: '12:00', title: 'Ăn ngoài (có cháo)', kcal: 400, carb: 50, protein: 15 },
    { type: 'Bữa phụ chiều', time: '15:30', title: 'Trà sen vàng highland 30% đường', kcal: 120, carb: 20, protein: 2 },
    { type: 'Bữa tối', time: '18:30', title: 'Thịt nướng + đậu bắp nướng, TM: 1 quả táo tàu', kcal: 480, carb: 35, protein: 30 }
  ],
  'Thứ 5': [
    { type: 'Bữa sáng', time: '07:30', title: '1/3 quả bơ, Canh sườn non rau bina, 1/2 chén cơm gạo lứt, TM: 1/4 quả đu đủ chín', kcal: 380, carb: 48, protein: 15 },
    { type: 'Bữa phụ sáng', time: '09:30', title: 'Táo xanh', kcal: 95, carb: 25, protein: 0 },
    { type: 'Bữa trưa', time: '12:00', title: 'Khổ qua luộc chấm muối lạc, Canh mướp, Cá cơm kho thịt, 1/2 chén cơm gạo lứt', kcal: 510, carb: 60, protein: 28 },
    { type: 'Bữa phụ chiều', time: '15:30', title: '1 quả cóc', kcal: 40, carb: 10, protein: 0 },
    { type: 'Bữa tối', time: '18:30', title: 'Su hào, cà rốt luộc, Canh rau dền, Chả cá + xúc xích rán, 2 thìa cơm gạo lứt', kcal: 460, carb: 42, protein: 22 },
    { type: 'Bữa phụ tối', time: '20:30', title: '1 hộp sữa đậu nành ít đường, 1 miếng bánh mì đen', kcal: 180, carb: 25, protein: 8 }
  ],
  'Thứ 6': [
    { type: 'Bữa sáng', time: '07:30', title: '1 lát bánh mì nguyên cám + 2 quả trứng khuấy + bơ, TM: 2 quả mận xanh', kcal: 310, carb: 30, protein: 18 },
    { type: 'Bữa phụ sáng', time: '09:30', title: '1 bánh hoa hồng, 1 miếng phô mai con bò', kcal: 150, carb: 20, protein: 5 },
    { type: 'Bữa trưa', time: '12:00', title: 'Bầu luộc, Canh rau dền, Cá hồi áp chảo, 2 thìa cơm gạo lứt', kcal: 490, carb: 45, protein: 32 },
    { type: 'Bữa phụ chiều', time: '15:30', title: 'Sữa chua ko đường', kcal: 85, carb: 12, protein: 5 }
  ],
  'Thứ 7': [],
  'CN': []
};

export default function MenusPage() {
  const [activeDay, setActiveDay] = useState('Thứ 2');

  const days = [
    { day: 'Thứ 2', date: '14' },
    { day: 'Thứ 3', date: '15' },
    { day: 'Thứ 4', date: '16' },
    { day: 'Thứ 5', date: '17' },
    { day: 'Thứ 6', date: '18' },
    { day: 'Thứ 7', date: '19' },
    { day: 'CN', date: '20' },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', minHeight: '32px' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Chào bạn Nguyễn Văn A</span>
        <Link href="/patient" style={{ textDecoration: 'none' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-dark)', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', transition: 'opacity 0.2s' }}
               onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
               onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            NA
          </div>
        </Link>
      </header>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Thực đơn tuần này</h2>
        <p style={{ color: 'var(--text-muted)' }}>Chào bạn Nguyễn Văn A, hãy theo dõi thực đơn dinh dưỡng hôm nay nhé!</p>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {days.map((item, index) => {
          const isActive = activeDay === item.day;
          return (
            <div 
              key={index}
              onClick={() => setActiveDay(item.day)}
              style={{ 
                minWidth: '70px', 
                padding: '0.75rem 0.5rem', 
                textAlign: 'center', 
                background: isActive ? 'white' : 'transparent',
                border: isActive ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-md)',
                color: isActive ? 'var(--primary-dark)' : 'var(--text-main)',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
              }}
            >
              <div style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>{item.day}</div>
              <div style={{ fontSize: '1.25rem' }}>{item.date}</div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {MENUS[activeDay as keyof typeof MENUS]?.length === 0 && (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>Chưa có thực đơn cho ngày này.</div>
          )}
          {MENUS[activeDay as keyof typeof MENUS]?.map((meal, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '1rem', display: 'flex', gap: '1rem', position: 'relative', border: meal.current ? '2px solid var(--primary)' : '1px solid var(--glass-border)', background: meal.current ? 'var(--surface-color)' : 'var(--glass-bg)' }}>
              {meal.current && (
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '0 var(--radius-md) 0 var(--radius-md)', fontSize: '0.95rem', fontWeight: 600 }}>
                  Bữa hiện tại {meal.time}
                </div>
              )}
              {!meal.current && (
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>{meal.time}</div>
              )}
              
              <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-md)', background: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                🥗
              </div>
              
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem', marginTop: meal.current ? '0.5rem' : 0 }}>{meal.type}</div>
                <h4 style={{ fontSize: '1.1rem', color: meal.current ? 'var(--primary-dark)' : 'var(--text-main)', marginBottom: '0.75rem' }}>{meal.title}</h4>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
                  <div><span style={{ color: 'var(--text-muted)' }}>Năng lượng</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{meal.kcal} Kcal</div></div>
                  <div><span style={{ color: 'var(--text-muted)' }}>Tinh bột</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{meal.carb}g</div></div>
                  <div><span style={{ color: 'var(--text-muted)' }}>Đạm</span> <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{meal.protein}g</div></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
              <span>📊</span> Chi tiết dinh dưỡng <br/><span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Hôm nay)</span>
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  <span style={{ color: 'var(--text-main)' }}>Tinh bột (Glucid)</span>
                  <span><span style={{ color: 'var(--text-main)' }}>65g</span> <span style={{ color: 'var(--text-muted)' }}>/ 45%</span></span>
                </div>
                <div className="progress-bar-container" style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px' }}>
                  <div className="progress-bar-fill" style={{ width: '45%', backgroundColor: '#b45309', height: '100%', borderRadius: '4px' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  <span style={{ color: 'var(--text-main)' }}>Chất đạm (Protein)</span>
                  <span><span style={{ color: 'var(--text-main)' }}>32g</span> <span style={{ color: 'var(--text-muted)' }}>/ 30%</span></span>
                </div>
                <div className="progress-bar-container" style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px' }}>
                  <div className="progress-bar-fill" style={{ width: '30%', backgroundColor: '#b91c1c', height: '100%', borderRadius: '4px' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  <span style={{ color: 'var(--text-main)' }}>Chất béo (Lipid)</span>
                  <span><span style={{ color: 'var(--text-main)' }}>15g</span> <span style={{ color: 'var(--text-muted)' }}>/ 20%</span></span>
                </div>
                <div className="progress-bar-container" style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px' }}>
                  <div className="progress-bar-fill" style={{ width: '20%', backgroundColor: '#0284c7', height: '100%', borderRadius: '4px' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  <span style={{ color: 'var(--text-main)' }}>Chất xơ</span>
                  <span><span style={{ color: 'var(--text-main)' }}>12g</span> <span style={{ color: 'var(--text-muted)' }}>/ 5%</span></span>
                </div>
                <div className="progress-bar-container" style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px' }}>
                  <div className="progress-bar-fill" style={{ width: '5%', backgroundColor: '#0369a1', height: '100%', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', background: 'var(--primary-dark)', color: 'white', border: 'none' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', marginBottom: '1rem' }}>
              <span>💡</span> Lời khuyên từ Bác sĩ Ảo
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', opacity: 0.9 }}>
              Bạn nhớ ăn kèm <strong style={{ color: '#6ee7b7' }}>nhiều rau luộc</strong> trong bữa trưa nay nhé! Chất xơ trong rau sẽ giúp cơ thể hấp thụ đường chậm hơn, rất tốt để ổn định đường huyết sau khi ăn.
            </p>
            <button className="btn" style={{ width: '100%', background: '#a7f3d0', color: 'var(--primary-dark)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <span>🛒</span> Tải danh sách đi chợ
            </button>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem', background: 'var(--surface-color)', border: '1px solid #e0f2fe', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '2rem' }}>🏆</div>
            <div>
              <div style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Tiến độ hôm nay</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--primary-dark)', fontWeight: 500 }}>Bạn đã hoàn thành 2/4 bữa ăn đúng giờ!</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
