import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section";
import heroImg from "@/assets/hero-khachapuri.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import lagidzeImg from "@/assets/lagidze.jpg";
import soupImg from "@/assets/soup.jpg";
import badrijaniImg from "@/assets/badrijani.jpg";
import feastImg from "@/assets/feast.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Acharulebi on Lagidze · Tbilisi" },
      {
        name: "description",
        content:
          "Adjarian khachapuri, khinkali, kharcho soup, badrijani, and Lagidze waters. Honest Georgian cooking from 10–20 GEL per person.",
      },
      { property: "og:title", content: "Menu — Acharulebi on Lagidze" },
      { property: "og:description", content: "The full menu of our Tbilisi Georgian restaurant." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; ka?: string; desc: string; price: string; img?: string; signature?: boolean };

const sections: { title: string; items: Item[] }[] = [
  {
    title: "Khachapuri",
    items: [
      { name: "Adjarian Khachapuri", ka: "აჭარული", desc: "Sourdough boat, melted sulguni, raw yolk, butter", price: "12 GEL", img: heroImg, signature: true },
      { name: "Imeretian Khachapuri", ka: "იმერული", desc: "Round flatbread filled with young Imeretian cheese", price: "10 GEL" },
      { name: "Megrelian Khachapuri", ka: "მეგრული", desc: "Cheese inside, cheese on top, baked golden", price: "13 GEL" },
      { name: "Penovani", ka: "ფენოვანი", desc: "Flaky puff pastry layered with sulguni", price: "8 GEL" },
    ],
  },
  {
    title: "Khinkali & Hot Plates",
    items: [
      { name: "Khinkali (beef & pork)", ka: "ხინკალი", desc: "Twisted dumplings with seasoned broth", price: "1.5 GEL each", img: dumplingsImg },
      { name: "Khinkali (cheese)", desc: "Sulguni-filled, perfumed with mint", price: "1.5 GEL each" },
      { name: "Kharcho Soup", ka: "ხარჩო", desc: "Beef, walnut, and rice in a spiced broth", price: "9 GEL", img: soupImg },
      { name: "Chashushuli", ka: "ჩაშუშული", desc: "Slow-stewed beef with tomatoes and herbs", price: "16 GEL" },
      { name: "Ojakhuri", ka: "ოჯახური", desc: "Family-style pork & potatoes from a hot pan", price: "18 GEL" },
    ],
  },
  {
    title: "Cold Starters",
    items: [
      { name: "Badrijani Nigvzit", ka: "ბადრიჯანი", desc: "Eggplant rolls, walnut paste, pomegranate", price: "9 GEL", img: badrijaniImg },
      { name: "Pkhali Trio", ka: "ფხალი", desc: "Spinach, beet, and walnut purées", price: "10 GEL" },
      { name: "Tomato & Cucumber", desc: "With walnut dressing and basil", price: "7 GEL" },
      { name: "Lobio", ka: "ლობიო", desc: "Slow-simmered red beans in a clay pot", price: "8 GEL" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Lagidze Waters", ka: "ლაღიძე", desc: "Tarragon, cream, chocolate — the legendary Tbilisi sodas", price: "4 GEL", img: lagidzeImg, signature: true },
      { name: "House Red — Saperavi", desc: "Glass of Georgian dry red", price: "8 GEL" },
      { name: "House White — Rkatsiteli", desc: "Crisp amber white", price: "7 GEL" },
      { name: "Chacha", desc: "Traditional Georgian grape brandy", price: "6 GEL" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border">
        <img src={feastImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative mx-auto max-w-4xl px-4 py-28 text-center md:px-8 md:py-36">
          <SectionHeading
            eyebrow="The Menu"
            title="Honest Georgian cooking, served generously"
            description="Most guests dine well for 10–20 GEL. Cash or card welcome."
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-20 px-4 md:px-8">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-5">
                <h2 className="font-display text-3xl font-semibold md:text-4xl">{s.title}</h2>
                <span className="font-script text-2xl text-primary opacity-70">specialties</span>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {s.items.map((item) => (
                  <article key={item.name} className="flex gap-5">
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.name}
                        loading="lazy"
                        className="h-24 w-24 shrink-0 rounded-xl object-cover shadow-card"
                      />
                    ) : (
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-secondary font-script text-3xl text-primary/60">
                        ☘
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-xl font-semibold">
                          {item.name}
                          {item.signature && (
                            <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-widest text-accent-foreground" style={{ color: "var(--wine)" }}>
                              signature
                            </span>
                          )}
                        </h3>
                        <span className="shrink-0 font-display text-lg font-semibold text-primary">{item.price}</span>
                      </div>
                      {item.ka && <div className="font-script text-base text-muted-foreground">{item.ka}</div>}
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
