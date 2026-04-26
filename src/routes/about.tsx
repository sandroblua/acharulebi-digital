import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section";
import interiorImg from "@/assets/interior-real.jpg";
import eatingImg from "@/assets/eating.jpg";
import feastImg from "@/assets/feast.jpg";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Acharulebi on Lagidze · A Tbilisi Tradition" },
      {
        name: "description",
        content:
          "A beloved Tbilisi restaurant on Rustaveli Avenue with roots in Soviet-era Georgia. Cozy underground interior, family-friendly, recommended by locals.",
      },
      { property: "og:title", content: "About — Acharulebi on Lagidze" },
      { property: "og:description", content: "A Tbilisi tradition with roots in old Georgia." },
      { property: "og:image", content: interiorImg },
      { name: "twitter:image", content: interiorImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();

  const values = [
    { n: "01", t: t("ap.v1.t"), d: t("ap.v1.d") },
    { n: "02", t: t("ap.v2.t"), d: t("ap.v2.d") },
    { n: "03", t: t("ap.v3.t"), d: t("ap.v3.d") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <img src={interiorImg} alt="Restaurant interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-4xl px-4 py-32 text-center md:px-8 md:py-44" style={{ color: "var(--cream)" }}>
          <span className="font-script text-2xl" style={{ color: "var(--gold)" }}>აჭარულები ლაღიძეზე</span>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-balance md:text-7xl">
            {t("ap.h1.l1")}<br />{t("ap.h1.l2")}
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 md:grid-cols-5 md:px-8">
          <div className="md:col-span-3">
            <SectionHeading
              align="left"
              eyebrow={t("ap.eyebrow")}
              title={t("ap.title")}
              description={t("ap.desc")}
            />
            <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85">
              <p>{t("ap.p1")}</p>
              <p>{t("ap.p2")}</p>
              <p>{t("ap.p3")}</p>
            </div>
          </div>

          <aside className="md:col-span-2">
            <div className="grid gap-4">
              <img src={feastImg} alt="A Georgian feast spread" className="rounded-2xl object-cover shadow-soft" loading="lazy" />
              <img src={eatingImg} alt="Sharing khachapuri" className="rounded-2xl object-cover shadow-soft" loading="lazy" />
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-gradient-parchment texture-paper py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <SectionHeading eyebrow={t("ap.values.eyebrow")} title={t("ap.values.title")} />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {values.map((p) => (
              <div key={p.n} className="rounded-2xl bg-card p-8 shadow-card">
                <div className="font-script text-4xl text-primary">{p.n}</div>
                <h3 className="mt-3 font-display text-2xl font-semibold">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
