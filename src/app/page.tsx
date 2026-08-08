'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';

export default function UnifiedPortal() {
  const router = useRouter();
  const [role, setRole] = useState('Patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'Patient') {
      router.push('/patient/onboarding');
    } else {
      router.push('/expert');
    }
  };

  return (
    <>
      <Head>
        <title>NutriMed Portal - Medical & Nutrition Assistant</title>
      </Head>
      <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        
        {/* Left Side: Visual / Hospital Image */}
        <div style={{ 
          flex: '1 1 60%', 
          position: 'relative', 
          background: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070) center/cover no-repeat',
          borderRight: '1px solid #e2e8f0'
        }}>
          {/* Overlay to ensure text readability if needed, though the reference image relies on the background's natural lighting */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 25%)' }}></div>
          
          <div style={{ position: 'relative', zIndex: 10, padding: '2.5rem 3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="#0284c7" />
                <path d="M2 17L12 22L22 17" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                NutriMed <span style={{ fontWeight: 400, color: '#475569' }}>| Medical & Nutrition Assistant</span>
              </h1>
            </div>
            <p style={{ fontSize: '1rem', color: '#334155', margin: '0 0 0 2.5rem' }}>Your Journey to Health, Supported</p>
          </div>
        </div>

        {/* Right Side: Authentication Panel */}
        <div style={{ 
          flex: '1 1 40%', 
          backgroundColor: '#f8fafc', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '3rem'
        }}>
          
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#0f172a', marginBottom: '2rem' }}>Welcome to NutriMed Portal</h2>
          
          <div style={{ 
            width: '100%', 
            maxWidth: '420px', 
            backgroundColor: 'white', 
            borderRadius: '1rem', 
            padding: '2.5rem', 
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.01)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a', margin: '0 0 0.5rem 0' }}>Sign In to Your Account</h3>
              <p style={{ fontSize: '1rem', color: '#64748b', margin: 0 }}>
                Don't have an account? <Link href="#" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: 500 }}>Sign Up</Link>
              </p>
            </div>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 500, color: '#334155', marginBottom: '0.5rem' }}>Username/Email</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </span>
                  <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.95rem' }} 
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 500, color: '#334155', marginBottom: '0.5rem' }}>Password</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </span>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 2.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.95rem' }} 
                  />
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', cursor: 'pointer' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </span>
                </div>
                <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
                  <Link href="#" style={{ fontSize: '0.8rem', color: '#0284c7', textDecoration: 'none' }}>Forgot Password?</Link>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 500, color: '#334155', marginBottom: '0.5rem' }}>Role Selection</label>
                <div style={{ position: 'relative' }}>
                  <select 
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.95rem', appearance: 'none', backgroundColor: 'white' }}
                  >
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                </div>
              </div>

              <button type="submit" style={{ width: '100%', padding: '0.875rem', backgroundColor: '#0284c7', color: 'white', border: 'none', borderRadius: '0.5rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', marginTop: '0.5rem', transition: 'background-color 0.2s' }}>
                Sign In
              </button>

            </form>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="#" style={{ fontSize: '1rem', color: '#0284c7', textDecoration: 'none', fontWeight: 500 }}>Sign Up</Link>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <Link href="#" style={{ fontSize: '0.95rem', color: '#64748b', textDecoration: 'none' }}>Trouble Logging In?</Link>
          </div>
          
        </div>
      </div>
    </>
  );
}
