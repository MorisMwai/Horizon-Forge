"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">

        {/* Floating Nav Component */}
        <FloatingNav navItems={navItems} />

        {/* Hero Component */}
        <Hero />

        {/* Bento Grid Component */}
        <Grid />

        {/* Recent Projects Component */}
        <Projects />

        {/* Certifications Component */}
        <Certifications />

        {/* My Experience Component */}
        <Experience />

        {/* My Approach Component */}
        <Approach />

        {/* Footer Component */}
        <Footer />

        <SpeedInsights/>
        <Analytics 
          mode={'production'}
          debug={false} 
        />
    
      </div>
    </main>
  );
}
