'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="patient-auth-container" style={{ padding: '3rem 2rem', alignItems: 'flex-start' }}>
      <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Header */}
        <header style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-dark)', fontWeight: 700, fontSize: '1.25rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="var(--primary)" />
                <path d="M2 17L12 22L22 17" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Healthcare AI
            </div>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
              <span style={{ cursor: 'pointer', fontWeight: 600 }}>Trợ giúp</span>
              <span style={{ cursor: 'pointer', fontWeight: 600 }}>Tài khoản</span>
            </div>
          </div>
          
          <h2 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', margin: '0 0 2rem 0', fontWeight: 600 }}>
            {step === 1 && 'Chào mừng bạn! Hãy cho Trợ lý AI biết về sức khỏe của bạn.'}
            {step === 2 && 'Thông tin sức khỏe'}
            {step === 3 && 'Kết nối thiết bị & Hoàn tất'}
          </h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '0.75rem' }}>
            <span>
              {step === 1 && 'Bước 1/3: Thông tin cơ bản'}
              {step === 2 && 'Bước 2/3: Chỉ số lâm sàng'}
              {step === 3 && 'Bước 3/3: Kết nối'}
            </span>
            <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>
              {step === 1 && '33%'}
              {step === 2 && '66%'}
              {step === 3 && '100%'}
            </span>
          </div>
          
          <div className="progress-bar-container" style={{ height: '6px', background: 'var(--primary-light)' }}>
            <div className="progress-bar-fill progress-bar-primary" style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}></div>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '2.5rem' }}>
          
          {/* Main Form Area */}
          <div>
            {step === 1 && (
              <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Personal Info */}
                <div style={{ background: 'var(--surface-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Thông tin cá nhân
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label className="form-label" style={{ color: 'var(--text-muted)' }}>Tuổi</label>
                      <input type="number" className="form-input" placeholder="Ví dụ: 35" />
                    </div>
                    <div>
                      <label className="form-label" style={{ color: 'var(--text-muted)' }}>Giới tính</label>
                      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                          <input type="radio" name="gender" /> Nam
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                          <input type="radio" name="gender" /> Nữ
                        </label>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label className="form-label" style={{ color: 'var(--text-muted)' }}>Chiều cao (cm)</label>
                      <input type="number" className="form-input" placeholder="Ví dụ: 170" />
                    </div>
                    <div>
                      <label className="form-label" style={{ color: 'var(--text-muted)' }}>Cân nặng (kg)</label>
                      <input type="number" className="form-input" placeholder="Ví dụ: 65" />
                    </div>
                  </div>
                </div>

                {/* Health Status */}
                <div style={{ background: 'var(--surface-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><path d="M12 9v6"></path><path d="M9 12h6"></path></svg> Tình trạng sức khỏe
                  </h3>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label" style={{ color: 'var(--text-muted)' }}>Bệnh lý đang mắc</label>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span className="pill" style={{ background: 'var(--primary)', color: 'white', borderColor: 'var(--primary)' }}>Tiểu đường Type 2</span>
                      <span className="pill" style={{ color: 'var(--text-muted)' }}>Tim mạch</span>
                      <span className="pill" style={{ color: 'var(--text-muted)' }}>Gout</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label" style={{ color: 'var(--text-muted)' }}>Thuốc đang sử dụng</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input type="text" className="form-input" placeholder="Nhập tên thuốc, ví dụ: Metformin..." />
                      <button className="btn" style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: 600, border: 'none', borderRadius: 'var(--radius-md)', padding: '0 1.5rem', whiteSpace: 'nowrap' }}>+ Thêm thuốc</button>
                    </div>
                    <div style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', marginTop: '0.75rem', fontSize: '0.95rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>i</span> AI sẽ phân tích các tương tác giữa Thuốc và Thực phẩm để đảm bảo an toàn cho bạn.
                    </div>
                  </div>

                  <div>
                    <label className="form-label" style={{ color: 'var(--text-muted)' }}>Dị ứng thực phẩm</label>
                    <input type="text" className="form-input" placeholder="Ví dụ: Hải sản, Đậu phộng, Sữa..." />
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)} 
                  className="btn" 
                  style={{ width: '100%', padding: '1rem', fontSize: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--primary-dark)', color: 'white', fontWeight: 600, marginTop: '1rem' }}
                >
                  HOÀN THÀNH & TẠO THỰC ĐƠN →
                </button>
                <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Dữ liệu sức khỏe của bạn được bảo mật tuyệt đối bởi mã hóa AES-256.
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Clinical Indices */}
                <div style={{ background: 'var(--surface-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
                    Chỉ số lâm sàng gần đây
                  </h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label className="form-label" style={{ color: 'var(--text-muted)' }}>Huyết áp (mmHg)</label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="number" className="form-input" placeholder="Tâm thu" />
                        <span style={{ color: 'var(--text-muted)' }}>/</span>
                        <input type="number" className="form-input" placeholder="Tâm trương" />
                      </div>
                    </div>
                    <div>
                      <label className="form-label" style={{ color: 'var(--text-muted)' }}>Nhịp tim (bpm)</label>
                      <input type="number" className="form-input" placeholder="Nhập nhịp tim" />
                    </div>
                  </div>

                  <div>
                    <label className="form-label" style={{ color: 'var(--text-muted)' }}>Đường huyết lúc đói</label>
                    <div style={{ display: 'flex' }}>
                      <input type="number" className="form-input" placeholder="Giá trị" />
                      <select className="form-input" style={{ width: '120px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 'none', background: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: 500, border: 'none' }}>
                        <option>mmol/L</option>
                        <option>mg/dL</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Health Goals */}
                <div style={{ background: 'var(--surface-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
                    Mục tiêu sức khỏe
                  </h3>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label" style={{ color: 'var(--text-muted)' }}>Lựa chọn ưu tiên</label>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span className="pill" style={{ background: 'var(--primary)', color: 'white', borderColor: 'var(--primary)' }}>Giảm cân</span>
                      <span className="pill" style={{ color: 'var(--text-muted)' }}>Duy trì sức khỏe</span>
                      <span className="pill" style={{ color: 'var(--text-muted)' }}>Tăng cơ</span>
                      <span className="pill" style={{ color: 'var(--text-muted)' }}>Kiểm soát đường huyết</span>
                    </div>
                  </div>

                  <div>
                    <label className="form-label" style={{ color: 'var(--text-muted)' }}>Cân nặng mục tiêu (kg)</label>
                    <input type="number" className="form-input" placeholder="Nhập cân nặng mong muốn" style={{ maxWidth: '300px' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginTop: '1rem' }}>
                  <button onClick={() => setStep(1)} className="btn btn-outline" style={{ padding: '1rem 2.5rem', borderRadius: 'var(--radius-md)' }}>
                    QUAY LẠI
                  </button>
                  <button onClick={() => setStep(3)} className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: 'var(--radius-md)' }}>
                    TIẾP TỤC BƯỚC 3 →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '1rem', fontWeight: 700 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    Kết nối thiết bị đeo & Ứng dụng
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Đồng bộ dữ liệu sức khỏe để AI theo dõi chỉ số vận động và nhịp tim của bạn.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  {/* Apple Health */}
                  <div style={{ background: 'var(--surface-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                      <span style={{ color: '#ef4444' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: '#f1f5f9', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 500 }}>Chưa kết nối</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1.2rem', alignSelf: 'flex-start', marginBottom: '1.5rem' }}>Apple Health</div>
                    <button className="btn" style={{ width: '100%', background: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: 600, padding: '0.85rem', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }}>Kết nối</button>
                  </div>

                  {/* Google Fit */}
                  <div style={{ background: 'var(--surface-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                      <span style={{ color: '#3b82f6' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14v6a1 1 0 0 1-1 1H8v-7H5l7-7 7 7h-3v7h-4v-6h-2z"/></svg>
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: '#f1f5f9', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 500 }}>Chưa kết nối</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1.2rem', alignSelf: 'flex-start', marginBottom: '1.5rem' }}>Google Fit</div>
                    <button className="btn" style={{ width: '100%', background: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: 600, padding: '0.85rem', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }}>Kết nối</button>
                  </div>

                  {/* Garmin Connect */}
                  <div style={{ background: 'var(--surface-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                      <span style={{ color: '#111827' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 2 15 12 12 22 9 12 12 2"></polygon></svg>
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: '#f1f5f9', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 500 }}>Chưa kết nối</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1.2rem', alignSelf: 'flex-start', marginBottom: '1.5rem' }}>Garmin Connect</div>
                    <button className="btn" style={{ width: '100%', background: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: 600, padding: '0.85rem', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }}>Kết nối</button>
                  </div>

                  {/* Fitbit */}
                  <div style={{ background: 'var(--surface-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                      <span style={{ color: '#059669' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/></svg>
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: '#f1f5f9', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 500 }}>Chưa kết nối</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1.2rem', alignSelf: 'flex-start', marginBottom: '1.5rem' }}>Fitbit</div>
                    <button className="btn" style={{ width: '100%', background: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: 600, padding: '0.85rem', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }}>Kết nối</button>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div style={{ background: 'var(--surface-color)', padding: '1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <input type="checkbox" style={{ marginTop: '0.35rem', width: '1.4rem', height: '1.4rem' }} />
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                    Tôi xác nhận đã đọc và đồng ý với <Link href="#" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Chính sách bảo mật dữ liệu</Link>. 
                    Tôi hiểu rằng AI chỉ hỗ trợ tư vấn và không thay thế hoàn toàn chỉ định chuyên môn từ bác sĩ điều trị.
                  </p>
                </div>

                <Link href="/patient" className="btn btn-primary" style={{ width: '100%', padding: '1.5rem', fontSize: '1.35rem', borderRadius: 'var(--radius-lg)', fontWeight: 700, marginTop: '1rem' }}>
                  BẮT ĐẦU TRẢI NGHIỆM →
                </Link>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {(step === 1 || step === 2) && (
              <>
                <div style={{ background: 'var(--surface-color)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', border: '1px solid var(--glass-border)' }}>
                  <div style={{ width: '100%', height: '180px', background: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400) center/cover', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}></div>
                  <h4 style={{ color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: 600 }}>
                    {step === 1 ? 'Tại sao cần thông tin này?' : 'Tại sao cần chỉ số này?'}
                  </h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {step === 1 
                      ? 'Thông tin của bạn giúp AI tính toán chỉ số BMI và nhu cầu dinh dưỡng chính xác nhất, đặc biệt là khi bạn có các bệnh lý nền như Tiểu đường.' 
                      : 'AI Guardian sử dụng các chỉ số này để tính toán nhu cầu dinh dưỡng chính xác và đưa ra thực đơn cá nhân hóa an toàn, đặc biệt nếu bạn đang có các vấn đề về huyết áp hoặc đường huyết.'}
                  </p>
                </div>
                
                <div style={{ background: 'var(--primary-dark)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', color: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: 600 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="16" y1="16" x2="16.01" y2="16"></line></svg> Mẹo từ AI Guardian
                  </h4>
                  <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.9 }}>
                    {step === 1 
                      ? 'Đừng quên ghi rõ liều lượng thuốc để tôi có thể gợi ý giờ ăn tối ưu cho việc hấp thu thuốc của bạn nhé!' 
                      : 'Để có kết số huyết áp chính xác nhất, hãy nghỉ ngơi tĩnh lặng trong 5 phút trước khi đo và giữ bắp tay ngang tầm với tim của bạn.'}
                  </p>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', background: 'white' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '1.25rem', fontWeight: 700 }}>Sẵn sàng!</h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    "Dữ liệu từ thiết bị đeo giúp AI tinh chỉnh thực đơn theo mức độ vận động thực tế của bạn, đảm bảo dinh dưỡng cân bằng và chính xác."
                  </p>
                </div>

                <div style={{ padding: 0, overflow: 'hidden', borderRadius: 'var(--radius-lg)', position: 'relative', height: '220px' }}>
                  <div style={{ width: '100%', height: '100%', background: 'url(https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&q=80&w=600) center/cover' }}></div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', fontWeight: 600 }}>CÁ NHÂN HÓA TỐI ĐA</div>
                    <div style={{ fontSize: '1.25rem', color: 'white', fontWeight: 700, lineHeight: 1.4 }}>Hành trình sức khỏe của bạn bắt đầu ngay bây giờ.</div>
                  </div>
                </div>

                <div style={{ background: '#0f172a', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white', fontWeight: 600, fontSize: '1.05rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
                  Hệ thống AI đang trực tuyến
                </div>
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
