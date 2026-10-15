import Link from "next/link";

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScNaCJxmmaoUssvl0nsNUS3-x4u-yajJ8WHJN_aSXp0nOSHow/viewform";

export default function GoogleSleepCheck() {
  return <div className="sleep-google">
    <p className="eyebrow">SLEEP CHECK · 1. KOLO</p>
    <h2>Chvilka pro váš spánek.</h2>
    <p>Dotazník a odpovědi spravuje Nadační fond Umění spát prostřednictvím Google Formulářů. Dobrovolný kontakt můžete zanechat v samostatném formuláři, na který se dostanete po dokončení dotazníku.</p>
    <div className="sleep-instruction"><strong>Formulář zatím není zveřejněný.</strong> Před otevřením sběru dokončíme kontrolu dotazníku a informací o zpracování údajů. Do té doby může Google zobrazit oznámení, že formulář není dostupný.</div>
    <p>Pro obě kola použijte stejný vlastní kód podle pokynů ve formuláři a uložte si jej.</p>
    <p><Link href="/ochrana-osobnich-udaju" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>Jak zpracováváme vaše údaje</Link></p>
    <div className="sleep-google-load"><p>Dotazník se otevře v nové kartě, kde jej pohodlně vyplníte.</p><a href={formUrl} target="_blank" rel="noopener noreferrer" className="button sleep-primary">Vyplnit dotazník <span aria-hidden="true">↗</span></a></div>
  </div>;
}
