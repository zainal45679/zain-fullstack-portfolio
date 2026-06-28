import Link from 'next/link';

export default function BrandingGallery() {
  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', padding: '40px 48px' }}>
      
      {/* Header Row */}
      <div style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#888', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 400, letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'color 0.3s' }}>
          ← Back
        </Link>
        <div style={{ fontSize: '0.85rem', color: '#666', letterSpacing: '0.05em' }}>
          A-Z BRAND IDENTITY
        </div>
      </div>
      
      <div style={{ marginBottom: '80px', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, margin: 0, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
          BRANDING <br/><span style={{ color: 'var(--accent-orange)' }}>&</span> DESIGN
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#888', margin: 0, lineHeight: 1.6, fontWeight: 300 }}>
          Complete A-Z brand identity design including logo conceptualization, letterheads, typography selection, and brand guidelines for various forward-thinking companies.
        </p>
      </div>
      
      {/* Alternating Masonry Gallery (4 Columns) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '24px',
        alignItems: 'start'
      }}>
        
        {/* Column 1: Landscape then Portrait */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="gallery-item" style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111' }}>
            <img src="https://images.unsplash.com/photo-1626785779198-d1a1e4d09292?auto=format&fit=crop&q=80" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Brand Logo Concept" />
          </div>
          <div className="gallery-item" style={{ aspectRatio: '3/4', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111' }}>
            <img src="https://images.unsplash.com/photo-1628102491629-77858ab5721d?auto=format&fit=crop&q=80" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Stationery Mockup" />
          </div>
        </div>

        {/* Column 2: Portrait then Landscape */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="gallery-item" style={{ aspectRatio: '3/4', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111' }}>
            <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Business Cards" />
          </div>
          <div className="gallery-item" style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111' }}>
            <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Typography and Layout" />
          </div>
        </div>

        {/* Column 3: Landscape then Portrait */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="gallery-item" style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111' }}>
            <img src="https://images.unsplash.com/photo-1598301257982-0cf014dff33e?auto=format&fit=crop&q=80" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Brand Guidelines" />
          </div>
          <div className="gallery-item" style={{ aspectRatio: '3/4', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111' }}>
            <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Packaging Design" />
          </div>
        </div>

        {/* Column 4: Portrait then Landscape */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="gallery-item" style={{ aspectRatio: '3/4', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111' }}>
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Social Media Assets" />
          </div>
          <div className="gallery-item" style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111' }}>
            <img src="https://images.unsplash.com/photo-1507238692062-5a04ce4bef02?auto=format&fit=crop&q=80" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Color Palette" />
          </div>
        </div>
        
      </div>
    </div>
  );
}
