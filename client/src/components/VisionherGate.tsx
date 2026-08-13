/* Visionher — porte d’entrée confidentielle : consultation privée, acceptation explicite et données non envoyées. */
import { Check, LockKeyhole } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

const SESSION_KEY = "visionher_mathildewod_access_accepted";

export function VisionherGate() {
  const [isOpen, setIsOpen] = useState(true);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    try { setIsOpen(sessionStorage.getItem(SESSION_KEY) !== "true"); } catch { setIsOpen(true); }
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!accepted) return;
    try { sessionStorage.setItem(SESSION_KEY, "true"); } catch { /* L’accès reste disponible même si le stockage est désactivé. */ }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="visionher-gate" role="dialog" aria-modal="true" aria-labelledby="visionher-gate-title">
      <div className="visionher-gate-shell">
        <header className="visionher-gate-banner"><img src="/manus-storage/visionher-logo_68505c00.png" alt="Visionher Agency" /></header>
        <form className="visionher-gate-content" onSubmit={submit}>
          <p className="visionher-gate-kicker"><LockKeyhole size={14} /> ACCÈS PRIVÉ</p>
          <h1 id="visionher-gate-title">Avant de découvrir<br /><em>MathildeWod.</em></h1>
          <p className="visionher-gate-lead">Cette maquette est partagée par Visionher à titre confidentiel, dans le cadre privé du projet.</p>
          <blockquote>Les directions créatives, contenus, composants et code présentés sont réservés au projet MathildeWod. Merci de ne pas les diffuser ni les reproduire sans l’accord écrit de Visionher.</blockquote>
          <label className="visionher-gate-check"><input checked={accepted} onChange={(event) => setAccepted(event.target.checked)} type="checkbox" /><span><Check size={13} /></span>J’ai lu et j’accepte ces conditions de consultation.</label>
          <button className="visionher-gate-submit" type="submit" disabled={!accepted}>J’accepte</button>
          <footer><span>Présenté par Visionher</span><span>© 2026 · Tous droits réservés</span></footer>
        </form>
      </div>
    </div>
  );
}
