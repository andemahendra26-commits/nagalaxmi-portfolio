import React from "react";

/*
  Animated event illustrations (pure SVG + CSS keyframes in styles.css).
  Every scene uses a 400×300 canvas. People are drawn with their feet at (0,0),
  about 92 units tall, and arms hang from the shoulders at (±10, -64).
  Arm angles: 0 = hanging down; negative swings the right arm outward/up,
  positive swings the left arm outward/up.
*/

const POSES = {
  clap: { r: [5, 24, 0.7], l: [-5, -24, 0.7] },
  cheer: { r: [-148, -172, 0.8], l: [148, 172, 0.8] },
  kite: { r: [-155], l: [12] },
  pot: { r: [171, 177, 1.3], l: [-171, -177, 1.3] },
  stick: { r: [-118, -72, 0.9], l: [118, 72, 0.9] },
  drum: { r: [-60, 28, 0.45], l: [-38] },
  shower: { r: [-160, -176, 1.1], l: [160, 176, 1.1] },
  offer: { r: [32], l: [-32] },
  dance: { r: [-150, -70, 0.55], l: [150, 70, 0.55] },
  wave: { r: [-125, -170, 0.6], l: [12] },
  glass: { r: [-150, -165, 1.2], l: [12] },
  glassL: { r: [-12], l: [150, 165, 1.2] },
  belly: { r: [22], l: [-22] },
  mic: { r: [150, 142, 1.4], l: [12] }
};

function Limb({ x, a, b, dur, delay, sleeve, skin, item }) {
  return (
    <g transform={`translate(${x} -64)`}>
      <g
        className="limb"
        style={{ "--a": `${a}deg`, "--b": `${b}deg`, animationDuration: `${dur}s`, animationDelay: `${delay}s` }}
      >
        <line x1="0" y1="0" x2="0" y2="10" stroke={sleeve} strokeWidth="7" strokeLinecap="round" />
        <line x1="0" y1="8" x2="0" y2="25" stroke={skin} strokeWidth="5" strokeLinecap="round" />
        <circle cx="0" cy="26" r="3.2" fill={skin} />
        {item}
      </g>
    </g>
  );
}

export function Person({
  x,
  y,
  s = 1,
  kind = "saree",
  outfit,
  trim,
  pants = "#fff8ec",
  skin = "#a0662f",
  hair = "#1b0f0a",
  pose = "clap",
  delay = 0,
  motion = "bob",
  rItem,
  lItem,
  prop
}) {
  const p = POSES[pose];
  const arm = (side) => {
    const [a, b = a, dur = 1] = p[side];
    return (
      <Limb
        x={side === "r" ? 10 : -10}
        a={a}
        b={b}
        dur={dur}
        delay={delay}
        sleeve={kind === "pothu" ? skin : outfit}
        skin={skin}
        item={side === "r" ? rItem : lItem}
      />
    );
  };
  const woman = kind === "saree";

  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className={motion} style={{ animationDelay: `${delay}s` }}>
        {woman && <path d="M-9.5 -84 Q-14 -70 -11.5 -57 L11.5 -57 Q14 -70 9.5 -84 Z" fill={hair} />}

        {kind === "kurta" && (
          <g stroke={pants} strokeWidth="6.5" strokeLinecap="round">
            <line x1="-5" y1="-30" x2="-6" y2="-2" />
            <line x1="5" y1="-30" x2="6" y2="-2" />
          </g>
        )}
        {kind === "pothu" && (
          <g>
            <g stroke={skin} strokeWidth="6" strokeLinecap="round">
              <line x1="-5" y1="-26" x2="-7" y2="-2" />
              <line x1="5" y1="-26" x2="7" y2="-2" />
            </g>
            <circle cx="-7" cy="-5" r="2.2" fill="#ffd60a" />
            <circle cx="7" cy="-5" r="2.2" fill="#ffd60a" />
          </g>
        )}

        {woman && (
          <g>
            <path d="M-10 -66 L10 -66 L19 -1 L-19 -1 Z" fill={outfit} />
            <path d="M-19 -1 L19 -1 L18.2 -6 L-18.2 -6 Z" fill={trim} />
            <path d="M-10 -66 L-3 -66 L14 -33 L8 -31 Z" fill={trim} opacity="0.9" />
          </g>
        )}
        {kind === "kurta" && (
          <g>
            <path d="M-11 -66 L11 -66 L13 -26 L-13 -26 Z" fill={outfit} />
            <path d="M-13 -29 L13 -29 L13 -26 L-13 -26 Z" fill={trim} />
            <line x1="0" y1="-64" x2="0" y2="-50" stroke={trim} strokeWidth="1.6" />
          </g>
        )}
        {kind === "pothu" && (
          <g>
            <path d="M-10 -66 L10 -66 L11 -34 L-11 -34 Z" fill={skin} />
            <path d="M-5 -60 L-5 -42 M0 -62 L0 -40 M5 -60 L5 -42" stroke="#d00000" strokeWidth="1.4" />
            <path d="M-12 -36 L12 -36 L15 -18 L-15 -18 Z" fill={outfit} />
            <path d="M-12 -36 L12 -36" stroke={trim} strokeWidth="3" />
          </g>
        )}

        {/* head */}
        <rect x="-2.6" y="-73" width="5.2" height="8" fill={skin} />
        <circle cx="0" cy="-82.5" r="9.6" fill={hair} />
        <circle cx="0" cy="-79.5" r="8.6" fill={skin} />
        <path d="M-8.7 -81 Q0 -91 8.7 -81 Q8 -88 0 -90 Q-8 -88 -8.7 -81 Z" fill={hair} />
        <circle cx="-3" cy="-79.5" r="1" fill="#1b0f0a" />
        <circle cx="3" cy="-79.5" r="1" fill="#1b0f0a" />
        <path d="M-2.6 -75.6 Q0 -73.6 2.6 -75.6" stroke="#5a2a14" strokeWidth="1" fill="none" strokeLinecap="round" />
        {woman && (
          <g>
            <circle cx="0" cy="-83.4" r="1.1" fill="#d00000" />
            <circle cx="-8.8" cy="-87" r="2.2" fill="#fff" />
            <circle cx="-10.6" cy="-84" r="1.8" fill="#fff" />
          </g>
        )}
        {kind === "kurta" && (
          <path d="M-3.2 -77.2 Q0 -78.6 3.2 -77.2" stroke={hair} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        )}
        {kind === "pothu" && <rect x="-0.8" y="-89" width="1.6" height="6" fill="#d00000" />}

        {prop}
        {arm("l")}
        {arm("r")}
      </g>
    </g>
  );
}

