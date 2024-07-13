import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Features from "@/components/Home/Features";
import HeroSectionCentredWithImage from "@/components/Home/Hero";
import PricingSectionCards from "@/components/Home/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClassroomToCloud",
};

export default function Home() {
  return (
    <>
      <section id="home" className="snap-start min-h-screen">
        <HeroSectionCentredWithImage />
      </section>
      <section id="features" className="snap-start min-h-screen">
        <Features />
      </section>
      <section id="pricing" className="snap-start min-h-screen">
        <PricingSectionCards />
      </section>
      <section id="about" className="snap-start min-h-screen">
        <About />
      </section>
      <section id="contact" className="snap-start min-h-screen">
        <Contact />
      </section>
    </>
  );
}
