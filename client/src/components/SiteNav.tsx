/* Maison Rouge — navigation publique : offres imbriquées, accès diagnostic et candidature orientée. */
import { ArrowUpRight, ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  const closeMenus = () => { setMenuOpen(false); setOffersOpen(false); };

  return (
    <header className={`public-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="public-nav-inner">
        <a className="public-brand" href="/" aria-label="MathildeWod, accueil"><img src="/manus-storage/mathildewod-mark_77d46693.png" alt="" /><strong>MATHILDEWOD</strong><i>queen</i></a>
        <button className="public-menu-toggle" aria-label="Ouvrir le menu" aria-expanded={menuOpen} type="button" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        <nav className={`public-links ${menuOpen ? "is-open" : ""}`} aria-label="Navigation principale">
          <a href="/" onClick={closeMenus}>Accueil</a>
          <div className={`public-offers ${offersOpen ? "is-open" : ""}`}><button type="button" aria-expanded={offersOpen} onClick={() => setOffersOpen((value) => !value)}>Nos offres <ChevronDown size={14} /></button><div className="public-offers-panel"><p>SUCCESS STORY</p><a href="/success-story-creator" onClick={closeMenus}>SS Creator <span>Créer un univers</span></a><a href="/success-story-pro" onClick={closeMenus}>SS Pro <span>Rendre ta stratégie visible</span></a><a href="/success-story-vip" onClick={closeMenus}>SS VIP <span>Amplifier ton impact</span></a></div></div>
          <a className="public-finder-link" href="/choisir-mon-offre" onClick={closeMenus}><Sparkles size={14} /> Choisir mon offre</a>
          <a href="/resultats" onClick={closeMenus}>Résultats</a><a href="/a-propos" onClick={closeMenus}>À propos</a>
        </nav>
        <a className="public-apply" href="/choisir-mon-offre">Candidater <ArrowUpRight size={14} /></a>
      </div>
    </header>
  );
}
