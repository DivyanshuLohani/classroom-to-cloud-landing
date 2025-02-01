"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Video,
  Users,
  Palette,
  Lock,
  BarChart3,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
    <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-6 border border-white/10">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

export default function FeaturesSection() {
  const features = [
    {
      icon: Video,
      title: "Live & Recorded Lectures",
      description:
        "Stream and upload recorded lectures seamlessly for continuous learning experience",
    },
    {
      icon: BookOpen,
      title: "Notes & DPPs Upload",
      description:
        "Easy PDF uploads for study materials and daily practice problems",
    },
    {
      icon: Users,
      title: "Batch Management",
      description: "Create, manage, and assign students to batches efficiently",
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Personalize the platform with your institute's branding",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Secure content access limited to enrolled students",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor student engagement and content consumption",
    },
  ];
  return (
    <section className="relative py-20" id="features">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
        >
          Powerful Features for Modern Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
