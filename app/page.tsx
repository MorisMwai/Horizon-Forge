"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">

        {/* Floating Nav */}
        <FloatingNav navItems={navItems} />

        {/* Hero */}
        <Hero />

        {/* Bento Grid */}
        <Grid />

        {/* Recent Projects */}
        <Projects />
    
      </div>
    </main>
  );
}
