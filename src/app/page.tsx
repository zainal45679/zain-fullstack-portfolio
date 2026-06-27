'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Icons for marquee
const tools = [
  "Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", 
  "Tailwind CSS", "TypeScript", "JavaScript", "Python", 
  "Adobe Illustrator", "Adobe InDesign", "Photoshop", "Premiere Pro"
];

// Duplicate for infinite marquee effect
const marqueeItems = [...tools, ...tools, ...tools];

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
};

const StoryExperience = () => {
  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%', overflow: 'hidden' }}>
      
      {/* Section Header */}
      <div className="container" style={{ maxWidth: '1400px', padding: '60px 24px 0 24px' }}>
        <div className="approach-top-bar" style={{ color: '#111', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '24px' }}>
          <div className="approach-label">
            <div className="approach-label-square"></div>
            Experience & Journey
          </div>
          <div>(CQ® — 03)</div>
          <div>©2026</div>
        </div>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-center-line"></div>
        
        {/* Experience 1 - Left */}
        <motion.div 
          className="timeline-row left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-content">
            <div className="timeline-date">Jan 2026 – Jun 2026</div>
            <div className="timeline-title">MERN Stack Intern</div>
            <div className="timeline-company">Urbanhub Innovations</div>
            <div className="timeline-desc">Developed full-stack web applications using MERN Stack. Built RESTful APIs, implemented OAuth authentication, and optimized MongoDB databases.</div>
            <div className="timeline-tools">
              <span className="timeline-tool-badge">MongoDB</span>
              <span className="timeline-tool-badge">Express.js</span>
              <span className="timeline-tool-badge">React</span>
              <span className="timeline-tool-badge">Node.js</span>
            </div>
          </div>
          <div className="timeline-dot-center"></div>
          <div className="timeline-empty"></div>
        </motion.div>

        {/* Experience 2 - Right */}
        <motion.div 
          className="timeline-row right"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-content">
            <div className="timeline-date">Jul 2025 – Dec 2025</div>
            <div className="timeline-title">Freelance Full Stack</div>
            <div className="timeline-company">Self-Employed</div>
            <div className="timeline-desc">Developed multiple robust web applications for diverse clients. Built optimized business websites and core e-commerce platforms.</div>
            <div className="timeline-tools">
              <span className="timeline-tool-badge">Next.js</span>
              <span className="timeline-tool-badge">Tailwind CSS</span>
              <span className="timeline-tool-badge">Stripe</span>
            </div>
          </div>
          <div className="timeline-dot-center"></div>
          <div className="timeline-empty"></div>
        </motion.div>

        {/* Experience 3 - Left */}
        <motion.div 
          className="timeline-row left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-content">
            <div className="timeline-date">Jan 2025 – Jun 2025</div>
            <div className="timeline-title">Data Science Intern</div>
            <div className="timeline-company">Datamites</div>
            <div className="timeline-desc">Performed data analysis, cleaning, and visualization using Python on real-world datasets.</div>
            <div className="timeline-tools">
              <span className="timeline-tool-badge">Python</span>
              <span className="timeline-tool-badge">Pandas</span>
              <span className="timeline-tool-badge">Data Analysis</span>
            </div>
          </div>
          <div className="timeline-dot-center"></div>
          <div className="timeline-empty"></div>
        </motion.div>

      </div>
    </div>
  );
};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Custom cursor state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotateBg = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Failed to send message');
    }
  };

  return (
    <main className="page-wrapper" onMouseLeave={() => setIsHovering(false)}>
      {/* Custom Cursor */}
      <motion.div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      
      <div className="hero-top-border"></div>
      
      {/* 1. HERO SECTION (Full Screen Image) */}
      <section 
        className="section bg-black" 
        style={{ 
          display: 'block', 
          minHeight: '100vh', 
          backgroundImage: 'url(/profile.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: 0
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%), linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.8) 100%)', zIndex: 0 }}></div>
        
        {/* Navigation Layer */}
        <nav className="hero-nav">
          <div className="hero-logo">
            Zain<span style={{ color: 'var(--accent-orange)' }}>*</span>
          </div>
          
          <div className="mobile-menu-btn" style={{ display: 'none', fontSize: '2rem', fontWeight: 300 }}>
            +
          </div>

          <div className="hero-links">
            <Link href="#home" className="hero-link">Home<sup>01</sup></Link>
            <Link href="#about" className="hero-link">About<sup>02</sup></Link>
            <Link href="#projects" className="hero-link">Work<sup>03</sup></Link>
            <Link href="#experience" className="hero-link">Exp<sup>04</sup></Link>
          </div>
          
          <Link href="#contact" className="hero-btn-contact" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <span className="btn-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
            Get in touch
          </Link>
        </nav>

        {/* Content Layer */}
        <div style={{ position: 'relative', zIndex: 1, height: '100vh', width: '100%' }}>
          
          {/* Bottom Left: Huge Text */}
          <div className="hero-bottom-left">
            <div className="hero-copyright">©2026</div>
            <div className="hero-huge-text">
              Zain-al<span style={{ color: 'var(--accent-orange)' }}>*</span>
            </div>
          </div>
          
          {/* Middle Right: Intro Text */}
          <div className="hero-right-content">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <motion.p 
              style={{ color: 'white', fontWeight: 500, fontSize: '1.25rem', lineHeight: 1.5, letterSpacing: '0.01em', margin: 0 }}
              variants={{ hidden: { opacity: 1 }, visible: { transition: { staggerChildren: 0.02 } } }}
              initial="hidden" animate="visible"
            >
              {"Hi, I am Zain® I'm a Full Stack Developer and highly talented Designer with experience in the MERN Stack, UI/UX, and Adobe Creative Cloud.".split("").map((char, i) => (
                <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
          
          {/* Orange Dot Decoration */}
          <div style={{ position: 'absolute', right: '350px', bottom: '280px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--accent-orange)' }}></div>

          {/* Bottom Right: CV Button */}
          <div className="hero-bottom-right">
            <a 
              href="/Zain_CV.pdf" 
              download 
              className="hero-btn-contact"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="btn-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </span>
              Download CV
            </a>
          </div>

        </div>
      </section>      {/* 2. ABOUT & PROJECTS UNIFIED SECTION */}
      <section className="about-section" id="about">
        <div className="about-content-wrapper">
          
          <div className="approach-top-bar" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '24px', marginBottom: '40px' }}>
            <div className="approach-label">
              <div className="approach-label-square" style={{ backgroundColor: '#111' }}></div>
              Hey, Just An Intro
            </div>
            <div>(CQ® — 01)</div>
            <div>©2026</div>
          </div>
          
          <div className="about-top-grid">
            {/* Empty column to keep the text pushed to the right, matching previous layout */}
            <div className="hide-on-mobile"></div>
            
            <div>
              <div className="about-huge-text">
                A Full Stack Developer in Kerala, crafting scalable backends and dynamic interfaces.®
                <div style={{ position: 'absolute', right: '150px', bottom: '15px', width: '16px', height: '16px', backgroundColor: 'var(--accent-orange)', borderRadius: '50%' }}></div>
              </div>
              
              <Link href="#contact" className="about-btn" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <span className="btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
                Get in touch
              </Link>
            </div>
          </div>
          
          <div className="about-columns-grid">
            <div className="about-col">
              <h3>Robust Engineering</h3>
              <p>I specialize in transforming complex requirements into scalable MERN stack applications. With expertise in Next.js, Node.js, and MongoDB, my code is designed for performance and reliability.</p>
            </div>
            <div className="about-col">
              <h3>Beautiful Design</h3>
              <p>I am not just a coder—I am also a designer. I leverage tools like Adobe Illustrator, InDesign, and Photoshop to create visually stunning interfaces, bridging the gap between design and engineering.</p>
            </div>
          </div>
          
          <div className="about-images-grid" id="projects">
            <div className="about-img-card" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Project 1" />
            </div>
            <div className="about-img-card" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" alt="Project 2" />
            </div>
            <div className="about-img-card" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Project 3" />
            </div>
          </div>
          
          <div className="about-divider">
            +
          </div>
          
          {/* Scrolling Marquees */}
          <div style={{ width: '100%', overflow: 'hidden', borderTop: '1px solid rgba(0,0,0,0.1)', padding: '20px 0' }}>
            <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], [0, -800]), display: 'flex', width: '200%' }}>
              <div className="about-logo-strip">
                <div className="about-logo-item">MongoDB.</div>
                <div className="about-logo-item">Express.</div>
                <div className="about-logo-item">REACT</div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Node
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Next.js
                </div>
              </div>
              {/* Duplicate for infinite feel */}
              <div className="about-logo-strip">
                <div className="about-logo-item">MongoDB.</div>
                <div className="about-logo-item">Express.</div>
                <div className="about-logo-item">REACT</div>
                <div className="about-logo-item">Node</div>
                <div className="about-logo-item">Next.js</div>
              </div>
            </motion.div>
          </div>
          
          <div style={{ width: '100%', overflow: 'hidden', borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '20px 0', marginBottom: '20px' }}>
            <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], [-800, 0]), display: 'flex', width: '200%' }}>
              <div className="about-logo-strip">
                <div className="about-logo-item">Adobe Illustrator</div>
                <div className="about-logo-item">Photoshop</div>
                <div className="about-logo-item">InDesign</div>
                <div className="about-logo-item">Figma</div>
                <div className="about-logo-item">UI/UX Design</div>
                <div className="about-logo-item">Kerala University</div>
              </div>
              {/* Duplicate for infinite feel */}
              <div className="about-logo-strip">
                <div className="about-logo-item">Adobe Illustrator</div>
                <div className="about-logo-item">Photoshop</div>
                <div className="about-logo-item">InDesign</div>
                <div className="about-logo-item">Figma</div>
                <div className="about-logo-item">UI/UX Design</div>
                <div className="about-logo-item">Kerala University</div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* 3. APPROACH STYLE SECTION */}
      <section className="approach-section" id="approach">
        <div className="container" style={{ maxWidth: '1400px' }}>
          
          <div className="approach-top-bar">
            <div className="approach-label">
              <div className="approach-label-square"></div>
              Approach Style
            </div>
            <div>(CQ® — 02)</div>
            <div>©2026</div>
          </div>
          
          <div className="approach-cards-grid">
            {/* Card 1 */}
            <motion.div 
              className="approach-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="approach-card-top">
                <div className="approach-card-number">01</div>
                <div className="approach-card-dots">
                  <div className="approach-dot active"></div>
                  <div className="approach-dot"></div>
                  <div className="approach-dot"></div>
                </div>
              </div>
              <div>
                <div className="approach-card-title">
                  <div className="approach-label-square"></div>
                  Strategy & Planning
                  <span className="approach-badge">FREE</span>
                </div>
                <div className="approach-card-desc">
                  We start by understanding your vision and business goals. Through in-depth research and strategic planning, we define the core structure and key elements needed for your project.
                </div>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              className="approach-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="approach-card-top">
                <div className="approach-card-number">02</div>
                <div className="approach-card-dots">
                  <div className="approach-dot"></div>
                  <div className="approach-dot active"></div>
                  <div className="approach-dot"></div>
                </div>
              </div>
              <div>
                <div className="approach-card-title">
                  <div className="approach-label-square"></div>
                  Design & Development
                </div>
                <div className="approach-card-desc">
                  Our team crafts a visually stunning and functional design that aligns with your brand. We focus on responsive layouts, and high-performance development to ensure a smooth experience.
                </div>
              </div>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              className="approach-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="approach-card-top">
                <div className="approach-card-number">03</div>
                <div className="approach-card-dots">
                  <div className="approach-dot"></div>
                  <div className="approach-dot"></div>
                  <div className="approach-dot active"></div>
                </div>
              </div>
              <div>
                <div className="approach-card-title">
                  <div className="approach-label-square"></div>
                  Launch & Growth
                </div>
                <div className="approach-card-desc">
                  Once everything is tested and refined, we launch your project with precision. Post-launch, we provide ongoing support, updates, and strategies to help you scale and maximize results.
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="approach-bottom-grid">
            <div>
              <Link href="#contact" className="about-btn" style={{ padding: '8px 24px 8px 8px' }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <span className="btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
                Contact now
              </Link>
            </div>
            
            <div className="approach-list">
              <div className="approach-list-item">
                <span>Strategy</span>
                <span>25%</span>
              </div>
              <div className="approach-list-item">
                <div className="approach-list-marker"></div>
                <span>Design</span>
                <span>60%</span>
              </div>
              <div className="approach-list-item">
                <span>Launch</span>
                <span>100%</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. TOOLS & KNOWLEDGE SECTION (TIMELINE) */}
      <StoryExperience />

      {/* 6. CONTACT & CV SECTION */}
      <section className="contact-section" id="contact">
        <div className="container" style={{ maxWidth: '1400px' }}>
          
          <div className="approach-top-bar" style={{ color: '#aaa', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px' }}>
            <div className="approach-label" style={{ color: '#fff' }}>
              <div className="approach-label-square" style={{ backgroundColor: 'var(--accent-orange)' }}></div>
              Let's Work Together
            </div>
            <div>(CQ® — 13)</div>
            <div>©2026</div>
          </div>

          <div className="contact-grid">
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Contact Now
              </div>
              
              <div className="contact-huge-title">Contact Me!</div>
              
              <div className="contact-desc">
                Let's create something amazing together! Reach out I'd love to hear about your project and ideas.
              </div>
              
              <div className="contact-divider"></div>
              
              <div className="contact-bullet">
                <div className="contact-bullet-icon">+</div>
                24/7 Full Time Support
              </div>
              <div className="contact-bullet">
                <div className="contact-bullet-icon">+</div>
                Available Worldwide
              </div>
              
              <a href="#contact" className="contact-pill-btn">
                <div className="contact-pill-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                Contact now
              </a>
            </motion.div>
            
            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="contact-form-container">
                <div className="contact-form-accent"></div>
                <div style={{ position: 'absolute', top: '10px', right: '40px', width: '12px', height: '12px', backgroundColor: 'var(--accent-orange)', borderRadius: '50%' }}></div>
                
                <form onSubmit={handleSubmit} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <input 
                    type="text" 
                    id="name" 
                    className="contact-input" 
                    placeholder="Name*"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  
                  <input 
                    type="email" 
                    id="email" 
                    className="contact-input" 
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  
                  <textarea 
                    id="message" 
                    className="contact-input contact-textarea" 
                    placeholder="Message*"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                  
                  <button type="submit" className="contact-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Submit Now'}
                  </button>
                  
                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        style={{ marginTop: '24px', padding: '16px', backgroundColor: 'rgba(57, 255, 20, 0.1)', border: '1px solid var(--accent-neon)', color: 'var(--accent-neon)', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold' }}>
                        Message sent successfully!
                      </motion.div>
                    )}
                    
                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        style={{ marginTop: '24px', padding: '16px', backgroundColor: 'rgba(255, 90, 54, 0.1)', border: '1px solid var(--accent-orange)', color: 'var(--accent-orange)', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold' }}>
                        {errorMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
