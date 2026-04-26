import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Star, Phone, Clock, Sparkles, Heart, Quote } from "lucide-react";
import heroImg from "@/assets/hero-khachapuri.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import lagidzeImg from "@/assets/lagidze-waters.png";
import interiorImg from "@/assets/interior-real.jpg";
import eatingImg from "@/assets/eating.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acharulebi on Lagidze — Best Khachapuri in Tbilisi" },
      {
        name: "description",
        content:
          "Authentic Adjarian khachapuri in the heart of Tbilisi. A local favorite for generations on Rustaveli Avenue — affordable, nostalgic, unforgettable.",
      },
      { property: "og:title", content: "Acharulebi on Lagidze — Best Khachapuri in Tbilisi" },
      {
        property: "og:description",
        content: "Authentic Adjarian khachapuri, dumplings, and Lagidze waters on Rustaveli Avenue.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useI18n();

  const reviews = [
    { key: "rev.1", name: "Nino G." },
    { key: "rev.2", name: "Marcus W." },
    { key: "rev.3", name: "Tamar K." },
    { key: "rev.4", name: "Elena R." },
  ];

  const highlights = [
    { key: "acharuli", price: "12 ლ / 12 GEL", img: heroImg, georgian: "აჭარული ხაჭაპური" },
    { key: "khinkali", price: "1.5 ლ / 1.5 GEL", img: dumplingsImg, georgian: "ხინკალი" },
    { key: "lagidze", price: "3 ლ / 3 GEL", img: lagidzeImg, georgian: "ლაღიძის წყალი" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Adjarian khachapuri with melted cheese and egg"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 md:px-8 md:pb-28">
          <div className="max-w-3xl animate-fade-up">
            <span className="ornament font-script text-2xl" style={{ color: "var(--gold-soft)" }}>
              {t("hero.eyebrow")}
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl lg:text-8xl" style={{ color: "var(--cream)" }}>
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl" style={{ color: "color-mix(in oklab, var(--cream) 85%, transparent)" }}>
              {t("hero.sub")}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold shadow-warm transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--gold)", color: "var(--charred)" }}
              >
                {t("hero.cta.menu")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://maps.google.com/?q=24+Shota+Rustaveli+Avenue+Tbilisi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border bg-cream/5 px-7 py-4 text-base font-medium backdrop-blur-sm transition-colors hover:bg-cream/15"
                style={{ borderColor: "color-mix(in oklab, var(--cream) 40%, transparent)", color: "var(--cream)" }}
              >
                <MapPin className="h-4 w-4" />
                {t("hero.cta.dir")}
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ color: "color-mix(in oklab, var(--cream) 85%, transparent)" }}>
              <div className="flex items-center gap-2">
                <div className="flex" aria-label="4.2 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-current" : "opacity-40"}`} style={{ color: "var(--gold)" }} />
                  ))}
                </div>
                <span className="text-sm font-medium">{t("hero.trust.reviews")}</span>
              </div>
              <div className="h-4 w-px" style={{ backgroundColor: "color-mix(in oklab, var(--cream) 30%, transparent)" }} />
              <span className="text-sm">{t("hero.trust.price")}</span>
              <div className="h-4 w-px" style={{ backgroundColor: "color-mix(in oklab, var(--cream) 30%, transparent)" }} />
              <span className="text-sm">{t("hero.trust.rec")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-gradient-parchment texture-paper py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 md:grid-cols-2 md:items-center md:px-8 lg:gap-24">
          <div className="relative">
            <img
              src={interiorImg}
              alt="Cozy underground brick interior of the restaurant"
              width={1536}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-warm"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-card p-5 shadow-soft md:block">
              <div className="font-script text-3xl text-primary">{t("about.since")}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{t("about.tradition")}</div>
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow={t("about.eyebrow")}
              title={<>{t("about.title.l1")}<br />{t("about.title.l2")}</>}
              description={t("about.desc")}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Feature icon={<Heart className="h-5 w-5" />} title={t("about.feat1.t")} desc={t("about.feat1.d")} />
              <Feature icon={<Sparkles className="h-5 w-5" />} title={t("about.feat2.t")} desc={t("about.feat2.d")} />
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {t("about.readMore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow={t("high.eyebrow")}
            title={t("high.title")}
            description={t("high.desc")}
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {highlights.map((dish) => (
              <article
                key={dish.key}
                className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-warm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.img}
                    alt={t(`dish.${dish.key}.name`)}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-script text-lg text-primary opacity-80">{dish.georgian}</div>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{t(`dish.${dish.key}.name`)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(`dish.${dish.key}.desc`)}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              {t("high.full")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HISTORY STRIP */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: "var(--charred)", color: "var(--cream)" }}>
        <div className="absolute inset-0 opacity-25">
          <img src={eatingImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-8">
          <span className="ornament font-script text-2xl" style={{ color: "var(--gold)" }}>{t("hist.eyebrow")}</span>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-6xl">
            {t("hist.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed opacity-85">
            {t("hist.desc")}
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gradient-parchment texture-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow={t("rev.eyebrow")}
            title={t("rev.title")}
            description={t("rev.desc")}
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="relative flex flex-col rounded-2xl bg-card p-7 shadow-card"
              >
                <Quote className="h-7 w-7" style={{ color: "var(--gold)" }} />
                <blockquote className="mt-4 flex-1 font-display text-xl leading-snug text-balance">
                  "{t(`${r.key}.text`)}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{t(`${r.key}.origin`)}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-warm">
            <div className="grid gap-10 p-10 md:grid-cols-2 md:items-center md:p-16">
              <div>
                <span className="font-script text-2xl" style={{ color: "var(--gold-soft)" }}>{t("visit.eyebrow")}</span>
                <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  {t("visit.title")}
                </h2>
                <p className="mt-4 text-base opacity-85 md:text-lg">
                  {t("visit.desc")}
                </p>
              </div>
              <div className="grid gap-3">
                <InfoRow icon={<MapPin />} label={t("visit.address")} value={t("visit.address.v")} />
                <InfoRow icon={<Phone />} label={t("visit.phone")} value="+995 514 64 56 45" href="tel:+995514645645" />
                <InfoRow icon={<Clock />} label={t("visit.hours")} value={t("visit.hours.v")} />
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-soft transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--gold)", color: "var(--charred)" }}
                >
                  {t("visit.plan")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <div className="font-display text-lg font-semibold">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground">{desc}</div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15">
        <div className="h-4 w-4">{icon}</div>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest opacity-70">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
