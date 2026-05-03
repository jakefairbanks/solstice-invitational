# Summer Solstice Invitational

Landing page for the 2026 Summer Solstice Invitational golf tournament — June 19–21, Front Range, Colorado.

## Local preview

Open `index.html` in any browser, or serve the directory:

```bash
npx serve .
```

## Project layout

```
index.html              Static markup for every section
styles/tokens.css       Design system tokens (color, type, spacing)
styles/site.css         Page styles + responsive rules
scripts/main.js         Countdown, scroll reveal, nav shrink
vercel.json             Hosting config (clean URLs, cache headers)
design/                 Original Claude Design source bundle
```

## Editing content

- **Player roster** — `index.html`, search for `class="player"` (12 entries).
- **Tee times / fees** — `index.html`, inside each `course-row` block.
- **Schedule** — `index.html`, inside `<section id="schedule">`.
- **Countdown target** — `scripts/main.js`, line 6 (`Date.UTC(2026, 5, 19, 18, 24, 0)` is 12:24 PM MDT on June 19, 2026).

## Deployment

This is a static site — Vercel auto-detects and serves it with no build step.

## Live site

[solsticeinvitational.com](https://solsticeinvitational.com)