/* ── Shared props ── */

export function Frame({ id, label, sky, w = 400, h = 300, children }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} className="block h-auto w-full">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} />
          <stop offset="1" stopColor={sky[1]} />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#${id}-sky)`} />
      {children}
    </svg>
  );
}

export function Diya({ x, y, d = 0 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-8 -2 Q0 7 8 -2 Z" fill="#b5541c" />
      <ellipse cx="0" cy="-2" rx="8" ry="2" fill="#7f3b12" />
      <path className="flame" style={{ animationDelay: `${d}s` }} d="M0 -12 Q3.5 -6 0 -2.5 Q-3.5 -6 0 -12 Z" fill="#ffb703" />
    </g>
  );
}

export function Lights({ y = 12, n = 14, sag = 14, w = 400, colors }) {
  return (
    <g>
      <path d={`M0 ${y} Q${w / 2} ${y + 2 * sag} ${w} ${y}`} stroke="#3a2a1a" strokeWidth="1" fill="none" opacity="0.6" />
      {Array.from({ length: n }, (_, i) => {
        const t = (i + 0.5) / n;
        return (
          <circle
            key={i}
            cx={t * w}
            cy={y + 4 * sag * t * (1 - t) + 3}
            r="3"
            fill={colors[i % colors.length]}
            className="blink"
            style={{ animationDelay: `${(i % 5) * 0.3}s` }}
          />
        );
      })}
    </g>
  );
}

function Rangoli({ x, y, r = 30, colors }) {
  return (
    <g transform={`translate(${x} ${y}) scale(1 0.42)`}>
      <g className="spin">
        <circle r={r} fill={colors[0]} opacity="0.9" />
        {Array.from({ length: 8 }, (_, i) => (
          <ellipse key={i} cx="0" cy={-r * 0.62} rx={r * 0.2} ry={r * 0.36} fill={colors[1]} transform={`rotate(${i * 45})`} />
        ))}
        <circle r={r * 0.45} fill={colors[2]} />
        {Array.from({ length: 12 }, (_, i) => (
          <circle key={i} cx="0" cy={-r - 4} r="2" fill="#fff" transform={`rotate(${i * 30})`} />
        ))}
        <circle r={r * 0.18} fill="#fff" />
      </g>
    </g>
  );
}

function Stars({ points }) {
  return points.map(([x, y], i) => (
    <circle key={i} cx={x} cy={y} r={i % 3 ? 1.2 : 1.8} fill="#fff" className="blink" style={{ animationDelay: `${(i % 6) * 0.4}s` }} />
  ));
}

export function Petals({ count = 10, w = 400, colors }) {
  return Array.from({ length: count }, (_, i) => (
    <g key={i} className="petal" style={{ animationDelay: `${-i * 0.7}s` }}>
      <ellipse cx={w * 0.05 + i * ((w * 0.9) / count)} cy="0" rx="2.6" ry="4.2" fill={colors[i % colors.length]} />
    </g>
  ));
}

