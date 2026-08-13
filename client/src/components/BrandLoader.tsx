/* Maison Rouge — préchargement de marque : un seuil d'entrée court, calme et incarné. */
type BrandLoaderProps = { visible: boolean };

export function BrandLoader({ visible }: BrandLoaderProps) {
  return (
    <div className={`brand-loader ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <div className="brand-loader-inner">
        <img src="https://raw.githubusercontent.com/essidyoussef-source/mathildewod/main/client/public/manus-storage/mathildewod-mark_77d46693.png" alt="" />
        <p>MATHILDEWOD</p>
        <span>Manifestation <i>+</i> Actions</span>
      </div>
    </div>
  );
}
