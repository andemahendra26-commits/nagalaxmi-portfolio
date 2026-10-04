import React, { useState, useEffect, useRef, useCallback } from "react";
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
  Sparkle,
  Gamepad2,
  GraduationCap,
  Briefcase,
  Mic,
  Megaphone,
  Building2
} from "lucide-react";

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6 1.6-.72 1.6-1.6-.72-1.6-1.6-1.6Z" />
    </svg>
  );
}

/* ── 8 CELEBRATION PAIRS WITH PURE VECTOR SVGS (NO EMOJIS) ── */
const CELEBRATION_PAIRS = [
  { key: "cake", name: "Party Cake", color: "#ffbe0b" },
  { key: "flower", name: "Haldi Bloom", color: "#fb8500" },
  { key: "ring", name: "Ring Ceremony", color: "#5fe0d5" },
  { key: "sparkles", name: "Sparklers", color: "#ff70a6" },
  { key: "mic", name: "Emcee Hosting", color: "#b5179e" },
  { key: "party", name: "Party Confetti", color: "#f72585" },
  { key: "coffee", name: "Warm Chai", color: "#e09f3e" },
  { key: "gift", name: "Return Favors", color: "#06d6a0" }
];

function renderCelebrationSvg(key, size = 30) {
  switch (key) {
    case "cake":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ffbe0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="card-svg-icon">
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
          <path d="M2 21h20" />
          <path d="M7 8v2" />
          <path d="M12 8v2" />
          <path d="M17 8v2" />
          <circle cx="7" cy="4" r="1" fill="#ffbe0b" />
          <circle cx="12" cy="4" r="1" fill="#ffbe0b" />
          <circle cx="17" cy="4" r="1" fill="#ffbe0b" />
        </svg>
      );
    case "flower":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fb8500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="card-svg-icon">
          <circle cx="12" cy="12" r="3" fill="#fb8500" fillOpacity="0.4" />
          <path d="M12 3a3.5 3.5 0 0 0-3.5 3.5c0 2.5 3.5 5.5 3.5 5.5s3.5-3 3.5-5.5A3.5 3.5 0 0 0 12 3Z" fill="#fb8500" fillOpacity="0.2" />
          <path d="M12 21a3.5 3.5 0 0 0 3.5-3.5c0-2.5-3.5-5.5-3.5-5.5s-3.5 3-3.5 5.5A3.5 3.5 0 0 0 12 21Z" fill="#fb8500" fillOpacity="0.2" />
          <path d="M3 12a3.5 3.5 0 0 0 3.5 3.5c2.5 0 5.5-3.5 5.5-3.5s-3-3.5-5.5-3.5A3.5 3.5 0 0 0 3 12Z" fill="#fb8500" fillOpacity="0.2" />
          <path d="M21 12a3.5 3.5 0 0 0-3.5-3.5c-2.5 0-5.5 3.5-5.5 3.5s3 3.5 5.5 3.5A3.5 3.5 0 0 0 21 12Z" fill="#fb8500" fillOpacity="0.2" />
        </svg>
      );
    case "ring":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#5fe0d5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="card-svg-icon">
          <circle cx="12" cy="14" r="7" />
          <polygon points="12,2 15,6 9,6" fill="#5fe0d5" fillOpacity="0.35" stroke="#5fe0d5" strokeWidth="1.8" />
          <path d="M8.5 6 12 10.5 15.5 6" />
        </svg>
      );
    case "sparkles":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ff70a6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="card-svg-icon">
          <path d="m12 3-1.8 5.4a2 2 0 0 1-1.3 1.3L3.5 11.5l5.4 1.8a2 2 0 0 1 1.3 1.3L12 20l1.8-5.4a2 2 0 0 1 1.3-1.3l5.4-1.8-5.4-1.8a2 2 0 0 1-1.3-1.3Z" fill="#ff70a6" fillOpacity="0.3" />
          <path d="M5 4v3" /><path d="M19 17v3" /><path d="M3.5 5.5h3" /><path d="M17.5 18.5h3" />
        </svg>
      );
    case "mic":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#b5179e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="card-svg-icon">
          <rect x="9" y="2" width="6" height="11" rx="3" fill="#b5179e" fillOpacity="0.25" />
          <path d="M5 10a7 7 0 0 0 14 0" />
          <line x1="12" y1="17" x2="12" y2="22" />
          <line x1="8" y1="22" x2="16" y2="22" />
        </svg>
      );
    case "party":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#f72585" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="card-svg-icon">
          <path d="M5.8 11.3 2 22l10.7-3.79" />
          <polygon points="5.8,11.3 12.7,18.2 2,22" fill="#f72585" fillOpacity="0.3" />
          <circle cx="4" cy="3" r="1.5" fill="#f72585" />
          <circle cx="21" cy="7" r="1.5" fill="#f72585" />
          <circle cx="15" cy="2" r="1.5" fill="#f72585" />
          <path d="M22 20h.01" /><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 2.5v0a2.9 2.9 0 0 1-2 2.76L13.5 8.8" />
          <path d="m11 13 8.5-8.5" />
        </svg>
      );
    case "coffee":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#e09f3e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="card-svg-icon">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" fill="#e09f3e" fillOpacity="0.25" />
          <path d="M6 2c0 2 2 2 2 4" /><path d="M10 2c0 2 2 2 2 4" /><path d="M14 2c0 2 2 2 2 4" />
        </svg>
      );
    case "gift":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#06d6a0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="card-svg-icon">
          <rect x="3" y="8" width="18" height="4" rx="1" fill="#06d6a0" fillOpacity="0.25" />
          <path d="M12 8v13" />
          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" fill="#06d6a0" fillOpacity="0.3" />
        </svg>
      );
    default:
      return null;
  }
}

