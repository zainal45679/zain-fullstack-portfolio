'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function OpticalsProject() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            if (error.name !== 'AbortError') {
              console.error("Video play failed:", error);
            }
          });
        }
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="project-page-wrapper">
      
      {/* Header Row */}
      <div style={{ marginBottom: '24px' }}>
        <Link href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-orange)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px' }}>
          ← Back to Portfolio
        </Link>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: 0, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
          CHASMA <span style={{ color: 'var(--accent-orange)' }}>OPTICALS</span>
        </h1>
      </div>
      
      <div className="project-page-grid">
        
        {/* Left Column (Content) */}
        <div className="project-left-col">
          <div>
            <p style={{ fontSize: '0.95rem', color: '#aaa', margin: 0, lineHeight: 1.6 }}>
              A full-stack ecommerce platform for eyewear, featuring virtual try-ons and inventory management. This project involved building a robust backend with Node.js and MongoDB, paired with a dynamic Next.js frontend to deliver a seamless shopping experience.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Bold Live Site Card (Smaller Fonts) */}
            <div style={{ padding: '24px', backgroundColor: '#111', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', margin: 0, marginBottom: '8px' }}>Live Project</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', margin: '0 0 16px 0' }}>Click here for a live preview to check out the frontend shopping experience.</p>
              <a href="#" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'var(--accent-orange)', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.85rem' }}>Visit Live Site →</a>
            </div>

            {/* Bold Admin Dashboard Card (Smaller Fonts) */}
            <div style={{ padding: '24px', backgroundColor: '#111', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', margin: 0, marginBottom: '8px' }}>Admin Dashboard</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', margin: '0 0 16px 0' }}>Access the backend dashboard to see how inventory and orders are managed.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ backgroundColor: '#000', padding: '12px 16px', borderRadius: '8px', fontFamily: 'monospace', color: '#ddd', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div><strong>Email:</strong> admin@demo.com</div>
                  <div><strong>Pass:</strong> admin123</div>
                </div>
                <a href="#" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#333', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.85rem', alignSelf: 'flex-start' }}>Admin Panel →</a>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column (Video) */}
        <div className="project-right-col">
          <div className="project-video-wrapper">
            <video 
              ref={videoRef}
              loop 
              muted 
              playsInline 
              className="project-video"
            >
              <source src="/images/projects/optical-vid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        
      </div>
    </div>
  );
}