/* ── Shared decorations ── */

function Bunting({ colors }) {
  const n = 15;
  return (
    <g>
      <path d="M0 20 Q200 60 400 20" stroke="#6b4226" strokeWidth="1" fill="none" />
      {Array.from({ length: n }, (_, i) => {
        const t = (i + 0.5) / n;
        return (
          <g key={i} transform={`translate(${t * 400} ${20 + 40 * t * (1 - t)})`}>
            <g className="sway-top" style={{ animationDelay: `${-i * 0.25}s` }}>
              <path d="M-7 0 L7 0 L0 14 Z" fill={colors[i % colors.length]} />
            </g>
          </g>
        );
      })}
    </g>
  );
}

function Firework({ x, y, color, delay = 0, r = 30 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="burst" style={{ animationDelay: `${delay}s` }}>
        {Array.from({ length: 14 }, (_, i) => {
          const a = (i / 14) * Math.PI * 2;
          return (
            <g key={i}>
              <line
                x1={Math.cos(a) * r * 0.3}
                y1={Math.sin(a) * r * 0.3}
                x2={Math.cos(a) * r}
                y2={Math.sin(a) * r}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx={Math.cos(a) * (r + 5)} cy={Math.sin(a) * (r + 5)} r="1.6" fill={color} />
            </g>
          );
        })}
      </g>
    </g>
  );
}

/* ── Marriage: talambralu under the mandapam ── */

export function WeddingScene() {
  const rice = Array.from({ length: 16 }, (_, i) => ({
    x: 184 + ((i * 37) % 34),
    y: 150 + ((i * 7) % 12),
    d: -((i * 0.13) % 1.6),
    c: i % 3 ? "#ffd60a" : "#ffffff"
  }));
  return (
    <Frame
      id="wedding"
      label="Telugu wedding: the bride and groom shower talambralu rice on each other under a decorated mandapam while guests clap"
      sky={["#2b0a3d", "#7b2cbf"]}
    >
      <Lights y={10} n={16} sag={14} colors={["#ffd60a", "#ff4d6d", "#4cc9f0", "#80ffdb"]} />
      <Petals count={10} colors={["#ff4d6d", "#ffb703", "#ff85a1"]} />
      <rect y="252" width="400" height="48" fill="#3c096c" />

      {/* mandapam */}
      <rect x="104" y="100" width="10" height="154" fill="#f4c430" />
      <rect x="286" y="100" width="10" height="154" fill="#f4c430" />
      <path d="M92 102 L200 58 L308 102 Z" fill="#c1121f" />
      <path d="M92 102 L308 102" stroke="#ffd60a" strokeWidth="4" />
      {Array.from({ length: 9 }, (_, i) => (
        <path key={i} d={`M${92 + i * 24} 104 a12 9 0 0 0 24 0`} fill="#ffd60a" opacity="0.9" />
      ))}
      {[128, 160, 240, 272].map((gx, gi) => (
        <g key={gx} transform={`translate(${gx} 108)`}>
          <g className="sway-top" style={{ animationDelay: `${-gi * 0.6}s` }}>
            {Array.from({ length: 7 }, (_, i) => (
              <circle key={i} cx="0" cy={i * 6 + 4} r="3.2" fill={i % 2 ? "#ffb703" : "#fb8500"} />
            ))}
          </g>
        </g>
      ))}
      {[109, 291].map((px, i) => (
        <g key={px} transform={`translate(${px} 254)`}>
          <path d="M0 0 Q-20 -20 -8 -48 Q-2 -24 0 0 Z" fill="#2d6a4f" />
          <path d="M0 0 Q20 -22 10 -52 Q2 -26 0 0 Z" fill="#40916c" />
          {i === 0 && <path d="M0 0 Q-26 -10 -24 -30 Q-10 -14 0 0 Z" fill="#52b788" />}
        </g>
      ))}

      <Person x={30} y={264} s={0.86} kind="kurta" outfit="#118ab2" trim="#ffd166" pants="#f1faee" pose="clap" delay={0.5} />
      <Person x={66} y={262} s={0.82} outfit="#06d6a0" trim="#ffd166" skin="#c68642" pose="clap" delay={0.2} />
      <Person x={176} y={256} outfit="#d00000" trim="#ffd60a" skin="#a0662f" pose="shower" />
      <Person x={224} y={256} s={1.05} kind="kurta" outfit="#fff3d6" trim="#d4a017" pants="#fffaf0" skin="#8d5524" pose="shower" delay={0.3} />
      <Person x={334} y={262} s={0.82} outfit="#ff70a6" trim="#ffd60a" skin="#8d5524" pose="clap" />
      <Person x={372} y={266} s={0.58} kind="kurta" outfit="#ffbe0b" trim="#e63946" pants="#264653" pose="cheer" delay={0.3} />

      {rice.map((r, i) => (
        <circle key={i} className="fall" cx={r.x} cy={r.y} r="1.6" fill={r.c} style={{ animationDelay: `${r.d}s` }} />
      ))}
      <Diya x={150} y={276} />
      <Diya x={250} y={276} d={-0.3} />
    </Frame>
  );
}


