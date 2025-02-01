import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PricingCard = ({
  tier,
  price,
  features,
  isPopular,
}: {
  tier: string;
  price: number;
  features: { text: string; included: boolean }[];
  isPopular: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
    className="relative group"
  >
    <div
      className={`absolute -inset-0.5 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300 
      ${
        isPopular
          ? "bg-gradient-to-r from-purple-600 to-cyan-400"
          : "bg-gradient-to-r from-purple-600/50 to-cyan-400/50"
      }`}
    />
    <Card className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 p-6">
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">
            ₹{price.toLocaleString()}
          </span>
          <span className="text-gray-400">/month</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-green-400 mt-1" />
            ) : (
              <X className="w-5 h-5 text-gray-500 mt-1" />
            )}
            <span
              className={`${
                feature.included ? "text-gray-200" : "text-gray-500"
              }`}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <Button
        className={`w-full ${
          isPopular
            ? "bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
            : "bg-white/10 hover:bg-white/20"
        } text-white py-6 rounded-lg font-semibold transition-all duration-300`}
      >
        Get Started
      </Button>
    </Card>
  </motion.div>
);

const PricingSection = () => {
  const tiers = [
    {
      tier: "Basic",
      price: 2000,
      features: [
        { text: "Shared Base App", included: true },
        { text: "YouTube Integration for Videos", included: true },
        { text: "Unlimited PDF/Notes Uploads", included: true },
        { text: "Up to 10 Batches", included: true },
        { text: "Basic Logo & Name Branding", included: true },
        { text: "Basic Analytics", included: true },
        { text: "Low Concurrency Support", included: true },
      ],
      isPopular: false,
    },
    {
      tier: "Standard",
      price: 5000,
      features: [
        { text: "Shared Base App", included: true },
        { text: "200GB AWS S3 Storage", included: true },
        { text: "S3 Streaming (100 users)", included: true },
        { text: "Up to 30 Batches", included: true },
        { text: "Custom Colors & Fonts", included: true },
        { text: "Detailed Progress Tracking", included: true },
        { text: "Batch Update Notifications", included: true },
      ],
      isPopular: true,
    },
    {
      tier: "Premium",
      price: 12000,
      features: [
        { text: "Custom White-Labeled App", included: true },
        { text: "500GB AWS S3 Storage", included: true },
        { text: "CloudFront Streaming (500+ users)", included: true },
        { text: "Unlimited Batches", included: true },
        { text: "Full White-Labeling", included: true },
        { text: "In-depth Analytics & Heatmaps", included: true },
        { text: "WhatsApp & Calendar Integration", included: true },
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="relative py-20" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-cyan-900/20" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Choose Your Plan
          </h2>
          <p className="text-gray-300">
            Select the perfect plan for your{" institute's "}needs. All plans
            include our core features with additional capabilities as you scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p>
            Need a custom plan?{" "}
            <button className="text-purple-400 hover:text-purple-300">
              Contact us
            </button>{" "}
            for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
