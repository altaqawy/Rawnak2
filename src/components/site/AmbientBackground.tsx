export function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <img
        src="/assets/mountains.webp"
        alt=""
        className="mountain-layer"
        width="1280"
        height="720"
        decoding="async"
      />
      <img
        src="/assets/wave.webp"
        alt=""
        className="wave-layer"
        width="1280"
        height="720"
        decoding="async"
      />
    </div>
  );
}
