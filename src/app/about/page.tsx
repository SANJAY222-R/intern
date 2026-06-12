"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, Lock } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";

export default function About() {
  const values = [
    { icon: Zap, title: "Bias for Code", desc: "We measure success in working software, API performance, and deployed pipelines, not in slide decks." },
    { icon: ShieldCheck, title: "Radical Neutrality", desc: "We don't accept kickbacks from cloud providers or model vendors. Our architecture is guided purely by your needs." },
    { icon: Lock, title: "Security & Compliance", desc: "We treat enterprise data, intellectual property, and compliance constraints as foundational, not secondary." },
    { icon: Users, title: "Extreme Ownership", desc: "Our Forward Deployed Engineers operate as embedded members of your team, sharing responsibility for production." }
  ];

  return (
    <main className="flex min-h-screen flex-col pt-32 pb-24 bg-white text-gray-800">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-4xl text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Built for the Enterprise</h1>
        <p className="text-xl text-neutral-400">Nexus was founded to bridge the gap between AI hype and enterprise reality. We exist to build the systems that generic consulting firms cannot.</p>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 max-w-6xl mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedCard className="bg-[#2f2f2f] border border-white/5 rounded-3xl shadow-md p-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-purple-400 font-bold mb-4">Our Mission</h2>
            <p className="text-2xl font-heading font-semibold text-white leading-relaxed">
              To deploy elite, cross-disciplinary Forward Deployed Engineers directly into enterprise teams to design, implement, and run custom AI systems that drive immediate business outcomes, free from vendor lock-in.
            </p>
          </AnimatedCard>
          <AnimatedCard className="bg-[#2f2f2f] border border-white/5 rounded-3xl shadow-md p-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-teal-400 font-bold mb-4">Our Vision</h2>
            <p className="text-2xl font-heading font-semibold text-white leading-relaxed">
              To be the world’s premier engineering partner for vendor-neutral enterprise AI adoption, unlocking the full potential of artificial intelligence safely and rapidly within every organization.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* The Neutrality Manifesto */}
      <section className="py-24 bg-[#F5F5F5] border-y border-gray-200 mb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Why Vendor Neutrality Matters</h2>
          <div className="font-mono text-sm leading-relaxed text-gray-600 bg-[#F9FAFB] border border-gray-300 p-8 rounded-lg shadow">
            <p className="mb-6">
              <span className="text-purple-400"># The AI landscape is moving too fast for single-vendor monopolies.</span><br />
              If your systems integrator is exclusively pushing Microsoft Azure or Google Cloud, they are optimizing for their reseller margins—not your product.
            </p>
            <p className="mb-6">
              <span className="text-purple-400"># Enterprise data shouldn't be locked into a specific foundational model.</span><br />
              The best architecture today might be Claude 3.5; tomorrow, it might be an open-source Llama 3 fine-tune running locally on your own GPUs.
            </p>
            <div className="mt-8 border-l-2 border-teal-500 pl-4 text-white font-sans text-lg">
              Our FDEs build abstraction layers that decouple your data and workflows from the underlying models, giving you permanent leverage over AI vendors.
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">Our Engineering Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <AnimatedCard key={i} delay={i * 0.1} className="bg-[#2f2f2f] border border-white/5 rounded-3xl shadow-md p-8">
              <val.icon className="w-8 h-8 text-blue-500 mb-6" />
              <h3 className="text-lg font-heading font-semibold mb-3 text-white">{val.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </main>
  );
}
