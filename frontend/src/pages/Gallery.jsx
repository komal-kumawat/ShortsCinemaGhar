import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const closeModal = () => setSelectedItem(null);

  const gallerySections = [
    {
      id: "media-coverage",
      title: "Media Coverage",
      subtitle: "What the press says about the movement.",
      items: [
        { src: "/assets/gallery/Media Coverage/WhatsApp Image 2025-11-10 at 2.56.37 PM.jpg", delay: "0.1s" },
        { src: "/assets/gallery/Media Coverage/Screenshot 2025-11-10 170124.png", delay: "0.2s" },
        { src: "/assets/gallery/Media Coverage/WhatsApp Image 2025-11-10 at 2.56.38 PM.jpg", delay: "0.3s" },
        { src: "/assets/gallery/Media Coverage/WhatsApp Image 2025-11-10 at 2.56.38 PM (1).jpg", delay: "0.4s" },
        { src: "/assets/gallery/Media Coverage/WhatsApp Image 2025-11-10 at 2.56.39 PM.jpg", delay: "0.1s" },
        { src: "/assets/gallery/Media Coverage/WhatsApp Image 2025-11-12 at 3.32.11 PM.jpg", delay: "0.2s" },
        { src: "/assets/gallery/Media Coverage/Screenshot 2025-11-12 174732.png", delay: "0.3s" }
      ]
    },
    {
      id: "masterclass",
      title: "Master Class Highlights",
      subtitle: "Learning from the masters of the craft.",
      items: [
        { src: "/assets/gallery/Master class Highlights/Ishtiyak Khan Masterclass.mp4", delay: "0.1s" },
        { src: "/assets/gallery/Master class Highlights/IMG_5331.JPG", delay: "0.2s" },
        { src: "/assets/gallery/Master class Highlights/IMG_5333.JPG", delay: "0.3s" },
        { src: "/assets/gallery/Master class Highlights/Felicitating Actor Isteyak Khan.PNG", delay: "0.4s" },
        { src: "/assets/gallery/Master class Highlights/IMG_4815.JPG", delay: "0.1s" },
        { src: "/assets/gallery/Master class Highlights/IMG_5128.JPG", delay: "0.2s" },
        { src: "/assets/gallery/Master class Highlights/IMG_5951.JPG", delay: "0.3s" },
        { src: "/assets/gallery/Master class Highlights/WhatsApp Image 2025-08-07 at 7.10.05 PM (1).jpeg", delay: "0.4s" }
      ]
    },
    {
      id: "highlights",
      title: "Shorts Cinema Ghar Day Highlights",
      subtitle: "The pure energy of the cinematic experience.",
      items: [
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/IMG_4873.MOV", delay: "0.1s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/IMG_4863.MOV", delay: "0.2s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/IMG_4858.jpg", delay: "0.3s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/IMG_4908.PNG", delay: "0.4s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/IMG_4949.JPG", delay: "0.1s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/IMG_4963.PNG", delay: "0.2s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/IMG_4900.jpg", delay: "0.3s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/IMG_5473.PNG", delay: "0.4s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/IMG_5562.PNG", delay: "0.1s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/20251013_183947.jpg", delay: "0.2s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/IMG_4816.JPG", delay: "0.3s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/WhatsApp Image 2025-10-31 at 12.46.02 PM.jpeg", delay: "0.4s" },
        { src: "/assets/gallery/Shorts Cinemaghar day Highlights/WhatsApp Image 2025-11-10 at 11.38.18 AM (1).jpeg", delay: "0.1s" }
      ]
    },
    {
      id: "behind-scenes",
      title: "Behind the Scene",
      subtitle: "The magic that happens when the cameras start rolling.",
      items: [
        { src: "/assets/gallery/WhatsApp Video 2025-12-19 at 16.18.25.mp4", delay: "0.1s" },

      ]
    }
  ];

  return (
    <>
      <div className={`page-content-wrapper ${selectedItem ? 'content-blurred' : ''}`}>
        <section className="page-header">
          <div className="container reveal" ref={addToRefs}>
            <p style={{ color: 'var(--film-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontSize: '0.9rem' }}>Visual Storytelling</p>
            <h1 className="title-xl">
              This Is What a Campus<br />
              <span className="text-gradient">Comes Alive Looks Like</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginTop: '2rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '900px', margin: '2rem auto 0' }}>
              A movement that's transforming campuses across India through the lens of cinema.
            </p>
          </div>
        </section>

        {gallerySections.map((section) => (
          <section key={section.id} className="pad-section gallery-section">
            <div className="container">
              <div className="section-title-block reveal" ref={addToRefs}>
                <h2 className="title-md text-gradient">{section.title}</h2>
                <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>{section.subtitle}</p>
              </div>

              <div className="gallery-grid">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="gallery-item reveal"
                    ref={addToRefs}
                    style={{ transitionDelay: item.delay }}
                    onClick={() => setSelectedItem(item)}
                  >
                    {item.type === 'video' || item.src.match(/\.(mp4|MOV|mov|webm)$/) ? (
                      <video
                        src={item.src}
                        className="gallery-img"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt=""
                        className="gallery-img"
                      />
                    )}

                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="pad-section">
          <div className="container">
            <div className="cta-box reveal glass" ref={addToRefs}>
              <h2 className="title-md">"One campus proved the model. Fifty campuses will build a movement."</h2>
              <p className="cta-subtitle">Want this energy on your campus?</p>
              <Link to="/contact" className="btn btn-red">Partner with us Today →</Link>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div className="lightbox-overlay" onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <div className="media-container">
              {selectedItem.type === 'video' || selectedItem.src.match(/\.(mp4|MOV|mov|webm)$/) ? (
                <video src={selectedItem.src} controls autoPlay className="lightbox-media" />
              ) : (
                <img src={selectedItem.src} alt="" className="lightbox-media" />
              )}
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Gallery;
