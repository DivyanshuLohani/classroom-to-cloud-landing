"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-cyan-900/20" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl -top-52 -left-32" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl -bottom-52 -right-32" />

      <div className="container mx-auto px-4 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
            Transform Your Coaching Institute
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Enable seamless online learning with Class To Cloud - Your complete
            B2B SaaS solution for digital education transformation
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-6 rounded-lg text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
