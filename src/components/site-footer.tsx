import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-charred text-cream" style={{ backgroundColor: "var(--charred)", color: "var(--cream)" }}>
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="font-display text-3xl font-semibold text-gold" style={{ color: "var(--gold)" }}>
            Acharulebi <span className="opacity-70">on Lagidze</span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed opacity-80">
            A beloved Tbilisi address for Adjarian khachapuri, hand-pulled dumplings, and
            Soviet-era Lagidze waters — generous, honest, and unforgettable.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-gold hover:text-charred" style={{ borderColor: "color-mix(in oklab, var(--cream) 20%, transparent)" }}>
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-gold hover:text-charred" style={{ borderColor: "color-mix(in oklab, var(--cream) 20%, transparent)" }}>
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">Visit</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />24 Shota Rustaveli Ave, Tbilisi</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} /><a href="tel:+995514645645" className="hover:underline">+995 514 64 56 45</a></li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />Open daily until 10 PM</li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">Explore</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/menu" className="opacity-80 hover:opacity-100">The Menu</Link></li>
            <li><Link to="/about" className="opacity-80 hover:opacity-100">Our Story</Link></li>
            <li><Link to="/gallery" className="opacity-80 hover:opacity-100">Gallery</Link></li>
            <li><Link to="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 py-5 text-center text-xs opacity-60 md:px-8" style={{ borderColor: "color-mix(in oklab, var(--cream) 10%, transparent)" }}>
        © {new Date().getFullYear()} Acharulebi on Lagidze · აჭარულები ლაღიძეზე · Tbilisi, Georgia
      </div>
    </footer>
  );
}
