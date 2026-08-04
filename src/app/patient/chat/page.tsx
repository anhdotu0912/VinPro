import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trợ lý AI - NutriAgent',
};

export default function ChatPage() {
  return (
    <div style={{ height: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ marginBottom: '1rem' }}>
        <h2>Trợ lý Dinh dưỡng AI</h2>
        <p style={{ color: 'var(--text-muted)' }}>Hỏi tôi bất cứ điều gì về chế độ ăn của bạn!</p>
      </header>

      <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '1rem' }}>
          {/* AI Message */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-dark)' }}>
              AI
            </div>
            <div style={{ background: 'var(--bg-color)', padding: '1rem', borderRadius: '0 1rem 1rem 1rem', border: '1px solid var(--glass-border)', maxWidth: '80%' }}>
              <p>Chào bạn! Tôi là NutriAgent. Dựa trên hồ sơ Đái tháo đường type 2 của bạn, đường huyết mục tiêu của chúng ta là &lt; 7.0 mmol/L. Bạn cần hỗ trợ gì hôm nay?</p>
            </div>
          </div>

          {/* User Message */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexDirection: 'row-reverse' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 600 }}>
              BN
            </div>
            <div style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '1rem 0 1rem 1rem', maxWidth: '80%', boxShadow: 'var(--shadow-md)' }}>
              <p>Chiều nay tôi đi sinh nhật bạn, tôi có thể ăn 1 miếng bánh kem nhỏ được không?</p>
            </div>
          </div>

          {/* AI Message */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-dark)' }}>
              AI
            </div>
            <div style={{ background: 'var(--bg-color)', padding: '1rem', borderRadius: '0 1rem 1rem 1rem', border: '1px solid var(--glass-border)', maxWidth: '80%' }}>
              <p>Một miếng bánh kem nhỏ (khoảng 50g) chứa lượng lớn đường tinh luyện và tinh bột hấp thu nhanh, có thể làm đường huyết của bạn tăng vọt sau ăn.</p>
              <br/>
              <p><strong>Khuyến nghị:</strong> Tốt nhất bạn nên tránh. Tuy nhiên, nếu rất muốn ăn, bạn chỉ nên nhấp một miếng nhỏ (1-2 thìa) để thưởng thức, và kết hợp vận động nhẹ (như đi bộ 15-20 phút) sau bữa tiệc để giúp cơ thể tiêu thụ bớt lượng đường nhé!</p>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div style={{ marginTop: 'auto', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', display: 'flex', gap: '1rem' }}>
          <input 
            type="text" 
            placeholder="Nhập câu hỏi của bạn tại đây..." 
            style={{ flex: 1, padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', outline: 'none', background: 'var(--surface-color)' }}
          />
          <button className="btn btn-primary" style={{ padding: '0 2rem' }}>Gửi</button>
        </div>
      </div>
    </div>
  );
}
