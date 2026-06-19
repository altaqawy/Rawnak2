import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="section not-found">
        <div className="not-found-panel reveal">
          <span className="eyebrow">404</span>
          <h1>Page Not Found</h1>
          <p>The page you are looking for may have moved or does not exist.</p>
          <div className="not-found-actions">
            <Link className="btn ghost" href="/">Back Home</Link>
            <Link className="btn primary" href="/contact">Start Project <span>{"\u2197"}</span></Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
