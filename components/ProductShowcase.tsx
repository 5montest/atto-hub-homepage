"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Layers3, Smartphone } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const products = [
  {
    id: "ato",
    label: "PRODUCT 01",
    name: "Ato",
    tagline: "ゆるい順番待ちシステム",
    description:
      "アプリ不要、ログイン不要。現場ですぐ使える導線と、管理者の運用しやすさを両立したプロダクトです。小規模イベントから店舗利用まで、軽やかに導入できます。",
    features: [
      { label: "導入準備", value: "最短3分", icon: Clock3 },
      { label: "ゲスト側準備", value: "不要", icon: Smartphone },
      { label: "運用モード", value: "拡張可", icon: Layers3 },
    ],
    href: "https://ato.atto-hub.com",
    imageSrc: "/screenshots/ato-home-mobile.png",
    imageClassName: "-rotate-3 origin-top shadow-[0_30px_55px_-28px_rgba(74,92,122,0.65)] transition-transform duration-700 hover:rotate-0",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="px-4 py-16 sm:py-24">
      <div className="section-wrap mx-auto max-w-5xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold text-[var(--color-brand)]">PRODUCTS</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-5xl">Atto Hub が手がけるプロダクト</h2>
          <p className="mt-4 leading-relaxed text-[var(--color-ink-soft)]">
            特定の業種に閉じず、現場ごとの摩擦に合わせて道具をつくる。小さく始めて検証し、価値が出たものを継続的に育てます。
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="soft-panel overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 ring-1 ring-[var(--color-brand-border)]"
            >
              <div className="grid items-center gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-8">
                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-xs font-bold text-[var(--color-brand-deep)]">
                      <Layers3 className="h-4 w-4" />
                      {product.label}
                    </div>
                    <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{product.name}</h3>
                    <p className="mt-2 text-lg font-bold text-[var(--color-ink-soft)]">{product.tagline}</p>
                  </div>

                  <p className="leading-relaxed text-[var(--color-ink-soft)]">{product.description}</p>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {product.features.map((f) => (
                      <div key={f.label}>
                        <div className="mb-1 flex items-center gap-1.5 text-[var(--color-ink-soft)]">
                          <f.icon className="h-4 w-4 opacity-70" />
                          <span className="text-xs font-bold">{f.label}</span>
                        </div>
                        <p className="text-lg font-extrabold text-[var(--color-brand)]">{f.value}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full gradient-tag px-8 py-4 text-sm font-bold"
                  >
                    {product.name}を開く
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                  <div className="relative aspect-square w-full lg:aspect-auto lg:h-[500px]">
                    <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[var(--color-brand-soft)] to-white blur-3xl" />

                    <div className="flex h-full items-start justify-center pt-10 sm:pt-16 lg:pt-20">
                      <PhoneMockup imageSrc={product.imageSrc} className={product.imageClassName} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
