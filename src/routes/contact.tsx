import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit — Acharulebi on Lagidze · 24 Rustaveli Ave, Tbilisi" },
      {
        name: "description",
        content:
          "Find us at 24 Shota Rustaveli Avenue, Tbilisi. Open daily until 10 PM. Call +995 514 64 56 45.",
      },
      { property: "og:title", content: "Visit Acharulebi on Lagidze" },
      { property: "og:description", content: "Address, hours, phone, and directions." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-gradient-parchment py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <SectionHeading
            eyebrow="Find Us"
            title="On Rustaveli Avenue, just downstairs"
            description="Walk in or call ahead — we keep things simple."
          />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-5 md:px-8">
          <div className="md:col-span-2">
            <div className="space-y-4">
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                title="Address"
                lines={["24 Shota Rustaveli Avenue", "Tbilisi, Georgia"]}
                action={{ href: "https://maps.google.com/?q=24+Shota+Rustaveli+Avenue+Tbilisi", label: "Open in Maps" }}
              />
              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                title="Phone"
                lines={["+995 514 64 56 45"]}
                action={{ href: "tel:+995514645645", label: "Tap to call" }}
              />
              <ContactCard
                icon={<Clock className="h-5 w-5" />}
                title="Hours"
                lines={["Open every day", "Until 10:00 PM"]}
              />
              <ContactCard
                icon={<Navigation className="h-5 w-5" />}
                title="Getting here"
                lines={["2 min from Rustaveli Metro", "Look for the staircase down"]}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-warm md:col-span-3">
            <iframe
              title="Map to Acharulebi on Lagidze"
              src="https://www.google.com/maps?q=24+Shota+Rustaveli+Avenue+Tbilisi&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[480px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ContactCard({
  icon,
  title,
  lines,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  action?: { href: string; label: string };
}) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-card">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {title}
          </div>
          <div className="mt-2 space-y-0.5">
            {lines.map((l) => (
              <div key={l} className="font-display text-lg font-medium text-foreground">{l}</div>
            ))}
          </div>
          {action && (
            <a
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              {action.label} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
