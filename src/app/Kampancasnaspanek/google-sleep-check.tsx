import Link from "next/link";
import CampaignPhase from "./campaign-phase";

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScNaCJxmmaoUssvl0nsNUS3-x4u-yajJ8WHJN_aSXp0nOSHow/viewform";

export default function GoogleSleepCheck() {
  return <div className="sleep-google">
    <CampaignPhase />
    <h2>Chvilka pro váš spánek.</h2>
    <p>Dotazník a odpovědi spravuje Nadační fond Umění spát prostřednictvím Google Formulářů.</p>

    <p><Link href="/ochrana-osobnich-udaju" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>Jak zpracováváme vaše údaje</Link></p>
    <div className="sleep-google-load"><p>Dotazník se otevře v nové kartě, kde jej pohodlně vyplníte.</p><a href={formUrl} target="_blank" rel="noopener noreferrer" className="button sleep-primary">Vyplnit dotazník <span aria-hidden="true">↗</span></a></div>
  </div>;
}
