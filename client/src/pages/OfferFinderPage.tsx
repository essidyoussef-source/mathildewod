/* Maison Rouge — page d’orientation : ambition incarnée, questions simples et recommandation de programme sans jugement. */
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { SiteNav } from "@/components/SiteNav";

type ProgramId = "creator" | "pro" | "vip";

const programs: Record<ProgramId, { eyebrow: string; name: string; copy: string; path: string; apply?: string; className: string }> = {
  creator: { eyebrow: "Pour faire rayonner ton univers", name: "SUCCESS STORY Creator", copy: "Tu as envie de construire une communauté, d’assumer ta créativité et de faire de ton contenu un vrai terrain d’opportunités.", path: "/success-story-creator", apply: "https://www.mathildewod.fr/liste-attente-creator-2026?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaeU7fonD8CwY5lmlQ8WqvX_1gXDO5PsiUDrB9NSpG6MQlnsmFfpWHOynSygtg_aem_q1B5noLkwEiqS1PJ948owA", className: "is-creator" },
  pro: { eyebrow: "Pour faire de ta visibilité un système", name: "SUCCESS STORY Pro", copy: "Ton expertise existe déjà : tu as besoin d’un message qui attire, d’un contenu qui convertit et d’un système qui te rend plus libre.", path: "/success-story-pro", apply: "https://tally.so/r/3xdq9J", className: "is-pro" },
  vip: { eyebrow: "Pour accompagner ton prochain niveau", name: "SUCCESS STORY VIP", copy: "Ton business avance et tu veux un regard stratégique rapproché pour différencier ta marque, structurer ta croissance et amplifier ton impact.", path: "/success-story-vip", className: "is-vip" },
};

const questions: { tag: string; question: string; answers: { label: string; copy: string; offer: ProgramId }[] }[] = [
  { tag: "01 · TON POINT DE DÉPART", question: "Aujourd’hui, ton business ressemble plutôt à…", answers: [
    { label: "Une envie de créer et de prendre ma place", copy: "Je veux construire une communauté autour de ce qui m’anime.", offer: "creator" },
    { label: "Une expertise qui mérite plus de visibilité", copy: "Je veux qu’on comprenne immédiatement ma valeur et mon offre.", offer: "pro" },
    { label: "Une activité prête à passer un vrai cap", copy: "Je veux sortir du faire-tout-seule pour structurer ma croissance.", offer: "vip" },
  ] },
  { tag: "02 · TON ÉLAN", question: "Ce que tu veux rendre possible dans les prochains mois…", answers: [
    { label: "Oser être visible avec un univers qui me ressemble", copy: "Faire de ma créativité une vraie force de marque.", offer: "creator" },
    { label: "Attirer les bonnes clientes sans poster au hasard", copy: "Transformer ma visibilité en système de vente plus fluide.", offer: "pro" },
    { label: "Faire évoluer mon business sans sacrifier ma liberté", copy: "Prendre des décisions avec plus de clarté et de hauteur.", offer: "vip" },
  ] },
  { tag: "03 · LE TYPE DE SOUTIEN", question: "Pour avancer, tu as surtout besoin…", answers: [
    { label: "D’un cadre pour créer, tester et me lancer", copy: "Avec une communauté de créatrices qui me porte.", offer: "creator" },
    { label: "D’une méthode claire, applicable et régulière", copy: "Pour passer de l’intention à des actions qui génèrent des résultats.", offer: "pro" },
    { label: "D’un accompagnement très personnalisé", copy: "Pour être challengée sur la stratégie qui compte vraiment maintenant.", offer: "vip" },
  ] },
  { tag: "04 · TA VISIBILITÉ", question: "Quand tu penses à ton contenu, tu voudrais surtout…", answers: [
    { label: "Trouver une manière plus incarnée de créer", copy: "Prendre confiance, assumer mes idées et construire une audience engagée.", offer: "creator" },
    { label: "Savoir quoi dire pour attirer les bonnes clientes", copy: "Ne plus poster pour cocher une case, mais publier avec une intention claire.", offer: "pro" },
    { label: "Faire évoluer ma prise de parole avec plus de hauteur", copy: "Créer un écosystème de contenu au service de ma prochaine étape.", offer: "vip" },
  ] },
  { tag: "05 · TON SYSTÈME", question: "La phrase qui décrit le mieux ta façon de vendre aujourd’hui…", answers: [
    { label: "Je découvre encore comment transformer ma créativité en revenu", copy: "J’ai besoin de repères pour oser proposer et créer mes premières opportunités.", offer: "creator" },
    { label: "J’ai besoin d’un chemin plus simple entre visibilité et vente", copy: "Mon expertise est là, mais mon parcours client ne travaille pas encore vraiment pour moi.", offer: "pro" },
    { label: "Je veux consolider et amplifier un business déjà vivant", copy: "Je suis prête à prendre des décisions plus grandes, moins dans l’urgence.", offer: "vip" },
  ] },
  { tag: "06 · LA FEMME QUE TU DEVIENS", question: "La liberté que tu veux créer grâce à ton business, c’est…", answers: [
    { label: "Vivre de ce que j’aime créer, à mon rythme", copy: "Faire de mon univers une activité qui me ressemble vraiment.", offer: "creator" },
    { label: "Me sentir sereine, choisie et soutenue par un système", copy: "Pouvoir générer des revenus sans dépendre de l’improvisation.", offer: "pro" },
    { label: "Déployer mon impact sans renoncer à ma vie personnelle", copy: "Grandir avec plus de stratégie, de temps et de liberté financière.", offer: "vip" },
  ] },
];

