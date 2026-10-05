import React from "react";

/*
  Animated festival illustrations (pure SVG + CSS keyframes in styles.css).
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
  dance: { r: [-150, -70, 0.55], l: [150, 70, 0.55] }
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

function Person({
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

function Frame({ id, label, sky, children }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={label} className="block h-auto w-full">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} />
          <stop offset="1" stopColor={sky[1]} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id}-sky)`} />
      {children}
    </svg>
  );
}

function Diya({ x, y, d = 0 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-8 -2 Q0 7 8 -2 Z" fill="#b5541c" />
      <ellipse cx="0" cy="-2" rx="8" ry="2" fill="#7f3b12" />
      <path className="flame" style={{ animationDelay: `${d}s` }} d="M0 -12 Q3.5 -6 0 -2.5 Q-3.5 -6 0 -12 Z" fill="#ffb703" />
    </g>
  );
}

function Lights({ y = 12, n = 14, sag = 14, colors }) {
  return (
    <g>
      <path d={`M0 ${y} Q200 ${y + 2 * sag} 400 ${y}`} stroke="#3a2a1a" strokeWidth="1" fill="none" opacity="0.6" />
      {Array.from({ length: n }, (_, i) => {
        const t = (i + 0.5) / n;
        return (
          <circle
            key={i}
            cx={t * 400}
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

function Petals({ count = 10, colors }) {
  return Array.from({ length: count }, (_, i) => (
    <g key={i} className="petal" style={{ animationDelay: `${-i * 0.7}s` }}>
      <ellipse cx={20 + i * (360 / count)} cy="0" rx="2.6" ry="4.2" fill={colors[i % colors.length]} />
    </g>
  ));
}

/* ── 1. Sankranti: kites, rangoli, Bhogi bonfire ── */

function Kite({ ax, ay, kx, ky, color, accent, delay = 0 }) {
  return (
    <g transform={`translate(${ax} ${ay})`}>
      <g className="kite-sway" style={{ animationDelay: `${delay}s` }}>
        <path d={`M0 0 Q${kx * 0.6} ${ky * 0.35} ${kx} ${ky}`} stroke="#5c4033" strokeWidth="0.8" fill="none" opacity="0.7" />
        <g transform={`translate(${kx} ${ky}) rotate(-12)`}>
          <path d="M0 -15 L11 0 L0 17 L-11 0 Z" fill={color} />
          <path d="M0 0 L11 0 L0 17 Z" fill={accent} opacity="0.55" />
          <path d="M0 -15 L0 17 M-11 0 L11 0" stroke="#fff" strokeWidth="0.8" opacity="0.7" />
          <path d="M0 17 q4 6 0 12 q-4 6 0 12" stroke={accent} strokeWidth="1.4" fill="none" />
          <path d="M-3 27 L3 31 L3 27 L-3 31 Z" fill={accent} />
        </g>
      </g>
    </g>
  );
}

function Bonfire({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-16 0 L16 -6 M-16 -6 L16 0" stroke="#6f4518" strokeWidth="5" strokeLinecap="round" />
      <path className="flame" d="M0 -40 Q14 -22 10 -6 Q0 0 -10 -6 Q-14 -22 0 -40 Z" fill="#fb8500" />
      <path className="flame" style={{ animationDelay: "-0.25s" }} d="M0 -28 Q8 -16 6 -6 Q0 -2 -6 -6 Q-8 -16 0 -28 Z" fill="#ffd60a" />
    </g>
  );
}

export function SankrantiScene() {
  return (
    <Frame
      id="sankranti"
      label="Sankranti: children fly kites from a terrace while their parents cheer, beside a rangoli and a Bhogi bonfire"
      sky={["#ffd6a5", "#ffc8dd"]}
    >
      <circle cx="335" cy="62" r="40" fill="#ffd166" className="pulse" />
      <circle cx="335" cy="62" r="25" fill="#ffd166" />
      <g className="cloud" fill="#fff" opacity="0.85">
        <ellipse cx="70" cy="52" rx="28" ry="9" />
        <ellipse cx="90" cy="45" rx="17" ry="10" />
        <ellipse cx="230" cy="30" rx="22" ry="7" />
        <ellipse cx="245" cy="25" rx="12" ry="7" />
      </g>
      <g transform="translate(176 72)">
        <g className="kite-sway" style={{ animationDelay: "-1s" }}>
          <path d="M0 -8 L6 0 L0 9 L-6 0 Z" fill="#8338ec" />
          <path d="M0 9 q2 4 0 8" stroke="#8338ec" strokeWidth="1" fill="none" />
        </g>
      </g>

      <rect y="206" width="400" height="10" fill="#d4a373" />
      <rect y="214" width="400" height="86" fill="#f3dfc1" />
      <Rangoli x={150} y={284} r={30} colors={["#ff006e", "#ffbe0b", "#3a86ff"]} />
      <Bonfire x={36} y={272} />

      <Kite ax={111} ay={194} kx={-38} ky={-138} color="#e63946" accent="#ffb703" />
      <Kite ax={200} ay={197} kx={62} ky={-128} color="#06d6a0" accent="#ff006e" delay={-1.5} />

      <Person x={95} y={262} s={0.78} kind="kurta" outfit="#3a86ff" trim="#ffbe0b" pants="#1d3557" pose="kite" />
      <Person x={185} y={262} s={0.74} outfit="#ff006e" trim="#ffd60a" skin="#8d5524" pose="kite" delay={0.2} />
      <Person x={272} y={262} s={0.95} kind="kurta" outfit="#fefae0" trim="#e76f51" skin="#8d5524" pose="cheer" delay={0.1} />
      <Person x={335} y={262} s={0.92} outfit="#2a9d8f" trim="#ffb703" skin="#c68642" pose="clap" delay={0.35} />
    </Frame>
  );
}

