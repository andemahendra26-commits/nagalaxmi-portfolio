import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Heart,
  PartyPopper,
  Calendar,
  MapPin,
  Clock,
  ArrowUpRight,
  Phone,
  Mail,
  Send,
  Check,
  Flame,
  Sliders,
  ChevronRight,
  Cake,
  Music,
  Users,
  Camera,
  Gift,
  Menu,
  X,
  MessageCircle,
  Trophy,
  RotateCcw,
  Play
} from "lucide-react";

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6 1.6-.72 1.6-1.6-.72-1.6-1.6-1.6Z" />
    </svg>
  );
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const canvasRef = useRef(null);

  // Small-event interactive planner state
  const [selectedEventType, setSelectedEventType] = useState("Haldi & Mehendi Celebration");
  const [guestCount, setGuestCount] = useState(120);
  const [selectedServices, setSelectedServices] = useState([
    "Custom Floral Backdrop & Props",
    "Welcome Easel Board & Photobooth",
    "Music Playlist & Speaker Coordination"
  ]);

  /* ── PARTY RUSH MINI-GAME STATE ── */
  const [gameState, setGameState] = useState("idle"); // 'idle' | 'playing' | 'gameover'
  const [gameScore, setGameScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    try {
      return Number(localStorage.getItem("gn_party_high_score")) || 0;
    } catch {
      return 0;
    }
  });
  const [timeLeft, setTimeLeft] = useState(30);
  const [basketX, setBasketX] = useState(50); // percentage 0 - 100
  const [fallingItems, setFallingItems] = useState([]);
  const gameAreaRef = useRef(null);
  const gameIntervalRef = useRef(null);
  const timerIntervalRef = useRef(null);

  /* ── SCROLL PROGRESS & SCROLL SPY ── */
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── INTERSECTION OBSERVER SCROLL REVEAL ── */
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".reveal-init, .reveal-left, .reveal-right, .reveal-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    targets.forEach((el) => observer.observe(el));

    // Section scroll spy
    const sections = document.querySelectorAll("section[id]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );
    sections.forEach((sec) => sectionObserver.observe(sec));

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  /* ── FLOATING FESTIVE SPARKS CANVAS ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const particles = [];
    const colors = ["#ff9f1c", "#ffbf69", "#ff758f", "#f4b251", "#ffffff"];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 0.5 + 0.15,
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y > height) {
          p.y = -8;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  /* ── MINI-GAME ENGINE (NO AUDIO) ── */
  const itemIcons = [
    { emoji: "🎂", pts: 10 },
    { emoji: "🌸", pts: 10 },
    { emoji: "🎈", pts: 10 },
    { emoji: "🎤", pts: 15 },
    { emoji: "🎁", pts: 20 },
    { emoji: "🌧️", pts: -15 }
  ];

  const startGame = () => {
    setGameState("playing");
    setGameScore(0);
    setTimeLeft(30);
    setBasketX(50);
    setFallingItems([]);
  };

  useEffect(() => {
    if (gameState !== "playing") return;

    // Timer countdown
    timerIntervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerIntervalRef.current);
          clearInterval(gameIntervalRef.current);
          setGameState("gameover");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Falling items spawner & physics
    let itemId = 0;
    gameIntervalRef.current = setInterval(() => {
      setFallingItems((prev) => {
        // Spawn chance
        let updated = [...prev];
        if (Math.random() > 0.35) {
          const type = itemIcons[Math.floor(Math.random() * itemIcons.length)];
          updated.push({
            id: itemId++,
            x: Math.floor(Math.random() * 85) + 5,
            y: 0,
            emoji: type.emoji,
            pts: type.pts,
            speed: Math.random() * 2 + 3.5
          });
        }

        // Update positions and check collisions with basket
        const filtered = [];
        updated.forEach((item) => {
          item.y += item.speed;

          // Check if caught in basket (bottom area: y between 80% and 92%)
          if (item.y >= 80 && item.y <= 92) {
            const distance = Math.abs(item.x - basketX);
            if (distance < 14) {
              // CAUGHT!
              setGameScore((s) => {
                const nextScore = Math.max(0, s + item.pts);
                if (nextScore > highScore) {
                  setHighScore(nextScore);
                  try {
                    localStorage.setItem("gn_party_high_score", nextScore);
                  } catch (e) {}
                }
                return nextScore;
              });
              return; // remove caught item
            }
          }

          if (item.y < 100) {
            filtered.push(item);
          }
        });

        return filtered;
      });
    }, 50);

    return () => {
      clearInterval(timerIntervalRef.current);
      clearInterval(gameIntervalRef.current);
    };
  }, [gameState, basketX, highScore]);

  // Mouse & Touch movement inside game area
  const handleGameMouseMove = (e) => {
    if (gameState !== "playing" || !gameAreaRef.current) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    if (!clientX) return;
    const xPos = ((clientX - rect.left) / rect.width) * 100;
    setBasketX(Math.max(8, Math.min(92, xPos)));
  };

  const moveBasketStep = (direction) => {
    if (gameState !== "playing") return;
    setBasketX((prev) => (direction === "left" ? Math.max(8, prev - 12) : Math.min(92, prev + 12)));
  };

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hi Nagalakshmi! I saw your portfolio and I'm planning an event:\n\n✨ Event: ${selectedEventType}\n👥 Approx Guests: ${guestCount}\n🎉 Services Needed: ${selectedServices.join(", ")}\n\nWould love to discuss dates and ideas with you!`
    );
    return `https://wa.me/917396186269?text=${text}`;
  };

  const generateGameClaimMessage = () => {
    const text = encodeURIComponent(
      `Hi Nagalakshmi! I played your Party Rush game on your website and scored ${gameScore} points! 🎉 Can I claim a celebration discount for my upcoming event?`
    );
    return `https://wa.me/917396186269?text=${text}`;
  };

  return (
    <div className="celebration-portfolio-root">
      {/* Scroll Progress Bar at Top */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Floating Sparks Canvas */}
      <canvas id="celebration-canvas" ref={canvasRef} />

      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#hero" className="brand-badge">
            <div className="brand-avatar">GN</div>
            <div className="brand-title-wrap">
              <h1>Gurajala Nagalakshmi</h1>
              <span>EVENT COORDINATOR · HYDERABAD</span>
            </div>
          </a>

          <nav>
            <ul className="nav-menu">
              <li>
                <a
                  href="#haldi"
                  className={activeSection === "haldi" ? "active" : ""}
                >
                  Haldi &amp; Mehendi
                </a>
              </li>
              <li>
                <a
                  href="#birthdays"
                  className={activeSection === "birthdays" ? "active" : ""}
                >
                  Birthdays
                </a>
              </li>
              <li>
                <a
                  href="#engagements"
                  className={activeSection === "engagements" ? "active" : ""}
                >
                  Engagements
                </a>
              </li>
              <li>
                <a
                  href="#college"
                  className={activeSection === "college" ? "active" : ""}
                >
                  Campus Events
                </a>
              </li>
              <li>
                <a
                  href="#planner"
                  className={activeSection === "planner" ? "active" : ""}
                >
                  Party Planner
                </a>
              </li>
              <li>
                <a
                  href="#game"
                  className={activeSection === "game" ? "active" : ""}
                >
                  Party Rush Game 🎮
                </a>
              </li>
              <li>
                <a
                  href="#journey"
                  className={activeSection === "journey" ? "active" : ""}
                >
                  My Journey
                </a>
              </li>
            </ul>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#contact" className="header-action-btn">
              <span>Book Your Date</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
          <a
            href="#haldi"
            className={`mobile-nav-link ${activeSection === "haldi" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Haldi &amp; Mehendi</span>
            <ChevronRight size={16} />
          </a>
          <a
            href="#birthdays"
            className={`mobile-nav-link ${activeSection === "birthdays" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Birthdays &amp; Parties</span>
            <ChevronRight size={16} />
          </a>
          <a
            href="#engagements"
            className={`mobile-nav-link ${activeSection === "engagements" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Engagements</span>
            <ChevronRight size={16} />
          </a>
          <a
            href="#college"
            className={`mobile-nav-link ${activeSection === "college" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Campus Fests</span>
            <ChevronRight size={16} />
          </a>
          <a
            href="#planner"
            className={`mobile-nav-link ${activeSection === "planner" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Party Planner</span>
            <ChevronRight size={16} />
          </a>
          <a
            href="#game"
            className={`mobile-nav-link ${activeSection === "game" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Party Rush Mini-Game 🎮</span>
            <ChevronRight size={16} />
          </a>
          <a
            href="#journey"
            className={`mobile-nav-link ${activeSection === "journey" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>My Journey</span>
            <ChevronRight size={16} />
          </a>
          <a
            href="#contact"
            className={`mobile-nav-link ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Contact &amp; Bookings</span>
            <ChevronRight size={16} />
          </a>

          <div style={{ marginTop: 20 }}>
            <a
              href="https://wa.me/917396186269"
              target="_blank"
              rel="noreferrer"
              className="btn-primary-warm"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Directly</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ══════════════════════════════════════════════════
           HERO SECTION: FEATURING HER NAME PROMINENTLY
        ══════════════════════════════════════════════════ */}
        <section id="hero" className="hero-cozy">
          <div className="page-container hero-grid">
            <div className="reveal-left">
              <div className="hero-tag">
                <Sparkles size={14} color="#ff9f1c" />
                <span>HYDERABAD EVENT PLANNER &amp; COORDINATOR</span>
              </div>

              {/* PERSON'S NAME PROMINENTLY DISPLAYED */}
              <div style={{ marginBottom: 12 }}>
                <span className="hero-name-label">
                  HELLO, I AM
                </span>
                <h1 className="hero-name-title">
                  Gurajala <span className="glow">Nagalakshmi</span>
                </h1>
              </div>

              <h2 className="hero-headline">
                Making Every <span className="highlight">Intimate Celebration</span> Feel Warm, Magical &amp; Completely Stress-Free.
              </h2>

              <p className="hero-subtext">
                I am a passionate, on-ground event coordinator helping families and friends
                create unforgettable memories. Whether it&apos;s a vibrant <strong>Haldi &amp; Mehendi ceremony</strong>,
                a joyful <strong>1st or 25th birthday bash</strong>, an intimate <strong>engagement celebration</strong>,
                or a <strong>campus fest</strong> — I take care of the vendors, decor timing, music, and guest comfort so you can truly enjoy your special day.
              </p>

              <div className="hero-buttons">
                <a href="#planner" className="btn-primary-warm">
                  <Sparkles size={15} />
                  <span>Customize Your Celebration</span>
                </a>
                <a href="#game" className="btn-secondary-cozy">
                  <span>🎮 Play Party Rush Game</span>
                  <ChevronRight size={14} />
                </a>
              </div>

              <div className="hero-trust-row">
                <div className="trust-chip">
                  <Check size={13} color="var(--primary-gold)" />
                  <span>Intimate Scale (30 — 300 Guests)</span>
                </div>
                <div className="trust-chip">
                  <Check size={13} color="var(--primary-gold)" />
                  <span>Hands-On On-Ground Presence</span>
                </div>
                <div className="trust-chip">
                  <Check size={13} color="var(--primary-gold)" />
                  <span>Budget-Friendly &amp; Detail Obsessed</span>
                </div>
              </div>
            </div>

            {/* Profile & Event Picture Preview Card */}
            <div className="hero-card-preview reveal-right">
              <div className="hero-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85"
                  alt="Intimate Celebration Gathering"
                />
              </div>

              <div className="hero-card-meta">
                <div>
                  <h3 className="card-event-name">Gurajala Nagalakshmi</h3>
                  <span className="card-event-loc">Hyderabad, Telangana · Open for Bookings</span>
                </div>
                <span className="card-event-badge">Ready To Plan</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── KINETIC CELEBRATION MARQUEE ── */}
        <div className="marquee-ribbon">
          <div className="marquee-track">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="marquee-item" key={i}>
                <span className="gold">HALDI &amp; MEHENDI RITUALS</span>
                <span className="star">✳</span>
                <span>MILESTONE BIRTHDAY PARTIES</span>
                <span className="star">🌸</span>
                <span className="gold">INTIMATE ENGAGEMENTS</span>
                <span className="star">✳</span>
                <span>COLLEGE &amp; FAREWELL FESTS</span>
                <span className="star">🌸</span>
                <span className="gold">HYDERABAD EVENTS</span>
                <span className="star">✳</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
           CELEBRATION 1: HALDI, MEHENDI & INTIMATE WEDDINGS
        ══════════════════════════════════════════════════ */}
        <section id="haldi" className="section-haldi">
          <div className="page-container">
            <div className="reveal-init">
              <div className="section-label haldi">
                <Sparkles size={12} />
                <span>CELEBRATION 01 // HALDI, MEHENDI &amp; INTIMATE WEDDINGS</span>
              </div>

              <h2 className="section-title">
                Vibrant Marigolds, Sweet Rituals &amp;<br />
                <span style={{ color: "#ffbf69", fontStyle: "italic" }}>Pure Family Happiness.</span>
              </h2>

              <p className="section-desc">
                Haldi and Mehendi ceremonies are all about laughter, vibrant yellow marigolds,
                family singing, and beautiful candid photos. I ensure the backdrop is picture-perfect,
                ritual thalis are organized, and your guests are well taken care of.
              </p>
            </div>

            <div className="haldi-grid">
              <div className="haldi-feature-list">
                <div className="haldi-card reveal-left delay-1">
                  <h3>Marigold &amp; Floral Photobooth Backdrops</h3>
                  <p>
                    Traditional genda phool arches, brass urli with floating petals,
                    and personalized name hangings that make every photo Instagram-worthy.
                  </p>
                </div>

                <div className="haldi-card reveal-left delay-2">
                  <h3>Ritual Timing &amp; Pooja Thali Prep</h3>
                  <p>
                    Ensuring all ritual items, haldi paste, fresh flowers, and sweets
                    are ready so the family doesn&apos;t scramble at the muhurtham moment.
                  </p>
                </div>

                <div className="haldi-card reveal-left delay-3">
                  <h3>Sangeet Playlists &amp; Dholak Rhythm</h3>
                  <p>
                    Sound system setup, microphone handoffs, and energetic playlist management
                    for aunts, cousins, and friends ready to dance.
                  </p>
                </div>
              </div>

              <div className="haldi-image-box reveal-right delay-2">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85"
                  alt="Haldi Ceremony Moments"
                />
                <div className="haldi-image-overlay">
                  INTIMATE HALDI &amp; MEHENDI MOMENTS (50 — 250 GUESTS)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
           CELEBRATION 2: BIRTHDAYS & GLOW THEME PARTIES
        ══════════════════════════════════════════════════ */}
        <section id="birthdays" className="section-birthdays">
          <div className="page-container">
            <div className="reveal-init">
              <div className="section-label birthday">
                <Cake size={12} />
                <span>CELEBRATION 02 // MILESTONE BIRTHDAYS &amp; THEME PARTIES</span>
              </div>

              <h2 className="section-title">
                From 1st Baby Milestones to<br />
                <span style={{ color: "var(--rose-blush)", fontStyle: "italic" }}>Unforgettable 25th Birthday Bashes.</span>
              </h2>

              <p className="section-desc">
                Birthdays should be pure fun, not stress for the host. I coordinate custom theme decor,
                cake arrivals, party games, and playlist timing so everyone has a blast.
              </p>
            </div>

            <div className="birthday-cards-grid">
              <div className="birthday-card reveal-scale delay-1">
                <div className="birthday-card-icon">
                  <Cake size={22} />
                </div>
                <h3>Theme Cakes &amp; Dessert Tables</h3>
                <p>
                  Coordinating bakery deliveries, customized cake toppers, dessert table
                  display stands, and cold spark candles for the big countdown.
                </p>
              </div>

              <div className="birthday-card reveal-scale delay-2">
                <div className="birthday-card-icon">
                  <PartyPopper size={22} />
                </div>
                <h3>Balloon Garlands &amp; Neon Signage</h3>
                <p>
                  Trendy pastel balloon arches, glowing neon custom name signs,
                  and selfie photobooths with fun party props.
                </p>
              </div>

              <div className="birthday-card reveal-scale delay-3">
                <div className="birthday-card-icon">
                  <Gift size={22} />
                </div>
                <h3>Party Games, Music &amp; Return Favors</h3>
                <p>
                  Interactive hosting for party games, speaker setup with favorite tracks,
                  and neatly arranged return gift hampers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
           CELEBRATION 3: ENGAGEMENTS & PRIVATE ANNIVERSARIES
        ══════════════════════════════════════════════════ */}
        <section id="engagements" className="section-engagement">
          <div className="page-container">
            <div className="reveal-init">
              <div className="section-label engagement">
                <Heart size={12} />
                <span>CELEBRATION 03 // ENGAGEMENTS &amp; INTIMATE ANNIVERSARIES</span>
              </div>

              <h2 className="section-title">
                Understated Elegance &amp;<br />
                <span style={{ color: "#5fe0d5", fontStyle: "italic" }}>Heartfelt Gatherings.</span>
              </h2>
            </div>

            <div className="engagement-split">
              <div className="engagement-img-container reveal-left">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85"
                  alt="Engagement Ceremony Decor"
                />
              </div>

              <div className="engagement-check-items">
                <div className="engagement-item reveal-right delay-1">
                  <Check size={20} color="#5fe0d5" />
                  <div>
                    <h4>Welcome Easel Boards &amp; Candlelit Aisles</h4>
                    <p>
                      Personalized acrylic welcome easels, fairy-light drapes, and warm candle lanterns.
                    </p>
                  </div>
                </div>

                <div className="engagement-item reveal-right delay-2">
                  <Check size={20} color="#5fe0d5" />
                  <div>
                    <h4>Ring Ceremony &amp; Rose Petal Cues</h4>
                    <p>
                      Coordinating the ring box presentation, dry ice smoke or cold sparklers, and family photos.
                    </p>
                  </div>
                </div>

                <div className="engagement-item reveal-right delay-3">
                  <Check size={20} color="#5fe0d5" />
                  <div>
                    <h4>Banquet &amp; Caterer Flow Management</h4>
                    <p>
                      Checking on food refill schedules, welcome mocktails, and guest hospitality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
           CELEBRATION 4: COLLEGE FESTS & CAMPUS GATHERINGS
        ══════════════════════════════════════════════════ */}
        <section id="college" className="section-college">
          <div className="page-container">
            <div className="reveal-init">
              <div className="section-label college">
                <Flame size={12} />
                <span>CELEBRATION 04 // CAMPUS FESTS &amp; FAREWELLS</span>
              </div>

              <h2 className="section-title">
                Youth Energy, Talent Shows &amp;<br />
                <span style={{ color: "#f39c12", fontStyle: "italic" }}>Unforgettable College Memories.</span>
              </h2>
            </div>

            <div className="college-highlight-box reveal-scale">
              <div className="college-details">
                <h3>Campus Fest Lead Organizer</h3>
                <p>
                  During my B.Tech at Siddhartha Institute of Engineering &amp; Technology,
                  I headed technical and cultural festivals. From managing auditorium sound checks
                  and anchoring schedules to handling flashmobs and crowd seating — this is where
                  my passion for real-time event coordination began!
                </p>
                <div className="college-pills">
                  <span className="college-pill">Department Fests</span>
                  <span className="college-pill">Freshers &amp; Farewell Nights</span>
                  <span className="college-pill">Stage Anchoring</span>
                  <span className="college-pill">SIET Hyderabad</span>
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    background: "rgba(255, 159, 28, 0.1)",
                    border: "1px solid rgba(255, 159, 28, 0.3)",
                    borderRadius: "16px",
                    padding: "24px"
                  }}
                >
                  <span style={{ fontSize: 36, fontWeight: 800, color: "#f39c12", display: "block" }}>
                    B.Tech
                  </span>
                  <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>
                    Electronics &amp; Communication
                  </span>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 6 }}>
                    Technical mindset applied to audio, electrical &amp; team management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
           SECTION 5: INTIMATE EVENT BUDGET & PLANNER
        ══════════════════════════════════════════════════ */}
        <section id="planner" className="section-planner">
          <div className="page-container">
            <div className="reveal-init" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
              <div className="hero-tag">
                <Sliders size={13} color="#ff9f1c" />
                <span>INTERACTIVE PARTY PLANNER</span>
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(30px, 3.8vw, 48px)" }}>
                Plan Your <span style={{ color: "var(--primary-gold)" }}>Intimate Event</span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
                Choose your celebration type, estimated guest count, and the services you need.
                Send it directly to Nagalakshmi on WhatsApp for quick advice!
              </p>
            </div>

            <div className="planner-box reveal-scale">
              <div className="planner-grid">
                <div className="planner-field-group">
                  {/* Step 1: Event Type */}
                  <div>
                    <span className="field-label">1. Select Occasion</span>
                    <div className="event-picker-grid">
                      {[
                        "Haldi & Mehendi Celebration",
                        "Milestone Birthday Party",
                        "Engagement / Ring Ceremony",
                        "College / Farewell Gathering"
                      ].map((item) => (
                        <div
                          key={item}
                          className={`event-option-btn ${selectedEventType === item ? "active" : ""}`}
                          onClick={() => setSelectedEventType(item)}
                        >
                          <Sparkles size={14} color="var(--primary-gold)" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Realistic Small Guest Slider (25 to 300) */}
                  <div className="slider-wrapper">
                    <div className="slider-header">
                      <span className="field-label" style={{ margin: 0 }}>
                        2. Number of Guests:
                      </span>
                      <span style={{ color: "var(--primary-gold)", fontWeight: 700, fontSize: 16 }}>
                        {guestCount} Guests
                      </span>
                    </div>
                    <input
                      type="range"
                      min="25"
                      max="400"
                      step="5"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="guest-slider"
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)" }}>
                      <span>25 (Close Family)</span>
                      <span>100 (Boutique)</span>
                      <span>250 (Full Gathering)</span>
                      <span>400 (Grand)</span>
                    </div>
                  </div>

                  {/* Step 3: Small-Event Services */}
                  <div>
                    <span className="field-label">3. Select Services Needed</span>
                    <div className="items-check-grid">
                      {[
                        "Custom Floral Backdrop & Props",
                        "Welcome Easel Board & Photobooth",
                        "Music Playlist & Speaker Coordination",
                        "Cake Arrival & Dessert Table Decor",
                        "Party Games & Emcee Hosting",
                        "Catering & Guest Flow Management"
                      ].map((srv) => (
                        <div
                          key={srv}
                          className={`check-item-btn ${selectedServices.includes(srv) ? "selected" : ""}`}
                          onClick={() => toggleService(srv)}
                        >
                          <Check size={13} color="var(--primary-gold)" />
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="planner-summary-card">
                  <div>
                    <h3 className="summary-title">{selectedEventType}</h3>
                    <p className="summary-subtitle">Personalized Event Plan with Nagalakshmi</p>

                    <div className="summary-breakdown">
                      <div className="breakdown-row">
                        <span>Expected Guests</span>
                        <span>{guestCount} People</span>
                      </div>
                      <div className="breakdown-row">
                        <span>Selected Services</span>
                        <span>{selectedServices.length} Items</span>
                      </div>
                      <div className="breakdown-row">
                        <span>Planner / Coordinator</span>
                        <span>Gurajala Nagalakshmi</span>
                      </div>
                      <div className="breakdown-row">
                        <span>Base City</span>
                        <span>Hyderabad, Telangana</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-warm"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <Send size={15} />
                    <span>WhatsApp My Event Plan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
           SECTION 6: PARTY RUSH MINI-GAME 🎮 (NO AUDIO)
        ══════════════════════════════════════════════════ */}
        <section id="game" className="section-game">
          <div className="page-container">
            <div className="reveal-init" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 30px" }}>
              <div className="hero-tag">
                <Trophy size={13} color="#ff9f1c" />
                <span>30-SECOND EVENT COORDINATOR CHALLENGE</span>
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(30px, 3.8vw, 48px)" }}>
                Party Rush: <span style={{ color: "var(--primary-gold)" }}>Catch The Items!</span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
                Move the golden party tray to catch the cakes 🎂, flowers 🌸, and gifts 🎁.
                Avoid the rain clouds 🌧️! Score 75+ to unlock a special event discount!
              </p>
            </div>

            <div className="game-arena-box reveal-scale">
              {/* HUD */}
              <div className="game-hud-bar">
                <div className="game-stat-item">
                  <span className="game-stat-label">TIME REMAINING</span>
                  <span className="game-stat-value">{timeLeft}s</span>
                </div>
                <div className="game-stat-item" style={{ alignItems: "center" }}>
                  <span className="game-stat-label">SCORE</span>
                  <span className="game-stat-value" style={{ color: "#ffbf69" }}>
                    {gameScore}
                  </span>
                </div>
                <div className="game-stat-item" style={{ alignItems: "flex-end" }}>
                  <span className="game-stat-label">HIGH SCORE</span>
                  <span className="game-stat-value" style={{ color: "#5fe0d5" }}>
                    {highScore}
                  </span>
                </div>
              </div>

              {/* Game Interactive Area */}
              <div
                className="game-screen-area"
                ref={gameAreaRef}
                onMouseMove={handleGameMouseMove}
                onTouchMove={handleGameMouseMove}
              >
                {/* Idle / Start Overlay */}
                {gameState === "idle" && (
                  <div className="game-overlay-screen">
                    <PartyPopper size={48} color="var(--primary-gold)" style={{ marginBottom: 12 }} />
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, color: "#fff", marginBottom: 8 }}>
                      Ready To Save The Party?
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: 14, maxWidth: 440, marginBottom: 24, lineHeight: 1.5 }}>
                      Catch as many party essentials as you can in 30 seconds.
                      Use your mouse, touch drag, or the buttons below!
                    </p>
                    <button onClick={startGame} className="btn-primary-warm" style={{ cursor: "pointer" }}>
                      <Play size={16} />
                      <span>Start 30-Second Rush</span>
                    </button>
                  </div>
                )}

                {/* Game Over Screen */}
                {gameState === "gameover" && (
                  <div className="game-overlay-screen">
                    <Trophy size={48} color="var(--primary-gold)" style={{ marginBottom: 12 }} />
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, color: "#fff", marginBottom: 4 }}>
                      Time&apos;s Up! Final Score: {gameScore}
                    </h3>
                    <p style={{ color: "var(--primary-gold)", fontWeight: 700, fontSize: 16, marginBottom: 16 }}>
                      {gameScore >= 120
                        ? "🌟 MASTER EVENT COORDINATOR! You completely saved the party!"
                        : gameScore >= 60
                        ? "🎉 STAR EVENT ASSISTANT! Amazing reflexes!"
                        : "☕ GOOD EFFORT! Practice makes perfect!"}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                      <button onClick={startGame} className="btn-secondary-cozy" style={{ cursor: "pointer" }}>
                        <RotateCcw size={15} />
                        <span>Play Again</span>
                      </button>

                      <a
                        href={generateGameClaimMessage()}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary-warm"
                      >
                        <Gift size={15} />
                        <span>Claim 10% Discount on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Falling Party Items */}
                {fallingItems.map((item) => (
                  <div
                    key={item.id}
                    className="game-falling-item"
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                      transform: "translate(-50%, -50%)"
                    }}
                  >
                    {item.emoji}
                  </div>
                ))}

                {/* Catcher Basket / Tray */}
                <div
                  className="game-catcher-basket"
                  style={{
                    left: `${basketX}%`,
                    width: 90,
                    transform: "translateX(-50%)"
                  }}
                >
                  🧺 PARTY TRAY
                </div>
              </div>

              {/* Mobile Left / Right Buttons */}
              <div className="game-controls-touch">
                <button
                  className="touch-btn"
                  onClick={() => moveBasketStep("left")}
                  aria-label="Move left"
                >
                  ⬅ Move Left
                </button>
                <button
                  className="touch-btn"
                  onClick={() => moveBasketStep("right")}
                  aria-label="Move right"
                >
                  Move Right ➡
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
           SECTION 7: REAL JOURNEY / EXPERIENCE
        ══════════════════════════════════════════════════ */}
        <section id="journey" className="section-journey">
          <div className="page-container">
            <div className="reveal-init">
              <div className="hero-tag">
                <Sparkles size={12} color="#ff9f1c" />
                <span>HANDS-ON WORK EXPERIENCE</span>
              </div>

              <h2 className="section-title">
                Learning by Doing &amp;<br />
                <span style={{ color: "var(--primary-gold)", fontStyle: "italic" }}>Delivering on the Ground.</span>
              </h2>
            </div>

            <div className="timeline-list">
              <div className="timeline-card reveal-left delay-1">
                <div className="timeline-period">2026 — PRESENT</div>
                <div>
                  <h3 className="timeline-company-title">G Productions</h3>
                  <div className="timeline-role">Event Operations &amp; Execution Executive</div>
                  <p className="timeline-desc">
                    Managing vendor shortlists, stage setups, venue coordination, and on-ground cues
                    for corporate gatherings, intimate weddings, and social events in Hyderabad.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">Vendor Coordination</span>
                    <span className="timeline-tag">On-Ground Execution</span>
                    <span className="timeline-tag">Event Flow</span>
                  </div>
                </div>
              </div>

              <div className="timeline-card reveal-left delay-2">
                <div className="timeline-period">FIELD EXPERIENCE</div>
                <div>
                  <h3 className="timeline-company-title">Mahathi Events</h3>
                  <div className="timeline-role">Event Coordination &amp; Setup Assistant</div>
                  <p className="timeline-desc">
                    Assisted wedding and social event teams, keeping banquet venues, decor artists,
                    and guest welcoming teams aligned during live ceremonies.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">Weddings</span>
                    <span className="timeline-tag">Stage Decor</span>
                    <span className="timeline-tag">Guest Assistance</span>
                  </div>
                </div>
              </div>

              <div className="timeline-card reveal-left delay-3">
                <div className="timeline-period">FIELD EXPERIENCE</div>
                <div>
                  <h3 className="timeline-company-title">Vaishnavi Events</h3>
                  <div className="timeline-role">Operations &amp; Floor Support</div>
                  <p className="timeline-desc">
                    Got hands-on with social celebrations: backdrop setup, family follow-ups,
                    music cues, and the little details that keep an event running smoothly.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">Social Gatherings</span>
                    <span className="timeline-tag">Detail Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
           SECTION 8: CONTACT / BOOK YOUR DATE
        ══════════════════════════════════════════════════ */}
        <section id="contact" className="section-contact">
          <div className="page-container">
            <div className="contact-card-box reveal-scale">
              <div className="contact-grid">
                <div>
                  <div className="hero-tag">
                    <Sparkles size={12} color="#ff9f1c" />
                    <span>LET&apos;S TALK</span>
                  </div>

                  <h2 className="contact-headline">
                    Have an Event in Mind?<br />
                    <span>Let&apos;s Make It Special.</span>
                  </h2>

                  <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.6, marginBottom: 28 }}>
                    Whether you are planning an intimate birthday, a colorful Haldi,
                    or a cozy engagement in Hyderabad — I would love to hear your ideas
                    and take all the stress off your shoulders!
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                    <a
                      href="https://wa.me/917396186269"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary-warm"
                    >
                      <Send size={15} />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href="mailto:gurujalaloke@gmail.com"
                      className="btn-secondary-cozy"
                    >
                      <Mail size={15} />
                      <span>Send an Email</span>
                    </a>
                  </div>
                </div>

                <div className="contact-options">
                  <a
                    href="tel:+917396186269"
                    className="contact-option-row"
                  >
                    <div className="contact-option-left">
                      <div className="contact-icon-bubble">
                        <Phone size={17} />
                      </div>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 700 }}>Direct Call / Mobile</div>
                        <div style={{ fontSize: 12, color: "var(--primary-gold)" }}>+91 73961 86269</div>
                      </div>
                    </div>
                    <ArrowUpRight size={16} color="var(--primary-gold)" />
                  </a>

                  <a
                    href="mailto:gurujalaloke@gmail.com"
                    className="contact-option-row"
                  >
                    <div className="contact-option-left">
                      <div className="contact-icon-bubble">
                        <Mail size={17} />
                      </div>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 700 }}>Email Address</div>
                        <div style={{ fontSize: 12, color: "var(--primary-gold)" }}>gurujalaloke@gmail.com</div>
                      </div>
                    </div>
                    <ArrowUpRight size={16} color="var(--primary-gold)" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gurijala-nagalakshmi"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-option-row"
                  >
                    <div className="contact-option-left">
                      <div className="contact-icon-bubble">
                        <LinkedinIcon size={17} />
                      </div>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 700 }}>LinkedIn Profile</div>
                        <div style={{ fontSize: 12, color: "var(--primary-gold)" }}>gurijala-nagalakshmi</div>
                      </div>
                    </div>
                    <ArrowUpRight size={16} color="var(--primary-gold)" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="page-container">
            <p style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "#fff", marginBottom: 4 }}>
              Gurajala Nagalakshmi · Event Planner &amp; Coordinator
            </p>
            <p style={{ fontSize: 12, color: "var(--primary-gold)" }}>
              Hyderabad, Telangana · Specializing in Intimate Gatherings &amp; Milestone Celebrations · © {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </main>

      {/* Floating Mobile Bottom Quick Contact Bar */}
      <aside className="mobile-bottom-bar" aria-label="Mobile quick actions">
        <a href="tel:+917396186269" className="mobile-bar-btn call">
          <Phone size={15} />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/917396186269"
          target="_blank"
          rel="noreferrer"
          className="mobile-bar-btn whatsapp"
        >
          <MessageCircle size={15} />
          <span>WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
