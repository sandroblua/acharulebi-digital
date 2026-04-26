import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section";
import heroImg from "@/assets/hero-khachapuri.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import lagidzeImg from "@/assets/lagidze.jpg";
import interiorImg from "@/assets/interior.jpg";
import eatingImg from "@/assets/eating.jpg";
import feastImg from "@/assets/feast.jpg";
import soupImg from "@/assets/soup.jpg";
import badrijaniImg from "@/assets/badrijani.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Acharulebi on Lagidze · Tbilisi" },
      {
        name: "description",
        content:
          "A look at our khachapuri, dumplings, Lagidze waters, and underground dining room in Tbilisi.",
      },
      { property: "og:title", content: "Gallery — Acharulebi on Lagidze" },
      { property: "og:description", content: "Food, drinks, and atmosphere from our Tbilisi restaurant." },
      { property: "og:image", content: feastImg },
      { name: "twitter:image", content: feastImg },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: heroImg, alt: "Adjarian khachapuri", span: "md:col-span-2 md:row-span-2" },
  { src: interiorImg, alt: "Underground brick dining room", span: "md:col-span-2" },
  { src: dumplingsImg, alt: "Khinkali dumplings", span: "" },
  { src: lagidzeImg, alt: "Lagidze waters", span: "" },
  { src: feastImg, alt: "Georgian feast spread", span: "md:col-span-2" },
  { src: eatingImg, alt: "Sharing khachapuri", span: "" },
  { src: soupImg, alt: "Kharcho soup", span: "" },
  { src: badrijaniImg, alt: "Badrijani nigvzit", span: "md:col-span-2" },
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-gradient-parchment py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="Cheese, candlelight, and Lagidze fizz"
            description="A few moments from the room. The food is even better in person."
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4 md:gap-5">
            {photos.map((p, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl shadow-card ${p.span}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-charred/90 to-transparent p-4 text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" style={{ color: "var(--cream)" }}>
                  {p.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
