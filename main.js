// main.js
import './components.js';

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling (only if target is on the same page)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#' && this.getAttribute('href').startsWith('#')) {
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Body Text Animation Logic
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const textObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to body text elements
    document.querySelectorAll('p, h1, h2, h3, li, .hero-tagline').forEach((el, index) => {
        // Exclude specific UI elements
        if (!el.closest('nav') && !el.closest('header') && !el.classList.contains('btn') && !el.closest('#preloader')) {
            el.classList.add('reveal-text');
            // Stagger animation slightly based on DOM position if helpful, or just observe
            textObserver.observe(el);
        }
    });

    // Revenue Calculator Logic
    const studentSlider = document.getElementById('student-slider');
    const feeSlider = document.getElementById('fee-slider');
    const studentVal = document.getElementById('student-val');
    const feeVal = document.getElementById('fee-val');
    const revenueTotal = document.getElementById('revenue-total');

    if (studentSlider && feeSlider && revenueTotal) {
        const calculateRevenue = () => {
            const students = parseInt(studentSlider.value, 10);
            const fee = parseInt(feeSlider.value, 10);

            // Update DOM labels
            studentVal.textContent = students;
            feeVal.textContent = '₹' + fee;

            // Calculate Gross Revenue
            // Assume basic formula: Total = (Students * Fee)
            // *In reality, the institute takes a cut of ticket sales and 80% digital ad rev,
            // but for the calculator, we display the Total Estimated Gross created by the ecosystem.
            const gross = students * fee;

            // Format to Indian Rupee
            revenueTotal.textContent = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0
            }).format(gross);
        };

        // Listeners
        studentSlider.addEventListener('input', calculateRevenue);
        feeSlider.addEventListener('input', calculateRevenue);

        // Initial calculation
        calculateRevenue();
    }

    // Cinematic Particle Background Logic
    const canvas = document.getElementById('bg-particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        const initCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        class Particle {
            constructor() {
                this.reset();
                // Pre-warm vertical position so they don't all start at the bottom
                this.y = Math.random() * height;
            }

            reset() {
                this.x = Math.random() * width;
                this.y = height + Math.random() * 100;
                this.z = Math.random() * 2 + 0.5; // Depth factor
                this.size = (Math.random() * 1.5 + 0.5) * this.z;
                this.speedX = (Math.random() - 0.5) * 0.1;
                // Smooth slow upward motion with parallax (closer = faster)
                this.speedY = -(Math.random() * 0.15 + 0.05) * this.z;
                this.opacity = (Math.random() * 0.4 + 0.1) * (this.z / 2.5);
                this.isRed = Math.random() > 0.85; // 15% chance to be "Filmmaker Red"
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Subtle organic horizontal drift
                this.speedX += (Math.random() - 0.5) * 0.005;

                // Reset when floated out of view
                if (this.y < -this.size * 5 || this.x < -this.size * 5 || this.x > width + this.size * 5) {
                    this.reset();
                    this.y = height + this.size * 2; // Always respawn exactly at bottom
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                const colorStr = this.isRed ? `rgba(229, 9, 20, ${this.opacity})` : `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fillStyle = colorStr;

                // Soft glowing effect
                ctx.shadowBlur = this.size * 4;
                ctx.shadowColor = colorStr;

                ctx.fill();
            }
        }

        const createParticles = () => {
            particles = [];
            // Responsive number of particles based on screen width
            const particleCount = Math.floor(window.innerWidth / 12);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', () => {
            initCanvas();
            createParticles();
        });

        initCanvas();
        createParticles();
        animate();
    }
});
