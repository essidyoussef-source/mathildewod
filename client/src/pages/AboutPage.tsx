/* Maison Rouge — page À propos : portrait, conviction et liens publics de MathildeWod, dans une mise en page éditoriale sobre. */
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";

const APPLY_CREATOR = "https://tally.so/r/wblpNE";

export default function AboutPage() {
  return (
    <div className="editorial-page about-page"><SiteNav /><main>
      <section className="about-hero"><div className="editorial-shell about-hero-grid"><div><p className="page-kicker">À propos</p><h1>Une méthode pour que ta passion devienne une marque qui <em>rayonne.</em></h1><p>Je suis Mathilde. J’aide les femmes à sortir du contenu posté au hasard, à affirmer leur identité et à créer une visibilité capable de soutenir leurs ambitions.</p><a className="about-apply" href={APPLY_CREATOR} target="_blank" rel="noreferrer">Candidater <ArrowUpRight size={16} /></a></div><figure><img src="/manus-storage/mathilde-hero_66e375c3.png" alt="Mathilde, fondatrice de MathildeWod" /><figcaption>MathildeWod — Coach visibilité & création de contenu</figcaption></figure></div></section>
      <section className="about-manifesto"><div className="editorial-shell"><p className="page-kicker">Ce que je défends</p><h2>Une visibilité plus précise. Une ambition plus <em>dirigée.</em></h2><div className="manifesto-grid"><p>Tu n’as pas besoin de devenir quelqu’un d’autre pour prendre de la place. Tu as besoin d’une direction qui tient compte de ton expertise, de ta personnalité et de la façon dont tu veux travailler.</p><p>Les programmes MathildeWod relient identité, visibilité et vente. Ils te donnent un cadre pour créer des contenus qui te ressemblent et pour faire des choix qui renforcent ta marque.</p></div></div></section>
      <section className="about-numbers"><div className="editorial-shell"><div><strong>140+</strong><span>femmes accompagnées</span></div><div><strong>14,7k</strong><span>abonnées sur Instagram</span></div><div><strong>3</strong><span>mois pour poser des fondations solides</span></div></div></section>
      <section className="about-connect"><div className="editorial-shell"><p className="page-kicker">On se retrouve</p><h2>Continuer la conversation <em>ailleurs.</em></h2><div><a href="https://www.instagram.com/mathildewod/" target="_blank" rel="noreferrer">Instagram MathildeWod <ArrowUpRight size={17} /></a><a href="https://www.instagram.com/successstorycreator/" target="_blank" rel="noreferrer">@successstorycreator <ArrowUpRight size={17} /></a><a href="https://www.youtube.com/channel/UCz2pCX8Nc64dDmdx5ds93jQ" target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={17} /></a></div></div></section>
    </main></div>
  );
}
