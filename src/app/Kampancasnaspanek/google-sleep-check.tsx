"use client";

import { useState } from "react";
import Link from "next/link";

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScNaCJxmmaoUssvl0nsNUS3-x4u-yajJ8WHJN_aSXp0nOSHow/viewform";

export default function GoogleSleepCheck() {
  const [loaded, setLoaded] = useState(false);
  return <div className="sleep-google">
    <p className="eyebrow">SLEEP CHECK · 1. KOLO</p>
    <h2>Chvilka pro váš spánek.</h2>
    <p>Dotazník a odpovědi spravuje Nadační fond Umění spát prostřednictvím Google Formulářů. Dobrovolný kontakt můžete zanechat v samostatném formuláři, na který se dostanete po dokončení dotazníku.</p>
    <div className="sleep-instruction"><strong>Formulář zatím není zveřejněný.</strong> Před otevřením sběru dokončíme kontrolu dotazníku a informací o zpracování údajů. Do té doby může Google zobrazit oznámení, že formulář není dostupný.</div>
    <p>Pro obě kola použijte stejný vlastní kód podle pokynů ve formuláři a uložte si jej.</p>
    <p><Link href="/ochrana-osobnich-udaju" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>Jak zpracováváme vaše údaje</Link></p>
    {!loaded ? <div className="sleep-google-load"><p>Načtením dotazníku se připojíte ke službě Google.</p><button type="button" className="button sleep-primary" onClick={() => setLoaded(true)}>Načíst Google Formulář</button></div> : <iframe className="sleep-google-frame" src={`${formUrl}?embedded=true`} title="Čas na spánek – dotazník Sleep Check před změnou času" referrerPolicy="no-referrer" />}
    <p className="sleep-google-link"><a href={formUrl} target="_blank" rel="noopener noreferrer">Otevřít dotazník v samostatném okně ↗</a></p>
  </div>;
}
