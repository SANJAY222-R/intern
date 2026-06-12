"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, Search, Zap, Shield, FileText, Calendar, CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";

const FloatingWidgets = () => (
  <div className="relative w-full h-[600px] flex items-center justify-center">
    {/* Soft pastel gradient background blob */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100 via-purple-100 to-teal-50 rounded-full blur-3xl opacity-70" />
    
    {/* Main Widget Card */}
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      className="relative z-10 w-[380px] bg-white rounded-[2.5rem] p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100"
    >
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-50">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <MessageSquare className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Meeting Summary</h3>
          <p className="text-sm text-gray-500">Q3 Planning with Design Team</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-100 rounded-full w-3/4" />
        <div className="h-4 bg-gray-100 rounded-full w-full" />
        <div className="h-4 bg-gray-100 rounded-full w-5/6" />
        <div className="h-4 bg-gray-100 rounded-full w-4/5" />
      </div>
      <div className="mt-8 bg-gray-50 rounded-2xl p-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Action Items</p>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <span className="text-sm text-gray-600">Finalize UI mockups</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gray-300" />
          <span className="text-sm text-gray-600">Review user feedback</span>
        </div>
      </div>
    </motion.div>

    {/* Floating Pill Badges */}
    <motion.div 
      initial={{ y: 20, opacity: 0, x: -20 }}
      animate={{ y: 0, opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      className="absolute top-1/4 -left-12 z-20 bg-white rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center gap-3"
    >
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">Z</div>
      <span className="font-semibold text-gray-800 text-sm">Zoom Sync</span>
    </motion.div>

    <motion.div 
      initial={{ y: 20, opacity: 0, x: 20 }}
      animate={{ y: 0, opacity: 1, x: 0 }}
      transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
      className="absolute bottom-1/4 -right-8 z-20 bg-white rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center gap-3"
    >
      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">M</div>
      <span className="font-semibold text-gray-800 text-sm">Google Meet</span>
    </motion.div>
  </div>
);

const AvatarCluster = () => (
  <div className="flex items-center gap-4 mt-8">
    <div className="flex -space-x-3">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 shadow-sm flex items-center justify-center overflow-hidden relative">
          <img src={`https://i.pravatar.cc/100?img=${i * 10}`} alt="User" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
    <div className="flex flex-col">
      <div className="flex gap-1 text-yellow-400 text-sm">
        ★★★★★
      </div>
      <span className="text-xs font-medium text-gray-500">Loved by 10,000+ teams</span>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-24 bg-white text-gray-900 selection:bg-blue-200 selection:text-blue-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center px-6 overflow-hidden bg-white scroll-mt-[80px]">
        <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-[4rem] font-bold tracking-tight leading-[1.05] mb-6 text-gray-900"
            >
              Your AI notetaker is now also your <span className="text-blue-600">Conversational Knowledge Engine.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-500 font-sans max-w-xl mb-10 leading-relaxed"
            >
              Automatically record, transcribe, and extract actionable insights from all your meetings. Search across every conversation instantly.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm text-center text-[15px]">
                Get Started for Free
              </Link>
              <Link href="/contact" className="px-8 py-3.5 bg-white border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors text-center text-[15px]">
                Schedule Demo
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <AvatarCluster />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end"
          >
            <FloatingWidgets />
          </motion.div>
        </div>
      </section>

      {/* CLICK CLICK DONE SECTION -> NOW FEATURES */}
      <section className="py-24 bg-gray-50/50 scroll-mt-[80px]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">Seamless intelligence.</h2>
            <p className="text-gray-500 text-lg">Connect your calendar and let the AI do the heavy lifting. We capture every detail so you can focus on the conversation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Calendar, color: "bg-blue-100 text-blue-600", title: "Auto-join meetings", desc: "Connect Google Calendar or Outlook and we'll automatically join and record your calls." },
              { icon: Search, color: "bg-purple-100 text-purple-600", title: "Universal search", desc: "Find any decision, quote, or metric from past meetings in seconds with semantic search." },
              { icon: Zap, color: "bg-yellow-100 text-yellow-600", title: "Instant summaries", desc: "Get beautifully formatted summaries and action items the moment your meeting ends." }
            ].map((feature, i) => (
              <AnimatedCard key={i} delay={i * 0.1}>
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white scroll-mt-[80px]">
      
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">Enterprise capabilities, consumer simplicity.</h2>
              <p className="text-gray-500 text-lg">Built on robust infrastructure, designed for humans.</p>
            </div>
            <Link href="/services" className="mt-6 md:mt-0 text-blue-600 hover:text-blue-700 flex items-center gap-2 transition-colors font-medium text-[15px]">
              View all features <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Smart Transcription", icon: MessageSquare, color: "text-blue-500", desc: "Speaker attribution and high accuracy across 50+ languages." },
              { title: "Action Item Extraction", icon: CheckCircle2, color: "text-green-500", desc: "Automatically sync tasks to Jira, Asana, or Linear." },
              { title: "Custom Knowledge Base", icon: FileText, color: "text-purple-500", desc: "Train the AI on your specific company terminology." },
              { title: "Enterprise Security", icon: Shield, color: "text-gray-700", desc: "SOC2 Type II, GDPR compliant, and end-to-end encrypted." },
            ].map((service, i) => (
              <AnimatedCard key={i} delay={i * 0.1}>
                <service.icon className={`w-8 h-8 ${service.color} mb-6`} />
                <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-[15px] text-gray-500">{service.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gray-50 relative overflow-hidden scroll-mt-[80px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100 rounded-full blur-[120px] pointer-events-none opacity-50" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Ready to transform your meetings?</h2>
          <p className="text-lg text-gray-500 mb-10">Join thousands of teams who are already saving hours every week.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm">
              Start for free <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
