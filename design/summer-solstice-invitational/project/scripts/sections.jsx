/* global React, SSILogo, SSIMark */
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

// =============================================================
// Countdown — to 6:24am Jun 19 2026 (Bear Dance first tee 12:24pm-ish; using sunrise feel)
// We'll target the first tee time: Jun 19, 2026 12:24 PM Mountain (UTC-6 in June DST)
// =============================================================
function Countdown() {
  const target = new Date("2026-06-19T18:24:00Z").getTime(); // 12:24 PM MDT
  const [now, setNow] = useStateS(Date.now());
  useEffectS(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="countdown-band" id="countdown">
      <div className="wrap">
        <div className="countdown">
          <div className="countdown-label">
            <span className="k">First tee · Bear Dance</span>
            Friday, June 19 · <em style={{ color: "#E2BA5A", fontStyle: "italic" }}>12:24 PM Mountain</em>
          </div>
          <div className="countdown-units">
            <div className="countdown-unit"><div className="num">{pad(days)}</div><div className="lbl">Days</div></div>
            <div className="countdown-unit"><div className="num">{pad(hours)}</div><div className="lbl">Hours</div></div>
            <div className="countdown-unit"><div className="num">{pad(mins)}</div><div className="lbl">Minutes</div></div>
            <div className="countdown-unit"><div className="num">{pad(secs)}</div><div className="lbl">Seconds</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// Hero
// =============================================================
function Hero({ logoVariant }) {
  return (
    <section className="ssi-hero" id="hero" data-screen-label="01 Hero">
      <div className="sun-stage">
        <div className="sun-rays"/>
        <div className="sun"/>
        <div className="horizon"/>
        <svg className="mountain-line" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M 0 80 L 100 50 L 180 65 L 260 30 L 340 55 L 440 25 L 520 50 L 620 18 L 720 45 L 820 22 L 900 48 L 1000 30 L 1100 55 L 1200 38 L 1300 60 L 1380 42 L 1440 70 L 1440 80 Z"
                fill="rgba(15,15,16,.85)" stroke="rgba(226,186,90,.4)" strokeWidth="1"/>
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span>Inaugural Edition</span>
          <span className="dot">✦</span>
          <span>Front Range, Colorado</span>
          <span className="dot">✦</span>
          <span>MMXXVI</span>
        </div>

        <div className="hero-logo-wrap">
          <SSILogo variant={logoVariant} size={300} dark={true}/>
        </div>

        <p className="hero-edition">
          Twelve players. Four rounds. <em>Three of Colorado's finest tracks.</em><br/>
          One purse, settled at sundown.
        </p>

        <div className="hero-meta">
          <div>
            <div className="k">Dates</div>
            <div className="v">June <em>19–21</em>, 2026</div>
          </div>
          <div>
            <div className="k">Field</div>
            <div className="v">12 invited <em>players</em></div>
          </div>
          <div>
            <div className="k">Format</div>
            <div className="v">Four <em>rounds</em>, three days</div>
          </div>
          <div>
            <div className="k">Purse</div>
            <div className="v"><em>$1,200</em> total</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="line"/>
      </div>
    </section>
  );
}

// =============================================================
// Format
// =============================================================
function Format() {
  const rounds = [
    { rn: "Round I · Friday afternoon", h: "Stableford", course: "The Golf Club at Bear Dance", desc: "We open in the foothills. Modified Stableford rewards aggression — birdies pay, blow-ups don't sting as much. A loose first round on the prettiest track of the week.", pts: "12-1 individual" },
    { rn: "Round II · Saturday morning", h: "Two-Man Best Ball", course: "Fox Hollow · The Meadow / Links", desc: "Pair up. Each player plays their own ball; the team takes the better score on every hole. Steady wins this one.", pts: "6-1 team-shared" },
    { rn: "Round III · Saturday afternoon", h: "Two-Man Scramble", course: "Fox Hollow · The Canyon / Meadow", desc: "Same partners, new format. Both tee off, pick the best, both play from there. Tempo round — somebody always finds a 64.", pts: "6-1 team-shared" },
    { rn: "Round IV · Sunday morning", h: "Stroke Play", course: "CommonGround · Aurora", desc: "Settle it on the closer Mike Hurdzan built to old-school principles. Lowest score wins. No mulligans. Trophy presented at the 18th green.", pts: "12-1 individual" },
  ];

  return (
    <section className="band band-paper" id="format" data-screen-label="02 Format">
      <div className="wrap">
        <div className="section-eyebrow"><span className="num">02</span><span>The Format</span></div>
        <h2 className="section-title">Four rounds. <em>One trophy.</em></h2>
        <p className="section-lede">
          Points awarded after each round; total points decide the purse. Individual rounds use a 12-1 ladder. Team rounds award a 6-1 ladder per player on each placing team. No ties broken — split the points and split the smack-talk.
        </p>

        <div className="format-grid">
          {rounds.map((r, i) => (
            <div className="round-card reveal" key={i}>
              <div className="rn">{r.rn}</div>
              <h3>{r.h}</h3>
              <div className="course">{r.course}</div>
              <p className="desc">{r.desc}</p>
              <div className="points-row">
                <div>
                  <div className="k">Scoring</div>
                  <div className="v">{r.pts}</div>
                </div>
                <div>
                  <div className="k">Round</div>
                  <div className="v">{["I","II","III","IV"][i]} of IV</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="points-table reveal">
          <div className="header">
            <h4>Individual round points · finishing order</h4>
            <span className="tag">Rounds I &amp; IV</span>
          </div>
          <div className="points-grid">
            {Array.from({length: 12}).map((_, i) => (
              <div className={`pcell ${i < 3 ? "top" : ""}`} key={i}>
                <div className="place">{["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th"][i]}</div>
                <div className="pts">{12 - i}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="points-table reveal" style={{ marginTop: 20 }}>
          <div className="header">
            <h4>Team round points · per player on each placing team</h4>
            <span className="tag">Rounds II &amp; III</span>
          </div>
          <div className="points-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
            {Array.from({length: 6}).map((_, i) => (
              <div className={`pcell ${i < 3 ? "top" : ""}`} key={i}>
                <div className="place">{["1st","2nd","3rd","4th","5th","6th"][i]} team</div>
                <div className="pts">{6 - i}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="tie-rules reveal">
          <div className="tie-col">
            <div className="tie-eyebrow">✦ &nbsp; Tie handling &nbsp; ✦</div>
            <h4 className="tie-title">If players tie in a round, <em>points are split.</em></h4>
            <p className="tie-body">The points for the tied positions are averaged and each player receives the same share. No coin flips, no countbacks at the round level — math settles it.</p>
            <div className="tie-example">
              <div className="ex-label">Example</div>
              <div className="ex-row"><span>Two players tie for 2nd</span></div>
              <div className="ex-row"><span>Points for 2nd <em>(11)</em> + 3rd <em>(10)</em> averaged</span></div>
              <div className="ex-row final"><span>Each player receives</span><strong>10.5 pts</strong></div>
            </div>
          </div>

          <div className="tie-col">
            <div className="tie-eyebrow">✦ &nbsp; Overall tiebreaker &nbsp; ✦</div>
            <h4 className="tie-title">If two players finish level, <em>order decides.</em></h4>
            <p className="tie-body">Total points decide the championship. If two players finish on the same total, we walk down this ladder until one wins.</p>
            <ol className="tie-ladder">
              <li><span className="step">i.</span><span className="rule">Best finish in <em>Stroke Play</em><span className="rd">Round IV · CommonGround</span></span></li>
              <li><span className="step">ii.</span><span className="rule">Best finish in <em>Stableford</em><span className="rd">Round I · Bear Dance</span></span></li>
              <li><span className="step">iii.</span><span className="rule">Best finish in <em>Two-Man Best Ball</em><span className="rd">Round II · Fox Hollow</span></span></li>
              <li><span className="step">iv.</span><span className="rule">Best finish in <em>Two-Man Scramble</em><span className="rd">Round III · Fox Hollow</span></span></li>
            </ol>
            <div className="tie-champ">
              <span className="check">✓</span>
              <span><strong>Overall Champion</strong> — most total points across all four rounds.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Courses() {
  const courses = [
    {
      n: "I",
      est: "Est. 2003 · Jack Nicklaus II design",
      name: "The Golf Club at",
      nameEm: "Bear Dance",
      loc: "Larkspur, Colorado",
      blurb: "Tucked in the rolling foothills between Denver and the Springs. Wide fairways, dramatic elevation changes, and views of Pikes Peak from nearly every tee. We open the week here on Friday afternoon.",
      img: "https://images.squarespace-cdn.com/content/5fc52c5a1452f90b7f00ebfd/f47214b8-79f6-4615-8e93-03084a846147/06-Bear-Dance-Club-min.webp?content-type=image%2Fwebp",
      stamp: "Round · I",
      stats: [["Par","72"],["Yards","7,723"],["Slope","146"]],
      tees: ["12:24 PM","12:33 PM","12:42 PM"],
      fee: "$225 / player",
    },
    {
      n: "II / III",
      est: "Est. 1999 · Denis Griffiths design",
      name: "Fox Hollow at",
      nameEm: "Lakewood",
      loc: "Lakewood, Colorado",
      blurb: "Three nines — Meadow, Canyon, and Links — woven through Bear Creek Lake Park. We play it twice on Saturday: best ball in the morning, scramble in the afternoon. The longest day of the week.",
      img: "https://images.squarespace-cdn.com/content/5fc52c5a1452f90b7f00ebfd/27ed3900-478d-4d79-8211-20e026784408/fox-hollow-meadow-hole-number-2.jpg?content-type=image%2Fjpeg",
      stamp: "Rounds · II & III",
      stats: [["Par","72"],["Holes","27"],["Twice","Saturday"]],
      tees: ["7:00 AM","7:09 AM","7:18 AM","1:45 PM","1:54 PM","2:03 PM"],
      fee: "$105 / round",
    },
    {
      n: "IV",
      est: "Est. 2009 · Tom Doak / Hurdzan",
      name: "CommonGround",
      nameEm: "at Aurora",
      loc: "Aurora, Colorado",
      blurb: "Where the CGA's home course closes the championship. Open, walkable, classically routed — every shot earned, none gimmicked. Trophy presented after the final group walks off 18.",
      img: "https://images.squarespace-cdn.com/content/5fc52c5a1452f90b7f00ebfd/be09aeb7-90f6-4732-b535-545bef005c96/commongroundgc_co.jpg?content-type=image%2Fjpeg",
      stamp: "Round · IV · Final",
      stats: [["Par","70"],["Yards","7,118"],["Built by","CGA"]],
      tees: ["9:10 AM","9:20 AM","9:30 AM"],
      fee: "$88 / player",
    },
  ];

  return (
    <section className="band band-cream" id="courses" data-screen-label="03 Courses">
      <div className="wrap">
        <div className="section-eyebrow"><span className="num">03</span><span>The Tracks</span></div>
        <h2 className="section-title">Three of Colorado's <em>finest.</em></h2>
        <p className="section-lede">
          Bear Dance for the opener. Fox Hollow twice on Saturday. CommonGround on Sunday for the close. All three within an hour of downtown Denver, all three earning their place in the rotation.
        </p>

        <div className="course-deck">
          {courses.map((c, i) => (
            <div className={`course-row reveal ${i % 2 === 1 ? "flip" : ""}`} key={i}>
              <div className="course-img-wrap">
                <div className="img" style={{ backgroundImage: `url('${c.img}')` }}/>
                <div className="vignette"/>
                <div className="stamp"><em>{c.stamp.split(" · ")[0]}</em> · {c.stamp.split(" · ").slice(1).join(" · ")}</div>
                <div className="course-name-overlay">{c.loc}</div>
              </div>
              <div className="course-info">
                <div className="course-est">{c.est}</div>
                <h3>{c.name} <em>{c.nameEm}</em></h3>
                <div className="loc">{c.loc}</div>
                <p className="blurb">{c.blurb}</p>
                <div className="course-stats">
                  {c.stats.map(([k, v]) => (
                    <div key={k}><div className="k">{k}</div><div className="v">{v}</div></div>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "#0F0F10", opacity: .65, marginBottom: 10 }}>
                    Tee times · Green fees {c.fee}
                  </div>
                  <div className="tee-times">
                    {c.tees.map(t => <span className="tee-time" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================
// Purse
// =============================================================
function Purse() {
  return (
    <section className="band band-dark purse-stage" id="purse" data-screen-label="04 Purse">
      <div className="wrap">
        <div className="section-eyebrow center"><span>The Purse</span></div>
        <h2 className="section-title" style={{ textAlign: "center" }}>Twelve buy in. <em>One walks off with eight.</em></h2>
        <div className="divider-ornament">✦ &nbsp; total purse &nbsp; ✦</div>
        <div className="purse-headline">$1,200</div>
        <div className="purse-sub">$100 buy-in <em>·</em> 12 players <em>·</em> winner-take-most</div>

        <div className="purse-podium">
          <div className="podium-card">
            <div className="place">II</div>
            <div className="amt">$300</div>
            <div className="lbl">Runner-up</div>
          </div>
          <div className="podium-card first">
            <div className="laurel">— champion —</div>
            <div className="place">I</div>
            <div className="amt">$800</div>
            <div className="lbl">Champion's purse</div>
          </div>
          <div className="podium-card">
            <div className="place">III</div>
            <div className="amt">$100</div>
            <div className="lbl">Third place</div>
          </div>
        </div>

        <div className="purse-extras">
          <div className="extras-card">
            <div className="num">$20</div>
            <div className="body">
              <h5>Optional skins</h5>
              <p>Per round, per player. Hole-by-hole, ties carry. Pot pays out at the end of each round — winner-take-all if a hole isn't tied.</p>
            </div>
          </div>
          <div className="extras-card">
            <div className="num">·</div>
            <div className="body">
              <h5>Side bets encouraged</h5>
              <p>Closest-to-pin, longest drive, sandies, snake — bring whatever your group plays at home. Settle in cash on the 19th hole. Not required, but it's the buddies trip.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// Roster
// =============================================================
function Roster() {
  const players = [
    { n: "Jake Fairbanks", meta: "Player · 01" },
    { n: "Nick Willets", meta: "Player · 02" },
    { n: "Kyle LaValley", meta: "Player · 03" },
    { n: "Brandon Fielding", meta: "Player · 04" },
    { n: "Nick Opeila", meta: "Player · 05" },
    { n: "Austin Fay", meta: "Player · 06" },
    { n: "Hunter Gordon", meta: "Player · 07" },
    { n: "Cody Lenart", meta: "Player · 08" },
    { n: "Jae Williams", meta: "Player · 09" },
    { n: "Ryan Scott", meta: "Player · 10" },
    { n: "Eric Miller", meta: "Player · 11" },
    { n: "Kevin Conrad", meta: "Player · 12" },
  ];
  const numerals = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];
  return (
    <section className="band band-paper" id="field" data-screen-label="05 Field">
      <div className="wrap">
        <div className="section-eyebrow"><span className="num">05</span><span>The Field</span></div>
        <h2 className="section-title">Twelve <em>invited.</em></h2>
        <p className="section-lede">A small field by design. Everyone tees off in earshot of one another, and everyone knows the score by Sunday afternoon.</p>

        <div className="roster-grid">
          {players.map((p, i) => (
            <div className="player reveal" key={i}>
              <div className="seed">{numerals[i]}</div>
              <div className="info">
                <div className="name">{p.n}</div>
                <div className="meta">{p.meta}</div>
              </div>
              {p.host && <div className="host-tag">— host</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================
// Schedule
// =============================================================
function Schedule() {
  const rows = [
    { day: "Friday", date: "19", what: "Round I · Stableford", where: "Bear Dance · Larkspur", deets: "First group off at <em>12:24 PM</em>. 9-minute intervals. Drinks on the deck after." },
    { day: "Saturday", date: "20", what: "Round II · Two-Man Best Ball", where: "Fox Hollow · Lakewood", deets: "Dawn patrol. First tee <em>7:00 AM</em>, 9-minute intervals. Lunch between rounds." },
    { day: "Saturday", date: "20", what: "Round III · Two-Man Scramble", where: "Fox Hollow · Lakewood", deets: "Same partners, new format. Afternoon shotgun-feel from <em>1:45 PM</em>." },
    { day: "Sunday", date: "21", what: "Round IV · Stroke Play", where: "CommonGround · Aurora", deets: "Final round, lowest scores last. <em>9:10 AM</em> first tee. Trophy presented at 18." },
  ];
  return (
    <section className="band band-cream" id="schedule" data-screen-label="06 Schedule">
      <div className="wrap-narrow">
        <div className="section-eyebrow"><span className="num">06</span><span>The Schedule</span></div>
        <h2 className="section-title">Three days, <em>start to finish.</em></h2>
        <p className="section-lede">Quick reference for travel, lodging, and the group chat. Tee times locked; everything else is up to you.</p>

        <div className="timeline">
          {rows.map((r, i) => (
            <div className="tl-row reveal" key={i}>
              <div className="tl-day">{r.day}<span className="num">June {r.date}</span></div>
              <div className="tl-dot"/>
              <div className="tl-content">
                <span className="day-mobile">{r.day} · June {r.date}</span>
                <div className="what">{r.what}</div>
                <div className="where">{r.where}</div>
                <p className="deets" dangerouslySetInnerHTML={{ __html: r.deets }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================
// Footer
// =============================================================
function SiteFooter({ logoVariant }) {
  return (
    <footer className="ssi-footer">
      <div className="wrap">
        <div className="crest">
          <SSILogo variant={logoVariant} size={140} dark={true}/>
        </div>
        <div className="divider-ornament">✦ &nbsp; sundown, sunday &nbsp; ✦</div>
        <p className="est">June 19 — 21, 2026 · Front Range, Colorado</p>
        <div className="yr">Inaugural Edition · MMXXVI</div>
        <div className="legal">
          Twelve players, four rounds, one purse. No spectators required, no bad-takes refused. Travel safely; play loose; settle up at sundown.
        </div>
      </div>
    </footer>
  );
}

// =============================================================
// Nav
// =============================================================
function SiteNav() {
  const [scrolled, setScrolled] = useStateS(false);
  useEffectS(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="ssi-nav" style={{ padding: scrolled ? "12px 32px" : "18px 32px" }}>
      <a href="#hero" className="mark">
        <span className="glyph"><SSIMark size={28} dark={false}/></span>
        <span>Summer Solstice</span>
      </a>
      <ul>
        <li><a href="#format">Format</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#purse">Purse</a></li>
        <li><a href="#field">Field</a></li>
        <li><a href="#schedule">Schedule</a></li>
      </ul>
      <span className="est">— June 19–21, 2026 —</span>
    </nav>
  );
}

window.Hero = Hero;
window.Countdown = Countdown;
window.Format = Format;
window.Courses = Courses;
window.Purse = Purse;
window.Roster = Roster;
window.Schedule = Schedule;
window.SiteFooter = SiteFooter;
window.SiteNav = SiteNav;