/* ── Small props ── */

function Heart({ x, y, color, d = 0, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path className="float-up" style={{ animationDelay: `${d}s` }} d="M0 4 C-8 -3 -4 -10 0 -5 C4 -10 8 -3 0 4 Z" fill={color} />
    </g>
  );
}

function Note({ x, y, color, d = 0 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="float-up" style={{ animationDelay: `${d}s` }}>
        <ellipse cx="0" cy="0" rx="4" ry="3" fill={color} />
        <path d="M3.6 -1 L3.6 -16 L11 -13" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
    </g>
  );
}

function Balloon({ x, y, color, d = 0 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="balloon" style={{ animationDelay: `${d}s` }}>
        <path d="M0 18 q-4 12 2 24 q5 12 -1 26" stroke="#6c757d" strokeWidth="0.8" fill="none" />
        <ellipse cx="0" cy="0" rx="14" ry="17" fill={color} />
        <ellipse cx="-5" cy="-6" rx="3" ry="5" fill="#fff" opacity="0.45" />
        <path d="M-3 18 L3 18 L0 14 Z" fill={color} />
      </g>
    </g>
  );
}

function MarigoldStrand({ x, n = 8, d = 0 }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <g className="sway-top" style={{ animationDelay: `${d}s` }}>
        <line x1="0" y1="0" x2="0" y2={n * 8} stroke="#6b4226" strokeWidth="0.6" />
        {Array.from({ length: n }, (_, i) => (
          <circle key={i} cx="0" cy={i * 8 + 5} r="4" fill={i % 2 ? "#ffb703" : "#fb8500"} />
        ))}
      </g>
    </g>
  );
}

const glass = (
  <g>
    <line x1="0" y1="28" x2="0" y2="34" stroke="#e9ecef" strokeWidth="1.4" />
    <path d="M0 34 L-6 42 L6 42 Z" fill="#ff8fab" stroke="#fff" strokeWidth="0.8" />
  </g>
);

const mic = (
  <g>
    <rect x="-2" y="26" width="4" height="9" rx="2" fill="#adb5bd" />
    <circle cx="0" cy="36" r="3.4" fill="#495057" />
  </g>
);

const partyHat = (color) => (
  <g>
    <path d="M-7 -89 L7 -89 L0 -108 Z" fill={color} />
    <path d="M-4.5 -96 L4.5 -96 M-2.5 -102 L2.5 -102" stroke="#fff" strokeWidth="1.4" />
    <circle cx="0" cy="-109" r="2.4" fill="#fff" />
  </g>
);

const haldiBowl = (
  <g>
    <path d="M-9 -42 Q0 -31 9 -42 Z" fill="#b08968" />
    <ellipse cx="0" cy="-42" rx="9" ry="2.4" fill="#ffd60a" />
  </g>
);

const banglePlate = (
  <g>
    <ellipse cx="0" cy="-42" rx="11" ry="3" fill="#d4a017" />
    {["#ff006e", "#06d6a0", "#ffbe0b", "#3a86ff"].map((c, i) => (
      <ellipse key={c} cx={-6 + i * 4} cy="-45" rx="3" ry="1.6" fill="none" stroke={c} strokeWidth="1.3" />
    ))}
  </g>
);

const dhol = (
  <g>
    <rect x="-20" y="-56" width="24" height="16" rx="7" fill="#d62828" stroke="#ffd60a" strokeWidth="1.5" />
    <ellipse cx="-20" cy="-48" rx="3" ry="8" fill="#f1faee" />
    <ellipse cx="4" cy="-48" rx="3" ry="8" fill="#f1faee" />
  </g>
);

/* ── Engagement: ring, flower arch, rising hearts ── */

