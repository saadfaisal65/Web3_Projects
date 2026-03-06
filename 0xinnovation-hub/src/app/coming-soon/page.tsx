"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Rocket } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="w-full flex-grow flex flex-col items-center justify-center gap-8 py-20 text-center relative z-10 px-4 min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-4"
      >
        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl shadow-2xl relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 opacity-50 blur-xl" />
          <Rocket className="w-16 h-16 sm:w-20 sm:h-20 text-white/80 relative z-10 animate-bounce delay-150" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="space-y-6 max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20 pb-2 drop-shadow-sm">
          Coming Soon
        </h1>
        <p className="text-neutral-400 text-lg sm:text-xl font-medium leading-relaxed">
          We are working hard to bring this project to life. Stay tuned for exciting updates as we continue expanding the 0xInnovations ecosystem.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-8"
      >
        <Link 
          href="/"
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:-translate-x-1 transition-all duration-300" />
          <span className="text-sm font-semibold text-neutral-300 group-hover:text-white">
            Back to Hub
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
