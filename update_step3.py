import re

filepath = r'd:\VinPro\nutrition-agent-web\src\app\patient\onboarding\page.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

left_old = """            {step === 3 && (
              <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                    Kết nối thiết bị đeo & Ứng dụng
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem' }}>Đồng bộ dữ liệu sức khỏe để AI theo dõi chỉ số vận động và nhịp tim của bạn.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {/* Apple Health */}
                  <div style={{ background: 'var(--surface-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ color: '#ef4444', fontSize: '1.5rem' }}></span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '9999px' }}>Chưa kết nối</span>
                    </div>
                    <div style={{ fontWeight: 600, alignSelf: 'flex-start', marginBottom: '1rem' }}>Apple Health</div>
                    <button className="btn" style={{ width: '100%', background: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: 600 }}>Kết nối</button>
                  </div>

                  {/* Google Fit */}
                  <div style={{ background: 'var(--surface-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ color: '#3b82f6', fontSize: '1.5rem' }}></span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '9999px' }}>Chưa kết nối</span>
                    </div>
                    <div style={{ fontWeight: 600, alignSelf: 'flex-start', marginBottom: '1rem' }}>Google Fit</div>
                    <button className="btn" style={{ width: '100%', background: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: 600 }}>Kết nối</button>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div style={{ background: 'var(--surface-color)', padding: '1rem 1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <input type="checkbox" style={{ marginTop: '0.25rem', width: '1.2rem', height: '1.2rem' }} />
                  <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: 0 }}>
                    Tôi xác nhận đã đọc và đồng ý với <Link href="#" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Chính sách bảo mật dữ liệu</Link>. 
                    Tôi hiểu rằng AI chỉ hỗ trợ tư vấn và không thay thế hoàn toàn chỉ định chuyên môn từ bác sĩ.
                  </p>
                </div>

                <Link href="/patient" className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem', borderRadius: 'var(--radius-lg)' }}>
                  BẮT ĐẦU TRẢI NGHIỆM →
                </Link>
              </div>
            )}"""

left_new = """            {step === 3 && (
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
            )}"""

right_old = """            {step === 3 && (
              <>
                <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', background: 'white' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                    ✓
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 600 }}>Sẵn sàng!</h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    "Dữ liệu từ thiết bị đeo giúp AI tinh chỉnh thực đơn theo mức độ vận động thực tế của bạn, đảm bảo dinh dưỡng cân bằng và chính xác."
                  </p>
                </div>

                <div style={{ padding: 0, overflow: 'hidden', borderRadius: 'var(--radius-lg)', position: 'relative' }}>
                  <div style={{ width: '100%', height: '200px', background: 'url(https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&q=80&w=400) center/cover' }}></div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>CÁ NHÂN HÓA TỐI ĐA</div>
                    <div style={{ fontSize: '1rem', color: 'white', fontWeight: 600 }}>Hành trình sức khỏe của bạn bắt đầu ngay bây giờ.</div>
                  </div>
                </div>
              </>
            )}"""

right_new = """            {step === 3 && (
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
            )}"""

content = content.replace(left_old, left_new)
content = content.replace(right_old, right_new)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated step 3 layout")
