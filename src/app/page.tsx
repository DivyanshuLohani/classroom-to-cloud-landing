"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AdvantagesSection from "./components/AdvantagesSection";
import PricingSection from "./components/PricingSection";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import UpcomingFeaturesSection from "./components/UpcomingFeatures";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />

      <FeaturesSection />

      <AdvantagesSection />

      <PricingSection />

      <UpcomingFeaturesSection />

      {/* CTA Section */}
      <section className="relative py-20" id="contact">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-purple-900/20" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Ready to Digitize Your Institute?
            </h2>
            <p className="text-gray-300 mb-8">
              Join hundreds of coaching institutes that have already transformed
              their teaching with Class To Cloud
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-6 rounded-lg text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Schedule a Demo
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
