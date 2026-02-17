import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Roadmap from "@/components/Roadmap";
import UseCases from "@/components/UseCases";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Atto Hub",
    url: "https://atto-hub.com",
    logo: "https://atto-hub.com/icon-512.png",
    sameAs: ["https://ato.atto-hub.com"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Atto Hub",
    url: "https://atto-hub.com",
    inLanguage: "ja-JP",
    description:
      "Atto Hub develops practical products like Ato to reduce friction in on-site operations and everyday workflows.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Atto Hub",
    url: "https://atto-hub.com/",
    isPartOf: {
      "@type": "WebSite",
      name: "Atto Hub",
      url: "https://atto-hub.com",
    },
    about: {
      "@type": "Organization",
      name: "Atto Hub",
    },
    inLanguage: "ja-JP",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-foreground space-y-20 sm:space-y-32 pb-20 sm:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <UseCases />
      <Features />
      <ProductShowcase />
      <Roadmap />
      <Footer />
    </main>
  );
}
