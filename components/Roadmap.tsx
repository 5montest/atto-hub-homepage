const roadmap = [
  {
    phase: "PHASE 1",
    title: "ひとつの課題を解きほぐす",
    detail:
      "まずは現場の運用と導線を観察し、負担が集中するポイントを特定。小さく試せる改善から実装して、効果を確認します。",
  },
  {
    phase: "PHASE 2",
    title: "運用になじむ形へ整える",
    detail:
      "検証で得た学びをもとに画面とルールを調整。使う人にとって自然な手順へ落とし込み、継続できる仕組みに育てます。",
  },
  {
    phase: "PHASE 3",
    title: "新しい選択肢をひろげる",
    detail:
      "運用データとAIアシストを活用し、次の改善余地を可視化。現場ごとに異なる要件へ柔軟に対応できる拡張性を高めます。",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="px-4 py-16 sm:py-24">
      <div className="section-wrap mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold tracking-wider text-[var(--color-brand)]">ROADMAP</span>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-foreground)] sm:text-4xl">
            Atto Hub の進め方を、
            <br className="sm:hidden" />
            3つのフェーズで。
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {roadmap.map((step) => (
            <div
              key={step.phase}
              className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[var(--color-brand-border)] transition hover:shadow-md"
            >
              <div className="mb-4 inline-block rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-[11px] font-extrabold tracking-wide text-[var(--color-mint)]">
                {step.phase}
              </div>
              <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-[var(--color-brand)]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}