export function EngagementScene() {
  const flowers = Array.from({ length: 21 }, (_, i) => {
    const a = Math.PI - (i / 20) * Math.PI;
    return { x: 200 + Math.cos(a) * 150, y: 262 - Math.sin(a) * 165, c: ["#ffffff", "#ff006e", "#ffd60a"][i % 3] };
  });
  return (
    <Frame id="engagement" label="Engagement: a couple under a flower arch with a sparkling ring between them and hearts floating up as guests clap" sky={["#ffafcc", "#cdb4db"]}>
      <path d="M50 262 A150 165 0 0 1 350 262" stroke="#2d6a4f" strokeWidth="4" fill="none" />
      {flowers.map((f, i) => (
        <circle key={i} cx={f.x} cy={f.y} r="7" fill={f.c} className="blink" style={{ animationDelay: `${(i % 4) * 0.4}s` }} />
      ))}
      <rect y="255" width="400" height="45" fill="#e7c6ff" />
      <path d="M150 300 L170 255 L230 255 L250 300 Z" fill="#c1121f" opacity="0.85" />

      <g transform="translate(200 165)">
        <g className="balloon">
          <Firework x={0} y={0} color="#ffffff" r={26} />
          <circle cx="0" cy="6" r="10" fill="none" stroke="#ffd60a" strokeWidth="3.5" />
          <path d="M0 -12 L7 -6 L0 0 L-7 -6 Z" fill="#caf0f8" stroke="#fff" strokeWidth="1" />
        </g>
      </g>

      <Person x={70} y={266} s={0.85} outfit="#06d6a0" trim="#ffd60a" skin="#c68642" pose="clap" delay={0.2} />
      <Person x={165} y={262} outfit="#ff006e" trim="#ffd60a" skin="#a0662f" pose="offer" />
      <Person x={235} y={262} s={1.05} kind="kurta" outfit="#3a0ca3" trim="#ffd60a" pants="#f8f9fa" skin="#8d5524" pose="offer" delay={0.3} />
      <Person x={330} y={266} s={0.85} kind="kurta" outfit="#ffbe0b" trim="#e63946" pants="#264653" pose="clap" delay={0.5} />

      {[[150, 150, "#ff006e"], [250, 140, "#e63946"], [180, 120, "#ff4d6d"], [225, 110, "#ff006e"], [120, 130, "#c9184a"], [280, 160, "#ff4d6d"]].map(([x, y, c], i) => (
        <Heart key={i} x={x} y={y} color={c} d={-i * 0.55} />
      ))}
    </Frame>
  );
}

/* ── Haldi, Mehendi & Sangeet: marigolds, turmeric, dhol ── */

export function HaldiScene() {
  return (
    <Frame id="haldi" label="Haldi and sangeet: women dance under marigold strings while one offers a bowl of turmeric to the bride and a dhol player keeps the beat" sky={["#fff3b0", "#ffd166"]}>
      {[30, 72, 115, 157, 200, 243, 285, 328, 370].map((x, i) => (
        <MarigoldStrand key={x} x={x} n={i % 2 ? 7 : 9} d={-i * 0.3} />
      ))}
      <rect y="250" width="400" height="50" fill="#ffb703" opacity="0.5" />
      <Rangoli x={200} y={284} r={26} colors={["#ffffff", "#f72585", "#2b9348"]} />
      <Petals count={10} colors={["#ffd60a", "#fb8500", "#ffffff"]} />

      <Person x={60} y={266} s={0.9} kind="kurta" outfit="#e85d04" trim="#ffd60a" pants="#f8f9fa" skin="#8d5524" pose="drum" prop={dhol} />
      <Person x={140} y={262} s={0.92} outfit="#2b9348" trim="#ffd60a" skin="#a0662f" pose="offer" prop={haldiBowl} />
      <Person x={200} y={258} outfit="#ffd60a" trim="#2b9348" skin="#c68642" pose="clap" delay={0.2} />
      <Person x={262} y={262} s={0.92} outfit="#f72585" trim="#ffd60a" skin="#8d5524" pose="cheer" motion="jump" delay={0.1} />
      <Person x={340} y={266} s={0.88} outfit="#7209b7" trim="#ffd60a" skin="#b5733c" pose="dance" motion="jump" delay={0.35} />
    </Frame>
  );
}

/* ── Cocktail party: disco ball, DJ, bar, clinking glasses ── */

