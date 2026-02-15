import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Roadmap from "@/components/Roadmap";
import UseCases from "@/components/UseCases";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground space-y-20 sm:space-y-32 pb-20 sm:pb-32">
      <Hero />
      <UseCases />
      <Features />
      <ProductShowcase />
      <Roadmap />
      <Footer />
    </main>
  );
}
