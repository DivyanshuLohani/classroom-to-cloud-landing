import { BrainCircuit, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const UpcomingFeatureCard = ({
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
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
    <div className="relative bg-black/50 backdrop-blur-xl rounded-lg p-6 border border-blue-500/40">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-teal-500/20">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

export default function UpcomingFeaturesSection() {
  const upcomingFeatures = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Personalized Learning",
      description:
        "Get tailored content recommendations based on learning progress.",
    },
    {
      icon: MessageSquare,
      title: "Interactive AI Chatbot",
      description: "Engage with an AI chatbot to resolve queries instantly.",
    },
    {
      icon: Sparkles,
      title: "Real-Time Doubt Resolution",
      description:
        "AI-driven solutions for student doubts with instant feedback.",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
        >
          Exciting Features Coming Soon
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingFeatures.map((feature, index) => (
            <UpcomingFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
