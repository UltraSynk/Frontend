/** Full-viewport fixed scene — sections scroll over it */
export function LandingBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {/* Base wash — pearl → soft plum depth */}
      <div className="absolute inset-0 bg-[linear-gradient(168deg,#faf7f8_0%,#f1e5e5_22%,#e5d0e5_52%,#d4b5d8_82%,#b889b8_100%)]" />
      {/* Top-left aurora */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_4%_-8%,rgba(255,245,250,0.95)_0%,transparent_58%)]" />
      {/* Top-right bloom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_98%_4%,rgba(225,179,225,0.55)_0%,transparent_52%)]" />
      {/* Mid haze — center lift */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_42%,rgba(241,229,229,0.65)_0%,transparent_62%)]" />
      {/* Bottom depth / floor glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_70%_at_50%_110%,rgba(92,37,80,0.28)_0%,transparent_55%)]" />
      {/* Side accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_8%_72%,rgba(169,117,169,0.2)_0%,transparent_50%),radial-gradient(ellipse_50%_50%_at_92%_68%,rgba(114,47,97,0.12)_0%,transparent_52%)]" />
      {/* Soft vignette — no tiled grain */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_45%,transparent_30%,rgba(82,32,70,0.06)_100%)]" />
    </div>
  )
}
