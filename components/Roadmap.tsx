"use client";

import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "PHASE 1",
    title: "単一の不便を解消する",
    detail:
      "待ち時間や煩雑な入力など、目の前のストレスを単機能で素早く解決。小さく確実に効果を出せる道具から始めます。",
  },
  {
    phase: "PHASE 2",
    title: "業務をななめにつなぐ",
    detail:
      "個別ツールと既存システムを横断して接続し、分断された運用フローをなめらかに統合。現場全体の前進を支えます。",
  },
  {
    phase: "PHASE 3",
    title: "新しい視点をもたらす",
    detail:
      "蓄積データとAIアシストを活用し、属人的な判断を仕組み化。次の打ち手を提示できる状態へ育てます。",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="px-4 py-16 sm:py-24">
      <div className="section-wrap mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-bold tracking-wider text-[var(--color-brand)]">ROADMAP</span>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-foreground)] sm:text-4xl">
            Atto Hub の進化を描く
            <br className="sm:hidden" />
            3つのフェーズ
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {roadmap.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[var(--color-brand-border)] transition hover:shadow-md"
            >
              <div className="mb-4 inline-block rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-[11px] font-extrabold tracking-wide text-[var(--color-mint)]">
                {step.phase}
              </div>
              <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-[var(--color-brand)]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
