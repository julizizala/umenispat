import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../footer";
import GoogleSleepCheck from "./google-sleep-check";
import "./sleep-check.css";

export const metadata: Metadata = {
  title: "Čas na spánek · Sleep Check | Umění spát",
  description: "Krátké zastavení u vašeho spánku před změnou času.",
  robots: { index: true, follow: true },
};

export default function CampaignPage() {
  return <main className="sleep-page">
    <header className="header sleep-header">
      <Link href="/" className="logo" aria-label="Umění spát – domů"><Image src="/images/logo.png" alt="Nadační fond Umění spát" width={260} height={93} priority /></Link>
      <Link className="sleep-back" href="/#aktuality">← Zpět na aktuality</Link>
    </header>
    <section className="sleep-hero"><div className="container sleep-hero-grid">
      <div><p className="eyebrow">ČAS NA SPÁNEK · PODZIMNÍ KAMPAŇ</p><h1>Jak spíte?<br /><span>Dejte si Sleep Check.</span></h1><p className="sleep-lead">Kdy chodíte spát, jak se probouzíte a kolik energie máte během dne? Malé zastavení, které pomůže lépe porozumět vašemu spánku.</p><a href="https://docs.google.com/forms/d/e/1FAIpQLScNaCJxmmaoUssvl0nsNUS3-x4u-yajJ8WHJN_aSXp0nOSHow/viewform" target="_blank" rel="noopener noreferrer" className="button pink" aria-label="Vyplnit Sleep Check – otevře se v nové kartě">Vyplnit Sleep Check <span aria-hidden="true">↗</span></a><p className="sleep-meta">Přibližně 4 minuty · Pro dospělé od 18 let</p></div>
      <aside className="sleep-intro-card"><span className="sleep-moon" aria-hidden="true">☾</span><p className="eyebrow">DOTAZNÍK VYPLNÍTE CELKEM DVAKRÁT.</p><div><span className="sleep-round">01</span><h2>Před změnou času</h2><p>Vyplníte jednou těsně před změnou času. Odpovíte za předchozích 7 dní.</p></div><div><span className="sleep-round">02</span><h2>Týden po změně času</h2><p>Vyplníte podruhé, za prvních 7 dní po změně. Stejné otázky nám pomohou porovnat, co se změnilo.</p></div></aside>
    </div></section>
    <section id="sleep-check" className="sleep-content container"><GoogleSleepCheck /></section>
    <Footer />
  </main>;
}
