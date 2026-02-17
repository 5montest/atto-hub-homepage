import { Layers3, ShieldCheck, Users } from "lucide-react";

const cases = [
  {
    icon: Users,
    title: "オフラインの接客現場",
    desc: "受付・案内・呼び出しが集中する場所で、現場のテンポを崩さずに対応できる仕組みを設計。ゲスト体験とスタッフ負荷を同時に整えます。",
    color: "bg-[var(--color-brand-soft)] text-[var(--color-brand)]",
  },
  {
    icon: Layers3,
    title: "ブラウザ上の業務フロー",
    desc: "分断された画面遷移や手作業の入力をつなぎ、日々のオペレーションを前に進む流れへ再設計。小さな自動化から段階的に改善します。",
    color: "bg-[var(--color-amber-soft)] text-[var(--color-amber-deep)]",
  },
  {
    icon: ShieldCheck,
    title: "バックオフィスの運用管理",
    desc: "台帳更新や確認作業など、属人化しやすい運用を見える化。権限やルールを含めて再構築し、継続できる業務基盤に育てます。",
    color: "bg-[var(--color-mint-soft)] text-[var(--color-mint)]",
  },
];

export default function UseCases() {
  return (
    <section className="bg-white px-4 py-12 sm:py-20">
      <div className="section-wrap">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-xs font-bold text-[var(--color-brand-deep)]">
            FOCUS AREAS
          </span>
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            <span className="mb-1 block text-lg font-medium text-slate-600">特定業種ではなく、課題領域で向き合う</span>
            Atto Hub が取り組む3つのフィールド
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-100"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-800">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}