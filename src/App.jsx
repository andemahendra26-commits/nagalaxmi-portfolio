import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  MapPin,
  Menu,
  Music2,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const events = [
  {
    number: "01",
    title: "Corporate\n& conferences",
    category: "STRATEGY MEETS SHOWTIME",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85",
    className: "event-card--corporate",
  },
  {
    number: "02",
    title: "Weddings\n& celebrations",
    category: "THE BIG, BEAUTIFUL MOMENTS",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
    className: "event-card--weddings",
  },
  {
    number: "03",
    title: "Concerts\n& live shows",
    category: "FEEL IT. HEAR IT. LIVE IT.",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=85",
    className: "event-card--concerts",
  },
];

const experience = [
  {
    period: "2026 — NOW",
    role: "Event Operations & Execution Executive",
    company: "G Productions",
    description:
      "From first venue shortlist to final cue, I help make every moving part land just right. Corporate events, weddings, conferences, concerts, exhibitions and more.",
    tags: ["Event planning", "Vendor coordination", "On-ground execution"],
    current: true,
  },
  {
    period: "FIELD EXPERIENCE",
    role: "Event Coordination",
    company: "Mahathi Events",
    description:
      "Supported wedding and corporate events, keeping venue teams, vendors and setup on the same page when it mattered most.",
    tags: ["Weddings", "Corporate events", "Venue setup"],
  },
  {
    period: "FIELD EXPERIENCE",
    role: "Event Operations",
    company: "Vaishnavi Events",
    description:
      "Got hands-on with social celebrations: stage setup, guest coordination, vendor follow-ups and the little details behind a smooth day.",
    tags: ["Social events", "Guest experience", "Event operations"],
  },
];

const services = [
  ["01", "Event planning & logistics", "The moving pieces, all moving together."],
  ["02", "Venue & vendor coordination", "Right people. Right place. Right on time."],
  ["03", "On-ground execution", "Calm coordination when the doors open."],
  ["04", "Event marketing & social", "A little buzz before the big moment."],
];

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Gurajala Nagalakshmi, home">
      <span className="brand-mark">GN<span>.</span></span>
      <span className="brand-name">Gurajala Nagalakshmi</span>
    </a>
  );
}

function LinkedinMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.25 8.5H2.5V21h2.75V8.5ZM3.88 2.25a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM21.5 13.83c0-3.77-2.01-5.53-4.69-5.53a4.05 4.05 0 0 0-3.64 2.01V8.5h-2.75V21h2.75v-6.19c0-1.63.31-3.21 2.34-3.21 2 0 2.03 1.87 2.03 3.32V21h2.75l1.21-7.17Z" />
    </svg>
  );
}

function InstagramMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <button
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#what-i-do" onClick={closeMenu}>What I do</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="mailto:gurujalaloke@gmail.com">
              Let&apos;s talk <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> HYDERABAD-BASED · ALWAYS EVENT-READY</div>
          <h1>
            Gurajala
            <br />
            Nagalakshmi
          </h1>
          <div className="hero-tagline">EVENTS, WITH A LITTLE EXTRA<span> ✳</span></div>
          <p className="hero-intro">
            Event operations, execution and marketing — bringing the plans,
            people and little details together to make a great event feel
            effortless.
          </p>
          <div className="hero-actions">
            <a href="#what-i-do" className="button button--lime">
              Explore what I do <ArrowDown size={16} />
            </a>
            <a className="text-link" href="mailto:gurujalaloke@gmail.com">
              Have an event in mind? <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="footnote-rule" />
            EVENT OPERATIONS <span>✳</span> EXECUTION <span>✳</span> MARKETING
          </div>
        </div>

        <div className="hero-art" aria-label="Colorful live event crowd">
          <div className="hero-image" />
          <div className="image-shade" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="starburst" aria-hidden="true">✳</div>
          <div className="hero-sticker"><Sparkles size={15} /> GOOD ENERGY<br />GREAT EXECUTION</div>
          <div className="image-caption">
            <Music2 size={14} />
            <span>MAKING THE MOMENT</span>
            <span className="caption-dot">·</span>
            <span>HYDERABAD, INDIA</span>
          </div>
        </div>

        <a className="scroll-cue" href="#about" aria-label="Scroll to about">
          <span>SCROLL TO THE GOOD STUFF</span><ChevronDown size={14} />
        </a>
      </section>

      <section className="ticker" aria-label="Event types">
        <div className="ticker-track">
          {Array.from({ length: 2 }, (_, repeat) => (
            <span className="ticker-set" key={repeat}>
              <span>WEDDINGS</span><i>✳</i><span>LIVE SHOWS</span><i>✳</i>
              <span>CORPORATE EVENTS</span><i>✳</i><span>BRAND MOMENTS</span><i>✳</i>
              <span>CONFERENCES</span><i>✳</i><span>GOOD TIMES</span><i>✳</i>
            </span>
          ))}
        </div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="section-label"><span>01</span> THE PERSON BEHIND THE PLAN</div>
        <div className="about-grid">
          <h2>Big energy.<br /><span>Even better</span><br />organisation.</h2>
          <div className="about-copy">
            <p>
              The best events look effortless. Behind the scenes? A lot of
              thought, coordination and care. That&apos;s the part I love.
            </p>
            <p>
              I bring hands-on experience across weddings, concerts, corporate
              events, conferences and brand activations — connecting venues,
              vendors and teams so everything clicks on the day.
            </p>
            <div className="about-note">
              <span className="note-icon"><Sparkles size={16} /></span>
              <span>Equal parts people person, problem solver and checklist enthusiast.</span>
            </div>
          </div>
        </div>
        <div className="stats-row">
          <div className="stat"><strong>360°</strong><span>from first plan to final cue</span></div>
          <div className="stat"><strong>All in</strong><span>on-site and behind the scenes</span></div>
          <div className="stat"><strong>HYD <MapPin size={14} /></strong><span>based in Hyderabad, India</span></div>
          <div className="stat stat--availability"><span className="live-dot" /><span>Ready for the next big thing</span></div>
        </div>
      </section>

      <section className="events-section" id="what-i-do">
        <div className="section-wrap">
          <div className="section-topline">
            <div className="section-label"><span>02</span> MANY MOMENTS, ONE MINDSET</div>
            <p>Different crowds. Different cues.<br />The same love for making it happen.</p>
          </div>
          <h2 className="section-heading">A little bit of<br /><span>everything.</span></h2>
          <div className="event-grid">
            {events.map((event) => (
              <article className={`event-card ${event.className}`} key={event.number}>
                <img src={event.image} alt="" loading="lazy" />
                <div className="event-overlay" />
                <span className="event-number">{event.number}</span>
                <div className="event-card-copy">
                  <span className="event-category">{event.category}</span>
                  <h3>{event.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                </div>
                <ArrowUpRight className="event-arrow" size={21} />
              </article>
            ))}
          </div>
          <div className="event-foot">
            <span>AND THE SPACES BETWEEN: EXHIBITIONS, PRESS MEETS & BRAND ACTIVATIONS</span>
            <Sparkles size={17} />
          </div>
        </div>
      </section>

      <section className="services section-wrap">
        <div className="section-label"><span>03</span> FROM FIRST IDEA TO FINAL CUE</div>
        <div className="services-layout">
          <div className="services-heading">
            <h2>Good events<br />don&apos;t <span>just happen.</span></h2>
            <p>Here&apos;s where I come in, roll up my sleeves and get it all moving.</p>
            <a className="text-link" href="mailto:gurujalaloke@gmail.com">
              Tell me what you&apos;re planning <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="service-list">
            {services.map(([number, title, description]) => (
              <div className="service-item" key={number}>
                <span className="service-number">{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <Check size={17} className="service-check" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-wrap">
          <div className="section-label"><span>04</span> THE BACKSTAGE STORY</div>
          <div className="experience-heading">
            <h2>Learning by<br /><span>doing.</span></h2>
            <p>Every event teaches you something.<br />These are some of my favourite classrooms.</p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">
                  <span className={item.current ? "marker-dot marker-dot--active" : "marker-dot"} />
                </div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content">
                  <div className="timeline-title-row">
                    <div><h3>{item.role}</h3><span className="timeline-company">{item.company}</span></div>
                    {item.current && <span className="current-badge"><span className="live-dot" /> CURRENT</span>}
                  </div>
                  <p>{item.description}</p>
                  <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
            <article className="timeline-item timeline-item--education">
              <div className="timeline-marker"><span className="marker-dot" /></div>
              <div className="timeline-period">2025</div>
              <div className="timeline-content">
                <div className="timeline-title-row">
                  <div><h3>B.Tech, Electronics & Communication Engineering</h3><span className="timeline-company">Siddhartha Institute of Engineering & Technology</span></div>
                </div>
                <p>Team lead for technical and cultural events — my first taste of bringing a whole team together.</p>
                <div className="tag-list"><span>CGPA 7.2</span><span>Team lead</span><span>Technical & cultural events</span></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="extras section-wrap">
        <div className="extra-card extra-card--social">
          <span className="extra-overline">OFF THE RUN OF SHOW</span>
          <h2>When I&apos;m not<br />on the floor...</h2>
          <p>I&apos;m probably helping an event brand tell its story online — one post, reel or good idea at a time.</p>
          <div className="social-pills"><span>Instagram</span><span>LinkedIn</span><span>Content & campaigns</span></div>
          <span className="extra-spark" aria-hidden="true">✳</span>
        </div>
        <div className="extra-card extra-card--skills">
          <span className="extra-overline">THE LITTLE THINGS THAT HELP A LOT</span>
          <h2>People skills.<br /><span>Production brain.</span></h2>
          <div className="strengths">
            {["Team coordination", "Clear communication", "Multitasking", "Problem solving", "Time management", "Vendor follow-up", "Attention to detail"].map((strength) => (
              <span key={strength}><Check size={13} />{strength}</span>
            ))}
          </div>
          <div className="languages"><span>SPEAKING</span><p>Telugu <i>·</i> English <i>·</i> Hindi</p></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <div className="section-wrap contact-inner">
          <div className="section-label"><span>05</span> YOUR EVENT, PERHAPS?</div>
          <div className="contact-copy">
            <div className="contact-kicker"><CalendarDays size={15} /> THE NEXT GREAT THING STARTS SOMEWHERE</div>
            <h2>Let&apos;s make<br />a <span>moment.</span></h2>
            <p>Planning something wonderful? I&apos;d love to hear about it.</p>
            <a href="mailto:gurujalaloke@gmail.com" className="button button--lime button--large">
              Say hello <ArrowRight size={17} />
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-card-top"><span className="live-dot" /> OPEN TO THE NEXT BIG THING</div>
            <a href="mailto:gurujalaloke@gmail.com">gurujalaloke@gmail.com <ArrowUpRight size={16} /></a>
            <a href="tel:+917396186269">+91 73961 86269 <ArrowUpRight size={16} /></a>
            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/gurijala-nagalakshmi" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinMark /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramMark /></a>
              <span><MapPin size={14} /> HYDERABAD, INDIA</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <BrandMark />
          <span>MADE WITH A LITTLE EXTRA ✳ HYDERABAD, INDIA</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
