import { nav, BOOKING_LINK, CONTACT_EMAIL } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-coal text-bone border-t border-white/8">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-14 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-xs">
            <div className="font-display text-2xl tracking-tight">
              Aurex<span className="text-clay">.</span>
            </div>
            <p className="mt-3 text-sm text-bone/55 leading-relaxed">
              Marketing systems that turn local service businesses into self-running machines.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-bone/40 mb-4">Explore</div>
              <ul className="space-y-2.5">
                {nav.map((n) => (
                  <li key={n.name}>
                    <a href={n.href} className="text-sm text-bone/70 hover:text-clay-soft transition-colors">
                      {n.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-bone/40 mb-4">Get started</div>
              <ul className="space-y-2.5">
                <li>
                  <a href={BOOKING_LINK} target="_blank" rel="noreferrer" className="text-sm text-bone/70 hover:text-clay-soft transition-colors">
                    Book a Call
                  </a>
                </li>
                <li>
                  {/* TODO: confirm contact email */}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-bone/70 hover:text-clay-soft transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-bone/45">
          <span>North Mississippi · Tupelo · Oxford · Ripley</span>
          <span>© {new Date().getFullYear()} Aurex. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