export default function OfferFinderPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ProgramId[]>([]);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [showVerdict, setShowVerdict] = useState(false);
  const recommendation = useMemo(() => {
    const scores = answers.reduce<Record<ProgramId, number>>((acc, answer) => ({ ...acc, [answer]: acc[answer] + 1 }), { creator: 0, pro: 0, vip: 0 });
    return (Object.keys(scores) as ProgramId[]).sort((a, b) => scores[b] - scores[a])[0] ?? "creator";
  }, [answers]);
  const contactStep = step === questions.length && !showVerdict;
  const done = step === questions.length && showVerdict;
  const result = programs[recommendation];

  const choose = (offer: ProgramId) => {
    setAnswers((previous) => [...previous, offer]);
    setStep((previous) => previous + 1);
  };
  const goBack = () => {
    if (step === 0) return;
    setAnswers((previous) => previous.slice(0, -1));
    setStep((previous) => previous - 1);
  };
  const restart = () => { setAnswers([]); setStep(0); setFirstName(""); setEmail(""); setShowVerdict(false); };

  return (
    <main className="offer-finder-page">
      <SiteNav />
      <section className="finder-hero">
        <div className="finder-orbit finder-orbit-one" /><div className="finder-orbit finder-orbit-two" />
        <div className="finder-shell">
          <div className="finder-intro"><p className="section-kicker"><Sparkles size={14} /> MANIFESTATION &amp; ACTIONS</p><h1>Choisis la suite qui<br /><em>honore ton ambition.</em></h1><p>Quelques questions pour faire le point avec douceur — puis choisir le cadre qui t’aidera à devenir la femme et l’entrepreneuse que tu as décidé d’être.</p></div>
          <div className="finder-card">
            {!done && !contactStep ? <>
              <div className="finder-card-top"><span>{questions[step].tag}</span><b>{step + 1} / {questions.length}</b></div>
              <div className="finder-progress"><i style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
              <h2>{questions[step].question}</h2>
              <div className="finder-answers">{questions[step].answers.map((answer) => <button key={answer.label} type="button" onClick={() => choose(answer.offer)}><strong>{answer.label}</strong><span>{answer.copy}</span><ArrowRight size={19} /></button>)}</div>
              {step > 0 && <button className="finder-back" type="button" onClick={goBack}><ArrowLeft size={15} /> Revenir à la question précédente</button>}
            </> : contactStep ? <form className="finder-contact" onSubmit={(event) => { event.preventDefault(); setShowVerdict(true); }}>
              <div className="finder-card-top"><span>TON DIAGNOSTIC EST PRÊT</span><b>{questions.length} / {questions.length}</b></div>
              <div className="finder-progress"><i style={{ width: "100%" }} /></div>
              <p className="finder-contact-kicker"><Sparkles size={16} /> Une dernière intention</p><h2>À qui avons-nous le plaisir de dévoiler la suite ?</h2><p>Entre ton prénom et ton email : ton verdict personnalisé apparaîtra juste après.</p>
              <label>Ton prénom<input value={firstName} onChange={(event) => setFirstName(event.target.value)} type="text" autoComplete="given-name" placeholder="Ex. Léa" required /></label>
              <label>Ton adresse email<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" placeholder="lea@email.com" required /></label>
              <button className="finder-submit" type="submit">Découvrir mon verdict <ArrowRight size={16} /></button><button className="finder-back" type="button" onClick={goBack}><ArrowLeft size={15} /> Modifier ma dernière réponse</button>
            </form> : <div className={`finder-result ${result.className}`}><p>TA RECOMMANDATION</p><span><Check size={18} /> Ton prochain cadre</span><h2>{firstName ? `${firstName}, ${result.name}` : result.name}</h2><p className="finder-result-copy">{result.copy}</p><div className="finder-result-actions"><a href={result.path}>Découvrir le programme <ArrowUpRight size={16} /></a>{result.apply && <a className="finder-result-apply" href={result.apply} target="_blank" rel="noreferrer">Candidater</a>}</div><button className="finder-restart" type="button" onClick={restart}>Reprendre le diagnostic</button></div>}
          </div>
        </div>
      </section>
    </main>
  );
}
