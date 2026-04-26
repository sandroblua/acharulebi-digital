import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Star, Phone, Clock, Sparkles, Heart, Quote } from "lucide-react";
import heroImg from "@/assets/hero-khachapuri.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import lagidzeImg from "@/assets/lagidze.jpg";
import interiorImg from "@/assets/interior.jpg";
import eatingImg from "@/assets/eating.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section";

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

const reviews = [
  { name: "Nino G.", text: "Best khachapuri in the world. I have been coming here since I was a child.", origin: "Tbilisi local" },
  { name: "Marcus W.", text: "Affordable and not a tourist trap — this is the real Georgia.", origin: "Visitor from Berlin" },
  { name: "Tamar K.", text: "My dad's favorite place since Soviet times. Nothing has changed, in the best way.", origin: "Regular for 30 years" },
  { name: "Elena R.", text: "Cozy underground atmosphere, Lagidze water, perfect cheese boats. Magical.", origin: "Travel writer" },
];

const highlights = [
  {
    name: "Adjarian Khachapuri",
    georgian: "აჭარული ხაჭაპური",
    desc: "Boat-shaped sourdough filled with bubbling sulguni, crowned with a golden yolk and butter.",
    price: "12 GEL",
    img: heroImg,
  },
  {
    name: "Khinkali Dumplings",
    georgian: "ხინკალი",
    desc: "Hand-twisted dumplings filled with spiced beef and pork. Hold by the stem, sip the broth.",
    price: "1.5 GEL each",
    img: dumplingsImg,
  },
  {
    name: "Lagidze Waters",
    georgian: "ლაღიძის წყალი",
    desc: "The legendary Tbilisi sodas — tarragon, cream, chocolate. A sip of Soviet-era Georgia.",
    price: "4 GEL",
    img: lagidzeImg,
  },
];

function HomePage() {
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
            <span className="ornament font-script text-2xl text-gold-soft" style={{ color: "var(--gold-soft)" }}>
              ლაღიძეზე · since the old days
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-cream text-balance md:text-7xl lg:text-8xl" style={{ color: "var(--cream)" }}>
              Authentic Adjarian Khachapuri in the Heart of&nbsp;Tbilisi
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 md:text-xl" style={{ color: "color-mix(in oklab, var(--cream) 85%, transparent)" }}>
              A local favorite for generations — affordable, authentic, unforgettable.
              Step downstairs into a warm Tbilisi tradition on Rustaveli Avenue.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-charred shadow-warm transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--gold)", color: "var(--charred)" }}
              >
                View the Menu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://maps.google.com/?q=24+Shota+Rustaveli+Avenue+Tbilisi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/5 px-7 py-4 text-base font-medium text-cream backdrop-blur-sm transition-colors hover:bg-cream/15"
                style={{ borderColor: "color-mix(in oklab, var(--cream) 40%, transparent)", color: "var(--cream)" }}
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-cream/85" style={{ color: "color-mix(in oklab, var(--cream) 85%, transparent)" }}>
              <div className="flex items-center gap-2">
                <div className="flex" aria-label="4.2 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-current" : "opacity-40"}`} style={{ color: "var(--gold)" }} />
                  ))}
                </div>
                <span className="text-sm font-medium">4.2 · 820 reviews</span>
              </div>
              <div className="h-4 w-px bg-cream/30" style={{ backgroundColor: "color-mix(in oklab, var(--cream) 30%, transparent)" }} />
              <span className="text-sm">10–20 GEL per person</span>
              <div className="h-4 w-px bg-cream/30" style={{ backgroundColor: "color-mix(in oklab, var(--cream) 30%, transparent)" }} />
              <span className="text-sm">Recommended by locals & hotels</span>
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
              <div className="font-script text-3xl text-primary">since the 60s</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">a Tbilisi tradition</div>
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={<>A beloved Tbilisi spot,<br />rooted in Georgian tradition.</>}
              description="Tucked beneath Rustaveli Avenue, Acharulebi on Lagidze has been serving generations of Tbilisi families. We never chased trends — we kept doing what we know best: real Adjarian khachapuri, hot khinkali, and the cold Lagidze waters our grandparents grew up with."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Feature icon={<Heart className="h-5 w-5" />} title="Family-friendly" desc="Generous portions, warm welcomes, and a calm pace — bring everyone." />
              <Feature icon={<Sparkles className="h-5 w-5" />} title="Underground charm" desc="Brick arches, candle glow, and that unmistakable old-Tbilisi feeling." />
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Read more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Menu Highlights"
            title="What our guests come back for"
            description="A short list of the dishes that built our reputation. The full menu has dozens more — soups, salads, grills, and homemade desserts."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {highlights.map((dish) => (
              <article
                key={dish.name}
                className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-warm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.name}
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
                  <h3 className="mt-1 font-display text-2xl font-semibold">{dish.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{dish.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              See the full menu <ArrowRight className="h-4 w-4" />
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
          <span className="ornament font-script text-2xl" style={{ color: "var(--gold)" }}>since 1887 — the recipe</span>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Taste a Piece of Georgian History
          </h2>
          <p className="mt-6 text-lg leading-relaxed opacity-85">
            From Mitrofan Lagidze's legendary fountain waters of old Tbilisi to the
            cheese-laden boats of Adjara — every plate at our table carries a story.
            Sit down, tear the bread, swirl the yolk. You're tasting more than a meal.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gradient-parchment texture-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="What Guests Say"
            title="Loved by locals, discovered by travelers"
            description="4.2 stars across 820 reviews — from neighborhood regulars to first-time visitors."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="relative flex flex-col rounded-2xl bg-card p-7 shadow-card"
              >
                <Quote className="h-7 w-7" style={{ color: "var(--gold)" }} />
                <blockquote className="mt-4 flex-1 font-display text-xl leading-snug text-balance">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.origin}</div>
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
                <span className="font-script text-2xl" style={{ color: "var(--gold-soft)" }}>come hungry</span>
                <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  We're open daily until 10 PM
                </h2>
                <p className="mt-4 text-base opacity-85 md:text-lg">
                  Walk in, dine in, or take it home. No reservations needed for small parties —
                  give us a call for groups.
                </p>
              </div>
              <div className="grid gap-3">
                <InfoRow icon={<MapPin />} label="Address" value="24 Shota Rustaveli Avenue, Tbilisi" />
                <InfoRow icon={<Phone />} label="Phone" value="+995 514 64 56 45" href="tel:+995514645645" />
                <InfoRow icon={<Clock />} label="Hours" value="Every day · until 10 PM" />
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charred shadow-soft transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--gold)", color: "var(--charred)" }}
                >
                  Plan your visit <ArrowRight className="h-4 w-4" />
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
