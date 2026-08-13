/* Maison Rouge — footer partagé : navigation, liens publics et accès visible à l’espace login de MathildeWod. */
import { ArrowUpRight, LockKeyhole } from "lucide-react";

const LOGIN_URL = "https://www.mathildewod.fr/login";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand"><a href="/" className="site-footer-wordmark">MATHILDE WOD <i>queen</i></a><p>Coach visibilité et création de contenu. J’aide les femmes à transformer leur passion en marque qui rayonne.</p><a className="site-footer-login" href={LOGIN_URL}><LockKeyhole size={14} /> Accéder à mon espace <ArrowUpRight size={14} /></a></div>
        <div className="site-footer-column"><strong>Navigation</strong><a href="/">Accueil</a><a href="/success-story-creator">SUCCESS STORY Creator</a><a href="/success-story-pro">SUCCESS STORY Pro</a><a href="/resultats">Résultats & témoignages</a><a href="/a-propos">À propos</a></div>
        <div className="site-footer-column"><strong>On se retrouve</strong><a href="https://www.instagram.com/mathildewod/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={12} /></a><a href="https://www.instagram.com/successstorycreator/" target="_blank" rel="noreferrer">@successstorycreator <ArrowUpRight size={12} /></a><a href="https://www.youtube.com/channel/UCz2pCX8Nc64dDmdx5ds93jQ" target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={12} /></a></div>
      </div>
      <div className="site-footer-bottom"><span>© 2026 Mathilde WOD</span><div><a href="#mentions">Mentions légales</a><a href="#cgv">CGV</a></div></div>
    </footer>
  );
}
