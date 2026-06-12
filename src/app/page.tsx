"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Server, Database, Activity, Lock, Cpu, GitMerge, Terminal, Code2 } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";

const HeroTerminal = () => (
  <div className="rounded-lg bg-[#0A0A0A] border border-neutral-800 overflow-hidden shadow-2xl shadow-purple-900/10">
    <div className="flex items-center px-4 py-3 border-b border-neutral-800 bg-[#111111]">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="mx-auto text-xs font-mono text-neutral-500">bash — 80x24</div>
    </div>
    <div className="p-4 font-mono text-sm leading-relaxed text-neutral-300">
      <div className="flex gap-2">
        <span className="text-purple-400">~/project</span>
        <span className="text-neutral-500">$</span>
        <span className="text-white">git push nexus main</span>
      </div>
      <div className="text-neutral-500 mt-2">Enumerating objects: 5, done.</div>
      <div className="text-neutral-500">Counting objects: 100% (5/5), done.</div>
      <div className="text-neutral-500">Writing objects: 100% (3/3), 286 bytes | 286.00 KiB/s, done.</div>
      <div className="mt-2 text-teal-400">remote: Deploying to production...</div>
      <div className="text-teal-400">remote: Building application... [OK]</div>
      <div className="text-teal-400">remote: Starting services... [OK]</div>
      <div className="mt-2 text-green-400 font-bold">✓ Deployment successful</div>
      <div className="text-neutral-400 mt-1">https://app.nexusfde.com/deployed</div>
      <div className="flex gap-2 mt-4">
        <span className="text-purple-400">~/project</span>
        <span className="text-neutral-500">$</span>
        <span className="animate-pulse">_</span>
      </div>
    </div>
  </div>
);

