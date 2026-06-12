"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, HeartPulse, Truck } from "lucide-react";
import Link from "next/link";
import { AnimatedCard } from "@/components/ui/animated-card";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "global-bank",
      title: "AI Knowledge Assistant",
      client: "Global Tier-1 Bank",
      icon: Building2,
      challenge: "Wealth managers spent 30% of their day searching through dense financial reports, regulatory filings, and internal market research to answer client queries, leading to delayed response times and potential compliance risks.",
      architecture: "Data Lakes (S3) -> Unstructured Parser -> Milvus Vector DB -> Llama-3 70B (Locally Hosted) -> Internal React Dashboard.",
      stack: ["Llama 3", "vLLM", "Milvus", "LangChain", "Kubernetes", "Next.js"],
      results: "Deployed a secure, air-gapped Retrieval-Augmented Generation (RAG) system that instantly surfaces cited answers from over 2 million internal documents.",
      roi: [
        { metric: "99%", label: "Query Accuracy" },
        { metric: "1.5 hrs", label: "Saved per Manager/Day" },
        { metric: "0", label: "Data Leakage Events" }
      ]
    },
    {
      id: "healthcare",
      title: "Clinical Workflow Automation",
      client: "National Healthcare Provider",
      icon: HeartPulse,
      challenge: "Physicians faced severe burnout spending up to 2 hours post-shift manually entering patient encounter notes into the EHR system. Off-the-shelf AI scribes failed to meet strict HIPAA compliance and on-premise requirements.",
      architecture: "Encrypted Audio Streams -> Whisper (On-Prem) -> Specialized Medical LLM -> PII Redaction Proxy -> EHR API Integration.",
      stack: ["Whisper-Large", "Mistral Instruct", "NVIDIA Triton", "PyTorch", "FastAPI"],
      results: "Built and deployed an embedded AI agent that listens to patient encounters, structure notes, and automatically drafts the EHR entry for physician review.",
      roi: [
        { metric: "85%", label: "Reduction in Charting Time" },
        { metric: "42%", label: "Decrease in Burnout" },
        { metric: "$12M", label: "Annual Cost Savings" }
      ]
    },
    {
      id: "logistics",
      title: "Supply Chain Intelligence",
      client: "Global Logistics Enterprise",
      icon: Truck,
      challenge: "Vast amounts of unstructured email traffic, customs documents, and weather alerts were processed manually, causing a 48-hour lag in identifying critical supply chain disruptions.",
      architecture: "Email/Doc Ingestion -> Multi-modal Agent -> Knowledge Graph -> Predictive Analytics Engine -> Alerting Dashboard.",
      stack: ["Claude 3.5 Sonnet", "Neo4j", "Apache Kafka", "Python", "React"],
      results: "Engineered a multi-agent system that continuously monitors inbound communications and global events to predict and reroute shipments autonomously.",
      roi: [
        { metric: "48 hrs to 5 mins", label: "Disruption Detection" },
        { metric: "15%", label: "Reduction in Spoilage" },
        { metric: "$30M", label: "ROI in Year 1" }
      ]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col pt-32 pb-24 bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-7xl text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Proven Outcomes</h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">We don't sell software licenses. We deploy elite engineering teams that build systems to solve million-dollar enterprise bottlenecks.</p>
      </section>

      {/* Case Studies List */}
      <section className="container mx-auto px-6 max-w-5xl space-y-24">
        {caseStudies.map((study, i) => (
          <motion.div 
            key={study.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Case Study Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-800">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded bg-[#111111] border border-neutral-800">
                  <study.icon className="w-8 h-8 text-neutral-500" />
                </div>
                <div>
                  <h4 className="text-sm uppercase font-mono tracking-widest text-purple-400 font-bold mb-1">[{study.client}]</h4>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold">{study.title}</h2>
                </div>
              </div>
            </div>

            {/* Case Study Body */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-white">The Challenge</h3>
                  <p className="text-neutral-400 leading-relaxed font-sans">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-white">The Results</h3>
                  <p className="text-neutral-400 leading-relaxed font-sans">{study.results}</p>
                </div>
                <div className="p-6 bg-[#050505] border border-neutral-800 rounded border-l-4 border-l-teal-500 font-mono">
                  <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-3">System Architecture</h3>
                  <code className="text-teal-400 text-sm">{study.architecture}</code>
                </div>
              </div>

              <div className="space-y-6">
                <AnimatedCard className="bg-[#111111] border-neutral-800 p-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold mb-4">ROI Metrics</h3>
                  <div className="space-y-6">
                    {study.roi.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-3xl font-heading font-bold text-white mb-1 tracking-tight">{metric.metric}</div>
                        <div className="text-sm text-neutral-400 font-sans">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </AnimatedCard>
                
                <AnimatedCard className="bg-[#111111] border-neutral-800 p-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold mb-4">Technical Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-[#0A0A0A] border border-neutral-800 rounded text-xs text-neutral-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 max-w-4xl text-center mt-32">
        <Link href="/contact" className="inline-flex items-center gap-2 text-white hover:text-teal-400 transition-colors group text-lg font-mono font-medium">
          Ready to achieve similar results? Book a strategy call <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
}
