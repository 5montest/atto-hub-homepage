export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-brand-border)] bg-white/75 px-4 py-10 backdrop-blur">
      <div className="section-wrap flex flex-col items-center justify-between gap-4 text-sm text-[var(--color-ink-soft)] sm:flex-row">
        <div>
          <p className="font-bold text-[var(--color-foreground)]">Atto Hub</p>
          <p className="mt-1 text-xs">現場の不便を、やわらかくほどく。</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="https://ato.atto-hub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--color-brand)]"
          >
            Ato
          </a>
          <a href="https://ato.atto-hub.com/terms" className="transition hover:text-[var(--color-brand)]">
            利用規約
          </a>
          <a href="https://ato.atto-hub.com/privacy" className="transition hover:text-[var(--color-brand)]">
            プライバシー
          </a>
        </div>

        <p className="text-xs">© {new Date().getFullYear()} Atto Hub</p>
      </div>
    </footer>
  );
}
