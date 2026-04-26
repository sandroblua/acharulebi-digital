import { useI18n, type Lang } from "@/lib/i18n";

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();

  const Btn = ({ value, label }: { value: Lang; label: string }) => {
    const active = lang === value;
    return (
      <button
        type="button"
        onClick={() => setLang(value)}
        aria-pressed={active}
        className={`relative px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
          active ? "text-primary-foreground" : "text-foreground/60 hover:text-foreground"
        }`}
      >
        {active && (
          <span
            className="absolute inset-0 -z-0 rounded-full"
            style={{ backgroundColor: "var(--wine)" }}
          />
        )}
        <span className="relative z-10">{label}</span>
      </button>
    );
  };

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-border bg-card/80 p-0.5 backdrop-blur-sm ${className}`}
    >
      <Btn value="ka" label="ქა" />
      <Btn value="en" label="EN" />
    </div>
  );
}
