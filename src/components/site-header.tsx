import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { LangToggle } from "@/components/lang-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/menu", label: t("nav.menu") },
    { to: "/about", label: t("nav.about") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/contact", label: t("nav.visit") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        {/* Left: language toggle + brand */}
        <div className="flex items-center gap-4">
          <LangToggle />
          <Link to="/" className="group flex items-center gap-2">
            <span className="font-display text-2xl font-semibold leading-none tracking-tight text-primary">
              {t("brand.name")}
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              {t("brand.tagline")}
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+995514645645"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            {t("nav.callReserve")}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/80"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+995514645645"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              +995 514 64 56 45
            </a>
            <a
              href="https://maps.google.com/?q=24+Shota+Rustaveli+Avenue+Tbilisi"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium"
            >
              <MapPin className="h-4 w-4" />
              {t("nav.directions")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
