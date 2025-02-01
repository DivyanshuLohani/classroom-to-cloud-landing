import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const ComparisonItem = ({
  feature,
  classToCloud,
  others,
}: {
  feature: string;
  classToCloud: string;
  others: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-3 gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
  >
    <div className="text-gray-200 font-medium">{feature}</div>
    <div className="flex items-center gap-2 text-cyan-400">
      <CheckCircle2 className="w-5 h-5" />
      <span>{classToCloud}</span>
    </div>
    <div className="flex items-center gap-2 text-gray-400">
      <XCircle className="w-5 h-5" />
      <span>{others}</span>
    </div>
  </motion.div>
);

const AdvantagesSection = () => {
  const comparisons = [
    {
      feature: "Platform Speed",
      classToCloud: "Lightning Fast",
      others: "Often Sluggish",
    },
    {
      feature: "Mobile Optimization",
      classToCloud: "Fully Optimized",
      others: "Limited Support",
    },
    {
      feature: "Branding Options",
      classToCloud: "Full Customization",
      others: "Basic Options",
    },
    {
      feature: "Batch Management",
      classToCloud: "Advanced Controls",
      others: "Basic Features",
    },
    {
      feature: "Data Analytics",
      classToCloud: "Comprehensive",
      others: "Limited Metrics",
    },
    {
      feature: "Storage Costs",
      classToCloud: "Unlimited",
      others: "Pay Per GB",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-cyan-900/10" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -right-64 top-0" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -left-64 bottom-0" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Why Choose Class To Cloud?
          </h2>
          <p className="text-gray-300 text-lg">
            See how we stand out from traditional EdTech platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Comparison Header */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-lg">
            <div className="text-gray-300 font-semibold">Feature</div>
            <div className="text-cyan-400 font-semibold">Class To Cloud</div>
            <div className="text-gray-400 font-semibold">Other Platforms</div>
          </div>

          {/* Comparison Items */}
          <div className="space-y-2 relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl -z-10" />

            {comparisons.map((item, index) => (
              <ComparisonItem
                key={index}
                feature={item.feature}
                classToCloud={item.classToCloud}
                others={item.others}
              />
            ))}
          </div>

          {/* Bottom Gradient Border */}
          <div className="h-px bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-purple-500/50 mt-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
