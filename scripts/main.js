(function () {
  "use strict";

  // ----- Countdown to first tee: Jun 19, 2026 12:24 PM Mountain (MDT = UTC-6) -----
  const target = Date.UTC(2026, 5, 19, 18, 24, 0);
  const pad = (n) => String(n).padStart(2, "0");
  const els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    mins: document.getElementById("cd-mins"),
    secs: document.getElementById("cd-secs"),
  };

  function tick() {
    const diff = Math.max(0, target - Date.now());
    if (!els.days) return;
    els.days.textContent = pad(Math.floor(diff / 86400000));
    els.hours.textContent = pad(Math.floor((diff % 86400000) / 3600000));
    els.mins.textContent = pad(Math.floor((diff % 3600000) / 60000));
    els.secs.textContent = pad(Math.floor((diff % 60000) / 1000));
  }
  tick();
  setInterval(tick, 1000);

  // ----- Reveal-on-scroll -----
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => obs.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  // ----- Nav shrink on scroll -----
  const nav = document.querySelector(".ssi-nav");
  if (nav) {
    const onScroll = () => {
      nav.style.padding = window.scrollY > 24 ? "12px 32px" : "18px 32px";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ----- Smooth-scroll for in-page anchors that account for fixed nav -----
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
})();
