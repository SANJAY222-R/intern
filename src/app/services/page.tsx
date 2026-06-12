"use client";

import { motion } from "framer-motion";
import { Server, Lock, Cpu, Terminal, GitMerge, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedCard } from "@/components/ui/animated-card";

export default function Services() {
  const services = [
    {
      id: "fde",
      title: "Forward Deployed Engineers",
      icon: Terminal,
      problem: "You have a strategic AI roadmap but lack the elite talent to execute low-level integration and backend architecture.",
      solution: "We embed specialized AI engineers directly into your Git repos to ship production code.",
      deliverables: ["Custom Backend APIs", "Containerized Workloads", "System Architecture", "Performance Profiling"],
      outcomes: "Accelerated time-to-production (average 21 days), removing the recruiting bottleneck.",
      engagement: "3-12 Month Embedded Pods"
    },
    {
      id: "agents",
      title: "AI Agent Development",
      icon: GitMerge,
      problem: "Your business processes require complex multi-step reasoning, not just standard chatbot responses.",
      solution: "We build autonomous, human-in-the-loop multi-agent systems using LangGraph or custom orchestrators.",
      deliverables: ["Agent State Machines", "Tool Execution Endpoints", "Agent Evaluation Framework"],
      outcomes: "End-to-end automation of complex workflows like legal contract review or supply chain rerouting.",
      engagement: "Fixed-Bid Accelerator"
    },
    {
      id: "rag",
      title: "Enterprise RAG Systems",
      icon: Server,
      problem: "Generic models hallucinate and lack context about your proprietary enterprise data.",
      solution: "We design highly optimized Retrieval-Augmented Generation pipelines connected securely to your internal databases.",
      deliverables: ["Vector Database Clusters", "Data Ingestion Pipelines", "Semantic Search API"],
      outcomes: "99%+ accuracy on internal knowledge queries without leaking data to public LLMs.",
      engagement: "4-6 Week Prototype Sprint"
    },
    {
      id: "infra",
      title: "AI Infrastructure",
      icon: Cpu,
      problem: "Your LLM inference costs are exploding and you are locked into a single cloud provider's API.",
      solution: "We deploy and orchestrate open-source models (Llama 3, Mistral) on your own Kubernetes clusters using vLLM.",
      deliverables: ["Terraform/K8s Manifests", "GPU Load Balancers", "Open-Source Model Servers"],
      outcomes: "Up to 60% reduction in monthly AI compute costs.",
      engagement: "Infrastructure Assessment & Migration"
    },
    {
      id: "governance",
      title: "Governance & Guardrails",
      icon: ShieldCheck,
      problem: "Compliance teams are blocking AI deployment due to fears of PII leakage or toxic outputs.",
      solution: "We build programmatic proxy layers that evaluate, redact, and monitor all AI requests and responses.",
      deliverables: ["Real-time Evaluation Proxy", "PII Redaction Service", "Audit Logging Dashboard"],
      outcomes: "Unhindered AI adoption that meets SOC2, HIPAA, and GDPR requirements.",
      engagement: "Standalone Audit or Embedded Implementation"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col pt-32 pb-24 bg-white text-gray-800">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-7xl text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Enterprise Services</h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">Elite engineering execution. We don't advise from the sidelines—we build the systems that power your AI transformation.</p>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 max-w-5xl space-y-16">
        {services.map((service, i) => (
          <motion.div 
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-[#2f2f2f] border border-white/5 rounded-3xl shadow-md">
                <service.icon className="w-8 h-8 text-neutral-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">{service.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedCard className="bg-[#2f2f2f] h-full border border-white/5 rounded-3xl shadow-md">
                <h3 className="text-sm font-mono uppercase tracking-widest text-purple-400 font-bold mb-2">The Problem</h3>
                <p className="text-neutral-300 mb-8 leading-relaxed font-sans">{service.problem}</p>
                
                <h3 className="text-sm font-mono uppercase tracking-widest text-teal-400 font-bold mb-2">Our Solution</h3>
                <p className="text-neutral-300 leading-relaxed font-sans">{service.solution}</p>
              </AnimatedCard>

              <AnimatedCard className="bg-[#2f2f2f] h-full border border-white/5 rounded-3xl shadow-md font-mono">
                <h3 className="text-lg font-heading font-semibold mb-6 text-white font-sans">Engagement Details</h3>
                
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block mb-3">Key Deliverables</span>
                  <ul className="space-y-2">
                    {service.deliverables.map(d => (
                      <li key={d} className="flex items-start gap-2 text-sm text-neutral-300">
                        <span className="text-teal-500 shrink-0">→</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block mb-3">Business Outcomes</span>
                  <p className="text-sm text-neutral-300">{service.outcomes}</p>
                </div>

                <div className="p-4 rounded bg-[#111111] border border-neutral-800 flex items-center justify-between mt-auto">
                  <span className="text-sm font-semibold text-neutral-500">Model</span>
                  <span className="text-sm font-bold text-white">{service.engagement}</span>
                </div>
              </AnimatedCard>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 max-w-4xl text-center mt-32">
        <div className="p-12 rounded bg-[#2f2f2f] border border-white/5 shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-teal-500" />
          <h2 className="text-3xl font-heading font-bold mb-6">Need a Custom Engagement?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Speak directly with an Enterprise AI Architect to discuss your infrastructure, security requirements, and engineering bottlenecks.</p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
            Schedule a Technical Discovery
          </Link>
        </div>
      </section>
    </main>
  );
}
