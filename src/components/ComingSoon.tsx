import Link from "next/link";

type ComingSoonProps = { title: string };

export function ComingSoon({ title }: ComingSoonProps) {
  return (
    <section className="section not-found">
      <div className="not-found-panel reveal">
        <span className="eyebrow">Rawnak Group</span>
        <h1>{title}</h1>
        <p>Coming Soon / Coming shortly as part of the Rawnak digital ecosystem.</p>
        <div className="not-found-actions">
          <Link className="btn ghost" href="/">Back Home</Link>
          <Link className="btn primary" href="/contact">Start Project <span>{"\u2197"}</span></Link>
        </div>
      </div>
    </section>
  );
}
