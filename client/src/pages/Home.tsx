/* Maison Rouge — la page d’accueil adopte une narration éditoriale asymétrique : portrait, preuves réelles, chapitres et appels à l’action assumés. */
import { ArrowUpRight, ArrowRight, Play } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { PodcastBanner } from "@/components/PodcastBanner";

const TALLY_CREATOR = "https://tally.so/r/wblpNE";
const TALLY_PRO = "https://tally.so/r/3xdq9J";
const CAHIER_URL = "https://www.mathildewod.fr/opt-in-ef5e0895-1297-49c9-ac25-063ee468d3de";

function Brand() {
  return (
    <a className="brand" href="#accueil" aria-label="MathildeWod, retour en haut de page">
      <img className="brand-mark" src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathildewod-mark_77d46693.png" alt="" />
      <span className="brand-word">MathildeWod</span>
      <span className="brand-queen">queen</span>
    </a>
  );
}

function SectionRail({ number, light = false }: { number: string; light?: boolean }) {
  return <aside className={`section-rail${light ? " light" : ""}`} aria-hidden="true"><img src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathildewod-mark_77d46693.png" alt="" /><span>{number}</span><i /></aside>;
}

function Result({ handle, field, multiple, before, after, beforeCount, afterCount }: {
  handle: string; field: string; multiple: string; before: string; after: string; beforeCount: string; afterCount: string;
}) {
  return (
    <article className="result reference-result-card">
      <div className="reference-result-header"><div><div className="result-handle">{handle}</div><p className="result-field">{field}</p></div><strong>{multiple}</strong></div>
      <div className="reference-snapshots" aria-label={`Progression de ${handle}`}>
        <div className="reference-snapshot before"><span>Avant</span><div className="reference-shot"><img src={before} alt={`Point de départ de ${handle}`} /></div><b>{beforeCount}</b></div>
        <div className="reference-snapshot after"><span>Après</span><div className="reference-shot"><img src={after} alt={`Résultat après accompagnement ${handle}`} /></div><b>{afterCount}</b></div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="site">
      <div className="top-note">Vision claire. Manifestation. Actions alignées.</div>
      <SiteNav />

      <main id="accueil">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container-wide hero-inner">
            <div className="hero-copy">
              <p className="eyebrow"><span className="rule" /> Coach visibilité & création de contenu</p>
              <h1 className="hero-title display" id="hero-title">Ta visibilité mérite une <em>vraie</em> stratégie.</h1>
              <p className="hero-lead">Trois programmes, une ambition : transformer ta passion en marque qui attire les bonnes personnes, fédère une communauté et crée des revenus durables.</p>
              <div className="hero-actions">
                <a className="button-main" href="#programmes">Trouver mon programme <ArrowUpRight size={15} /></a>
                <a className="button-secondary" href="#programmes">Explorer la méthode</a>
              </div>
              <div className="hero-footnote"><span className="signal-dots"><i /><i /><i /></span> Plus de 140 femmes déjà accompagnées</div>
            </div>
            <div className="hero-visual">
              <div className="hero-index"><b>Chapitre 01</b>Make your mark</div>
              <div className="portrait-shell"><img src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathilde-hero_66e375c3.png" alt="Mathilde, fondatrice de MathildeWod" /></div>
              <div className="portrait-tag"><strong>14,7k</strong><span>communauté</span></div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true"><div className="marquee-track">{["identité", "visibilité", "contenu", "communauté engagée", "collaborations rémunérées", "vente", "identité", "visibilité", "contenu", "communauté engagée", "collaborations rémunérées", "vente"].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></div>

        <section className="facts" aria-label="Chiffres clés">
          <div className="container-wide facts-grid">
            <div className="fact"><p className="fact-intro">Manifester <span className="script">grand.</span><br />Agir avec intention.</p></div>
            <div className="fact"><span className="fact-number">140+</span><span className="fact-label">clientes accompagnées</span></div>
            <div className="fact"><span className="fact-number">14,7k</span><span className="fact-label">abonnées sur Instagram</span></div>
            <div className="fact"><span className="fact-number">3</span><span className="fact-label">mois pour poser des bases solides</span></div>
          </div>
        </section>

        <section className="chapter programs" id="programmes" aria-labelledby="programmes-title">
          <SectionRail number="02" />
          <div className="container-wide">
            <div className="chapter-head">
              <div className="chapter-no">02 — Choisir son rythme</div>
              <div><p className="eyebrow">Les programmes</p><h2 className="section-title display" id="programmes-title">Le bon cadre pour faire passer ton idée <span className="script">devant.</span></h2><p className="section-sub">Chaque programme répond à un moment précis de ton aventure. Tu avances avec une direction claire, pas avec une to-do supplémentaire.</p></div>
            </div>
            <div className="program-grid">
              <article className="program-card large">
                <img className="program-photo" src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathildewod-pro-scene_b775099c.jpg" alt="Carnet et matériel de travail d'une entrepreneuse" />
                <div className="program-inner"><span className="program-type">Entrepreneuses</span><h3 className="program-title display">Success<br /><em>Story</em> Pro</h3><p className="program-copy">Tu as une expertise à défendre. On aligne ton positionnement, ton contenu et tes offres pour attirer une audience qui devient cliente.</p><a className="program-link" href="/success-story-pro">Voir la page dédiée <span>→</span></a></div>
              </article>
              <div className="program-side">
                <article className="program-card">
                  <img className="program-photo" src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathildewod-creator-scene_cf348838.jpg" alt="Créatrice en train de produire du contenu" />
                  <span className="program-badge">Le plus demandé</span>
                  <div className="program-inner"><span className="program-type">Créatrices de contenu</span><h3 className="program-title display">Success<br /><em>Story</em> Creator</h3><p className="program-copy">Pour construire une communauté qui reconnaît ta personnalité — et intéresser les marques qui te ressemblent.</p><a className="program-link" href="/success-story-creator">Voir la page dédiée <span>→</span></a></div>
                </article>
                <article className="program-card vip">
                  <img className="program-photo" src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathildewod-vip-scene_4dcc034b.jpg" alt="Session de stratégie dédiée à une entrepreneuse" />
                  <div className="program-inner"><span className="program-type">Business établi</span><h3 className="program-title display">Success<br /><em>Story</em> VIP</h3><p className="program-copy">Ton offre est claire, tes clientes sont là. Nous créons maintenant une stratégie de communication unique et magnétique.</p><a className="program-link" href="/success-story-vip">Voir la page dédiée <span>→</span></a></div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="method" id="methode" aria-labelledby="methode-title">
          <SectionRail number="03" light />
          <div className="container-wide">
            <div className="method-intro"><div><p className="eyebrow light">03 — La méthode</p><h2 className="section-title display" id="methode-title">Devenir visible, avec une stratégie qui te <span className="script">ressemble.</span></h2></div><p className="method-lead">Ni recettes à copier, ni contenu à produire sans intention. L’accompagnement relie ton expertise, ton message et une manière de vendre qui reste naturelle.</p></div>
            <div className="steps">
              <article className="step"><div className="step-index">01</div><h3 className="step-title">Ton positionnement devient impossible à confondre.</h3><p>Nous mettons des mots précis sur ce que tu défends, pour qui tu le fais et pourquoi on te choisit.</p></article>
              <article className="step"><div className="step-index">02</div><h3 className="step-title">Ton contenu attire les bonnes personnes.</h3><p>Hooks, formats, rythme et ligne éditoriale : tu arrêtes de publier au hasard et tu prends ta place.</p></article>
              <article className="step"><div className="step-index">03</div><h3 className="step-title">Ta visibilité se transforme en revenus.</h3><p>Offres, collaborations, tarifs et conversion : tu construis une marque qui peut réellement grandir.</p></article>
            </div>
          </div>
        </section>

        <section className="chapter proofs reference-proofs" id="resultats" aria-labelledby="resultats-title">
          <div className="container-wide">
            <div className="reference-results-head"><div><p className="eyebrow">Avant / Après</p><h2 className="section-title display" id="resultats-title">Des comptes qui ont <span className="script">décollé.</span></h2></div><a className="reference-results-link" href="https://www.instagram.com/mathildewod/" target="_blank" rel="noreferrer">Voir tous les résultats <ArrowUpRight size={15} /></a></div>
            <div className="result-grid">
              <Result handle="@laulaupoussedelafonte" field="Sport & perte de gras" multiple="×21" before="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/ba-laulau-avant_5baf79db.png" after="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/ba-laulau-apres_4e151c07.png" beforeCount="2 982" afterCount="62,4k" />
              <Result handle="@laurianne_hrl" field="Voyage & lifestyle" multiple="×79" before="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/ba-laurianne-avant_4ddeb513.png" after="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/ba-laurianne-apres_dc36ee0a.png" beforeCount="1 514" afterCount="119k" />
            </div>
          </div>
        </section>

        <section className="testimonials" aria-labelledby="temoignages-title">
          <SectionRail number="05" />
          <div className="container-wide testimonial-layout">
            <div><p className="eyebrow">La communauté</p><h2 className="section-title display" id="temoignages-title">Elles racontent le <span className="script">déclic.</span></h2><p className="testimonial-intro">Deux retours en vidéo, pris dans les contenus fournis. Des histoires partagées par les personnes concernées, sans citation réécrite ni promesse embellie.</p></div>
            <div className="video-grid">
              <article className="video-card"><video controls preload="metadata" src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/temoignage-elsacoachyoga_aa545ae7.mp4" aria-label="Témoignage vidéo Elsa Coach Yoga" /><div className="video-meta"><strong>Elsa Coach Yoga</strong><span><Play size={10} fill="currentColor" /> Témoignage</span></div></article>
              <article className="video-card"><video controls preload="metadata" src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/temoignage-ninadiet_ab6b6f90.mp4" aria-label="Témoignage vidéo Nina Diet" /><div className="video-meta"><strong>Nina Diet</strong><span><Play size={10} fill="currentColor" /> Témoignage</span></div></article>
            </div>
          </div>
        </section>

        <PodcastBanner />

        <section className="resource" aria-labelledby="resource-title">
          <SectionRail number="06" light />
          <div className="container-wide resource-grid">
            <div className="resource-cover"><img src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/cahier-ete-sgb_e373c8a9.png" alt="Couverture du Cahier d’été SGB" /></div>
            <div><p className="eyebrow light">Ressource offerte — Strong Girl Boss</p><h2 className="resource-title display" id="resource-title">Le Cahier d’été <span className="script">SGB.</span></h2><p className="resource-copy">Pour attirer des clientes sans forcer à la rentrée. Un cahier d’exercices concis pour clarifier ton positionnement, ton offre et tes contenus de septembre.</p><a className="button-dark resource-download" href={CAHIER_URL} target="_blank" rel="noreferrer">Recevoir le cahier <ArrowRight size={14} /></a><p className="resource-note">Tu seras redirigée vers la page d’inscription officielle.</p></div>
          </div>
        </section>
      </main>

    </div>
  );
}
