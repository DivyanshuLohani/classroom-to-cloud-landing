import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Features from "@/components/Home/Features";
import HeroSectionCentredWithImage from "@/components/Home/Hero";
import PricingSectionCards from "@/components/Home/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSectionCentredWithImage />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <PricingSectionCards />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
