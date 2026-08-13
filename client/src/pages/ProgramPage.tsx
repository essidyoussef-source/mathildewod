/* Maison Rouge — les pages d’offres conservent la typographie éditoriale tout en laissant chaque programme exister dans son propre code couleur Instagram. */
import { ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, Check, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteNav } from "@/components/SiteNav";

type ProgramKey = "pro" | "creator" | "vip";

const APPLY_PRO = "https://tally.so/r/3xdq9J";
const APPLY_CREATOR = "https://www.mathildewod.fr/liste-attente-creator-2026?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaeU7fonD8CwY5lmlQ8WqvX_1gXDO5PsiUDrB9NSpG6MQlnsmFfpWHOynSygtg_aem_q1B5noLkwEiqS1PJ948owA";

const programs: Record<ProgramKey, {
  name: string;
  accentName: string;
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  heroImage: string;
  who: string[];
  format: string[];
  cta: string;
  ctaLabel: string;
  availability: string;
  palette: string;
  faq: { question: string; answer: string }[];
  journey: { label: string; title: string; copy: string; image: string }[];
  humanImage: string;
  humanAlt: string;
  humanLabel: string;
  humanTitle: string;
  humanCopy: string;
}> = {
  pro: {
    name: "SUCCESS STORY Pro",
    accentName: "Pro",
    eyebrow: "Programme de visibilité & vente",
    title: "Quand ton contenu devient un vrai levier pour ton business.",
    lead: "Pour les femmes qui ont un business en ligne — ou déjà une idée — et qui veulent que leurs contenus Instagram ramènent des clientes sans prospecter ni se travestir pour plaire à l’algorithme.",
    image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathildewod-pro-scene_b775099c.jpg",
    imageAlt: "Carnet et stratégie de contenu d’une entrepreneuse",
    heroImage: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-pro-hero-atmosphere_b2f68e6c.jpg",
    who: ["Tu as une offre ou une expertise à défendre.", "Tu veux arrêter de poster sans stratégie ni résultat.", "Tu veux devenir plus visible et étendre ton impact, tout en restant toi-même."],
    format: ["4 modules de formation concrets", "Des dizaines d’exercices pratiques", "3 lives par mois", "Des exemples de contenus analysés chaque semaine", "L’accès à une communauté de queens", "Des audios de motivation chaque semaine"],
    cta: APPLY_PRO,
    ctaLabel: "Candidater à SUCCESS STORY Pro",
    availability: "Les portes ouvrent seulement à certaines périodes de l’année afin de préserver la qualité de suivi.",
    palette: "pro",
    faq: [
      { question: "Mon business est encore au début, est-ce fait pour moi ?", answer: "Oui. SUCCESS STORY Pro s’adresse aussi aux femmes qui ont déjà une idée claire et souhaitent construire une visibilité capable de soutenir leur activité." },
      { question: "Pourquoi l’entrée se fait-elle sur candidature ?", answer: "Les candidatures permettent de vérifier que le programme correspond bien à ton stade de développement et de préserver la qualité des ouvertures." },
      { question: "Est-ce que je dois déjà être à l’aise avec les réseaux sociaux ?", answer: "Non. La méthode reprend le positionnement, le contenu et la vente de manière structurée, afin de te donner une direction précise quel que soit ton niveau de départ." },
      { question: "Que comprend l’accompagnement ?", answer: "Le programme réunit des modules concrets, des exercices pratiques, des lives réguliers, des exemples analysés et un accès à la communauté." },
    ],
    journey: [
      { label: "Le cap", title: "Clarifier", copy: "Tu poses un positionnement qui rend ton expertise immédiatement lisible.", image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-pro-clarifier_72cbba95.jpg" },
      { label: "Le contenu", title: "Attirer", copy: "Tu construis des contenus qui créent de l’intérêt auprès des bonnes personnes.", image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-pro-attirer_2a4dfbaa.jpg" },
      { label: "L’offre", title: "Convertir", copy: "Tu relies visibilité, offres et vente sans te disperser.", image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-pro-convertir_d3b0586c.jpg" },
    ],
    humanImage: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathilde-event_71577921.png",
    humanAlt: "Mathilde lors d’un événement avec sa communauté",
    humanLabel: "Une ambition qui se partage",
    humanTitle: "Une stratégie se construit mieux quand on sort de l’isolement.",
    humanCopy: "SUCCESS STORY Pro remet de la clarté dans ta communication et du rythme dans tes décisions, sans te demander de choisir entre ambition et personnalité.",
  },
  creator: {
    name: "SUCCESS STORY Creator",
    accentName: "Creator",
    eyebrow: "Programme créatrices & UGC",
    title: "Faire de ta personnalité un univers que les marques remarquent.",
    lead: "Pour les femmes qui souhaitent devenir créatrices de contenu, construire une communauté autour de leur passion et travailler avec leurs marques préférées.",
    image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathildewod-creator-scene_cf348838.jpg",
    imageAlt: "Créatrice en train de filmer du contenu à son bureau",
    heroImage: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-creator-hero-atmosphere_fe0ab188.jpg",
    who: ["Tu veux faire émerger une communauté autour de ce que tu aimes vraiment.", "Tu veux comprendre l’influence et l’UGC pour obtenir des collaborations rémunérées.", "Tu veux créer un complément de revenu — ou faire de la création ton métier."],
    format: ["Formation en ligne en autonomie", "Accès à une communauté de créatrices", "Exemples de contenus analysés et partagés chaque semaine"],
    cta: APPLY_CREATOR,
    ctaLabel: "Rejoindre la liste d’attente",
    availability: "Une formation pensée pour poser tes fondations, te rendre identifiable et passer à l’action à ton rythme.",
    palette: "creator",
    faq: [
      { question: "Je débute totalement, c’est fait pour moi ?", answer: "Oui. Le programme part de zéro : matériel, positionnement, premiers contenus. Les modules CapCut et Canva couvrent les trois niveaux, débutante incluse." },
      { question: "Combien de temps par semaine dois-je y consacrer ?", answer: "La formation est conçue pour être suivie à ton rythme. Les séquences te donnent un cadre clair afin d’avancer régulièrement sans perdre de vue tes priorités." },
      { question: "J’ai accès au contenu combien de temps ?", answer: "Les modalités d’accès sont précisées lors de la candidature, avec le cadre de formation et les ressources associées." },
      { question: "Est-ce qu’on est vraiment accompagnée ?", answer: "Oui. Tu avances dans une communauté de créatrices, avec des exemples de contenus analysés et partagés chaque semaine." },
    ],
    journey: [
      { label: "Ton univers", title: "Émerger", copy: "Tu précises ce qui rend ton regard et tes contenus reconnaissables.", image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-creator-emerge_992b816e.jpg" },
      { label: "Tes formats", title: "Créer", copy: "Tu explores les formats qui font vivre ta personnalité et ta passion.", image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-creator-create_258afded.jpg" },
      { label: "Tes marques", title: "Collaborer", copy: "Tu apprends à transformer ton univers en opportunités de collaborations.", image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-creator-collaborer_29b6a0d7.jpg" },
    ],
    humanImage: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathilde-workshop_a87ea1b0.png",
    humanAlt: "Atelier de travail et d’accompagnement en groupe",
    humanLabel: "Créer, mais jamais seule",
    humanTitle: "Ton univers prend de la force quand il trouve un vrai cadre.",
    humanCopy: "SUCCESS STORY Creator te donne des repères, des retours et une communauté pour transformer une envie de créer en pratique régulière et assumée.",
  },
  vip: {
    name: "SUCCESS STORY VIP",
    accentName: "VIP",
    eyebrow: "Accompagnement stratégique privé",
    title: "Quand ton business est solide, ta communication peut devenir inoubliable.",
    lead: "Pour les femmes qui ont déjà un chiffre d’affaires stable et une bonne visibilité, mais souhaitent construire une stratégie plus originale, plus différenciante et prête pour la suite.",
    image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathildewod-vip-scene_4dcc034b.jpg",
    imageAlt: "Session de stratégie privée pour une entrepreneuse",
    heroImage: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-vip-hero-atmosphere_70bc970d.jpg",
    who: ["Tu veux créer des concepts originaux et une communication différenciante.", "Tu veux déléguer, construire une équipe et lancer de nouvelles offres.", "Tu veux automatiser davantage ton business et passer au niveau supérieur."],
    format: ["Un format hybride entre petit groupe et 1:1", "Un suivi individuel par Mathilde sur 3 mois, renouvelable", "Des visios en petit groupe toutes les 2 semaines", "Accès au club VIP et aux événements privés"],
    cta: APPLY_CREATOR,
    ctaLabel: "Rejoindre la liste d’attente",
    availability: "Les places sont volontairement limitées pour garder l’accompagnement précis, confidentiel et disponible.",
    palette: "vip",
    faq: [
      { question: "À quel stade faut-il être pour rejoindre VIP ?", answer: "VIP s’adresse aux femmes qui disposent déjà d’une activité stable et d’une visibilité existante, et souhaitent faire évoluer leur communication et leurs opérations." },
      { question: "Pourquoi les places sont-elles limitées ?", answer: "Le format associe petit groupe et suivi individuel. Limiter les entrées permet de garder des échanges disponibles, précis et confidentiels." },
      { question: "Quel est le format de l’accompagnement ?", answer: "Le parcours combine un suivi individuel par Mathilde sur trois mois, des visios de petit groupe toutes les deux semaines et l’accès au club VIP." },
      { question: "Comment rejoindre la liste d’attente ?", answer: "La liste d’attente se rejoint via le formulaire de candidature. Tu recevras les informations utiles dès la prochaine ouverture." },
    ],
    journey: [
      { label: "La vision", title: "Différencier", copy: "Tu affirmes une stratégie de communication que personne ne peut confondre.", image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-vip-differencier_d9796eee.jpg" },
      { label: "Le système", title: "Structurer", copy: "Tu fais évoluer l’organisation de ton contenu, de tes offres et de ton équipe.", image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-vip-structurer_7c5b1b98.jpg" },
      { label: "La suite", title: "Amplifier", copy: "Tu prépares des lancements et des concepts capables d’accompagner ta croissance.", image: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mw-vip-amplifier_4191d07b.jpg" },
    ],
    humanImage: "https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathilde-event_71577921.png",
    humanAlt: "Mathilde lors d’un événement professionnel",
    humanLabel: "Une vision à la hauteur de ton activité",
    humanTitle: "Quand ton business est prêt, ta communication peut prendre une autre dimension.",
    humanCopy: "SUCCESS STORY VIP crée l’espace stratégique nécessaire pour choisir des concepts plus forts, organiser leur déploiement et penser la prochaine étape avec précision.",
  },
};

function Wordmark() {
  return <a className="offer-brand" href="/" aria-label="Retour à la page d’accueil MathildeWod"><img src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathildewod-mark_77d46693.png" alt="" /><span>MathildeWod</span><i>queen</i></a>;
}

export default function ProgramPage({ program }: { program: ProgramKey }) {
  const data = programs[program];
  const alternatives = (Object.keys(programs) as ProgramKey[]).filter((key) => key !== program);

  return (
    <div className={`offer-page offer-${data.palette}`}>
      <SiteNav />
      <main>
        <section className="offer-hero">
          <div className="offer-shell offer-hero-grid">
            <div className="offer-copy"><p className="offer-kicker"><Sparkles size={14} /> {data.eyebrow}</p><p className="offer-edition">ÉDITION <strong>{data.accentName}</strong></p><h1>{data.name}</h1><h2>{data.title}</h2><p className="offer-lead">{data.lead}</p><a className="offer-primary" href={data.cta} target="_blank" rel="noreferrer">{data.ctaLabel} <ArrowUpRight size={16} /></a></div>
            <div className="offer-visual-cluster"><figure className="offer-atmosphere"><img src={data.heroImage} alt="" /></figure><figure className="offer-portrait"><img src={data.image} alt={data.imageAlt} /><figcaption>MathildeWod <span>—</span> {data.accentName}</figcaption></figure></div>
          </div>
        </section>

        <section className="offer-intro"><div className="offer-shell intro-grid"><div className="offer-side-label"><span>01</span><i /> Pour qui ?</div><div><p className="offer-overline">Tu es au bon endroit si…</p><h2>Une offre pensée pour une ambition <em>précise.</em></h2><div className="offer-statements">{data.who.map((item) => <p key={item}><BadgeCheck aria-hidden="true" size={21} /><span>{item}</span></p>)}</div></div></div></section>

        {program === "creator" && <section className="creator-explainer"><div className="offer-shell creator-explainer-grid"><div className="creator-explainer-copy"><p className="offer-overline">C’est quoi SUCCESS STORY Creator ?</p><h2>Le cadre pour devenir une créatrice qu’on reconnaît — et qu’on <em>choisit.</em></h2><p>Une formation pour trouver ton angle, créer des contenus plus affirmés, faire grandir une communauté et te rapprocher des collaborations qui ont du sens pour toi.</p><a className="offer-human-link" href={data.cta} target="_blank" rel="noreferrer">Rejoindre la liste d’attente <ArrowUpRight size={16} /></a></div><div className="creator-explainer-art"><figure className="creator-explainer-main"><img src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/creator-what-is_e3efe820.png" alt="Visuel expliquant SUCCESS STORY Creator" /></figure><figure className="creator-explainer-collage"><img src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/creator-collage_fe7a445b.png" alt="Collage visuel de SUCCESS STORY Creator" /></figure></div></div></section>}

        <section className="offer-journey"><div className="offer-shell"><div className="journey-head"><div><p className="offer-overline">Dans le programme</p><h2>Trois axes pour<br />donner une suite à ton <em>élan.</em></h2></div><p>Un parcours qui crée de la cohérence entre ce que tu montres, la place que tu prends et la façon dont ton activité avance.</p></div><div className="journey-grid">{data.journey.map((item, index) => <article className="journey-card" key={item.title}><img className="journey-art" src={item.image} alt="" /><div className="journey-card-content"><span>0{index + 1} — {item.label}</span><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}</div></div></section>

        <section className="offer-human"><div className="offer-shell offer-human-grid"><figure className="offer-human-photo"><img src={data.humanImage} alt={data.humanAlt} /><figcaption>{data.humanLabel}</figcaption></figure><div className="offer-human-copy"><p className="offer-overline">L’expérience MathildeWod</p><h2>{data.humanTitle}</h2><p>{data.humanCopy}</p><a className="offer-human-link" href={data.cta} target="_blank" rel="noreferrer">{data.ctaLabel} <ArrowUpRight size={16} /></a></div></div></section>

        <section className="offer-format"><div className="offer-shell format-grid"><div><p className="offer-overline">Quel format ?</p><h2>Du concret pour<br />faire bouger la <em>suite.</em></h2><p className="format-note">{data.availability}</p></div><div className="format-list">{data.format.map((item, index) => <div className="format-item" key={item}><span>0{index + 1}</span><p>{item}</p><Check size={17} /></div>)}</div></div></section>

        <section className="offer-faq"><div className="offer-shell"><p className="offer-overline">Les questions qu’on me pose</p><h2>Tout ce que tu veux<br />savoir avant de <em>candidater.</em></h2><Accordion className="faq-list" type="single" collapsible defaultValue="question-0">{data.faq.map((entry, index) => <AccordionItem value={`question-${index}`} key={entry.question} className="faq-item"><AccordionTrigger className="faq-trigger">{entry.question}</AccordionTrigger><AccordionContent className="faq-content">{entry.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

        <section className="offer-cta"><div className="offer-shell offer-cta-inner"><p className="offer-overline">La prochaine étape</p><h2>Tu peux faire de ta visibilité une direction, pas une <em>loterie.</em></h2><a className="offer-light-button" href={data.cta} target="_blank" rel="noreferrer">{data.ctaLabel} <ArrowRight size={16} /></a><p className="offer-micro">L’entrée se fait sur candidature afin de garder le cadre adapté à ton ambition.</p></div></section>

        <section className="offer-more"><div className="offer-shell"><p className="offer-overline">Découvrir les autres programmes</p><div className="offer-more-grid">{alternatives.map((key) => <a className="offer-more-card" href={`/success-story-${key}`} key={key}><img className="offer-more-photo" src={programs[key].heroImage} alt="" /><span>{programs[key].eyebrow}</span><strong>{programs[key].name}</strong><ArrowUpRight size={19} /></a>)}</div></div></section>
      </main>
    </div>
  );
}
