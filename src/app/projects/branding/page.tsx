'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandingGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <div className="branding-page-wrapper">
      
      {/* Header Row */}
      <div style={{ marginBottom: '32px' }}>
        <Link href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-orange)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px' }}>
          ← Back to Portfolio
        </Link>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: 0, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          BRANDING <span style={{ color: 'var(--accent-orange)' }}>&</span> DESIGN
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#888', margin: 0, lineHeight: 1.6, fontWeight: 300, maxWidth: '800px' }}>
          Complete A-Z brand identity design including logo conceptualization, letterheads, typography selection, and brand guidelines for various forward-thinking companies.
        </p>
      </div>
      
      {/* Alternating Masonry Gallery */}
      <div className="branding-gallery-grid">
        
        {/* Column 1: Landscape then Portrait */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="gallery-item" onClick={() => openLightbox("/images/projects/gallery.jpg")} style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111', cursor: 'zoom-in' }}>
            <img src="/images/projects/gallery.jpg" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Brand Logo Concept" />
          </div>
          <div className="gallery-item" onClick={() => openLightbox("/images/projects/galley4.jpg")} style={{ aspectRatio: '3/4', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111', cursor: 'zoom-in' }}>
            <img src="/images/projects/galley4.jpg" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.7s ease' }} alt="Stationery Mockup" />
          </div>
        </div>

        {/* Column 2: Portrait then Landscape */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="gallery-item" onClick={() => openLightbox("/images/projects/gallery6.png")} style={{ aspectRatio: '3/4', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111', cursor: 'zoom-in' }}>
            <img src="/images/projects/gallery6.png" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.7s ease' }} alt="Business Cards" />
          </div>
          <div className="gallery-item" onClick={() => openLightbox("/images/projects/gallery1.jpg")} style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111', cursor: 'zoom-in' }}>
            <img src="/images/projects/gallery1.jpg" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Typography and Layout" />
          </div>
        </div>

        {/* Column 3: Landscape then Portrait */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="gallery-item" onClick={() => openLightbox("/images/projects/gallery5.JPG")} style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111', cursor: 'zoom-in' }}>
            <img src="/images/projects/gallery5.JPG" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Brand Guidelines" />
          </div>
          <div className="gallery-item" onClick={() => openLightbox("/images/projects/gallery3.jpg")} style={{ aspectRatio: '3/4', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111', cursor: 'zoom-in' }}>
            <img src="/images/projects/gallery3.jpg" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.7s ease' }} alt="Packaging Design" />
          </div>
        </div>

        {/* Column 4: Portrait then Landscape */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="gallery-item" onClick={() => openLightbox("/images/projects/gallery7.jpg")} style={{ aspectRatio: '3/4', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111', cursor: 'zoom-in' }}>
            <img src="/images/projects/gallery7.jpg" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.7s ease' }} alt="Social Media Assets" />
          </div>
          <div className="gallery-item" onClick={() => openLightbox("/images/projects/gallery8.jpg")} style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', position: 'relative', backgroundColor: '#111', cursor: 'zoom-in' }}>
            <img src="/images/projects/gallery8.jpg" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} alt="Color Palette" />
          </div>
        </div>
        
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
              padding: '24px'
            }}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '2.5rem',
                cursor: 'pointer',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                zIndex: 101
              }}
            >
              &times;
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
