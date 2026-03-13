// components.js

class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="container nav-container">
                    <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 0.5rem;">
                        <svg viewBox="0 0 40 40" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <mask id="holes">
                                    <rect width="40" height="40" fill="white" />
                                    <circle cx="13" cy="12" r="2.5" fill="black" />
                                    <circle cx="27" cy="12" r="2.5" fill="black" />
                                </mask>
                            </defs>
                            <g fill="var(--text-main)" mask="url(#holes)">
                                <circle cx="13" cy="12" r="7" />
                                <circle cx="27" cy="12" r="7" />
                                <rect x="6" y="19" width="26" height="15" rx="2" />
                                <path d="M31 22 l 7 -3 v 15 l -7 -3 z" />
                            </g>
                        </svg>
                        <div style="display: flex; flex-direction: column; line-height: 1.1;">
                            <span style="font-family: var(--font-display); font-weight: 400; font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase;">Shorts</span>
                            <span style="font-family: var(--font-display); font-weight: 800; font-size: 1.05rem; letter-spacing: 0.05em; text-transform: uppercase;">Cinemaghar</span>
                        </div>
                    </a>

                    <!-- Hamburger Menu Button -->
                    <button class="mobile-menu-btn" aria-label="Toggle Navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav class="nav-links">
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <div class="dropdown">
                            <a href="programs.html" class="dropbtn">Programs <span class="arrow">▼</span></a>
                            <div class="dropdown-content">
                                <a href="college.html">For Colleges</a>
                                <a href="school.html">For Schools</a>
                            </div>
                        </div>
                        <a href="film-lab.html">Film Lab</a>
                        <a href="submit.html">Submit Your Film</a>
                        <a href="gallery.html">Gallery</a>
                        <a href="partners.html">Partners</a>
                        <a href="contact.html">Contact</a>
                    </nav>

                    <a href="contact.html" class="btn btn-red nav-cta" style="padding: 0.75rem 1.5rem; font-size: 0.85rem;">Partner Now</a>
                </div>
            </header>
        `;

        // Mobile Menu Logic
        const menuBtn = this.querySelector('.mobile-menu-btn');
        const navLinks = this.querySelector('.nav-links');

        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => {
                menuBtn.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer" style="background: var(--bg-surface); padding: 4rem 0 2rem; border-top: 1px solid var(--border-light); margin-top: auto;">
                <div class="container">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 3rem;">
                        <div>
                            <div class="logo" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
                                <svg viewBox="0 0 40 40" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="var(--text-main)">
                                        <circle cx="13" cy="12" r="7" />
                                        <circle cx="27" cy="12" r="7" />
                                        <rect x="6" y="19" width="26" height="15" rx="2" />
                                        <path d="M31 22 l 7 -3 v 15 l -7 -3 z" />
                                    </g>
                                </svg>
                                <div style="display: flex; flex-direction: column; line-height: 1.1;">
                                    <span style="font-family: var(--font-display); font-weight: 400; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;">Shorts</span>
                                    <span style="font-family: var(--font-display); font-weight: 800; font-size: 0.95rem; letter-spacing: 0.05em; text-transform: uppercase;">Cinemaghar</span>
                                </div>
                            </div>
                            <p class="text-muted" style="font-size: 0.9rem;">Start Small. Dream Big.<br>India’s first campus-rooted cinematic ecosystem.</p>
                        </div>
                        
                        <div>
                            <h4 style="margin-bottom: 1.5rem; color: var(--text-main);">Quick Links</h4>
                            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; padding: 0;">
                                <li><a href="about.html" class="text-muted footer-link">About Us</a></li>
                                <li><a href="programs.html" class="text-muted footer-link">Programs</a></li>
                                <li><a href="film-lab.html" class="text-muted footer-link">Film Lab</a></li>
                                <li><a href="submit.html" class="text-muted footer-link">Submit Film</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 style="margin-bottom: 1.5rem; color: var(--text-main);">Connect</h4>
                            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; padding: 0;">
                                <li><a href="contact.html" class="text-muted footer-link">Host on your Campus</a></li>
                                <li><a href="gallery.html" class="text-muted footer-link">Gallery</a></li>
                                <li><a href="partners.html" class="text-muted footer-link">Partners</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div style="border-top: 1px solid var(--border-light); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                        <p class="text-muted" style="font-size: 0.85rem;">© 2026 Shorts Cinemaghar. Screening Powered by Short Film Tour.</p>
                        <div style="display: flex; gap: 1rem;">
                            <!-- Social icons placeholders -->
                            <a href="#" class="text-muted" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                            <a href="#" class="text-muted" aria-label="YouTube"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
