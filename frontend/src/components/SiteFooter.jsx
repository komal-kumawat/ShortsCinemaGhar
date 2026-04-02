import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/SHORTS CINEMAGHAR (1).svg';

const SiteFooter = () => {
  return (
    <footer className="site-footer" style={{ background: 'var(--bg-surface)', padding: '6rem 0 3rem', borderTop: '1px solid var(--border-light)', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <img src={logoImg} alt="Shorts Cinemaghar Logo" style={{ height: '60px' }} />
            </Link>
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '300px' }}>
              Start Small. Dream Big.<br />
              India’s first campus-rooted cinematic ecosystem, empowering the next generation of storytellers.
            </p>
            <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: '1.6' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                901, Techniplex 2, Goregaon West, Mumbai - 400104
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 9871610028
              </p>
              <a href="mailto:info@shortfilmtour.in">
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  info@shortfilmtour.in
                </p>
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '2rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
              <li><Link to="/about" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>The Mission</Link></li>
              <li><Link to="/programs" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Programs Overview</Link></li>
              <li><Link to="/film-lab" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Film Lab Ecosystem</Link></li>
              <li><Link to="/submit" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Submit Your Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '2rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Connect</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
              <li><Link to="/contact" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Host on Campus</Link></li>
              <li><Link to="/gallery" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Cinematic Gallery</Link></li>
              <li><Link to="/partners" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Our Partners</Link></li>
              <li><a href="mailto:info@shortfilmtour.in" className="footer-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>info@shortfilmtour.in</a></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>
            © 2026 Shorts Cinemaghar. Screening Powered by <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Short Film Tour</span>.
          </p>
          <div className="flex-center" style={{ gap: '1.5rem' }}>
            <a href="https://www.instagram.com/shortscinemaghar?igsh=MW5hMjU5aGZoZWl5cw==" className="social-link" aria-label="Instagram" target="_blank"
              rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'var(--transition-smooth)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://x.com/SCinemaghar" className="social-link" aria-label="Twitter" target="_blank"
              rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'var(--transition-smooth)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293l13.314 17.411z"/></svg>
            </a>
            <a target="_blank"
              rel="noopener noreferrer" href="https://youtube.com/@shortscinemaghar?si=9q6lwZt0fhDbtH6F" className="social-link" aria-label="YouTube" style={{ color: 'var(--text-dim)', transition: 'var(--transition-smooth)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a target="_blank"
              rel="noopener noreferrer" href="https://www.linkedin.com/company/shorts-cinemaghar/" className="social-link" aria-label="LinkedIn" style={{ color: 'var(--text-dim)', transition: 'var(--transition-smooth)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
