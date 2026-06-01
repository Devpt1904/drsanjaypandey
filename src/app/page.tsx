import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { AuthorityStrip } from "@/components/AuthorityStrip";
import { StorySection } from "@/components/StorySection";
import { ClinicalFocus } from "@/components/ClinicalFocus";
import { BreakthroughCases } from "@/components/BreakthroughCases";
import { QuoteSection } from "@/components/QuoteSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <MarqueeTicker />
        <AuthorityStrip />
        <StorySection />
        <ClinicalFocus />
        <BreakthroughCases />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