function CardBackMonogram({ size = 26 }) {
  return (
    <div className="card-back-vector">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="14" stroke="var(--primary-gold)" strokeOpacity="0.35" strokeDasharray="3 2" />
        <circle cx="16" cy="16" r="11" stroke="var(--primary-gold)" strokeOpacity="0.6" />
        <path d="M16 6v3M16 23v3M6 16h3M23 16h3" stroke="var(--primary-gold)" strokeOpacity="0.5" />
      </svg>
      <span className="card-monogram-initials">GN</span>
    </div>
  );
}

function createShuffledDeck() {
  const items = [...CELEBRATION_PAIRS, ...CELEBRATION_PAIRS].map((pair, index) => ({
    id: index,
    key: pair.key,
    name: pair.name,
    color: pair.color,
    matched: false
  }));
  // Fisher-Yates shuffle
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
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

  /* ── 3D CELEBRATION MEMORY MATCH GAME STATE ── */
  const [deck, setDeck] = useState(createShuffledDeck);
  const [flipped, setFlipped] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const timerRef = useRef(null);

  /* ── 3D TILT HANDLERS FOR CARDS ── */
  const handle3DTilt = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const reset3DTilt = useCallback((e) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }, []);

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
        threshold: 0.1,
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

  /* ── FLOATING FESTIVE SPARKS CANVAS (LIGHTWEIGHT 60 FPS) ── */
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

    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 0.4 + 0.1,
        speedX: (Math.random() - 0.5) * 0.2,
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

  /* ── MEMORY MATCH GAME LOGIC (ZERO LAG, NO AUDIO) ── */
  const startMemoryGame = () => {
    setDeck(createShuffledDeck());
    setFlipped([]);
    setMoves(0);
    setMatchedPairs(0);
    setGameTime(0);
    setIsWon(false);
    setIsGameRunning(true);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setGameTime((t) => t + 1);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleCardClick = (index) => {
    if (isWon) return;
    if (!isGameRunning) {
      setIsGameRunning(true);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setGameTime((t) => t + 1);
      }, 1000);
    }
    if (flipped.length === 2) return; // wait for flip back
    if (flipped.includes(index) || deck[index]?.matched) return; // already flipped or matched

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [firstIdx, secondIdx] = newFlipped;

      if (deck[firstIdx].key === deck[secondIdx].key) {
        // MATCH!
        setTimeout(() => {
          setDeck((prevDeck) =>
            prevDeck.map((card, i) =>
              i === firstIdx || i === secondIdx ? { ...card, matched: true } : card
            )
          );
          setFlipped([]);
          setMatchedPairs((pairs) => {
            const next = pairs + 1;
            if (next === 8) {
              setIsWon(true);
              setIsGameRunning(false);
              if (timerRef.current) clearInterval(timerRef.current);
            }
            return next;
          });
        }, 300);
      } else {
        // NO MATCH -> flip back smoothly
        setTimeout(() => {
          setFlipped([]);
        }, 850);
      }
    }
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
      `Hi Nagalakshmi! I played your 3D Celebration Memory game on your website and matched all 8 celebration pairs in ${moves} moves (${gameTime}s)! 🎉 Can I claim a special celebration discount for my upcoming event?`
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
                  style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
                >
                  <span>3D Memory Game</span>
                  <Gamepad2 size={14} />
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
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Gamepad2 size={16} color="var(--primary-gold)" />
              <span>3D Memory Game</span>
            </span>
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
                <span>EVENT OPERATIONS &amp; EXECUTION • HYDERABAD</span>
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
                On-Ground Precision, Seamless Logistics &amp;<br />
                <span className="highlight">Unforgettable Live Experiences.</span>
              </h2>

              <p className="hero-subtext">
                Event Operations professional with hands-on expertise in <strong>event planning, on-ground execution, venue &amp; vendor coordination, and production support</strong> across corporate events, live concerts, weddings, conferences, exhibitions, press meets, and brand activations. Also experienced in <strong>social media management and event marketing</strong>.
              </p>

              <div className="hero-buttons">
                <a href="#planner" className="btn-primary-warm">
                  <Sparkles size={15} />
                  <span>Customize Your Celebration</span>
                </a>
                <a href="#college" className="btn-secondary-cozy">
                  <GraduationCap size={15} />
                  <span>View Experience Tree</span>
                  <ChevronRight size={14} />
                </a>
              </div>

              <div className="hero-trust-row">
                <div className="trust-chip">
                  <Check size={13} color="var(--primary-gold)" />
                  <span>Corporate Events &amp; Concerts</span>
                </div>
                <div className="trust-chip">
                  <Check size={13} color="var(--primary-gold)" />
                  <span>Weddings &amp; Brand Activations</span>
                </div>
                <div className="trust-chip">
                  <Check size={13} color="var(--primary-gold)" />
                  <span>Venue, AV &amp; Vendor Management</span>
                </div>
                <div className="trust-chip">
                  <Check size={13} color="var(--primary-gold)" />
                  <span>Telugu (Native) • English • Hindi</span>
                </div>
              </div>
            </div>

            {/* Profile & Event Picture Preview Card with 3D Tilt */}
            <div className="perspective-wrap reveal-right">
              <div
                className="hero-card-preview tilt-card-3d"
                onMouseMove={handle3DTilt}
                onMouseLeave={reset3DTilt}
              >
                {/* 3D Floating Badges */}
                <div className="floating-3d-badge top-right">
                  <span>🌸 Floral Magic</span>
                </div>
                <div className="floating-3d-badge bottom-left">
                  <span>✨ 100% Stress-Free</span>
                </div>

                <div className="hero-img-wrap tilt-layer-1">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85"
                    alt="Intimate Celebration Gathering"
                  />
                </div>

                <div className="hero-card-meta tilt-layer-2">
                  <div>
                    <h3 className="card-event-name">Gurajala Nagalakshmi</h3>
                    <span className="card-event-loc">Hyderabad, Telangana · Open for Bookings</span>
                  </div>
                  <span className="card-event-badge">Ready To Plan</span>
                </div>
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
                <div
                  className="haldi-card tilt-card-3d reveal-left delay-1"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <div className="tilt-layer-1">
                    <h3>Marigold &amp; Floral Photobooth Backdrops</h3>
                    <p>
                      Traditional genda phool arches, brass urli with floating petals,
                      and personalized name hangings that make every photo Instagram-worthy.
                    </p>
                  </div>
                </div>

                <div
                  className="haldi-card tilt-card-3d reveal-left delay-2"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <div className="tilt-layer-1">
                    <h3>Ritual Timing &amp; Pooja Thali Prep</h3>
                    <p>
                      Ensuring all ritual items, haldi paste, fresh flowers, and sweets
                      are ready so the family doesn&apos;t scramble at the muhurtham moment.
                    </p>
                  </div>
                </div>

                <div
                  className="haldi-card tilt-card-3d reveal-left delay-3"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <div className="tilt-layer-1">
                    <h3>Sangeet Playlists &amp; Dholak Rhythm</h3>
                    <p>
                      Sound system setup, microphone handoffs, and energetic playlist management
                      for aunts, cousins, and friends ready to dance.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="haldi-image-box tilt-card-3d reveal-right delay-2"
                onMouseMove={handle3DTilt}
                onMouseLeave={reset3DTilt}
              >
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85"
                  alt="Haldi Ceremony Moments"
                />
                <div className="haldi-image-overlay tilt-layer-2">
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
              <div
                className="birthday-card tilt-card-3d reveal-scale delay-1"
                onMouseMove={handle3DTilt}
                onMouseLeave={reset3DTilt}
              >
                <div className="birthday-card-icon tilt-layer-2">
                  <Cake size={24} />
                </div>
                <div className="tilt-layer-1">
                  <h3>Theme Cakes &amp; Dessert Tables</h3>
                  <p>
                    Coordinating bakery deliveries, customized cake toppers, dessert table
                    display stands, and cold spark candles for the big countdown.
                  </p>
                </div>
              </div>

              <div
                className="birthday-card tilt-card-3d reveal-scale delay-2"
                onMouseMove={handle3DTilt}
                onMouseLeave={reset3DTilt}
              >
                <div className="birthday-card-icon tilt-layer-2">
                  <PartyPopper size={24} />
                </div>
                <div className="tilt-layer-1">
                  <h3>Balloon Garlands &amp; Neon Signage</h3>
                  <p>
                    Trendy pastel balloon arches, glowing neon custom name signs,
                    and selfie photobooths with fun party props.
                  </p>
                </div>
              </div>

              <div
                className="birthday-card tilt-card-3d reveal-scale delay-3"
                onMouseMove={handle3DTilt}
                onMouseLeave={reset3DTilt}
              >
                <div className="birthday-card-icon tilt-layer-2">
                  <Gift size={24} />
                </div>
                <div className="tilt-layer-1">
                  <h3>Party Games, Music &amp; Return Favors</h3>
                  <p>
                    Interactive hosting for party games, speaker setup with favorite tracks,
                    and neatly arranged return gift hampers.
                  </p>
                </div>
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
              <div
                className="engagement-img-container tilt-card-3d reveal-left"
                onMouseMove={handle3DTilt}
                onMouseLeave={reset3DTilt}
              >
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85"
                  alt="Engagement Ceremony Decor"
                />
              </div>

              <div className="engagement-check-items">
                <div
                  className="engagement-item tilt-card-3d reveal-right delay-1"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <Check size={20} color="#5fe0d5" />
                  <div>
                    <h4>Welcome Easel Boards &amp; Candlelit Aisles</h4>
                    <p>
                      Personalized acrylic welcome easels, fairy-light drapes, and warm candle lanterns.
                    </p>
                  </div>
                </div>

                <div
                  className="engagement-item tilt-card-3d reveal-right delay-2"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <Check size={20} color="#5fe0d5" />
                  <div>
                    <h4>Ring Ceremony &amp; Rose Petal Cues</h4>
                    <p>
                      Coordinating the ring box presentation, dry ice smoke or cold sparklers, and family photos.
                    </p>
                  </div>
                </div>

                <div
                  className="engagement-item tilt-card-3d reveal-right delay-3"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
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
           CELEBRATION 4: CAMPUS FESTS & CAREER EXPERIENCE TREE
        ══════════════════════════════════════════════════ */}
        <section id="college" className="section-college">
          <div className="page-container">
            <div className="reveal-init" style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 40px" }}>
              <div className="section-label college" style={{ margin: "0 auto 16px", display: "inline-flex" }}>
                <Flame size={12} />
                <span>GROWTH TREE // FROM CAMPUS ROOTS TO SIGNATURE EVENTS</span>
              </div>

              <h2 className="section-title">
                The Experience Tree &amp;<br />
                <span style={{ color: "#f39c12", fontStyle: "italic" }}>Hands-On Event Journey.</span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, marginTop: 12 }}>
                How technical engineering discipline evolved into campus leadership,
                live wedding apprenticeships, operations management, and independent celebration design.
              </p>
            </div>

            {/* THE EXPERIENCE TREE */}
            <div className="experience-tree-wrapper">
              {/* Central Glowing Trunk */}
              <div className="tree-trunk-line" />

              {/* NODE 1: THE ROOT - B.TECH ECE */}
              <div className="tree-branch-item left reveal-left delay-1">
                <div
                  className="tree-branch-card tilt-card-3d"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <div className="tree-branch-badge" style={{ color: "#f39c12", borderColor: "rgba(243, 156, 18, 0.45)" }}>
                    <GraduationCap size={13} />
                    <span>ROOT 01 // 2021 – 2025</span>
                  </div>
                  <h3 className="tree-branch-title">B.Tech – Electronics &amp; Communication</h3>
                  <div className="tree-branch-sub">Siddhartha Institute of Engineering &amp; Technology (SIET), Hyderabad • CGPA: 7.2</div>
                  <p className="tree-branch-desc">
                    Engineering and technical foundation: precision management of audio signals, sound and AV systems, stage electrical power load distribution, and disciplined event timing.
                  </p>
                  <div className="tree-branch-tags">
                    <span className="tree-tag">Sound &amp; AV Physics</span>
                    <span className="tree-tag">Electrical Load Management</span>
                    <span className="tree-tag">CGPA: 7.2</span>
                    <span className="tree-tag">Technical Precision</span>
                  </div>
                </div>

                <div className="tree-node-marker" title="Root 01: Academic Foundation">
                  <GraduationCap size={20} color="#f39c12" />
                </div>
              </div>

              {/* NODE 2: BRANCH 02 - COLLEGE EVENT LEAD */}
              <div className="tree-branch-item right reveal-right delay-2">
                <div
                  className="tree-branch-card tilt-card-3d"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <div className="tree-branch-badge" style={{ color: "#ffbe0b", borderColor: "rgba(255, 190, 11, 0.45)" }}>
                    <Users size={13} />
                    <span>BRANCH 02 // 2023 – 2025</span>
                  </div>
                  <h3 className="tree-branch-title">Team Lead – Technical &amp; Cultural Events</h3>
                  <div className="tree-branch-sub">SIET Campus Fests &amp; Student Events</div>
                  <p className="tree-branch-desc">
                    Led volunteer teams and coordinated technical, cultural, and student events. Managed participant registrations, crowd movement, anchoring, stage preparation, and live execution.
                  </p>
                  <div className="tree-branch-tags">
                    <span className="tree-tag">Volunteer Squad Lead</span>
                    <span className="tree-tag">Crowd Movement</span>
                    <span className="tree-tag">Participant Registrations</span>
                    <span className="tree-tag">Event Preparation</span>
                  </div>
                </div>

                <div className="tree-node-marker" title="Branch 02: College Leadership">
                  <Users size={20} color="#ffbe0b" />
                </div>
              </div>

              {/* NODE 3: BRANCH 03 - VAISHNAVI EVENTS */}
              <div className="tree-branch-item left reveal-left delay-3">
                <div
                  className="tree-branch-card tilt-card-3d"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <div className="tree-branch-badge" style={{ color: "#ff70a6", borderColor: "rgba(255, 112, 166, 0.45)" }}>
                    <Heart size={13} />
                    <span>BRANCH 03 // FIELD EXPERIENCE</span>
                  </div>
                  <h3 className="tree-branch-title">Event Operations Specialist</h3>
                  <div className="tree-branch-sub">Vaishnavi Events, Hyderabad</div>
                  <p className="tree-branch-desc">
                    Supported wedding and social event execution. Assisted with stage setup, guest coordination, on-ground event operations, and vendor management.
                  </p>
                  <div className="tree-branch-tags">
                    <span className="tree-tag">Wedding &amp; Social Execution</span>
                    <span className="tree-tag">Stage Setup</span>
                    <span className="tree-tag">Guest Coordination</span>
                    <span className="tree-tag">Vendor Management</span>
                  </div>
                </div>

                <div className="tree-node-marker" title="Branch 03: Vaishnavi Events">
                  <Heart size={20} color="#ff70a6" />
                </div>
              </div>

              {/* NODE 4: BRANCH 04 - MAHATHI EVENTS */}
              <div className="tree-branch-item right reveal-right delay-4">
                <div
                  className="tree-branch-card tilt-card-3d"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <div className="tree-branch-badge" style={{ color: "#9d4edd", borderColor: "rgba(157, 78, 221, 0.45)" }}>
                    <Building2 size={13} />
                    <span>BRANCH 04 // FIELD EXPERIENCE</span>
                  </div>
                  <h3 className="tree-branch-title">Event Coordination Specialist</h3>
                  <div className="tree-branch-sub">Mahathi Events, Hyderabad</div>
                  <p className="tree-branch-desc">
                    Assisted with wedding and corporate event execution. Coordinated vendors, decorators, photographers, and venue teams. Supported venue setup, guest arrangements, and event-day activities.
                  </p>
                  <div className="tree-branch-tags">
                    <span className="tree-tag">Corporate &amp; Weddings</span>
                    <span className="tree-tag">Decorators &amp; Photographers</span>
                    <span className="tree-tag">Venue Teams</span>
                    <span className="tree-tag">Event-Day Activities</span>
                  </div>
                </div>

                <div className="tree-node-marker" title="Branch 04: Mahathi Events">
                  <Building2 size={20} color="#9d4edd" />
                </div>
              </div>

              {/* NODE 5: BRANCH 05 - G PRODUCTIONS */}
              <div className="tree-branch-item left reveal-left delay-5">
                <div
                  className="tree-branch-card tilt-card-3d"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <div className="tree-branch-badge" style={{ color: "#5fe0d5", borderColor: "rgba(95, 224, 213, 0.55)" }}>
                    <Briefcase size={13} />
                    <span>BRANCH 05 // 2026 — PRESENT</span>
                  </div>
                  <h3 className="tree-branch-title" style={{ color: "var(--primary-gold)" }}>Event Operations &amp; Execution Executive</h3>
                  <div className="tree-branch-sub">G Productions, Hyderabad</div>
                  <p className="tree-branch-desc">
                    Coordinate corporate events, concerts, weddings, conferences, exhibitions, press meets, and brand activations. Support venue selection, hotel quotations &amp; RFQs, stage &amp; sound operations, event proposals, and LinkedIn outreach.
                  </p>
                  <div className="tree-branch-tags">
                    <span className="tree-tag">Corporate Events &amp; Concerts</span>
                    <span className="tree-tag">Conferences &amp; Exhibitions</span>
                    <span className="tree-tag">Quotation &amp; Vendor Comparison</span>
                    <span className="tree-tag">Brand Activations</span>
                  </div>
                </div>

                <div className="tree-node-marker" title="Branch 05: G Productions">
                  <Briefcase size={20} color="#5fe0d5" />
                </div>
              </div>

              {/* NODE 6: THE CROWN - DIGITAL MARKETING & SOCIAL PROMOTION */}
              <div className="tree-branch-item right reveal-right delay-6">
                <div
                  className="tree-branch-card tilt-card-3d crown-card"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <div className="tree-branch-badge" style={{ color: "#ffbf69", borderColor: "rgba(255, 191, 105, 0.55)" }}>
                    <Megaphone size={13} />
                    <span>CROWN // EVENT MARKETING &amp; PROMOTION</span>
                  </div>
                  <h3 className="tree-branch-title" style={{ color: "#ffbf69" }}>Social Media Management &amp; Event Promotion</h3>
                  <div className="tree-branch-sub">Instagram • LinkedIn • Facebook Campaign Coordination</div>
                  <p className="tree-branch-desc">
                    Promoting event businesses and brand visibility through content coordination, promotional reels, posts, and corporate networking. Building industry connections with venues, vendors, and corporate partners across Hyderabad.
                  </p>
                  <div className="tree-branch-tags">
                    <span className="tree-tag crown-tag">Digital Promotion</span>
                    <span className="tree-tag crown-tag">Instagram Reels &amp; Posts</span>
                    <span className="tree-tag crown-tag">LinkedIn Corporate Outreach</span>
                    <span className="tree-tag crown-tag">Brand Visibility</span>
                  </div>
                </div>

                <div className="tree-node-marker crown-marker" title="Crown: Event Marketing & Digital Promotion">
                  <Megaphone size={20} color="#ffbf69" />
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

                {/* Summary Card with 3D Tilt */}
                <div
                  className="planner-summary-card tilt-card-3d"
                  onMouseMove={handle3DTilt}
                  onMouseLeave={reset3DTilt}
                >
                  <div className="tilt-layer-1">
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
                    className="btn-primary-warm tilt-layer-2"
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
           SECTION 6: 3D CELEBRATION MEMORY MATCH GAME 🎮
        ══════════════════════════════════════════════════ */}
        <section id="game" className="section-game">
          <div className="page-container">
            <div className="reveal-init" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 30px" }}>
              <div className="hero-tag">
                <Trophy size={13} color="#ff9f1c" />
                <span>3D CELEBRATION MEMORY GAME</span>
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(30px, 3.8vw, 48px)" }}>
                Match The <span style={{ color: "var(--primary-gold)" }}>Celebration Pairs!</span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
                Tap cards to flip them in 3D and find all 8 matching celebration items.
                Match them all to claim a special 10% discount on your next event!
              </p>
            </div>

            <div className="game-arena-box reveal-scale">
              {/* HUD */}
              <div className="game-hud-bar">
                <div className="game-stat-item">
                  <span className="game-stat-label">TIME</span>
                  <span className="game-stat-value">{gameTime}s</span>
                </div>
                <div className="game-stat-item" style={{ alignItems: "center" }}>
                  <span className="game-stat-label">MOVES</span>
                  <span className="game-stat-value" style={{ color: "#ffbf69" }}>
                    {moves}
                  </span>
                </div>
                <div className="game-stat-item" style={{ alignItems: "flex-end" }}>
                  <span className="game-stat-label">PAIRS MATCHED</span>
                  <span className="game-stat-value" style={{ color: "#5fe0d5" }}>
                    {matchedPairs} / 8
                  </span>
                </div>
              </div>

              {/* 4x4 3D Grid */}
              <div className="memory-grid-4x4">
                {deck.map((card, index) => {
                  const isFlipped = card.matched || flipped.includes(index);
                  return (
                    <button
                      type="button"
                      key={card.id}
                      className={`memory-card-3d ${isFlipped ? "flipped" : ""}`}
                      onClick={() => handleCardClick(index)}
                      aria-label={isFlipped ? `Card ${index + 1}: ${card.name}` : `Card ${index + 1}: Facedown celebration card`}
                    >
                      <div className="memory-card-inner">
                        {/* Facedown (Vector Monogram) */}
                        <div className="memory-card-face front-face">
                          <CardBackMonogram />
                        </div>
                        {/* Faceup (Pure Vector SVG Icon) */}
                        <div
                          className={`memory-card-face back-face ${card.matched ? "matched" : ""}`}
                          style={{ borderColor: card.matched ? "#5fe0d5" : card.color }}
                        >
                          <div className="memory-card-svg-wrap">
                            {renderCelebrationSvg(card.key, 28)}
                          </div>
                          <span className="memory-card-title">{card.name}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Start / Restart Button */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
                <button
                  onClick={startMemoryGame}
                  className="btn-secondary-cozy"
                  style={{ cursor: "pointer" }}
                >
                  <RotateCcw size={15} />
                  <span>{isGameRunning ? "Restart Game" : "Start New Game"}</span>
                </button>
              </div>

              {/* Win Modal Overlay */}
              {isWon && (
                <div className="memory-win-overlay">
                  <Trophy size={48} color="var(--primary-gold)" style={{ marginBottom: 12 }} />
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, color: "#fff", marginBottom: 6 }}>
                    All 8 Celebration Pairs Matched!
                  </h3>
                  <p style={{ color: "var(--primary-gold)", fontWeight: 700, fontSize: 16, marginBottom: 12 }}>
                    {moves <= 16
                      ? "MASTER EVENT COORDINATOR (3 Stars)"
                      : moves <= 24
                      ? "STAR EVENT ASSISTANT (2 Stars)"
                      : "EVENT READY! Finished in " + gameTime + "s!"}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: 13, maxWidth: 400, marginBottom: 20 }}>
                    You completed the challenge in <strong>{moves} moves</strong> and <strong>{gameTime} seconds</strong>!
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                    <button onClick={startMemoryGame} className="btn-secondary-cozy" style={{ cursor: "pointer" }}>
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
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
           SECTION 7: ON-GROUND COORDINATION STANDARDS
        ══════════════════════════════════════════════════ */}
        <section id="journey" className="section-journey">
          <div className="page-container">
            <div className="reveal-init" style={{ textAlign: "center", maxWidth: 660, margin: "0 auto 36px" }}>
              <div className="hero-tag" style={{ margin: "0 auto 14px", display: "inline-flex" }}>
                <Sparkles size={12} color="#ff9f1c" />
                <span>ON-GROUND COMMITMENT</span>
              </div>

              <h2 className="section-title">
                My Coordination Philosophy &amp;<br />
                <span style={{ color: "var(--primary-gold)", fontStyle: "italic" }}>Event Day Standards.</span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, marginTop: 10 }}>
                Every celebration is treated as if it were for my own family — with warmth, absolute punctuality, and zero hidden stress.
              </p>
            </div>

            <div className="timeline-list">
              <div
                className="timeline-card tilt-card-3d reveal-left delay-1"
                onMouseMove={handle3DTilt}
                onMouseLeave={reset3DTilt}
              >
                <div className="timeline-period tilt-layer-1">STANDARD 01</div>
                <div className="tilt-layer-2">
                  <h3 className="timeline-company-title">Transparent Pricing &amp; Direct Mandi Rates</h3>
                  <div className="timeline-role">Fair Vendor Negotiation &amp; Itemized Estimates</div>
                  <p className="timeline-desc">
                    Every rupee in your celebration budget is accounted for. I negotiate directly with Gudimalkapur flower mandis, sound operators, and caterers so you get honest rates without agency markups.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">100% Bill Transparency</span>
                    <span className="timeline-tag">Direct Mandi Sourcing</span>
                    <span className="timeline-tag">Itemized Estimates</span>
                  </div>
                </div>
              </div>

              <div
                className="timeline-card tilt-card-3d reveal-left delay-2"
                onMouseMove={handle3DTilt}
                onMouseLeave={reset3DTilt}
              >
                <div className="timeline-period tilt-layer-1">STANDARD 02</div>
                <div className="tilt-layer-2">
                  <h3 className="timeline-company-title">Physical On-Ground Coordination</h3>
                  <div className="timeline-role">Present From 6:00 AM Setup to Final Farewell</div>
                  <p className="timeline-desc">
                    I am physically present throughout your event. When a guest needs warm water, when the photographer needs the couple on stage, or when the cake table needs positioning — I handle it immediately.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">6 AM Setup Verification</span>
                    <span className="timeline-tag">Family Host Support</span>
                    <span className="timeline-tag">Micro-Cue Timing</span>
                  </div>
                </div>
              </div>

              <div
                className="timeline-card tilt-card-3d reveal-left delay-3"
                onMouseMove={handle3DTilt}
                onMouseLeave={reset3DTilt}
              >
                <div className="timeline-period tilt-layer-1">STANDARD 03</div>
                <div className="tilt-layer-2">
                  <h3 className="timeline-company-title">Intimate Guest Warmth &amp; Elder Hospitality</h3>
                  <div className="timeline-role">Personalized Care for 30 to 300 Loved Ones</div>
                  <p className="timeline-desc">
                    Unlike impersonal agencies that treat smaller gatherings as secondary, intimate events are my core specialty. Every family member and elder receives attentive, respectful coordination.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">Elder Care Hospitality</span>
                    <span className="timeline-tag">Family Peace of Mind</span>
                    <span className="timeline-tag">Return Gift Handover</span>
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
