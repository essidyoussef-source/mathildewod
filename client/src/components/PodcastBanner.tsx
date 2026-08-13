/* Maison Rouge — bannière podcast SGB : élément éditorial de la Home inspiré de la référence transmise. */
import { ArrowUpRight } from "lucide-react";

export function PodcastBanner() {
  return (
    <section className="podcast-banner" aria-label="Podcast Strong Girl Boss">
      <div className="podcast-cover"><img src="/manus-storage/sgb-podcast-cover_f1e1d16e.jpg" alt="Cover officiel du podcast Strong Girl Boss" /></div>
      <div className="podcast-copy"><p>Le podcast</p><h2>STRONG <em>GIRL</em> BOSS</h2><span>Chaque semaine, les coulisses honnêtes de l’entrepreneuriat au féminin.</span></div>
      <div className="podcast-actions"><a className="podcast-spotify" href="https://open.spotify.com" target="_blank" rel="noreferrer">Écouter sur Spotify <ArrowUpRight size={15} /></a><a className="podcast-apple" href="https://podcasts.apple.com" target="_blank" rel="noreferrer">Apple Podcasts <ArrowUpRight size={15} /></a></div>
    </section>
  );
}
