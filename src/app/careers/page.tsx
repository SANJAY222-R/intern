"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, MapPin, Zap } from "lucide-react";
import Link from "next/link";
import { AnimatedCard } from "@/components/ui/animated-card";

export default function Careers() {
  const positions = [
    {
      title: "Principal AI Systems Architect",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      department: "Forward Deployed Engineering",
      desc: "Lead the design and deployment of large-scale, vendor-neutral LLM orchestration pipelines for Fortune 500 clients.",
    },
    {
      title: "Senior MLOps Engineer",
      location: "New York, NY / Remote",
      type: "Full-time",
      department: "Infrastructure",
      desc: "Deploy and optimize high-throughput, low-latency inference clusters using Kubernetes and vLLM.",
    },
    {
      title: "Forward Deployed Software Engineer",
      location: "London, UK / Remote",
      type: "Full-time",
      department: "Forward Deployed Engineering",
      desc: "Embed directly with enterprise engineering teams to build custom RAG pipelines and AI agents.",
    },
    {
      title: "AI Security & Governance Researcher",
      location: "Remote (US Timezones)",
      type: "Full-time",
      department: "Security",
      desc: "Design strict proxy layers, red-team open-source models, and ensure SOC2/HIPAA compliance for agentic systems.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col pt-32 pb-24 bg-white text-gray-800">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-4xl text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gray-900">
          Build the Future of Enterprise AI
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed">
          Join an elite team of engineers deploying vendor-neutral AI
          infrastructure into the world's most critical industries.
        </p>
      </section>

      {/* Culture Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard className="bg-[#2f2f2f] border border-white/5 rounded-3xl shadow-md p-8">
            <Zap className="w-8 h-8 text-white mb-6" />

            <h3 className="text-xl font-heading font-semibold mb-3 text-white">
              High Velocity
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              We ship working code to production in weeks, not months. We don't
              do red tape, we do engineering.
            </p>
          </AnimatedCard>

          <AnimatedCard className="bg-[#2f2f2f] border border-white/5 rounded-3xl shadow-md p-8">
            <Code className="w-8 h-8 text-white mb-6" />

            <h3 className="text-xl font-heading font-semibold mb-3 text-white">
              Elite Peers
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              Work alongside the top 1% of distributed systems and ML engineers.
              We value high talent density.
            </p>
          </AnimatedCard>

          <AnimatedCard className="bg-[#2f2f2f] border border-white/5 rounded-3xl shadow-md p-8">
            <MapPin className="w-8 h-8 text-white mb-6" />

            <h3 className="text-xl font-heading font-semibold mb-3 text-white">
              Remote-First
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              Work from anywhere in the world. We care about the systems you
              build, not the desk you sit at.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-heading font-bold mb-12 flex items-center gap-3 text-gray-900">
          <Briefcase className="text-purple-600" />
          Open Positions
        </h2>

        <div className="space-y-8">
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:border-purple-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-purple-600" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors">
                    {pos.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className="px-3 py-1.5 rounded-lg bg-purple-100 text-purple-700 text-sm font-semibold">
                      {pos.department}
                    </span>

                    <span className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-sm font-semibold">
                      {pos.location}
                    </span>

                    <span className="px-3 py-1.5 rounded-lg bg-green-100 text-green-700 text-sm font-semibold">
                      {pos.type}
                    </span>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
                    {pos.desc}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="shrink-0 px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-purple-600 transition-all duration-300 text-center"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}