export function CocktailScene() {
  const beams = ["#f72585", "#4cc9f0", "#ffd60a", "#80ffdb"];
  return (
    <Frame id="cocktail" label="Cocktail party: a spinning disco ball lights the floor while a DJ plays, the bar is set and two guests clink glasses" sky={["#10002b", "#3c096c"]}>
      <Stars points={[[30, 30], [90, 60], [150, 18], [260, 30], [320, 70], [370, 22], [60, 110], [350, 120]]} />
      {beams.map((c, i) => (
        <polygon
          key={c}
          points={`200,40 ${40 + i * 100},250 ${90 + i * 100},250`}
          fill={c}
          opacity="0.16"
          className="blink"
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}
      <line x1="200" y1="0" x2="200" y2="24" stroke="#adb5bd" strokeWidth="1" />
      <g transform="translate(200 40)">
        <g className="spin" style={{ animationDuration: "8s" }}>
          {Array.from({ length: 10 }, (_, i) => {
            const a = (i / 10) * Math.PI * 2;
            return (
              <line key={i} x1={Math.cos(a) * 20} y1={Math.sin(a) * 20} x2={Math.cos(a) * 34} y2={Math.sin(a) * 34} stroke={beams[i % 4]} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            );
          })}
        </g>
        <circle r="16" fill="#adb5bd" />
        <path d="M-16 0 H16 M-14 -8 H14 M-14 8 H14 M0 -16 V16 M-8 -14 V14 M8 -14 V14" stroke="#6c757d" strokeWidth="0.8" />
        <circle cx="-5" cy="-6" r="3" fill="#fff" opacity="0.8" />
      </g>
      <rect y="250" width="400" height="50" fill="#240046" />

      <Person x={80} y={250} s={0.9} kind="kurta" outfit="#4361ee" trim="#4cc9f0" pants="#212529" skin="#8d5524" pose="offer" />
      <rect x="38" y="205" width="86" height="45" rx="4" fill="#240046" stroke="#7b2cbf" strokeWidth="2" />
      <ellipse cx="60" cy="205" rx="13" ry="4" fill="#111" />
      <ellipse cx="102" cy="205" rx="13" ry="4" fill="#111" />
      {[52, 66, 80, 94, 108].map((x, i) => (
        <circle key={x} cx={x} cy="228" r="2.5" fill={beams[i % 4]} className="blink" style={{ animationDelay: `${i * 0.25}s` }} />
      ))}

      <rect x="290" y="150" width="100" height="5" fill="#7b2cbf" />
      {[300, 316, 332, 348, 364, 380].map((x, i) => (
        <rect key={x} x={x - 3} y={i % 2 ? 132 : 128} width="6" height={i % 2 ? 18 : 22} rx="2" fill={["#2a9d8f", "#e76f51", "#e9c46a"][i % 3]} />
      ))}
      <rect x="290" y="215" width="105" height="35" rx="3" fill="#5a189a" />
      {[305, 330, 355, 380].map((x) => (
        <path key={x} d={`M${x} 215 L${x - 5} 205 L${x + 5} 205 Z`} fill="#80ffdb" opacity="0.8" />
      ))}

      <Person x={180} y={262} outfit="#f72585" trim="#ffd60a" skin="#a0662f" pose="glass" rItem={glass} />
      <Person x={222} y={262} s={1.05} kind="kurta" outfit="#212529" trim="#ffd60a" pants="#343a40" skin="#c68642" pose="glassL" lItem={glass} delay={0.15} />
      {[[150, 150, "#f72585"], [260, 140, "#4cc9f0"], [130, 110, "#ffd60a"], [280, 100, "#80ffdb"], [210, 120, "#f72585"]].map(([x, y, c], i) => (
        <Note key={i} x={x} y={y} color={c} d={-i * 0.65} />
      ))}
    </Frame>
  );
}

/* ── Birthday: cake, candles, balloons, party hats ── */

export function BirthdayScene() {
  return (
    <Frame id="birthday" label="Birthday party: kids in party hats cheer beside a two-tier cake with flickering candles, balloons bobbing and confetti falling" sky={["#ffd6ff", "#bde0fe"]}>
      <Bunting colors={["#ff006e", "#ffbe0b", "#3a86ff", "#06d6a0", "#8338ec"]} />
      <Petals count={12} colors={["#ff006e", "#ffbe0b", "#3a86ff", "#06d6a0"]} />
      <Balloon x={45} y={80} color="#ff006e" />
      <Balloon x={80} y={62} color="#ffbe0b" d={-0.8} />
      <Balloon x={320} y={66} color="#3a86ff" d={-1.4} />
      <Balloon x={355} y={86} color="#8338ec" d={-0.4} />
      <rect y="255" width="400" height="45" fill="#e0aaff" opacity="0.5" />

      <rect x="150" y="200" width="100" height="8" rx="2" fill="#bc6c25" />
      <rect x="158" y="208" width="6" height="50" fill="#99582a" />
      <rect x="236" y="208" width="6" height="50" fill="#99582a" />
      <rect x="165" y="170" width="70" height="30" rx="4" fill="#ffafcc" />
      <path d="M165 176 Q172 184 179 176 Q186 184 193 176 Q200 184 207 176 Q214 184 221 176 Q228 184 235 176 L235 172 L165 172 Z" fill="#fff" />
      <rect x="178" y="148" width="44" height="22" rx="3" fill="#ffffff" />
      <rect x="178" y="160" width="44" height="3" fill="#ff006e" />
      {[188, 200, 212].map((x, i) => (
        <g key={x}>
          <rect x={x - 1.5} y="136" width="3" height="12" fill={["#3a86ff", "#ffbe0b", "#06d6a0"][i]} />
          <path className="flame" style={{ animationDelay: `${-i * 0.2}s` }} d={`M${x} 126 Q${x + 3} 131 ${x} 135 Q${x - 3} 131 ${x} 126 Z`} fill="#ff9e00" />
        </g>
      ))}

      <Person x={60} y={262} s={0.95} outfit="#8338ec" trim="#ffd60a" skin="#a0662f" pose="clap" />
      <Person x={115} y={262} s={0.68} kind="kurta" outfit="#4cc9f0" trim="#ffbe0b" pants="#1d3557" skin="#8d5524" pose="cheer" motion="jump" prop={partyHat("#ff006e")} />
      <Person x={285} y={262} s={0.66} outfit="#ff70a6" trim="#ffd60a" skin="#c68642" pose="cheer" motion="jump" delay={0.25} prop={partyHat("#3a86ff")} />
      <Person x={345} y={262} kind="kurta" outfit="#06d6a0" trim="#ffd60a" pants="#f8f9fa" skin="#8d5524" pose="clap" delay={0.4} />
    </Frame>
  );
}

/* ── Baby shower: mom-to-be, swinging cradle, bangle plate ── */

export function BabyShowerScene() {
  const belly = (
    <g>
      <ellipse cx="2" cy="-40" rx="11" ry="12" fill="#ff70a6" />
      <path d="M-8 -48 Q2 -50 12 -44" stroke="#ffd60a" strokeWidth="1.5" fill="none" />
    </g>
  );
  return (
    <Frame id="babyshower" label="Baby shower: the mom-to-be smiles as family offer a plate of bangles and clap, beside a gently swinging cradle with pink and blue balloons" sky={["#caf0f8", "#ffc8dd"]}>
      <Bunting colors={["#ffafcc", "#a2d2ff", "#ffffff", "#bde0fe", "#ffc8dd"]} />
      <Balloon x={40} y={84} color="#a2d2ff" />
      <Balloon x={70} y={70} color="#ffafcc" d={-0.9} />
      <Balloon x={98} y={88} color="#bde0fe" d={-1.6} />
      <rect y="255" width="400" height="45" fill="#ffe5ec" />

      <rect x="282" y="150" width="6" height="110" fill="#b08968" />
      <rect x="372" y="150" width="6" height="110" fill="#b08968" />
      <rect x="276" y="146" width="108" height="7" rx="3" fill="#9c6644" />
      <g transform="translate(330 153)">
        <g className="sway-top">
          <line x1="-26" y1="0" x2="-26" y2="62" stroke="#7f5539" strokeWidth="1.5" />
          <line x1="26" y1="0" x2="26" y2="62" stroke="#7f5539" strokeWidth="1.5" />
          <path d="M-36 62 Q0 96 36 62 Z" fill="#ffafcc" stroke="#e5989b" strokeWidth="2" />
          <circle cx="-6" cy="66" r="6" fill="#c68642" />
          <path d="M-2 64 Q10 60 20 66 Q10 74 -2 70 Z" fill="#a2d2ff" />
        </g>
      </g>

      <Person x={50} y={266} s={0.85} outfit="#ffbe0b" trim="#d00000" skin="#8d5524" pose="clap" delay={0.3} />
      <Person x={115} y={264} s={0.9} outfit="#4cc9f0" trim="#ff006e" skin="#a0662f" pose="offer" prop={banglePlate} />
      <Person x={190} y={262} s={1.05} outfit="#ff70a6" trim="#ffd60a" skin="#c68642" pose="belly" prop={belly} />
      <Person x={250} y={266} s={0.86} kind="kurta" outfit="#3a86ff" trim="#ffd60a" pants="#f8f9fa" skin="#8d5524" pose="clap" delay={0.15} />

      {[[175, 150, "#ff70a6"], [205, 140, "#a2d2ff"], [160, 120, "#ff006e"], [220, 115, "#ffafcc"]].map(([x, y, c], i) => (
        <Heart key={i} x={x} y={y} color={c} d={-i * 0.8} />
      ))}
    </Frame>
  );
}

/* ── Get-together: friends around a dinner table ── */

export function GetTogetherScene() {
  const people = [
    [70, "kurta", "#3a86ff", "#ffbe0b", "#8d5524", "wave"],
    [125, "saree", "#ff006e", "#ffd60a", "#a0662f", "cheer"],
    [180, "kurta", "#2a9d8f", "#e9c46a", "#c68642", "clap"],
    [235, "saree", "#8338ec", "#ffd60a", "#8d5524", "glass"],
    [290, "kurta", "#e76f51", "#ffd60a", "#b5733c", "clap"],
    [345, "saree", "#06d6a0", "#ff006e", "#a0662f", "wave"]
  ];
  return (
    <Frame id="gettogether" label="Get-together: six friends laugh, wave and cheer around a long dinner table with steaming dishes under string lights" sky={["#ffcdb2", "#e5989b"]}>
      <Lights y={14} n={16} sag={16} colors={["#ffd60a", "#ff006e", "#4cc9f0", "#80ffdb"]} />
      <rect y="250" width="400" height="50" fill="#b5838d" opacity="0.5" />
      {people.map(([x, kind, outfit, trim, skin, pose], i) => (
        <Person
          key={x}
          x={x}
          y={262}
          s={0.95}
          kind={kind}
          outfit={outfit}
          trim={trim}
          pants="#f8f9fa"
          skin={skin}
          pose={pose}
          rItem={pose === "glass" ? glass : undefined}
          delay={i * 0.15}
        />
      ))}
      <rect x="40" y="212" width="320" height="10" rx="3" fill="#7f5539" />
      <rect x="48" y="222" width="304" height="40" fill="#fefae0" />
      <path d="M48 230 H352" stroke="#e63946" strokeWidth="3" opacity="0.6" />
      {[90, 160, 240, 310].map((x, i) => (
        <g key={x}>
          <ellipse cx={x} cy="211" rx="16" ry="4" fill="#fff" stroke="#ced4da" />
          <ellipse cx={x} cy="208" rx="9" ry="4" fill={["#f4a261", "#e9c46a", "#d62828", "#2a9d8f"][i]} />
          <g transform={`translate(${x} 202)`}>
            <path className="steam" style={{ animationDelay: `${-i * 0.6}s` }} d="M0 0 q3 -4 0 -8 q-3 -4 0 -8" stroke="#fff" strokeWidth="1.3" fill="none" />
          </g>
        </g>
      ))}
    </Frame>
  );
}

/* ── Corporate party: annual day stage, speaker, trophy, audience ── */

export function CorporateScene() {
  return (
    <Frame id="corporate" label="Corporate party: a speaker at the podium on an annual day stage under spotlights, with a trophy on stage and the audience clapping" sky={["#0b132b", "#1c2541"]}>
      <defs>
        <linearGradient id="corporate-banner" x1="0" x2="1">
          <stop offset="0" stopColor="#7209b7" />
          <stop offset="1" stopColor="#f72585" />
        </linearGradient>
      </defs>
      <polygon points="10,0 40,0 220,170 150,170" fill="#ffd60a" opacity="0.14" className="blink" />
      <polygon points="390,0 360,0 180,170 250,170" fill="#4cc9f0" opacity="0.14" className="blink" style={{ animationDelay: "-1.2s" }} />
      <Firework x={50} y={50} color="#f72585" r={22} />
      <Firework x={352} y={44} color="#ffd60a" delay={-1.3} r={22} />

      <rect x="90" y="28" width="220" height="72" rx="8" fill="url(#corporate-banner)" />
      <text x="200" y="70" textAnchor="middle" fontFamily="'Bebas Neue', Impact, sans-serif" fontSize="34" fill="#fff" letterSpacing="2">
        ANNUAL DAY
      </text>
      <text x="200" y="89" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="10" fontWeight="600" fill="#ffe5f1" letterSpacing="3">
        &amp; AWARDS NIGHT
      </text>

      <rect x="40" y="170" width="320" height="14" fill="#3a506b" />
      <rect x="40" y="184" width="320" height="18" fill="#1c2541" stroke="#3a506b" />
      <Person x={200} y={170} s={0.8} kind="kurta" outfit="#f8f9fa" trim="#4361ee" pants="#212529" skin="#8d5524" pose="mic" rItem={mic} />
      <rect x="188" y="140" width="24" height="30" rx="2" fill="#5c677d" />
      <circle cx="200" cy="152" r="5" fill="#f72585" />

      <g transform="translate(300 170)">
        <circle cx="0" cy="-22" r="18" fill="#ffd60a" className="pulse" />
        <path d="M-10 -34 H10 Q10 -18 0 -16 Q-10 -18 -10 -34 Z" fill="#ffd60a" />
        <path d="M-10 -31 Q-17 -30 -14 -23 Q-12 -20 -8 -21 M10 -31 Q17 -30 14 -23 Q12 -20 8 -21" stroke="#ffd60a" strokeWidth="2" fill="none" />
        <rect x="-2" y="-16" width="4" height="8" fill="#e9c46a" />
        <rect x="-8" y="-8" width="16" height="6" rx="1" fill="#bc6c25" />
      </g>

      {[35, 100, 165, 235, 300, 365].map((x, i) => (
        <Person
          key={x}
          x={x}
          y={300}
          s={0.9}
          kind={i % 2 ? "saree" : "kurta"}
          outfit={["#212529", "#4361ee", "#495057", "#f72585", "#343a40", "#06d6a0"][i]}
          trim="#ffd60a"
          pants="#212529"
          skin={["#8d5524", "#a0662f", "#c68642", "#b5733c"][i % 4]}
          pose="clap"
          delay={i * 0.12}
        />
      ))}
    </Frame>
  );
}
