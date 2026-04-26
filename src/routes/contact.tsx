import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { useI18n } from "@/lib/i18n";

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
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-gradient-parchment py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <SectionHeading
            eyebrow={t("ct.eyebrow")}
            title={t("ct.title")}
            description={t("ct.desc")}
          />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-5 md:px-8">
          <div className="md:col-span-2">
            <div className="space-y-4">
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                title={t("ct.address")}
                lines={[t("ct.addr.l1"), t("ct.addr.l2")]}
                action={{ href: "https://maps.google.com/?q=24+Shota+Rustaveli+Avenue+Tbilisi", label: t("ct.openMaps") }}
              />
              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                title={t("ct.phone")}
                lines={["+995 514 64 56 45"]}
                action={{ href: "tel:+995514645645", label: t("ct.tapCall") }}
              />
              <ContactCard
                icon={<Clock className="h-5 w-5" />}
                title={t("ct.hours")}
                lines={[t("ct.hours.l1"), t("ct.hours.l2")]}
              />
              <ContactCard
                icon={<Navigation className="h-5 w-5" />}
                title={t("ct.getting")}
                lines={[t("ct.get.l1"), t("ct.get.l2")]}
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
