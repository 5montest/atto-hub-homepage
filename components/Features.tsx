"use client";

import { motion } from "framer-motion";
import { Compass, Feather, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: Feather,
    title: "ゆるく使える設計",
    description:
      "説明を読まなくても使い始められる導線を最優先に。現場で迷わないUIを、過不足なく設計します。",
    tone: "text-[var(--color-brand)]",
  },
  {
    icon: Compass,
    title: "先に進める実装",
    description:
      "小さく作って早く検証し、必要な改善に集中。仮説と実装のループを止めない開発を重視します。",
    tone: "text-[var(--color-mint)]",
  },
  {
    icon: ShieldCheck,
    title: "安心して運用できる基盤",
    description:
      "運用ルール、権限、監視まで含めて設計。使い続けるほど価値が出る、堅実な構成を積み上げます。",
    tone: "text-amber-600",
  },
];

export default function Features() {
  return (
    <section id="vision" className="px-4 py-20">
      <div className="section-wrap">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold text-[var(--color-brand)]">DESIGN PRINCIPLES</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-5xl">使う人のリズムを崩さない。</h2>
          <p className="mt-4 text-[var(--color-ink-soft)] leading-relaxed">
            Atto Hub がつくるのは、派手さより「続けて使える体験」。
            現場のテンポを止めないことを判断基準に、デザインと実装を繋ぎます。
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid gap-6 md:grid-cols-12 items-start"
        >
          {principles.map((item, index) => {
            const Icon = item.icon;
            const colSpans = ["md:col-span-4", "md:col-span-4 md:mt-12", "md:col-span-4 md:mt-6"];

            return (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 50, damping: 20 }
                  }
                }}
                className={`soft-panel rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2 ${colSpans[index]}`}
              >
                <div className={`-ml-2 -mt-2 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm ${item.tone}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-base leading-[1.8] text-[var(--color-ink-soft)]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