const FullStackPreview = () => (
  <div className="border border-neutral-800 rounded-lg overflow-hidden bg-[#0A0A0A] font-mono text-sm">
    <div className="grid grid-cols-4 border-b border-neutral-800 bg-[#111111] text-neutral-400 p-3">
      <div className="col-span-1">SERVICE</div>
      <div className="col-span-1">STATUS</div>
      <div className="col-span-1">REGION</div>
      <div className="col-span-1">METRICS</div>
    </div>
    {[
      { name: "api-gateway", status: "[ OK ]", region: "us-east", mem: "128MB" },
      { name: "auth-worker", status: "[ OK ]", region: "global", mem: "64MB" },
      { name: "vector-db", status: "SYNCING", region: "eu-west", mem: "2.4GB" },
      { name: "llm-router", status: "[ OK ]", region: "us-east", mem: "512MB" },
    ].map((srv, i) => (
      <div key={i} className="grid grid-cols-4 border-b border-neutral-800/50 p-4 items-center hover:bg-[#111111] transition-colors">
        <div className="col-span-1 text-white">{srv.name}</div>
        <div className={`col-span-1 ${srv.status === '[ OK ]' ? 'text-green-500' : 'text-yellow-500'}`}>{srv.status}</div>
        <div className="col-span-1 text-neutral-500">{srv.region}</div>
        <div className="col-span-1 text-purple-400">{srv.mem}</div>
      </div>
    ))}
    <div className="p-4 flex justify-between items-center bg-[#050505] border-t border-neutral-800 text-xs text-neutral-500">
      <div>System Health: 99.9%</div>
      <div>Last checked: just now</div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-24 bg-[#0A0A0A] text-white selection:bg-purple-500/30">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[1.1] mb-6"
            >
              Deploy apps and agents with <span className="glow-text">zero ops.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-400 font-sans max-w-xl mb-10"
            >
              The unified platform for deploying fully-managed infrastructure, AI models, and vector databases without touching a cloud console.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors text-center inline-flex items-center justify-center gap-2">
                Deploy Now <ArrowRight size={18} />
              </Link>
              <Link href="/docs" className="px-6 py-3 bg-transparent border border-neutral-800 text-neutral-300 font-medium rounded hover:bg-neutral-900 transition-colors text-center">
                Read the Docs
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full"
          >
            <HeroTerminal />
          </motion.div>
        </div>
      </section>

      {/* CLICK CLICK DONE SECTION */}
      <section className="py-24 border-y border-neutral-900 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Click, click, done.</h2>
            <p className="text-neutral-400 text-lg max-w-2xl">From code to production in seconds. We handle the provisioning, scaling, and security.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded flex items-center justify-center bg-purple-900/30 text-purple-400 font-mono text-sm border border-purple-500/20">1</span>
                <h3 className="text-xl font-heading font-semibold">Select a service</h3>
              </div>
              <div className="p-4 border border-neutral-800 rounded-lg bg-[#0A0A0A] font-mono text-sm text-neutral-300">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-neutral-800/50">
                  <Server size={16} className="text-neutral-500" />
                  <span>Web Service</span>
                </div>
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-neutral-800/50">
                  <Database size={16} className="text-neutral-500" />
                  <span>Vector DB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-neutral-500" />
                  <span>Background Worker</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded flex items-center justify-center bg-purple-900/30 text-purple-400 font-mono text-sm border border-purple-500/20">2</span>
                <h3 className="text-xl font-heading font-semibold">Deploy your code</h3>
              </div>
              <div className="p-4 border border-neutral-800 rounded-lg bg-[#0A0A0A] font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-neutral-500">$</span>
                  <span className="text-white">nexus deploy</span>
                </div>
                <div className="text-neutral-500 mt-2">→ Analyzing codebase</div>
                <div className="text-neutral-500">→ Generating Dockerfile</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded flex items-center justify-center bg-purple-900/30 text-purple-400 font-mono text-sm border border-purple-500/20">3</span>
                <h3 className="text-xl font-heading font-semibold">We do the rest</h3>
              </div>
              <div className="p-4 border border-neutral-800 rounded-lg bg-[#0A0A0A] font-mono text-sm">
                <div className="text-teal-400">INFO Provisioning node...</div>
                <div className="text-teal-400">INFO Routing traffic...</div>
                <div className="text-green-500 mt-2 font-bold">READY Available at:</div>
                <div className="text-neutral-400">https://api.nexusfde.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL STACK PREVIEW SECTION */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Vendor-Neutral AI Architecture</h2>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                We decouple your proprietary data from model providers using a robust vector engine and intelligent routing layer. Deploy local models or connect to public APIs securely.
              </p>
              <ul className="space-y-4">
                {[
                  "Secure private VPC deployments",
                  "SOC2 Type II compliant infrastructure",
                  "Zero egress fees on internal routing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300 font-mono text-sm">
                    <span className="text-green-500">[✓]</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <FullStackPreview />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID SECTION */}
      <section className="py-24 border-y border-neutral-900 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Enterprise Capabilities</h2>
              <p className="text-neutral-400 text-lg">Infrastructure built for scale, reliability, and security.</p>
            </div>
            <Link href="/services" className="mt-6 md:mt-0 text-white hover:text-purple-400 flex items-center gap-2 transition-colors font-mono text-sm">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Forward Deployed Eng", icon: Terminal, desc: "Elite engineers embedded in your team." },
              { title: "AI Agent Development", icon: GitMerge, desc: "Autonomous task execution." },
              { title: "Enterprise RAG", icon: Database, desc: "Secure document retrieval." },
              { title: "AI Infrastructure", icon: Cpu, desc: "Bare metal or managed cloud." },
              { title: "MLOps & Fine-Tuning", icon: Code2, desc: "Custom model training." },
              { title: "Governance & Guardrails", icon: Lock, desc: "Strict data compliance." },
            ].map((service, i) => (
              <AnimatedCard key={i} delay={i * 0.1}>
                <service.icon className="w-6 h-6 text-neutral-500 mb-6" />
                <h3 className="text-lg font-heading font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-sm text-neutral-400 mb-4">{service.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Deploy?</h2>
          <p className="text-lg text-neutral-400 mb-10">Start building secure, vendor-neutral AI systems that drive measurable ROI.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
