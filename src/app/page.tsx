import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AuthorityStrip } from "@/components/AuthorityStrip";
import { ClinicalFocus } from "@/components/ClinicalFocus";
import { BreakthroughCases } from "@/components/BreakthroughCases";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <AuthorityStrip />
        <ClinicalFocus />
        <BreakthroughCases />
      </main>
      <Footer />
    </>
  );
}
