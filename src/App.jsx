import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  CalendarCheck,
  ChevronDown,
  ClipboardList,
  Download,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Moon,
  Mic2,
  Phone,
  Speaker,
  Sun,
  Users,
  X
} from "lucide-react";
import portraitJpg from "./assets/nagalakshmi.jpg";
import portraitWebp from "./assets/nagalakshmi.webp";

const CONTACT = {
  email: "gurujalaloke@gmail.com",
  phone: "+91 73961 86269",
  phoneHref: "tel:+917396186269",
  whatsapp: "https://wa.me/917396186269",
  linkedin: "https://www.linkedin.com/in/gurijala-nagalakshmi",
  linkedinHandle: "gurijala-nagalakshmi"
};

const NAV = [
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

const EVENT_FORMATS = [
  "Corporate events",
  "Live concerts",
  "Weddings",
  "Conferences",
  "Exhibitions",
  "Press meets",
  "Brand activations",
  "Campus fests"
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

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6 1.6-.72 1.6-1.6-.72-1.6-1.6-1.6Z" />
    </svg>
  );
}

function SectionHead({ eyebrow, title, intro }) {
  return (
    <div className="reveal mb-10 max-w-[680px] print:mb-2.5">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-[clamp(1.875rem,4.5vw,2.75rem)] leading-tight print:text-[16pt]">{title}</h2>
      {intro && <p className="mt-4 text-[1.0625rem] text-ink-2">{intro}</p>}
    </div>
  );
}

function Section({ id, alt, children, className = "" }) {
  return (
    <section id={id} className={`py-18 nav:py-26 print:py-3 ${alt ? "bg-bg-alt" : ""}`}>
      <div className={`container-page ${className}`}>{children}</div>
    </section>
  );
}

function Monogram() {
  return (
    <span
      aria-hidden="true"
      className="grid size-[38px] flex-none place-items-center rounded-full bg-ink font-serif text-sm font-semibold tracking-wide text-bg"
    >
      GN
    </span>
  );
}

function getInitialTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
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

    return () => {
      reveal.disconnect();
      spy.disconnect();
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

      <header className="sticky top-0 z-50 border-b border-line bg-bg/88 backdrop-blur-md backdrop-saturate-150 print:hidden">
        <div className="container-page flex h-[68px] items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Gurajala Nagalakshmi, back to top">
            <Monogram />
            <span className="flex min-w-0 flex-col leading-tight">
              <strong className="truncate text-[0.9375rem]">Gurajala Nagalakshmi</strong>
              <span className="text-xs text-muted">Event Operations · Hyderabad</span>
            </span>
          </a>

          <nav className="hidden gap-1 nav:flex" aria-label="Primary">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`rounded-full px-3 py-2 text-[0.9rem] font-medium transition-colors duration-150 hover:text-ink ${
                  active === n.id ? "bg-bg-alt text-ink" : "text-muted"
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
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-ink"
            >
              {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
            <button type="button" className="btn btn-ghost btn-sm hidden nav:inline-flex" onClick={() => window.print()}>
              <Download size={15} aria-hidden="true" />
              <span>Resume PDF</span>
            </button>
            <a href={`mailto:${CONTACT.email}`} className="btn btn-primary btn-sm hidden xs:inline-flex">
              <Mail size={15} aria-hidden="true" />
              <span>Email me</span>
            </a>
            <button
              type="button"
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface text-ink nav:hidden"
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
          className={`grid gap-1 overflow-hidden px-4 transition-[max-height,padding] duration-300 ease-out-soft nav:hidden ${
            menuOpen ? "visible max-h-[480px] border-t border-line pt-3 pb-5" : "invisible max-h-0"
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
        <section id="top" className="pt-14 pb-18 nav:pt-24 nav:pb-28 print:py-3">
          <div className="container-page grid grid-cols-[minmax(0,1fr)] items-center gap-10 nav:grid-cols-[1.35fr_1fr] nav:gap-16 print:grid-cols-[1.3fr_1fr] print:gap-6">
            <div className="reveal">
              <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink-2 print:hidden">
                <span
                  aria-hidden="true"
                  className="size-2 flex-none rounded-full bg-success shadow-[0_0_0_4px_color-mix(in_srgb,var(--success)_20%,transparent)]"
                />
                Open to full-time roles with event management companies
              </p>

              <h1 className="text-[clamp(2.5rem,7vw,4.25rem)] leading-[1.05] print:text-[26pt]">
                Gurajala <em className="text-accent italic">Nagalakshmi</em>
              </h1>
              <p className="mt-3 text-sm font-semibold tracking-[0.12em] text-muted uppercase">
                Event Operations &amp; Execution
              </p>

              <p className="mt-6 max-w-[56ch] text-lg text-ink-2">
                I help event teams run corporate events, concerts, weddings and brand activations smoothly on the
                ground — handling venues, vendors, stage and sound, and guests so the show starts on time.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 print:hidden">
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
              className="reveal rounded-[20px] border border-line bg-surface p-6 shadow-card dark:shadow-none print:shadow-none"
              aria-label="Quick facts"
            >
              <picture>
                <source srcSet={portraitWebp} type="image/webp" />
                <img
                  src={portraitJpg}
                  alt="Gurajala Nagalakshmi"
                  width="800"
                  height="1000"
                  fetchPriority="high"
                  className="aspect-[4/5] w-full rounded-[14px] bg-bg-alt object-cover print:hidden"
                />
              </picture>
              <div className="border-b border-line pt-5 pb-5 print:pt-0">
                <p className="font-serif text-xl font-semibold">Nagalakshmi G.</p>
                <p className="text-sm text-muted">Event Operations Executive</p>
              </div>
              <dl className="py-2">
                {[
                  [Briefcase, "Currently", "G Productions"],
                  [MapPin, "Based in", "Hyderabad, Telangana"],
                  [GraduationCap, "Education", "B.Tech ECE, 2025"],
                  [Languages, "Languages", "Telugu, English, Hindi"]
                ].map(([Icon, label, value]) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-dashed border-line py-3 last:border-b-0">
                    <dt className="inline-flex items-center gap-2 text-sm text-muted">
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
                  ["3+", "years leading events"]
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

        {/* ── ABOUT ── */}
        <Section id="about">
          <SectionHead
            eyebrow="About"
            title="What I bring to an events team"
            intro="I started by leading volunteer crews at college fests, moved into weddings and social events with Hyderabad event companies, and now work across corporate and live productions. I'm looking for a team where I can keep growing in operations and production."
          />
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {STRENGTHS.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card reveal">
                <span className="icon-tile" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-[0.9375rem] text-muted">{text}</p>
              </article>
            ))}
          </div>

          <div className="reveal mt-10">
            <p className="mb-3.5 font-semibold">Event formats I've worked on</p>
            <ul className="flex flex-wrap gap-2">
              {EVENT_FORMATS.map((f) => (
                <li key={f} className="chip">{f}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* ── EXPERIENCE ── */}
        <Section id="experience" alt>
          <SectionHead eyebrow="Experience" title="Where I've worked" />
          <ol className="relative grid grid-cols-[minmax(0,1fr)] gap-6 md:before:absolute md:before:inset-y-2 md:before:left-[200px] md:before:w-px md:before:bg-line print:before:hidden">
            {EXPERIENCE.map((job) => (
              <li
                key={job.company}
                className="reveal grid grid-cols-[minmax(0,1fr)] gap-2.5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 print:grid-cols-1 print:gap-1"
              >
                <div
                  className={`flex flex-wrap items-center gap-2.5 md:relative md:flex-col md:items-start md:pt-[26px] md:after:absolute md:after:top-[30px] md:after:-right-[26px] md:after:size-[11px] md:after:rounded-full md:after:border-2 md:after:border-accent print:flex-row print:pt-0 print:after:hidden ${
                    job.current ? "md:after:bg-accent" : "md:after:bg-bg-alt"
                  }`}
                >
                  <span className="text-sm font-semibold text-muted">{job.period}</span>
                  {job.current && (
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-on-accent">Current</span>
                  )}
                </div>
                <div
                  className={`card md:p-7 ${
                    job.current ? "border-[color-mix(in_srgb,var(--accent)_55%,var(--line))]" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="mt-1 text-[0.9375rem] font-semibold text-accent">
                    {job.company} <span aria-hidden="true">·</span> {job.place}
                  </p>
                  <ul className="mt-3.5 grid gap-2">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="relative pl-[18px] text-[0.9375rem] text-ink-2 before:absolute before:top-[0.65em] before:left-0.5 before:size-1.5 before:rounded-full before:bg-accent"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Focus areas">
                    {job.tags.map((t) => (
                      <li key={t} className="chip bg-bg-alt px-2.5 py-1 text-[0.8rem]">{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* ── SKILLS ── */}
        <Section id="skills">
          <SectionHead eyebrow="Skills" title="What I can take off your plate" />
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {SKILLS.map(({ icon: Icon, title, items }) => (
              <article key={title} className="card reveal">
                <div className="mb-4 flex items-center gap-3.5">
                  <span className="icon-tile" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <ul className="grid gap-2.5">
                  {items.map((i) => (
                    <li
                      key={i}
                      className="relative pl-[26px] text-[0.9375rem] text-ink-2 before:absolute before:top-[0.35em] before:left-0 before:h-2 before:w-3.5 before:-rotate-45 before:border-b-2 before:border-l-2 before:border-accent"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* ── EDUCATION ── */}
        <Section id="education" alt className="grid gap-2 nav:grid-cols-[1fr_1.6fr] nav:items-start nav:gap-12">
          <SectionHead eyebrow="Education" title="Engineering foundation" />
          <article className="card reveal flex items-start gap-4.5">
            <span className="icon-tile" aria-hidden="true">
              <GraduationCap size={20} />
            </span>
            <div>
              <h3 className="text-[1.1875rem] font-semibold">B.Tech, Electronics &amp; Communication Engineering</h3>
              <p className="mt-1 text-[0.9375rem] font-semibold text-accent">
                Siddhartha Institute of Engineering &amp; Technology (SIET), Hyderabad
              </p>
              <p className="mt-1.5 mb-3 text-sm font-semibold text-muted">2021 — 2025 · CGPA 7.2</p>
              <p className="text-[0.9375rem] text-ink-2">
                The technical side of my degree — audio signals, AV systems and electrical load — is what lets me work
                confidently alongside sound, lighting and stage crews.
              </p>
            </div>
          </article>
        </Section>

        {/* ── CONTACT ── */}
        <Section id="contact">
          <div className="reveal grid gap-8 rounded-3xl bg-panel px-5 py-8 text-on-panel nav:grid-cols-[1.1fr_1fr] nav:items-center nav:gap-14 nav:p-14 print:grid-cols-2 print:p-0">
            <div>
              <p className="eyebrow text-panel-accent">Hiring?</p>
              <h2 className="text-[clamp(1.875rem,4.5vw,2.5rem)] leading-tight text-on-panel">
                Let's talk about a role on your events team.
              </h2>
              <p className="mt-4 mb-6 text-[1.0625rem] text-on-panel-muted">
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
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="flex min-h-16 items-center gap-3.5 rounded-2xl border border-white/12 bg-white/6 px-4.5 py-3 text-on-panel transition-colors duration-200 hover:border-panel-accent hover:bg-white/12 focus-visible:outline-panel-accent print:min-h-0 print:border-line print:bg-transparent"
                  >
                    <span className="flex-none text-panel-accent">{c.icon}</span>
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
        </Section>
      </main>

      <footer className="border-t border-line py-7 text-sm text-muted print:hidden">
        <div className="container-page flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Gurajala Nagalakshmi</p>
          <p>Event Operations &amp; Execution · Hyderabad, India</p>
        </div>
      </footer>
    </>
  );
}
