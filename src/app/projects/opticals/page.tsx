import Link from 'next/link';

export default function OpticalsProject() {
  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', height: '100vh', overflow: 'hidden', padding: '40px 48px', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header Row */}
      <div style={{ marginBottom: '32px' }}>
        <Link href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-orange)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
          ← Back to Portfolio
        </Link>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', flex: 1, minHeight: 0 }}>
        
        {/* Left Column (Content) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', overflowY: 'auto', paddingRight: '16px' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '12px' }}>
              OPTICALS
            </h1>
            
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
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <div style={{ backgroundColor: '#000', padding: '12px 16px', borderRadius: '8px', fontFamily: 'monospace', color: '#ddd', fontSize: '0.8rem', flex: 1 }}>
                  <div style={{ marginBottom: '4px' }}><strong>Email:</strong> admin@demo.com</div>
                  <div><strong>Pass:</strong> admin123</div>
                </div>
                <a href="#" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#333', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Access Panel →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Video) */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '100%', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0a0a0a' }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-data-lines-32115-large.mp4" type="video/mp4" />
          </video>
        </div>
        
      </div>
    </div>
  );
}
