'use client';

import { motion, useScroll, useTransform, AnimatePresence, useAnimationFrame, useMotionValue, Variants } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs,
  SiFigma,
  SiJavascript,
  SiPython,
  SiWordpress,
  SiGithub,
  SiTailwindcss,
  SiWhatsapp
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdDesignServices, MdPhone } from "react-icons/md";

// Icons for marquee
const tools = [
  "Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", 
  "Tailwind CSS", "TypeScript", "JavaScript", "Python", 
  "Adobe Illustrator", "Adobe InDesign", "Photoshop", "Premiere Pro"
];

// Duplicate for infinite marquee effect
const marqueeItems = [...tools, ...tools, ...tools];

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function InfiniteMarquee({ children, speed = 10, direction = -1 }: { children: React.ReactNode, speed?: number, direction?: number }) {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);
  
  useAnimationFrame((t, delta) => {
    let moveBy = direction * speed * (delta / 1000);
    baseX.set(wrap(-50, 0, baseX.get() + moveBy));
  });

  return (
    <div style={{ overflow: "hidden", display: "flex", width: "100%", padding: '20px 0' }}>
      <motion.div
        style={{ x, display: "flex", width: "max-content", cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
        onPan={(e, info) => {
          baseX.set(wrap(-50, 0, baseX.get() + (info.delta.x / window.innerWidth) * 50));
        }}
      >
        <div style={{ display: 'flex' }}>
          {children}
          {children}
          {children}
          {children}
        </div>
        <div style={{ display: 'flex' }}>
          {children}
          {children}
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
}

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
};

const rowVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariantsLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring", bounce: 0.2 } }
};

const cardVariantsRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring", bounce: 0.2 } }
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0, x: "-50%", y: "-50%" },
  visible: { scale: 1, opacity: 1, x: "-50%", y: "-50%", transition: { type: "spring", stiffness: 300, damping: 20 } }
};

