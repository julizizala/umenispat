"use client";

import { useEffect, useState } from "react";

function isSecondPhase(now: Date) {
  const date = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Prague", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(now);
  return date >= "2026-10-26";
}

export default function CampaignPhase() {
  const [secondPhase, setSecondPhase] = useState<boolean | null>(null);
  useEffect(() => {
    const update = () => setSecondPhase(isSecondPhase(new Date()));
    update();
    const timer = window.setInterval(update, 30000);
    window.addEventListener("focus", update);
    return () => { window.clearInterval(timer); window.removeEventListener("focus", update); };
  }, []);
  return <p className="eyebrow" aria-live="polite">SLEEP CHECK{secondPhase === null ? "" : secondPhase ? " · 2. FÁZE – PO ZMĚNĚ ČASU" : " · 1. FÁZE – PŘED ZMĚNOU ČASU"}</p>;
}
