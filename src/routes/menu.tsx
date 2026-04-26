import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section";
import heroImg from "@/assets/hero-khachapuri.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import lagidzeImg from "@/assets/lagidze-waters.png";
import soupImg from "@/assets/soup.jpg";
import badrijaniImg from "@/assets/badrijani.jpg";
import feastImg from "@/assets/feast.jpg";
import menuBoard from "@/assets/menu-board.jpg";
import { useI18n } from "@/lib/i18n";

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
      { property: "og:image", content: menuBoard },
      { name: "twitter:image", content: menuBoard },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; ka?: string; desc: string; price: string; img?: string; signature?: boolean };

function MenuPage() {
  const { t } = useI18n();

  const sections: { title: string; items: Item[] }[] = [
    {
      title: t("menu.sec.khachapuri"),
      items: [
        { name: "აჭარული — აჭარული", ka: "Adjarian Khachapuri", desc: "Sourdough boat, melted sulguni, raw yolk, butter", price: "12 / 14.50 ₾", img: heroImg, signature: true },
        { name: "იმერული", ka: "Imeretian", desc: "Round flatbread filled with young Imeretian cheese", price: "9.50 / 14 ₾" },
        { name: "მეგრული", ka: "Megrelian", desc: "Cheese inside, cheese on top, baked golden", price: "12 / 16.50 / 23 ₾" },
        { name: "ფენოვანი", ka: "Penovani", desc: "Flaky puff pastry layered with sulguni", price: "5.50 ₾" },
        { name: "ყუბდარი", ka: "Kubdari", desc: "Svan-style spiced meat-filled bread", price: "15 ₾" },
        { name: "აჩმა", ka: "Achma", desc: "Layered cheese-laden pasta-like khachapuri", price: "8 ₾" },
      ],
    },
    {
      title: t("menu.sec.khinkali"),
      items: [
        { name: "ხინკალი — ხორციანი", ka: "Khinkali (beef & pork)", desc: "Twisted dumplings with seasoned broth", price: "5.50 ₾ / 10 pcs", img: dumplingsImg },
        { name: "ხინკალი — სულგუნით", ka: "Khinkali (cheese)", desc: "Sulguni-filled, perfumed with mint", price: "6 ₾ / 10 pcs" },
        { name: "ხინკალი — ყველით", ka: "Khinkali (cheese)", desc: "Soft cheese filling", price: "5 ₾ / 10 pcs" },
        { name: "ხინკალი — კარტოფილით", ka: "Khinkali (potato)", desc: "Vegetarian, melt-in-mouth", price: "4.50 ₾ / 10 pcs" },
        { name: "ქოთანში", ka: "Kotani", desc: "Stew served in a clay pot", price: "13 ₾" },
        { name: "ხარჩო", ka: "Kharcho Soup", desc: "Beef, walnut, and rice in a spiced broth", price: "10 / 14 ₾", img: soupImg },
        { name: "სოკოთი", ka: "Mushroom dish", desc: "Skillet mushrooms, herbs, sulguni", price: "10 / 14 ₾" },
      ],
    },
    {
      title: t("menu.sec.cold"),
      items: [
        { name: "ბადრიჯანი", ka: "Badrijani", desc: "Eggplant rolls, walnut paste, pomegranate", price: "9 ₾", img: badrijaniImg },
        { name: "ლობიო", ka: "Lobio", desc: "Slow-simmered red beans in a clay pot", price: "9 / 12 ₾" },
        { name: "ლობიო ლორით", ka: "Lobio with bacon", desc: "Red beans with smoked bacon", price: "10 / 14 ₾" },
        { name: "ლობიანი", ka: "Lobiani", desc: "Bean-filled flatbread", price: "5.50 / 9 ₾" },
        { name: "ფენოვანი ლობიანი", ka: "Puff Lobiani", desc: "Flaky puff pastry, bean filling", price: "6 ₾" },
        { name: "კარტოფილიანი", ka: "Kartopiliani", desc: "Cheesy potato-filled flatbread", price: "7 ₾" },
        { name: "საბავშვო", ka: "Kid's portion", desc: "Smaller plate for the little ones", price: "8 ₾" },
      ],
    },
    {
      title: t("menu.sec.drinks"),
      items: [
        { name: "ლაღიძის წყალი", ka: "Lagidze Waters", desc: "Tarragon, cream, chocolate — the legendary Tbilisi sodas (300g)", price: "3 ₾", img: lagidzeImg, signature: true },
        { name: "კაპრიჩოზა", ka: "Pizza Capricciosa", desc: "Ham, mushroom, olive — wood-baked", price: "19 ₾" },
        { name: "პეპერონი", ka: "Pizza Pepperoni", desc: "Spicy salami, mozzarella", price: "18.50 ₾" },
        { name: "სამარხვო", ka: "Lenten Pizza", desc: "Vegetarian, no cheese", price: "14 ₾" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border">
        <img src={feastImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative mx-auto max-w-4xl px-4 py-28 text-center md:px-8 md:py-36">
          <SectionHeading
            eyebrow={t("menu.eyebrow")}
            title={t("menu.title")}
            description={t("menu.desc")}
          />
        </div>
      </section>

      {/* THE ORIGINAL HAND-PAINTED MENU BOARD */}
      <section className="bg-gradient-parchment texture-paper py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <span className="ornament text-xs font-semibold uppercase tracking-[0.28em]">
              {t("menu.eyebrow")}
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
              {t("menu.board.title")}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">{t("menu.board.desc")}</p>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-warm">
            <img
              src={menuBoard}
              alt="Hand-painted menu board with prices in Georgian"
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </figure>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-20 px-4 md:px-8">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-5">
                <h2 className="font-display text-3xl font-semibold md:text-4xl">{s.title}</h2>
                <span className="font-script text-2xl text-primary opacity-70">{t("menu.specialties")}</span>
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
                            <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--wine)" }}>
                              {t("menu.signature")}
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
