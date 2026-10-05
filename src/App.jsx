import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Baby,
  Building2,
  Cake,
  CalendarCheck,
  ChevronDown,
  ClipboardList,
  Download,
  Flower2,
  Gem,
  GraduationCap,
  Heart,
  Languages,
  Mail,
  Martini,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Mic2,
  Moon,
  PartyPopper,
  Phone,
  Sparkle,
  Speaker,
  Sun,
  Users,
  X
} from "lucide-react";
import portraitJpg from "./assets/nagalakshmi.jpg";
import portraitWebp from "./assets/nagalakshmi.webp";
import {
  BabyShowerScene,
  BirthdayScene,
  CocktailScene,
  CorporateScene,
  EngagementScene,
  GetTogetherScene,
  HaldiScene,
  WeddingScene
} from "./scenes.jsx";

const CONTACT = {
  email: "gurujalaloke@gmail.com",
  phone: "+91 73961 86269",
  phoneHref: "tel:+917396186269",
  whatsapp: "https://wa.me/917396186269",
  linkedin: "https://www.linkedin.com/in/gurijala-nagalakshmi",
  linkedinHandle: "gurijala-nagalakshmi"
};

const NAV = [
  { id: "events", label: "Events" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

const EXPERIENCE = [
  {
    period: "2025 — Present",
    role: "Event Operations & Execution Executive",
    company: "G Productions",
    place: "Hyderabad",
    current: true,
    points: [
      "Coordinate corporate events, concerts, weddings, conferences, exhibitions, press meets and brand activations.",
      "Support venue selection, hotel quotations and RFQs, and compare vendor quotes to stay within budget.",
      "Assist stage and sound operations and help prepare event proposals for clients.",
      "Run LinkedIn outreach to build connections with venues, vendors and corporate partners."
    ],
    tags: ["Corporate events", "Concerts", "RFQs & quotations", "Stage & sound", "Proposals"]
  },
  {
    period: "Field experience",
    role: "Event Coordination Specialist",
    company: "Mahathi Events",
    place: "Hyderabad",
    points: [
      "Assisted wedding and corporate event execution from setup to close.",
      "Coordinated decorators, photographers, vendors and venue teams on event day.",
      "Supported venue setup, guest arrangements and run-of-show activities."
    ],
    tags: ["Weddings", "Corporate", "Vendor coordination", "Venue setup"]
  },
  {
    period: "Field experience",
    role: "Event Operations Specialist",
    company: "Vaishnavi Events",
    place: "Hyderabad",
    points: [
      "Supported on-ground execution of weddings and social events.",
      "Assisted stage setup, guest coordination and vendor management."
    ],
    tags: ["Social events", "Stage setup", "Guest coordination"]
  },
  {
    period: "2023 — 2025",
    role: "Team Lead, Technical & Cultural Events",
    company: "SIET Campus Fests",
    place: "Hyderabad",
    points: [
      "Led volunteer teams across technical, cultural and student events.",
      "Managed participant registrations, crowd movement, anchoring, stage preparation and live execution."
    ],
    tags: ["Team leadership", "Registrations", "Crowd flow", "Anchoring"]
  }
];

const EVENT_TYPES = [
  {
    Scene: WeddingScene,
    icon: Heart,
    title: "Marriage",
    text: "Muhurtham to reception — the biggest day for two families, run to the minute.",
    points: [
      "Mandapam and stage setup with décor vendors",
      "Muhurtham timing and ritual material checklist",
      "Guest flow, seating and family coordination",
      "Reception run-of-show, from entry to send-off"
    ]
  },
  {
    Scene: EngagementScene,
    icon: Gem,
    title: "Engagement",
    text: "The ring ceremony, the photos and a smooth flow from rituals to dinner.",
    points: [
      "Ring-ceremony stage and flower décor",
      "Photographer and videographer cues",
      "Seating for both families and guests",
      "Handover from rituals to dinner"
    ]
  },
  {
    Scene: HaldiScene,
    icon: Flower2,
    title: "Haldi, Mehendi & Sangeet",
    text: "Pre-wedding mornings and nights full of colour, music and dance.",
    points: [
      "Marigold décor, seating and photo corners",
      "Haldi and mehendi artist coordination",
      "Sangeet sound, DJ and dance-order cues"
    ]
  },
  {
    Scene: CocktailScene,
    icon: Martini,
    title: "Cocktail parties",
    text: "Lounge nights with the right lights, music and flow at the bar.",
    points: [
      "Bar, lounge and table layout",
      "DJ, lighting and sound checks",
      "Guest list, entry and late-night logistics"
    ]
  },
  {
    Scene: BirthdayScene,
    icon: Cake,
    title: "Birthday parties",
    text: "From first birthdays to milestone 50ths — the cake moment, done right.",
    points: [
      "Theme décor, balloons and backdrop",
      "Cake moment, games and anchor cues",
      "Return gifts and kids' safety"
    ]
  },
  {
    Scene: BabyShowerScene,
    icon: Baby,
    title: "Baby showers",
    text: "Seemantham and modern baby showers, planned around the mom-to-be.",
    points: [
      "Seemantham ritual setup and bangle ceremony",
      "Décor, games and seating for elders",
      "Comfort and timing for the mom-to-be"
    ]
  },
  {
    Scene: GetTogetherScene,
    icon: Users,
    title: "Get-togethers",
    text: "Family reunions, alumni meets and house parties where everyone just shows up and enjoys.",
    points: [
      "Venue, food and seating plans",
      "Activities, music and games",
      "Timing and a clean wrap-up"
    ]
  },
  {
    Scene: CorporateScene,
    icon: PartyPopper,
    title: "Corporate parties",
    text: "Annual days, award nights, team celebrations and offsites.",
    points: [
      "Venue, AV and stage setup",
      "Registrations and guest desks",
      "Award flow, anchor cues and run-of-show"
    ]
  }
];

const MARQUEE = [
  "Marriage",
  "Engagement",
  "Haldi & Mehendi",
  "Sangeet",
  "Cocktail parties",
  "Birthday parties",
  "Baby showers",
  "Get-togethers",
  "Corporate parties"
];

const SKILLS = [
  {
    icon: ClipboardList,
    title: "Planning & operations",
    items: [
      "Venue selection & site coordination",
      "Hotel quotations & RFQs",
      "Vendor sourcing & quote comparison",
      "Event proposals",
      "Run-of-show support"
    ]
  },
  {
    icon: Users,
    title: "On-ground execution",
    items: [
      "Stage & venue setup",
      "Guest arrangements & hospitality",
      "Registrations & crowd movement",
      "Decorator, photographer & vendor handling",
      "Volunteer team leadership"
    ]
  },
  {
    icon: Speaker,
    title: "Production & technical",
    items: [
      "Stage & sound operations",
      "AV setup understanding (ECE background)",
      "Stage power-load awareness",
      "Anchoring & mic handovers"
    ]
  },
  {
    icon: Megaphone,
    title: "Event marketing",
    items: [
      "Social media management",
      "Instagram reels & posts",
      "LinkedIn corporate outreach",
      "Facebook campaign coordination"
    ]
  }
];

const STRENGTHS = [
  {
    icon: CalendarCheck,
    title: "On the floor from setup to wrap",
    text: "I'm comfortable owning the event-day checklist — vendor arrivals, stage readiness, guest flow and the small fixes nobody planned for."
  },
  {
    icon: Building2,
    title: "Vendor & venue coordination",
    text: "Experience comparing quotes, chasing RFQs and keeping decorators, photographers, sound and venue teams aligned to one timeline."
  },
  {
    icon: Mic2,
    title: "Technical + marketing range",
    text: "An electronics engineering degree helps me talk to AV and sound crews, and social media work lets me support promotion before the event too."
  }
];

const ROLES = [
  "Event Coordinator",
  "Event Operations Executive",
  "Production Coordinator",
  "Event Marketing Executive"
];

/* Accent colour rotation for cards — full class strings so Tailwind can see them */
const POP = [
  {
    text: "text-pink",
    bg: "bg-pink",
    tile: "bg-pink/15 text-pink",
    hover: "hover:border-pink hover:shadow-[0_22px_50px_-26px_var(--pink)]",
    check: "before:border-pink",
    dot: "before:bg-pink",
    bar: "before:bg-pink"
  },
  {
    text: "text-purple",
    bg: "bg-purple",
    tile: "bg-purple/15 text-purple",
    hover: "hover:border-purple hover:shadow-[0_22px_50px_-26px_var(--purple)]",
    check: "before:border-purple",
    dot: "before:bg-purple",
    bar: "before:bg-purple"
  },
  {
    text: "text-orange",
    bg: "bg-orange",
    tile: "bg-orange/15 text-orange",
    hover: "hover:border-orange hover:shadow-[0_22px_50px_-26px_var(--orange)]",
    check: "before:border-orange",
    dot: "before:bg-orange",
    bar: "before:bg-orange"
  },
  {
    text: "text-teal",
    bg: "bg-teal",
    tile: "bg-teal/15 text-teal",
    hover: "hover:border-teal hover:shadow-[0_22px_50px_-26px_var(--teal)]",
    check: "before:border-teal",
    dot: "before:bg-teal",
    bar: "before:bg-teal"
  }
];

const PANEL_ICON = ["text-[#f472b6]", "text-[#a78bfa]", "text-[#fb923c]", "text-[#2dd4bf]"];

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6 1.6-.72 1.6-1.6-.72-1.6-1.6-1.6Z" />
    </svg>
  );
}