const StoryExperience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const firstDotRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);
  const [lineStyles, setLineStyles] = useState({ top: 0, height: 0, opacity: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const updateLine = () => {
      if (ref.current && firstDotRef.current && lastDotRef.current) {
        const wrapperRect = ref.current.getBoundingClientRect();
        const firstDotRect = firstDotRef.current.getBoundingClientRect();
        const lastDotRect = lastDotRef.current.getBoundingClientRect();

        const topOffset = (firstDotRect.top - wrapperRect.top) + (firstDotRect.height / 2);
        const bottomOffset = (lastDotRect.top - wrapperRect.top) + (lastDotRect.height / 2);
        const height = bottomOffset - topOffset;

        setLineStyles({
          top: topOffset,
          height: height,
          opacity: 1
        });
      }
    };

    updateLine();
    window.addEventListener('resize', updateLine);
    const timeout = setTimeout(updateLine, 100);
    return () => {
      window.removeEventListener('resize', updateLine);
      clearTimeout(timeout);
    };
  }, []);
  
  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%', overflow: 'hidden' }}>
      
      {/* Section Header */}
      <div className="container" style={{ maxWidth: '1400px', padding: '24px 24px 0 24px' }}>
        <div className="approach-top-bar" style={{ color: '#111', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '24px' }}>
          <div className="approach-label">
            <div className="approach-label-square"></div>
            Experience & Journey
          </div>
          <div>(CQ® — 03)</div>
          <div>©2026</div>
        </div>
      </div>

      <div className="timeline-wrapper" ref={ref}>
        {/* Animated Center Line */}
        <motion.div 
          className="timeline-center-line"
          style={{ 
            x: "-50%", 
            originY: 0, 
            scaleY: useTransform(scrollYProgress, [0.1, 0.9], [0, 1]),
            top: lineStyles.top ? `${lineStyles.top}px` : '150px',
            height: lineStyles.height ? `${lineStyles.height}px` : 'auto',
            bottom: lineStyles.height ? 'auto' : '150px',
            opacity: lineStyles.opacity
          }}
        ></motion.div>
        
        {/* Experience 1 - Left */}
        <motion.div 
          className="timeline-row left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={rowVariants}
        >
          <motion.div className="timeline-content" variants={cardVariantsLeft}>
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
          </motion.div>
          <motion.div className="timeline-dot-center" ref={firstDotRef} variants={dotVariants}></motion.div>
          <div className="timeline-empty"></div>
        </motion.div>

        {/* Experience 2 - Right */}
        <motion.div 
          className="timeline-row right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={rowVariants}
        >
          <div className="timeline-empty"></div>
          <motion.div className="timeline-dot-center" variants={dotVariants}></motion.div>
          <motion.div className="timeline-content" variants={cardVariantsRight}>
            <div className="timeline-date">Jul 2025 – Dec 2025</div>
            <div className="timeline-title">Freelance Full Stack</div>
            <div className="timeline-company">Self-Employed</div>
            <div className="timeline-desc">Developed multiple robust web applications for diverse clients. Built optimized business websites and core e-commerce platforms.</div>
            <div className="timeline-tools">
              <span className="timeline-tool-badge">Next.js</span>
              <span className="timeline-tool-badge">Tailwind CSS</span>
              <span className="timeline-tool-badge">Stripe</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience 3 - Left */}
        <motion.div 
          className="timeline-row left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={rowVariants}
        >
          <motion.div className="timeline-content" variants={cardVariantsLeft}>
            <div className="timeline-date">Jan 2025 – Jun 2025</div>
            <div className="timeline-title">Data Science Intern</div>
            <div className="timeline-company">Datamites</div>
            <div className="timeline-desc">Performed data analysis, cleaning, and visualization using Python on real-world datasets.</div>
            <div className="timeline-tools">
              <span className="timeline-tool-badge">Python</span>
              <span className="timeline-tool-badge">Pandas</span>
              <span className="timeline-tool-badge">Data Analysis</span>
            </div>
          </motion.div>
          <motion.div className="timeline-dot-center" ref={lastDotRef} variants={dotVariants}></motion.div>
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          display: 'flex', 
          flexDirection: 'column',
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
          <div className="hero-logo" style={{ zIndex: 100 }}>
            Zain<span style={{ color: 'var(--accent-orange)' }}>*</span>
          </div>
          
          <div 
            className="mobile-menu-btn" 
            style={{ display: 'none', fontSize: '2rem', fontWeight: 300, zIndex: 100, transform: isMobileMenuOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            +
          </div>

          <div className="hero-links">
            <Link href="#home" className="hero-link">Home<sup>01</sup></Link>
            <Link href="#about" className="hero-link">About<sup>02</sup></Link>
            <Link href="#projects" className="hero-link">Work<sup>03</sup></Link>
            <Link href="#experience" className="hero-link">Exp<sup>04</sup></Link>
            <Link href="#contact" className="hero-link">Contact<sup>05</sup></Link>
          </div>
          
          <Link href="#contact" className="hero-btn-contact hide-on-mobile" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <span className="btn-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
            Get in touch
          </Link>
          
          {/* Mobile Fullscreen Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: '#000000',
                  zIndex: 50,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  paddingTop: '80px',
                  paddingRight: '24px',
                  gap: '16px'
                }}
              >
                <Link href="#home" className="hero-link" style={{ fontSize: '1rem' }} onClick={() => setIsMobileMenuOpen(false)}>Home<sup>01</sup></Link>
                <Link href="#about" className="hero-link" style={{ fontSize: '1rem' }} onClick={() => setIsMobileMenuOpen(false)}>About<sup>02</sup></Link>
                <Link href="#projects" className="hero-link" style={{ fontSize: '1rem' }} onClick={() => setIsMobileMenuOpen(false)}>Work<sup>03</sup></Link>
                <Link href="#experience" className="hero-link" style={{ fontSize: '1rem' }} onClick={() => setIsMobileMenuOpen(false)}>Exp<sup>04</sup></Link>
                <Link href="#contact" className="hero-link" style={{ fontSize: '1rem' }} onClick={() => setIsMobileMenuOpen(false)}>Contact<sup>05</sup></Link>
                <Link href="#contact" className="hero-btn-contact" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: '10px', display: 'inline-flex', fontSize: '0.9rem', padding: '10px 16px' }}>
                  Get in touch
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Content Layer */}
        <div className="hero-content-layer">
          
          {/* Bottom Left: Huge Text */}
          <div className="hero-bottom-left">
            <div className="hero-copyright">©2026</div>
            <div className="hero-huge-text">
              Zain<br />al Faisal<span style={{ color: 'var(--accent-orange)' }}>*</span>
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
          
          <motion.div 
            className="approach-top-bar" 
            style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '24px', marginBottom: '24px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="approach-label">
              <div className="approach-label-square" style={{ backgroundColor: '#111' }}></div>
              Hey, Just An Intro
            </div>
            <div>(CQ® — 01)</div>
            <div>©2026</div>
          </motion.div>
          
          <motion.div 
            className="about-top-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* Empty column to keep the text pushed to the right, matching previous layout */}
            <div className="hide-on-mobile"></div>
            
            <div>
              <div className="about-huge-text">
                A Full Stack Developer in Kerala, crafting scalable backends and dynamic interfaces.®
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
          </motion.div>
          
          <div className="about-columns-grid">
            <motion.div 
              className="about-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3>Robust Engineering</h3>
              <p>I specialize in transforming complex requirements into scalable MERN stack applications. With expertise in Next.js, Node.js, and MongoDB, my code is designed for performance and reliability.</p>
            </motion.div>
            <motion.div 
              className="about-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Beautiful Design</h3>
              <p>I am not just a coder—I am also a designer. I leverage tools like Adobe Illustrator, InDesign, and Photoshop to create visually stunning interfaces, bridging the gap between design and engineering.</p>
            </motion.div>
          </div>
          
          <div className="projects-heading" id="projects">
            <div className="projects-heading-square"></div>
            Selected Projects
          </div>
          <div className="about-images-grid">
            <motion.div 
              className="about-img-card" 
              onMouseEnter={() => setIsHovering(true)} 
              onMouseLeave={() => setIsHovering(false)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/projects/optical.jpg" alt="Project 1" />
              <Link href="/projects/opticals" className="project-overlay">
                <div className="project-top-row">
                  <div className="project-title">CHASMA OPTICALS</div>
                  <div className="project-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="project-desc">A full-stack ecommerce platform for eyewear, featuring virtual try-ons and inventory management.</div>
              </Link>
            </motion.div>

            <motion.div 
              className="about-img-card" 
              onMouseEnter={() => setIsHovering(true)} 
              onMouseLeave={() => setIsHovering(false)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <img src="/images/projects/ztitch.jpeg" alt="Project 2" />
              <Link href="/projects/ztitch" className="project-overlay">
                <div className="project-top-row">
                  <div className="project-title">ZTITCH ECOMMERCE</div>
                  <div className="project-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="project-desc">A custom tailoring ecommerce solution with detailed measurement configurations and dynamic cart.</div>
              </Link>
            </motion.div>

            <motion.div 
              className="about-img-card" 
              onMouseEnter={() => setIsHovering(true)} 
              onMouseLeave={() => setIsHovering(false)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Project 3" />
              <Link href="/projects/branding" className="project-overlay">
                <div className="project-top-row">
                  <div className="project-title">BRANDING</div>
                  <div className="project-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="project-desc">Complete A-Z brand identity design including logo conceptualization, letterheads, and brand guidelines.</div>
              </Link>
            </motion.div>
          </div>
          
          {/* Scrolling Marquees */}
          <div style={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <InfiniteMarquee speed={0.5} direction={-1}>
              <div className="about-logo-strip">
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <SiMongodb size={24} color="#47A248" /> MongoDB
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center', fontWeight: 'bold' }}>
                  <SiExpress size={24} /> Express.js
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <SiReact size={24} color="#61DAFB" /> React
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <SiNodedotjs size={24} color="#339933" /> Node.js
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <SiNextdotjs size={24} /> Next.js
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <SiJavascript size={24} color="#F7DF1E" /> JavaScript
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <SiPython size={24} color="#3776AB" /> Python
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <SiWordpress size={24} color="#21759B" /> WordPress
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <SiGithub size={24} /> GitHub
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <SiTailwindcss size={24} color="#06B6D4" /> Tailwind CSS
                </div>
              </div>
            </InfiniteMarquee>
          </div>
          
          <div style={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)', marginBottom: '20px' }}>
            <InfiniteMarquee speed={0.5} direction={1}>
              <div className="about-logo-strip">
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{width:'24px',height:'24px',backgroundColor:'#330000',color:'#FF9A00',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'12px',borderRadius:'4px'}}>Ai</div> Illustrator
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{width:'24px',height:'24px',backgroundColor:'#001E36',color:'#31A8FF',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'12px',borderRadius:'4px'}}>Ps</div> Photoshop
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{width:'24px',height:'24px',backgroundColor:'#49021F',color:'#FF3366',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'12px',borderRadius:'4px'}}>Id</div> InDesign
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <SiFigma size={24} color="#F24E1E" /> Figma
                </div>
                <div className="about-logo-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <MdDesignServices size={24} /> UI/UX Design
                </div>
              </div>
            </InfiniteMarquee>
          </div>
          
        </div>
      </section>

      {/* 3. APPROACH STYLE SECTION */}
      <section className="approach-section" id="approach">
        <div className="container" style={{ maxWidth: '1400px' }}>
          
          <motion.div 
            className="approach-top-bar"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="approach-label">
              <div className="approach-label-square"></div>
              Approach Style
            </div>
            <div>(CQ® — 02)</div>
            <div>©2026</div>
          </motion.div>
          
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
          
          <motion.div 
            className="approach-bottom-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
          
        </div>
      </section>

      {/* 5. TOOLS & KNOWLEDGE SECTION (TIMELINE) */}
      <StoryExperience />

      {/* 6. CONTACT & CV SECTION */}
      <section className="contact-section" id="contact">
        <div className="container" style={{ maxWidth: '1400px' }}>
          
          <div className="approach-top-bar" style={{ color: '#aaa', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px', marginBottom: '24px' }}>
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
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '32px', flexWrap: 'wrap' }}>
                <a href="#contact" className="contact-pill-btn" style={{ margin: 0 }}>
                  <div className="contact-pill-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  Contact now
                </a>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-orange)'; e.currentTarget.style.borderColor = 'var(--accent-orange)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                    <SiWhatsapp size={20} />
                  </a>
                  <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-orange)'; e.currentTarget.style.borderColor = 'var(--accent-orange)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                    <MdPhone size={20} />
                  </a>
                  <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-orange)'; e.currentTarget.style.borderColor = 'var(--accent-orange)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-orange)'; e.currentTarget.style.borderColor = 'var(--accent-orange)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                    <SiGithub size={20} />
                  </a>
                </div>
              </div>
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
