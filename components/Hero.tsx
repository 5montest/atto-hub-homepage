import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { label: "アプローチ", value: "現場主義・共に歩む" },
  { label: "デザイン", value: "迷わせない、説明書不要のUI" },
  { label: "開発体制", value: "小さく作って、早く検証する" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-8 sm:pt-10">
      <div className="pointer-events-none absolute inset-0 hero-grid" />
      <div className="section-wrap relative z-10">
        <div className="mb-14 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-sm ring-1 ring-[var(--color-brand-border)]">
            <div className="grid h-8 w-8 place-items-center rounded-xl gradient-tag font-bold">a</div>
            <span className="text-sm font-semibold text-[var(--color-ink-soft)]">Atto Hub</span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl text-left">
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-brand-soft)] px-4 py-1.5 text-xs font-bold text-[var(--color-brand-deep)]">
            <Sparkles className="h-4 w-4" />
            現場起点のプロダクトスタジオ
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.15] text-[var(--color-foreground)] sm:text-7xl">
            現場の不便を、
            <br />
            <span className="text-[var(--color-brand)]">やわらかくほどく。</span>
          </h1>

          <p className="mt-8 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-[var(--color-ink-soft)] sm:text-xl">
            Atto Hub は、現場や日常にある小さな摩擦をほどくプロダクトスタジオです。
            わかりやすいUIと堅実な運用設計を土台に、使うほどなじむ道具を現場とともに育てます。
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full gradient-tag px-8 py-4 text-sm font-bold"
            >
              プロダクトを見る
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#vision"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-border)] bg-white px-8 py-4 text-sm font-bold text-[var(--color-brand-deep)] transition hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-soft)]"
            >
              私たちについて
            </a>
          </div>

          <div className="mt-20 grid gap-8 border-t border-slate-100 pt-10 sm:grid-cols-3 sm:border-t-0 sm:pt-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs font-bold text-[var(--color-ink-soft)] opacity-80">{stat.label}</p>
                <p className="mt-1 text-lg font-extrabold leading-relaxed text-[var(--color-brand)]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}