function SectionHead({ eyebrow, title, intro }) {
  return (
    <div className="reveal mb-8 print:mb-2.5">
      <p className="eyebrow">
        <Sparkle size={12} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="text-[clamp(2.75rem,7vw,4.25rem)] leading-[0.95] print:text-[18pt]">{title}</h2>
      {intro && <p className="mt-4 text-[1.0625rem] text-ink-2">{intro}</p>}
    </div>
  );
}

function Section({ id, alt, children }) {
  return (
    <section id={id} className={`py-18 nav:py-26 print:py-3 ${alt ? "bg-bg-alt" : ""}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

/* One event: animated scene on one side, details on the other — sides alternate */
function EventRow({ event, index }) {
  const { Scene, icon: Icon, title, text, points } = event;
  const c = POP[index % POP.length];
  const flip = index % 2 === 1;
  return (
    <article className="grid grid-cols-[minmax(0,1fr)] items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <figure
        className={`scene reveal overflow-hidden rounded-[28px] border border-line bg-surface shadow-[0_30px_70px_-40px_var(--purple)] print:hidden ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <Scene />
      </figure>
      <div className="reveal">
        <p className={`font-display text-6xl leading-none ${c.text} opacity-40`}>{String(index + 1).padStart(2, "0")}</p>
        <div className="mt-2 flex items-center gap-3">
          <span className={`grid size-11 flex-none place-items-center rounded-2xl ${c.tile}`} aria-hidden="true">
            <Icon size={20} />
          </span>
          <h3 className="font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-none font-normal tracking-wide">{title}</h3>
        </div>
        <p className="mt-4 text-[1.0625rem] text-ink-2">{text}</p>
        <ul className="mt-5 grid gap-2.5">
          {points.map((p) => (
            <li
              key={p}
              className={`relative pl-7 text-[0.9375rem] text-ink-2 before:absolute before:top-[0.35em] before:left-0 before:h-2 before:w-3.5 before:-rotate-45 before:border-b-2 before:border-l-2 ${c.check}`}
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Monogram() {
  return (
    <span
      aria-hidden="true"
      className="grid size-[38px] flex-none place-items-center rounded-full bg-linear-to-br from-[#f472b6] to-[#fb923c] font-display text-lg tracking-wide text-on-pop"
    >
      GN
    </span>
  );
}

function getInitialTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage blocked — theme still applies for this visit */
    }
  };

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            reveal.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => spy.observe(s));

    // Pause festival animations while they're off screen
    const scenes = new IntersectionObserver((entries) =>
      entries.forEach((e) => e.target.classList.toggle("is-paused", !e.isIntersecting))
    );
    document.querySelectorAll(".scene").forEach((s) => scenes.observe(s));

    return () => {
      reveal.disconnect();
      spy.disconnect();
      scenes.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isDark = theme === "dark";

  return (
    <>
      <a
        href="#main"
        className="absolute -top-12 left-4 z-[100] rounded-xl bg-ink px-4 py-2.5 text-bg focus:top-3"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md backdrop-saturate-150 print:hidden">
        <div className="container-page flex h-[68px] max-w-[1280px] items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Gurajala Nagalakshmi, back to top">
            <Monogram />
            <span className="flex min-w-0 flex-col leading-tight">
              <strong className="truncate text-[0.9375rem]">Gurajala Nagalakshmi</strong>
              <span className="truncate text-xs text-muted">Event Operations · Hyderabad</span>
            </span>
          </a>

          <nav className="hidden gap-1 lg:flex" aria-label="Primary">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`rounded-full px-3 py-2 text-[0.9rem] font-medium transition-colors duration-150 hover:text-ink ${
                  active === n.id ? "bg-surface text-pink" : "text-muted"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-none items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Light theme" : "Dark theme"}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-pink"
            >
              {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
            <button type="button" className="btn btn-ghost btn-sm hidden xl:inline-flex" onClick={() => window.print()}>
              <Download size={15} aria-hidden="true" />
              <span>Resume PDF</span>
            </button>
            <a href={`mailto:${CONTACT.email}`} className="btn btn-primary btn-sm hidden xs:inline-flex">
              <Mail size={15} aria-hidden="true" />
              <span>Email me</span>
            </a>
            <button
              type="button"
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface text-ink lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={`grid gap-1 overflow-hidden px-4 transition-[max-height,padding] duration-300 ease-out-soft lg:hidden ${
            menuOpen ? "visible max-h-[560px] border-t border-line pt-3 pb-5" : "invisible max-h-0"
          }`}
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-12 items-center border-b border-line px-1 font-medium"
            >
              {n.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-ghost mt-3"
            onClick={() => {
              setMenuOpen(false);
              window.print();
            }}
          >
            <Download size={16} aria-hidden="true" />
            <span>Save resume as PDF</span>
          </button>
        </nav>
      </header>

      <main id="main">
        {/* ── HERO ── */}
        <section id="top" className="hero-classic pt-14 pb-18 nav:pt-24 nav:pb-28 print:py-3">
          <div className="container-page grid grid-cols-[minmax(0,1fr)] items-center gap-10 md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-[290px_minmax(0,1fr)_320px] xl:gap-12 print:grid-cols-[1.3fr_1fr] print:gap-6">
            <picture className="reveal mx-auto block w-full max-w-[340px] md:max-w-none print:hidden">
              <source srcSet={portraitWebp} type="image/webp" />
              <img
                src={portraitJpg}
                alt="Gurajala Nagalakshmi"
                width="800"
                height="1000"
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-[20px] border border-line bg-bg-alt object-cover shadow-card dark:shadow-none"
              />
            </picture>

            <div className="reveal">
              <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink-2 print:hidden">
                <span
                  aria-hidden="true"
                  className="size-2 flex-none rounded-full bg-success shadow-[0_0_0_4px_color-mix(in_srgb,var(--success)_20%,transparent)]"
                />
                Open to full-time roles with event management companies
              </p>

              <h1 className="text-[clamp(2.5rem,7vw,3.25rem)] leading-[1.05] xl:text-[3.5rem] print:text-[26pt]">
                Gurajala <em className="text-accent italic">Nagalakshmi</em>
              </h1>
              <p className="mt-3 text-sm font-semibold tracking-[0.12em] text-muted uppercase">
                Event Operations &amp; Execution
              </p>

              <p className="mt-5 max-w-[56ch] text-base text-ink-2 xl:text-[1.0625rem]">
                I help event teams run corporate events, concerts, weddings and brand activations smoothly on the
                ground — handling venues, vendors, stage and sound, and guests so the show starts on time.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 print:hidden">
                <a href="#experience" className="btn btn-primary">
                  <span>See my experience</span>
                  <ChevronDown size={16} aria-hidden="true" />
                </a>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <aside
              className="reveal rounded-[20px] border border-line bg-surface p-6 shadow-card md:col-span-2 lg:col-span-1 dark:shadow-none print:col-span-1 print:shadow-none"
              aria-label="Quick facts"
            >
              <div className="border-b border-line pb-4">
                <p className="font-serif text-xl font-semibold">At a glance</p>
                <p className="text-sm text-muted">Event Operations Executive</p>
              </div>
              <dl className="grid py-2 md:grid-cols-2 md:gap-x-8 lg:grid-cols-1">

                {[
                  [Briefcase, "Currently", "G Productions"],
                  [MapPin, "Based in", "Hyderabad, Telangana"],
                  [GraduationCap, "Education", "B.Tech ECE, 2025"],
                  [Languages, "Languages", "Telugu, English, Hindi"]
                ].map(([Icon, label, value]) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-dashed border-line py-3 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0 lg:[&:nth-last-child(2)]:border-b">
                    <dt className="inline-flex flex-none items-center gap-2 text-sm whitespace-nowrap text-muted">
                      <Icon size={15} aria-hidden="true" /> {label}
                    </dt>
                    <dd className="text-right text-[0.9rem] font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="grid grid-cols-3 gap-2 border-t border-line pt-5 text-center">
                {[
                  ["3", "event companies"],
                  ["8", "event formats"],
                  ["1+", "year of experience"]
                ].map(([n, label]) => (
                  <div key={label}>
                    <strong className="block font-serif text-[1.75rem] leading-tight text-accent">{n}</strong>
                    <span className="mt-1 block text-xs leading-snug text-muted">{label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div aria-hidden="true" className="overflow-hidden py-6 print:hidden">
          <div className="-mx-[5%] w-[110%] -rotate-2 bg-linear-to-r from-[#f472b6] via-[#a78bfa] via-50% to-[#fb923c] py-3">
            <div className="marquee-track flex w-max">
              {[0, 1].map((k) => (
                <div key={k} className="flex items-center">
                  {MARQUEE.map((m) => (
                    <span key={m} className="flex items-center gap-5 px-5 font-display text-2xl tracking-wider text-on-pop">
                      {m}
                      <Sparkle size={16} />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── EVENTS: one animated scene per event, alternating sides ── */}
        <section id="events" className="py-18 nav:py-26 print:py-3">
          <div className="container-page">
            <SectionHead
              eyebrow="Events"
              title="Events I can handle"
              intro="Marriages, engagements, cocktail nights, birthdays, baby showers, get-togethers and corporate parties — the celebrations I can plan and run on the ground for your clients."
            />
            <div className="mt-12 grid gap-16 lg:gap-24">
              {EVENT_TYPES.map((event, i) => (
                <EventRow key={event.title} event={event} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <Section id="about" alt>
          <SectionHead
            eyebrow="About"
            title="What I bring to an events team"
            intro="I started by leading volunteer crews at college fests, moved into weddings and social events with Hyderabad event companies, and now work across corporate and live productions. I'm looking for a team where I can keep growing in operations and production."
          />
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {STRENGTHS.map(({ icon: Icon, title, text }, i) => {
              const c = POP[i % POP.length];
              return (
                <article key={title} className={`card reveal hover:-translate-y-1 ${c.hover}`}>
                  <span className={`grid size-12 place-items-center rounded-2xl ${c.tile}`} aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-[0.9375rem] text-muted">{text}</p>
                </article>
              );
            })}
          </div>
        </Section>

        {/* ── EXPERIENCE ── */}
        <Section id="experience">
          <SectionHead eyebrow="Run of show" title="Where I've worked" />
          <ol className="relative grid max-w-3xl gap-5 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:rounded-full before:bg-linear-to-b before:from-pink before:via-purple before:to-orange print:pl-0 print:before:hidden">
            {EXPERIENCE.map((job, i) => {
              const c = POP[i % POP.length];
              return (
                <li key={job.company} className="reveal relative">
                  <span
                    aria-hidden="true"
                    className={`absolute top-6 -left-[27px] size-3.5 rounded-full ring-4 ring-bg ${c.bg} print:hidden`}
                  />
                  <div className={`card p-5 hover:-translate-y-1 ${job.current ? "gradient-border" : c.hover}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`font-display text-xl leading-none tracking-wide ${c.text}`}>{job.period}</span>
                      {job.current && (
                        <span className="rounded-full bg-linear-to-r from-[#f472b6] to-[#fb923c] px-2.5 py-0.5 text-xs font-semibold text-on-pop">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{job.role}</h3>
                    <p className="text-sm font-semibold text-muted">
                      {job.company} <span aria-hidden="true">·</span> {job.place}
                    </p>
                    <ul className="mt-3 grid gap-1.5">
                      {job.points.map((p) => (
                        <li
                          key={p}
                          className={`relative pl-[18px] text-[0.9375rem] text-ink-2 before:absolute before:top-[0.65em] before:left-0.5 before:size-1.5 before:rounded-full ${c.dot}`}
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Focus areas">
                      {job.tags.map((t) => (
                        <li key={t} className="chip bg-bg-alt px-2.5 py-1 text-xs">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </Section>

        {/* ── SKILLS ── */}
        <Section id="skills" alt>
          <SectionHead eyebrow="Skills" title="What I can take off your plate" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map(({ icon: Icon, title, items }, i) => {
              const c = POP[i % POP.length];
              return (
                <article
                  key={title}
                  className={`card reveal relative overflow-hidden p-5 before:absolute before:inset-x-0 before:top-0 before:h-1 hover:-translate-y-1 ${c.bar} ${c.hover}`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className={`grid size-10 flex-none place-items-center rounded-xl ${c.tile}`} aria-hidden="true">
                      <Icon size={19} />
                    </span>
                    <h3 className="text-[1.0625rem] font-semibold">{title}</h3>
                  </div>
                  <ul className="grid gap-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className={`relative pl-6 text-sm text-ink-2 before:absolute before:top-[0.35em] before:left-0 before:h-2 before:w-3.5 before:-rotate-45 before:border-b-2 before:border-l-2 ${c.check}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Section>

        {/* ── EDUCATION ── */}
        <Section id="education">
          <SectionHead eyebrow="Education" title="Engineering foundation" />
          <article className="card gradient-border reveal flex max-w-3xl items-start gap-4">
            <span className="grid size-12 flex-none place-items-center rounded-2xl bg-teal/15 text-teal" aria-hidden="true">
              <GraduationCap size={22} />
            </span>
            <div>
              <h3 className="text-[1.1875rem] font-semibold">B.Tech, Electronics &amp; Communication Engineering</h3>
              <p className="mt-1 text-[0.9375rem] font-semibold text-teal">
                Siddhartha Institute of Engineering &amp; Technology (SIET), Hyderabad
              </p>
              <p className="mt-1.5 mb-3 font-display text-xl tracking-wide text-muted">2021 — 2025 · CGPA 7.2</p>
              <p className="text-[0.9375rem] text-ink-2">
                The technical side of my degree — audio signals, AV systems and electrical load — is what lets me work
                confidently alongside sound, lighting and stage crews.
              </p>
            </div>
          </article>
        </Section>

        {/* ── CONTACT ── */}
        <Section id="contact" alt>
          <div className="reveal relative overflow-hidden rounded-[28px] bg-panel p-7 text-on-panel sm:p-10 print:p-0">
            <span aria-hidden="true" className="spot -top-24 -right-24 size-72 bg-[#f472b6] print:hidden" />
            <span aria-hidden="true" className="spot -bottom-24 -left-24 size-72 bg-[#a78bfa] print:hidden" style={{ animationDelay: "-6s" }} />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center print:grid-cols-2">
              <div>
                <p className="eyebrow">
                  <Sparkle size={12} aria-hidden="true" />
                  Hiring?
                </p>
                <h2 className="text-[clamp(2.5rem,6vw,3.75rem)] leading-[0.95] text-on-panel">
                  Let's talk about a role on your events team
                </h2>
                <p className="mt-4 mb-5 text-[1.0625rem] text-on-panel-muted">
                  I'm open to full-time positions in Hyderabad and happy to share references or a detailed resume.
                </p>
                <ul className="flex flex-wrap gap-2" aria-label="Roles I'm interested in">
                  {ROLES.map((r) => (
                    <li key={r} className="chip border-white/20 bg-transparent text-on-panel print:border-line">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="grid gap-2.5">
                {[
                  { href: `mailto:${CONTACT.email}`, icon: <Mail size={18} aria-hidden="true" />, label: "Email", value: CONTACT.email },
                  { href: CONTACT.phoneHref, icon: <Phone size={18} aria-hidden="true" />, label: "Phone", value: CONTACT.phone },
                  { href: CONTACT.linkedin, icon: <LinkedinIcon size={18} />, label: "LinkedIn", value: CONTACT.linkedinHandle, external: true },
                  { href: CONTACT.whatsapp, icon: <MessageCircle size={18} aria-hidden="true" />, label: "WhatsApp", value: "Message me", external: true }
                ].map((c, i) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="flex min-h-16 items-center gap-3.5 rounded-2xl border border-white/12 bg-white/6 px-4.5 py-3 text-on-panel transition-[background-color,border-color,translate] duration-200 hover:-translate-y-0.5 hover:border-[#f472b6] hover:bg-white/12 focus-visible:outline-[#f472b6] print:min-h-0 print:border-line print:bg-transparent"
                    >
                      <span className={`flex-none ${PANEL_ICON[i]}`}>{c.icon}</span>
                      <span className="min-w-0 flex-1 font-semibold wrap-anywhere">
                        <small className="block text-xs font-medium tracking-[0.08em] text-on-panel-muted uppercase">
                          {c.label}
                        </small>
                        {c.value}
                      </span>
                      <ArrowUpRight size={16} aria-hidden="true" className="flex-none opacity-60 print:hidden" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line py-7 text-sm text-muted print:hidden">
        <div className="container-page flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Gurajala Nagalakshmi · Let's make the next one unforgettable.</p>
          <p>Event Operations &amp; Execution · Hyderabad, India</p>
        </div>
      </footer>
    </>
  );
}