/* ── 2. Telugu wedding: talambralu under the mandapam ── */

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

/* ── 3. Bathukamma: women circling the flower stack ── */

export function BathukammaScene() {
  const widths = [84, 72, 60, 49, 38, 28, 19, 10];
  const colors = ["#2d6a4f", "#ff4d6d", "#ffd60a", "#c77dff", "#ff8500", "#f8f9fa", "#ff4d6d"];
  const sarees = [
    ["#ff006e", "#ffd60a"],
    ["#3a86ff", "#ffbe0b"],
    ["#8338ec", "#ffd60a"],
    ["#fb5607", "#06d6a0"],
    ["#06d6a0", "#ff006e"],
    ["#ffbe0b", "#d00000"],
    ["#ef476f", "#ffd166"],
    ["#118ab2", "#ffd60a"]
  ];
  const skins = ["#8d5524", "#a0662f", "#c68642", "#b5733c"];
  return (
    <Frame
      id="bathukamma"
      label="Bathukamma: women in bright sarees circle a seven-layer flower stack, clapping and singing at night"
      sky={["#140b2e", "#5a2a86"]}
    >
      <circle cx="62" cy="52" r="26" fill="#fff3c4" className="pulse" />
      <circle cx="62" cy="52" r="16" fill="#fff3c4" />
      <Stars points={[[130, 30], [180, 58], [240, 22], [300, 48], [350, 26], [380, 70], [110, 80], [270, 86], [20, 100], [330, 110]]} />
      <rect y="232" width="400" height="68" fill="#2b1846" />
      <ellipse cx="200" cy="262" rx="190" ry="34" fill="#3a1f5c" />
      <defs>
        <radialGradient id="bathukamma-glow">
          <stop offset="0" stopColor="#ffd60a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffd60a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="78" fill="url(#bathukamma-glow)" className="pulse" />

      <g className="orbit-a">
        {[70, 140, 260, 330].map((px, i) => (
          <Person key={px} x={px} y={236} s={0.72} outfit={sarees[i][0]} trim={sarees[i][1]} skin={skins[i]} pose="clap" delay={i * 0.15} />
        ))}
      </g>

      <ellipse cx="200" cy="248" rx="48" ry="6" fill="#d4a017" />
      {colors.map((c, i) => {
        const yb = 246 - i * 13;
        const wb = widths[i] / 2;
        const wt = widths[i + 1] / 2;
        return (
          <g key={i}>
            <path d={`M${200 - wb} ${yb} L${200 + wb} ${yb} L${200 + wt} ${yb - 13} L${200 - wt} ${yb - 13} Z`} fill={c} />
            {Array.from({ length: 4 }, (_, k) => (
              <circle
                key={k}
                cx={200 - wb * 0.7 + (k * wb * 1.4) / 3}
                cy={yb - 6.5}
                r="1.8"
                fill={i === 0 ? "#95d5b2" : "#ffffff"}
                opacity="0.55"
              />
            ))}
          </g>
        );
      })}
      <path d="M195 155 L205 155 L200 142 Z" fill="#ffd60a" />
      <circle cx="200" cy="141" r="2.4" fill="#ffd60a" />
      <Diya x={170} y={262} />
      <Diya x={230} y={262} d={-0.2} />

      <g className="orbit-b">
        {[45, 140, 260, 355].map((px, i) => (
          <Person
            key={px}
            x={px}
            y={292}
            s={0.95}
            outfit={sarees[i + 4][0]}
            trim={sarees[i + 4][1]}
            skin={skins[(i + 2) % 4]}
            pose="clap"
            delay={0.35 + i * 0.15}
          />
        ))}
      </g>
    </Frame>
  );
}

/* ── 4. Bonalu: bonam pots, Pothuraju and dappu drums ── */

function Bonam({ d = 0 }) {
  return (
    <g className="wobble" style={{ animationDelay: `${d}s` }}>
      <ellipse cx="0" cy="-100" rx="11" ry="9.5" fill="#d9480f" />
      <path d="M-11 -101 L11 -101" stroke="#ffd60a" strokeWidth="2.2" />
      <path d="M-9.5 -96 Q0 -92 9.5 -96" stroke="#fff" strokeWidth="1.3" strokeDasharray="1.4 2.4" fill="none" />
      <circle cx="0" cy="-104" r="1.6" fill="#d00000" />
      <rect x="-6" y="-114" width="12" height="5.5" rx="2" fill="#bc3908" />
      {[-40, -18, 18, 40].map((a, i) => (
        <ellipse key={a} cx="0" cy="-121" rx="2.6" ry="7.5" fill={i % 2 ? "#2b9348" : "#55a630"} transform={`rotate(${a} 0 -114)`} />
      ))}
      <ellipse cx="0" cy="-116" rx="5" ry="1.8" fill="#ffd60a" />
      <path className="flame" d="M0 -126 Q3 -121 0 -117.5 Q-3 -121 0 -126 Z" fill="#ff9e00" />
    </g>
  );
}

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

export function BonaluScene() {
  const whip = <path d="M0 26 q16 8 8 24 q-8 14 10 22" stroke="#6f1d1b" strokeWidth="2" fill="none" strokeLinecap="round" />;
  const drum = (
    <g>
      <circle cx="-8" cy="-48" r="12" fill="#e9c46a" stroke="#8d5524" strokeWidth="2.5" />
      <circle cx="-8" cy="-48" r="7" fill="none" stroke="#c9a227" strokeWidth="0.8" />
    </g>
  );
  return (
    <Frame
      id="bonalu"
      label="Bonalu: women carry decorated bonam pots with neem leaves and lamps on their heads, led by a dancing Pothuraju and a dappu drummer"
      sky={["#ffe5a0", "#ffb4a2"]}
    >
      <polygon
        points="150,236 150,150 160,150 160,130 170,130 170,112 180,112 180,96 192,96 192,82 208,82 208,96 220,96 220,112 230,112 230,130 240,130 240,150 250,150 250,236"
        fill="#e76f51"
        opacity="0.35"
      />
      <circle cx="200" cy="76" r="5" fill="#ffb703" opacity="0.7" />
      <Bunting colors={["#ff006e", "#ffbe0b", "#3a86ff", "#06d6a0", "#fb5607"]} />
      <rect y="238" width="400" height="62" fill="#f6bd60" opacity="0.6" />
      <Petals count={8} colors={["#fb8500", "#ffd60a"]} />

      <Person x={52} y={270} s={0.9} kind="kurta" outfit="#264653" trim="#e9c46a" pants="#f1faee" pose="drum" prop={drum} />
      <Person x={125} y={266} s={0.9} outfit="#ffbe0b" trim="#d00000" skin="#8d5524" pose="pot" prop={<Bonam />} />
      <Person x={190} y={262} s={0.9} outfit="#06d6a0" trim="#ff006e" skin="#a0662f" pose="pot" delay={0.4} prop={<Bonam d={-0.4} />} />
      <Person x={252} y={266} s={0.88} outfit="#ff006e" trim="#ffd60a" skin="#c68642" pose="pot" delay={0.8} prop={<Bonam d={-0.8} />} />
      <Person x={330} y={270} kind="pothu" outfit="#d00000" trim="#ffd60a" skin="#e0a526" pose="dance" motion="jump" rItem={whip} />
    </Frame>
  );
}

/* ── 5. Ugadi: mango-leaf toranam, pachadi and a fresh start ── */

export function UgadiScene() {
  const n = 19;
  const cap = (
    <g className="toss">
      <path d="M-14 -96 L0 -102 L14 -96 L0 -90 Z" fill="#111" />
      <rect x="-6" y="-95" width="12" height="5" fill="#111" />
      <path d="M14 -96 L15 -86" stroke="#ffd60a" strokeWidth="1.4" />
    </g>
  );
  const bowl = (
    <g>
      <path d="M-9 -42 Q0 -30 9 -42 Z" fill="#a0522d" />
      <ellipse cx="0" cy="-42" rx="9" ry="2.4" fill="#e9c46a" />
      {[-3, 3].map((sx, i) => (
        <g key={sx} transform={`translate(${sx} -46)`}>
          <path className="steam" style={{ animationDelay: `${-i * 1.2}s` }} d="M0 0 q3 -4 0 -8 q-3 -4 0 -8" stroke="#fff" strokeWidth="1.3" fill="none" />
        </g>
      ))}
    </g>
  );
  return (
    <Frame
      id="ugadi"
      label="Ugadi: a family at a doorway decorated with a mango-leaf toranam; a graduate tosses her cap while grandmother offers Ugadi pachadi"
      sky={["#fff3c4", "#d8f3dc"]}
    >
      <rect y="20" width="400" height="216" fill="#ffe3c2" />
      <rect y="236" width="400" height="64" fill="#f2cc8f" />
      <rect x="150" y="78" width="100" height="158" fill="#7f4f24" />
      <rect x="158" y="86" width="40" height="150" fill="#9c6644" />
      <rect x="202" y="86" width="40" height="150" fill="#9c6644" />
      <path d="M178 120 l10 14 l-10 14 l-10 -14 Z M222 120 l10 14 l-10 14 l-10 -14 Z" fill="#7f4f24" />
      <rect x="150" y="232" width="100" height="6" fill="#ffd60a" />
      {[160, 180, 200, 220, 240].map((dx) => (
        <circle key={dx} cx={dx} cy="235" r="1.6" fill="#d00000" />
      ))}

      <path d="M20 40 Q200 92 380 40" stroke="#6b4226" strokeWidth="1.2" fill="none" />
      {Array.from({ length: n }, (_, i) => {
        const t = i / (n - 1);
        return (
          <g key={i} transform={`translate(${20 + 360 * t} ${40 + 52 * t * (1 - t)})`}>
            <g className="sway-top" style={{ animationDelay: `${-i * 0.2}s` }}>
              {i % 3 === 1 ? (
                <circle cx="0" cy="5" r="4" fill="#fb8500" />
              ) : (
                <path d="M0 0 Q6 11 0 24 Q-6 11 0 0 Z" fill={i % 2 ? "#2d6a4f" : "#52b788"} />
              )}
            </g>
          </g>
        );
      })}

      <Rangoli x={200} y={278} r={26} colors={["#ffffff", "#ff006e", "#ffbe0b"]} />
      <Person x={100} y={264} s={0.9} outfit="#e9c46a" trim="#bc4749" hair="#d9d9d9" skin="#8d5524" pose="offer" prop={bowl} />
      <Person x={200} y={262} outfit="#7209b7" trim="#ffd60a" skin="#a0662f" pose="cheer" delay={0.2} prop={cap} />
      <Person x={298} y={264} s={0.98} kind="kurta" outfit="#0077b6" trim="#ffd60a" pants="#f8f9fa" skin="#8d5524" pose="clap" delay={0.4} />
      <Person x={356} y={268} s={0.6} outfit="#ff70a6" trim="#ffd60a" skin="#c68642" pose="cheer" delay={0.1} />
    </Frame>
  );
}

/* ── 6. Kolatam under festival fireworks ── */

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

export function KolatamScene() {
  const stick = (
    <g>
      <line x1="0" y1="16" x2="0" y2="44" stroke="#ffbe0b" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="0" y1="20" x2="0" y2="42" stroke="#d00000" strokeWidth="2.6" strokeDasharray="2 4" />
    </g>
  );
  const dancers = [
    [70, "#ff006e", "#ffd60a", "#a0662f", "orbit-a"],
    [150, "#ffbe0b", "#8338ec", "#8d5524", "orbit-b"],
    [250, "#06d6a0", "#ff006e", "#c68642", "orbit-a"],
    [330, "#8338ec", "#ffbe0b", "#b5733c", "orbit-b"]
  ];
  return (
    <Frame
      id="kolatam"
      label="Kolatam: four dancers strike painted sticks in rhythm under festival fireworks, with diyas glowing on the ground"
      sky={["#0b0420", "#3c096c"]}
    >
      <Stars points={[[30, 30], [90, 120], [150, 20], [210, 50], [260, 130], [320, 24], [370, 90], [60, 70], [180, 110], [390, 40]]} />
      <Firework x={90} y={70} color="#f472b6" />
      <Firework x={300} y={58} color="#facc15" delay={-0.9} r={34} />
      <Firework x={205} y={100} color="#2dd4bf" delay={-1.7} r={24} />
      <rect y="244" width="400" height="56" fill="#240046" />
      {dancers.map(([px, outfit, trim, skin, orbit], i) => (
        <g key={px} className={orbit}>
          <Person x={px} y={270} s={0.92} outfit={outfit} trim={trim} skin={skin} pose="stick" delay={i % 2 ? 0.45 : 0} rItem={stick} lItem={stick} />
        </g>
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <Diya key={i} x={30 + i * 48} y={292} d={-i * 0.15} />
      ))}
    </Frame>
  );
}
