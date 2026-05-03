/* global React */
const { useState, useEffect, useRef } = React;

// =============================================================
// SSI Logo — three variants the user can swap via Tweaks
// =============================================================
function SSILogo({ variant = "crest", size = 220, dark = true }) {
  const stroke = dark ? "#F4EEE3" : "#0F0F10";
  const goldGrad = "url(#ssiGoldGrad)";
  const goldGradLight = "url(#ssiGoldGradLight)";

  const Defs = () => (
    <defs>
      <linearGradient id="ssiGoldGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F4E5C0"/>
        <stop offset="40%" stopColor="#E2BA5A"/>
        <stop offset="100%" stopColor="#B5862A"/>
      </linearGradient>
      <linearGradient id="ssiGoldGradLight" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E2BA5A"/>
        <stop offset="100%" stopColor="#B5862A"/>
      </linearGradient>
    </defs>
  );

  if (variant === "crest") {
    // Sun above, monogram in clean disc, clubs crossed BELOW
    return (
      <svg viewBox="0 0 240 280" width={size} height={size * (280/240)} aria-label="Summer Solstice Invitational">
        <Defs/>
        {/* outer ornamental ring */}
        <circle cx="120" cy="120" r="106" fill="none" stroke={dark ? "rgba(244,238,227,.45)" : "rgba(15,15,16,.45)"} strokeWidth="1"/>
        <circle cx="120" cy="120" r="100" fill="none" stroke={goldGrad} strokeWidth="1.5"/>

        {/* upper sun + rays — rays only on the top hemisphere */}
        <g stroke={goldGrad} strokeWidth="1.8" strokeLinecap="round">
          {Array.from({length: 13}).map((_, i) => {
            // rays from -170° to -10° (top arc)
            const deg = -170 + (i * 160 / 12);
            const angle = deg * Math.PI / 180;
            const x1 = 120 + Math.cos(angle) * 56;
            const y1 = 90  + Math.sin(angle) * 56;
            const len = i % 2 === 0 ? 14 : 8;
            const x2 = 120 + Math.cos(angle) * (56 + len);
            const y2 = 90  + Math.sin(angle) * (56 + len);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>;
          })}
        </g>
        {/* sun half-disc */}
        <circle cx="120" cy="90" r="32" fill="none" stroke={goldGrad} strokeWidth="1.6"/>
        {/* horizon rule across the sun */}
        <line x1="62" y1="90" x2="178" y2="90" stroke={goldGrad} strokeWidth="1.2"/>

        {/* center monogram — clean, no overlap */}
        <text x="120" y="148" textAnchor="middle"
              fontFamily="'Cormorant Garamond', serif" fontStyle="italic"
              fontSize="44" fontWeight="500" fill={stroke}
              letterSpacing="2">SSI</text>

        {/* hairline under monogram */}
        <line x1="86" y1="166" x2="154" y2="166" stroke={goldGrad} strokeWidth="1"/>
        <circle cx="120" cy="166" r="2" fill={goldGrad}/>

        {/* crossed clubs BELOW the monogram, smaller, decorative */}
        <g stroke={goldGrad} strokeWidth="2" strokeLinecap="round" fill="none">
          <line x1="98"  y1="180" x2="142" y2="206"/>
          <line x1="142" y1="180" x2="98"  y2="206"/>
          <ellipse cx="144" cy="207" rx="6" ry="3.5" transform="rotate(30 144 207)" fill={goldGrad} stroke="none"/>
          <ellipse cx="96"  cy="207" rx="6" ry="3.5" transform="rotate(-30 96 207)" fill={goldGrad} stroke="none"/>
        </g>

        {/* banner */}
        <g>
          <path d="M 30 222 Q 120 234 210 222 L 210 254 Q 120 266 30 254 Z"
                fill={dark ? "rgba(244,238,227,.06)" : "rgba(15,15,16,.04)"}
                stroke={goldGrad} strokeWidth="1"/>
          <text x="120" y="242" textAnchor="middle"
                fontFamily="'Poppins', sans-serif" fontWeight="700"
                fontSize="10" letterSpacing="3.6" fill={stroke}>SUMMER SOLSTICE</text>
          <text x="120" y="256" textAnchor="middle"
                fontFamily="'Cormorant Garamond', serif" fontStyle="italic"
                fontSize="13" fill={goldGrad}>Invitational · MMXXVI</text>
        </g>
      </svg>
    );
  }

  if (variant === "sunpeaks") {
    // Sun rising over Colorado peaks
    return (
      <svg viewBox="0 0 320 240" width={size * (320/240)} height={size} aria-label="Summer Solstice Invitational">
        <Defs/>
        <defs>
          <clipPath id="sunpeaksClip">
            <rect x="0" y="0" width="320" height="180"/>
          </clipPath>
        </defs>
        {/* sun — clipped to horizon so it doesn't poke below the mountains */}
        <g clipPath="url(#sunpeaksClip)">
          <circle cx="160" cy="130" r="60" fill="none" stroke={goldGrad} strokeWidth="2"/>
          <g stroke={goldGrad} strokeWidth="1.8" strokeLinecap="round">
            {Array.from({length: 16}).map((_, i) => {
              const angle = (-90 + i * 180 / 15) * Math.PI / 180;
              const x1 = 160 + Math.cos(angle) * 70;
              const y1 = 130 + Math.sin(angle) * 70;
              const x2 = 160 + Math.cos(angle) * (70 + (i % 2 ? 10 : 18));
              const y2 = 130 + Math.sin(angle) * (70 + (i % 2 ? 10 : 18));
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>;
            })}
          </g>
        </g>
        {/* mountains overlap sun */}
        <path d="M 0 180 L 60 130 L 100 165 L 145 110 L 200 165 L 245 125 L 320 180 Z" fill={goldGrad}/>
        <path d="M 0 180 L 60 130 L 100 165 L 145 110 L 200 165 L 245 125 L 320 180" fill="none" stroke={dark ? "rgba(244,238,227,.4)" : "rgba(15,15,16,.5)"} strokeWidth="1"/>
        {/* horizon line */}
        <line x1="0" y1="180" x2="320" y2="180" stroke={goldGrad} strokeWidth="1.5"/>
        {/* wordmark */}
        <text x="160" y="208" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontWeight="800" fontSize="14" letterSpacing="4.2" fill={stroke}>SUMMER SOLSTICE</text>
        <text x="160" y="228" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontWeight="500" fontSize="16" fill={goldGrad}>· Invitational ·</text>
      </svg>
    );
  }

  // monogram: large italic SSI with circle and rules
  return (
    <svg viewBox="0 0 300 240" width={size * (300/240)} height={size} aria-label="Summer Solstice Invitational">
      <Defs/>
      {/* outer rule */}
      <line x1="40" y1="36" x2="260" y2="36" stroke={goldGrad} strokeWidth="1"/>
      <line x1="40" y1="204" x2="260" y2="204" stroke={goldGrad} strokeWidth="1"/>
      {/* small ornament dots */}
      <circle cx="150" cy="36" r="2" fill={goldGrad}/>
      <circle cx="150" cy="204" r="2" fill={goldGrad}/>
      {/* tiny sun above */}
      <g transform="translate(150, 60)">
        <circle r="10" fill="none" stroke={goldGrad} strokeWidth="1.3"/>
        {Array.from({length: 8}).map((_, i) => {
          const angle = (i * 45) * Math.PI / 180;
          const x1 = Math.cos(angle) * 14;
          const y1 = Math.sin(angle) * 14;
          const x2 = Math.cos(angle) * 18;
          const y2 = Math.sin(angle) * 18;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={goldGrad} strokeWidth="1.3" strokeLinecap="round"/>;
        })}
      </g>
      {/* monogram */}
      <text x="150" y="148" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontSize="76" fontWeight="500" fill={stroke}>SSI</text>
      {/* hairline rules + brand name in clean sans */}
      <line x1="40" y1="178" x2="120" y2="178" stroke={goldGrad} strokeWidth="1"/>
      <line x1="180" y1="178" x2="260" y2="178" stroke={goldGrad} strokeWidth="1"/>
      <text x="150" y="183" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontWeight="800" fontSize="13" letterSpacing="3.8" fill={stroke}>SUMMER SOLSTICE</text>
      <text x="150" y="202" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontSize="15" fontWeight="500" fill={goldGrad} letterSpacing="1">Invitational</text>
      <text x="150" y="226" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="9" letterSpacing="3.4" fill={dark ? "rgba(244,238,227,.6)" : "rgba(15,15,16,.6)"}>EST. MMXXVI · DENVER COLORADO</text>
    </svg>
  );
}

// Smaller mark for nav/footer
function SSIMark({ size = 28, dark = true }) {
  const goldGrad = "url(#ssiNavGrad)";
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <defs>
        <linearGradient id="ssiNavGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E2BA5A"/>
          <stop offset="100%" stopColor="#B5862A"/>
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="13" fill="none" stroke={goldGrad} strokeWidth="1.4"/>
      {Array.from({length: 12}).map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const x1 = 20 + Math.cos(angle) * 14.5;
        const y1 = 20 + Math.sin(angle) * 14.5;
        const x2 = 20 + Math.cos(angle) * 18;
        const y2 = 20 + Math.sin(angle) * 18;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={goldGrad} strokeWidth="1.3" strokeLinecap="round"/>;
      })}
      <path d="M 6 28 L 14 22 L 20 26 L 28 20 L 34 28 Z" fill={goldGrad}/>
    </svg>
  );
}

window.SSILogo = SSILogo;
window.SSIMark = SSIMark;
